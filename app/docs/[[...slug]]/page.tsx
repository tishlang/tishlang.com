import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { getDocBySlug, getDocPaths, getPrevNext } from "@/lib/docs";
import { mdxComponents } from "@/components/docs/mdx-components";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { PrevNext } from "@/components/docs/prev-next";

export async function generateStaticParams() {
  const paths = await getDocPaths();
  return paths.map((p) => ({ slug: p.slug }));
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug?.join("/") ?? "";
  const doc = await getDocBySlug(slugStr);
  if (!doc) notFound();

  const { prev, next } = await getPrevNext(slugStr);

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

  const isSplash = doc.meta.template === "splash";
  const hero = doc.meta.hero;

  return (
    <article className="py-4">
      {isSplash && hero?.tagline && (
        <div className="mb-8">
          <h1 className="text-2xl font-semibold sm:text-3xl">{doc.meta.title}</h1>
          <p className="mt-2 text-muted-foreground">{hero.tagline}</p>
          {hero.actions && hero.actions.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {hero.actions.map((a, i) => (
                <Link
                  key={i}
                  href={
                    a.link.startsWith("/")
                      ? `/docs${a.link === "/" ? "" : a.link}`.replace(/\/$/, "") || "/docs"
                      : a.link
                  }
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    a.variant === "primary"
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {a.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {!isSplash && (
        <header className="mb-6">
          <h1 className="text-2xl font-semibold sm:text-3xl">{doc.meta.title}</h1>
          {doc.meta.description && (
            <p className="mt-1 text-muted-foreground">{doc.meta.description}</p>
          )}
        </header>
      )}

      <div className="flex gap-8">
        <div className="min-w-0 flex-1">
          <div
            className="mdx-content prose prose-sm prose-invert max-w-none
              prose-headings:font-semibold prose-headings:text-foreground prose-headings:scroll-mt-24
              prose-p:text-foreground/90 prose-li:text-foreground/90
              prose-strong:text-foreground
              prose-h2:mt-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h2:text-foreground
              prose-h3:mt-6 prose-h3:text-foreground prose-h4:text-foreground
              prose-p:leading-7 prose-li:leading-7
              prose-code:before:content-none prose-code:after:content-none prose-code:text-foreground
              prose-pre:rounded-lg prose-pre:!bg-zinc-950/80 prose-pre:border prose-pre:border-border
              prose-th:text-foreground prose-td:text-foreground/90
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          >
            {content}
          </div>
          <PrevNext prev={prev} next={next} />
        </div>
        <TableOfContents />
      </div>
    </article>
  );
}
