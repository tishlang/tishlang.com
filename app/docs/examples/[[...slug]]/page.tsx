import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import {
  getExampleDoc,
  getExamplePrevNext,
  getExampleStaticParams,
} from "@/lib/docs-examples";
import { tishRepoBlobUrl } from "@/lib/docs-github";
import { mdxComponents } from "@/components/docs/mdx-components";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { PrevNext } from "@/components/docs/prev-next";
import { ImproveDocLink } from "@/components/docs/improve-doc-link";

export async function generateStaticParams() {
  return getExampleStaticParams();
}

export default async function ExampleDocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const doc = await getExampleDoc(slug);
  if (!doc) notFound();

  const { prev, next } = await getExamplePrevNext(slug);

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "github-dark-dimmed",
              keepBackground: true,
            },
          ],
        ],
      },
    },
    components: mdxComponents,
  });

  const editHref = tishRepoBlobUrl(doc.sourcePath);

  return (
    <article className="py-4">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">{doc.title}</h1>
      </header>

      <div className="flex gap-8">
        <div className="min-w-0 flex-1">
          <div
            className="mdx-content prose prose-sm prose-invert max-w-none
              prose-headings:font-semibold prose-headings:text-foreground prose-headings:scroll-mt-24
              prose-p:text-foreground/90 prose-li:text-foreground/90
              prose-strong:text-foreground
              prose-h2:mt-7 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h2:text-foreground
              prose-h3:mt-5 prose-h3:text-foreground prose-h4:text-foreground
              prose-p:leading-6 prose-li:leading-6
              prose-code:before:content-none prose-code:after:content-none prose-code:text-foreground prose-code:text-xs
              prose-pre:rounded-lg prose-pre:!bg-zinc-950/80 prose-pre:border prose-pre:border-border prose-pre:text-xs
              prose-th:text-foreground prose-th:text-xs prose-td:text-foreground/90 prose-td:text-xs
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          >
            {content}
          </div>
          <PrevNext prev={prev} next={next} />
          <ImproveDocLink
            sourcePath={doc.sourcePath}
            editHref={editHref}
            showTopRule={!prev && !next}
          />
        </div>
        <TableOfContents />
      </div>
    </article>
  );
}
