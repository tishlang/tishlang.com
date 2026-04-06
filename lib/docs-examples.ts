import fs from "fs";
import path from "path";

const EXAMPLES_SEGMENT = "examples";

/** Path relative to tish repo root, e.g. `examples/http-hello/README.md` */
export interface ExampleDoc {
  title: string;
  content: string;
  sourcePath: string;
  /** `[]` = index; `['http-hello']` = one example */
  slugSegments: string[];
}

export interface ExampleNavItem {
  id: string;
  title: string;
  href: string;
}

function getTishPackageRoot(): string {
  return path.join(process.cwd(), "node_modules", "tish");
}

export function getTishExamplesRoot(): string {
  const root = path.join(getTishPackageRoot(), EXAMPLES_SEGMENT);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    throw new Error(
      'Missing `node_modules/tish/examples`. Run `npm install` (devDependency `tish` from GitHub).'
    );
  }
  return root;
}

function parseTitleFromMarkdown(markdown: string, fallback: string): string {
  const m = markdown.match(/^#\s+(.+)$/m);
  return m?.[1]?.trim() ?? fallback;
}

/** Remove leading document title; the page template renders `<h1>` from `title`. */
function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^#\s+.+\n+/, "");
}

/** Example subfolders that contain README.md, sorted. */
export function listExampleIds(): string[] {
  const examplesRoot = getTishExamplesRoot();
  const names = fs.readdirSync(examplesRoot, { withFileTypes: true });
  const ids: string[] = [];
  for (const ent of names) {
    if (!ent.isDirectory()) continue;
    const readme = path.join(examplesRoot, ent.name, "README.md");
    if (fs.existsSync(readme)) ids.push(ent.name);
  }
  ids.sort((a, b) => a.localeCompare(b));
  return ids;
}

/** Sidebar + static params: index first, then each example. */
export function getExampleNavItems(): ExampleNavItem[] {
  const examplesRoot = getTishExamplesRoot();
  const indexRaw = fs.readFileSync(path.join(examplesRoot, "README.md"), "utf-8");
  const indexTitle = parseTitleFromMarkdown(indexRaw, "Examples");

  const items: ExampleNavItem[] = [{ id: "", title: indexTitle, href: "/docs/examples" }];
  for (const id of listExampleIds()) {
    const raw = fs.readFileSync(path.join(examplesRoot, id, "README.md"), "utf-8");
    items.push({
      id,
      title: parseTitleFromMarkdown(raw, id),
      href: `/docs/examples/${id}`,
    });
  }
  return items;
}

/**
 * Rewrite relative markdown links on the examples index so repo README stays canonical.
 * e.g. `(npm-usage/)` → `(/docs/examples/npm-usage)`
 */
export function rewriteExamplesIndexLinks(markdown: string): string {
  return markdown.replace(/]\(([^)]+)\)/g, (full, rawUrl: string) => {
    const url = rawUrl.trim();
    if (!url || /^[a-z][a-z0-9+.-]*:/i.test(url)) return full;
    if (url.startsWith("#") || url.startsWith("/")) return full;
    if (url.includes("..")) return full;

    let seg = url.replace(/^\.\//, "");
    seg = seg.replace(/\/+$/, "");
    seg = seg.replace(/\/README\.md$/i, "");
    seg = seg.replace(/README\.md$/i, "");
    seg = seg.replace(/\/+$/, "");
    if (!seg || seg.includes("/")) return full;

    return `](/docs/examples/${seg})`;
  });
}

export async function getExampleDoc(slugSegments: string[] | undefined): Promise<ExampleDoc | null> {
  const segs = slugSegments?.filter(Boolean) ?? [];
  if (segs.length > 1) return null;

  const examplesRoot = getTishExamplesRoot();

  if (segs.length === 0) {
    const filePath = path.join(examplesRoot, "README.md");
    const raw = fs.readFileSync(filePath, "utf-8");
    const title = parseTitleFromMarkdown(raw, "Examples");
    const body = stripLeadingH1(raw);
    return {
      title,
      content: rewriteExamplesIndexLinks(body),
      sourcePath: "examples/README.md",
      slugSegments: [],
    };
  }

  const id = segs[0]!;
  if (!/^[a-zA-Z0-9._-]+$/.test(id)) return null;

  const filePath = path.join(examplesRoot, id, "README.md");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const title = parseTitleFromMarkdown(raw, id);
  return {
    title,
    content: stripLeadingH1(raw),
    sourcePath: `examples/${id}/README.md`,
    slugSegments: [id],
  };
}

export function getExampleStaticParams(): Array<{ slug: string[] }> {
  getTishExamplesRoot();
  const params: Array<{ slug: string[] }> = [{ slug: [] }];
  for (const id of listExampleIds()) {
    params.push({ slug: [id] });
  }
  return params;
}

export type ExampleNavLink = { title: string; href: string };

export async function getExamplePrevNext(
  slugSegments: string[] | undefined
): Promise<{ prev: ExampleNavLink | null; next: ExampleNavLink | null }> {
  const nav = getExampleNavItems();
  const segs = slugSegments?.filter(Boolean) ?? [];
  const currentId = segs[0] ?? "";
  const idx = nav.findIndex((item) => item.id === currentId);
  if (idx < 0) return { prev: null, next: null };
  const prev = idx > 0 ? nav[idx - 1]! : null;
  const next = idx < nav.length - 1 ? nav[idx + 1]! : null;
  return {
    prev: prev ? { title: prev.title, href: prev.href } : null,
    next: next ? { title: next.title, href: next.href } : null,
  };
}
