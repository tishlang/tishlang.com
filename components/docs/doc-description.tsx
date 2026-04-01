import ReactMarkdown from "react-markdown";

/**
 * Renders frontmatter `description` as a small subset of Markdown (inline code,
 * emphasis, links). Safe by default: no raw HTML.
 */
export function DocDescription({ children }: { children: string }) {
  return (
    <div
      className="mt-1 text-muted-foreground [&_p]:my-0 [&_p+p]:mt-2 [&_code]:rounded-md [&_code]:bg-muted/60 [&_code]:px-1.5 [&_code]:py-px [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-foreground [&_code]:before:content-none [&_code]:after:content-none [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline"
    >
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
