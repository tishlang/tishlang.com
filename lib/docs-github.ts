/** GitHub location of site docs (MDX under this repo). */
const DOCS_REPO = {
  owner: "tishlang",
  repo: "tishlang.com",
  branch: "main",
} as const;

/** `sourcePath` is from repo root, e.g. `content/docs/language/vs-javascript.mdx` */
export function docsSourceEditUrl(sourcePath: string): string {
  const { owner, repo, branch } = DOCS_REPO;
  return `https://github.com/${owner}/${repo}/blob/${branch}/${sourcePath}`;
}