import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type DocNavLink = { title: string; href: string };

interface PrevNextProps {
  prev: DocNavLink | null;
  next: DocNavLink | null;
}

export function PrevNext({ prev, next }: PrevNextProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 flex items-center justify-between border-t border-border pt-8">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{prev.title}</span>
          </Link>
        )}
      </div>
      <div className="flex flex-1 justify-end">
        {next && (
          <Link
            href={next.href}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>{next.title}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </nav>
  );
}
