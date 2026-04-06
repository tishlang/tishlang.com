import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsSourceEditUrl } from "@/lib/docs-github";

export function ImproveDocLink({
  sourcePath,
  editHref,
  showTopRule,
}: {
  sourcePath: string;
  /** When set (e.g. tish repo examples), overrides `docsSourceEditUrl(sourcePath)`. */
  editHref?: string;
  /** When there is no prev/next nav above, draw a separator before this link. */
  showTopRule: boolean;
}) {
  const href = editHref ?? docsSourceEditUrl(sourcePath);
  return (
    <p
      className={cn(
        "text-center text-xs text-muted-foreground",
        showTopRule ? "mt-12 border-t border-border pt-8" : "mt-6"
      )}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
      >
        Improve this documentation
        <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
      </Link>
    </p>
  );
}
