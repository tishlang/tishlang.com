# tishlang.com

The website and documentation for [Tish](https://github.com/tishlang/tish), live at
[tishlang.com](https://tishlang.com): the landing page, the docs at `/docs`, and the runnable
examples at `/docs/examples`.

It's a Next.js app exported as a static site (`output: "export"`), with search built by
[Pagefind](https://pagefind.app) after each build.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, then the Pagefind search index in out/pagefind
```

## Writing docs

Docs are MDX files in `content/docs/`. The folder sets the URL and the sidebar section:
`content/docs/language/syntax.mdx` is `/docs/language/syntax`, under **Language**.

| Folder | Sidebar section |
| --- | --- |
| `index.mdx` | Introduction (the docs home) |
| `getting-started/` | Getting Started |
| `language/` | Language |
| `builtins/` | Builtins |
| `features/` | Features (`fs`, `http`, `process`, `regex`, `tty`, `pg`) |
| `reference/` | Reference |
| `deploy/` | Deploy |
| `resources/` | Resources |

Each page starts with frontmatter:

```mdx
---
title: Installation
description: One line shown under the title and in search results.
---
```

To add a page, add an `.mdx` file to one of these folders. The section order lives in
`docsSidebar` in `lib/docs.ts`. Every page has an "Improve this page" link to its source here
on GitHub.

## Examples

`/docs/examples` isn't written in this repo. It renders the `examples/*/README.md` files that ship
in the `@tishlang/tish` npm package, so it always matches the installed compiler. Bumping
`@tishlang/tish` in `package.json` updates them.

## Layout

| Path | What it is |
| --- | --- |
| `app/page.tsx` | The landing page, built from `components/landing/` (hero, features, code showcase, benchmarks) |
| `app/docs/` | The docs routes: `[[...slug]]` for pages, `examples/` for the examples |
| `components/docs/` | Sidebar, table of contents, search, previous / next links, MDX components |
| `components/ui/` | Shared UI components (shadcn/ui) |
| `lib/docs.ts` | Loads the MDX, reads frontmatter, builds the sidebar |
| `lib/docs-examples.ts` | Reads the examples from `node_modules/@tishlang/tish` |
| `lib/docs-github.ts` | Source and edit links on GitHub |

## Related

- [tishlang/tish](https://github.com/tishlang/tish): the language, compiler and tooling
- [tishlang/lattish](https://github.com/tishlang/lattish): JSX and a React-like framework for Tish

## License

See [LICENSE](LICENSE).
