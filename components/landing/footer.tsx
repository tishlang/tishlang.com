import Link from "next/link"

const sections = {
  product: [
    { name: "documentation", href: "/docs" },
    { name: "playground", href: "https://tish.sh" },
    { name: "changelog", href: "https://github.com/tishlang/tish/releases" },
    { name: "roadmap", href: "https://github.com/tishlang/tish/milestones" },
  ],
  community: [
    { name: "github", href: "https://github.com/tishlang/tish" },
    { name: "discord", href: "#" },
    { name: "twitter", href: "#" },
    { name: "forum", href: "#" },
  ],
  resources: [
    { name: "blog", href: "#" },
    {
      name: "examples",
      href: "https://github.com/tishlang/tish/tree/main/examples",
    },
    { name: "benchmarks", href: "/#benchmarks" },
    { name: "faq", href: "/docs" },
  ],
} as const

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="group flex items-center gap-2 text-foreground">
              <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5">{">"}</span>
              <span className="text-sm font-medium">Tish</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              a compiled language for the ai era. native performance
              with the syntax you already know.
            </p>
          </div>

          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold text-primary">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((link) => {
                  const external = link.href.startsWith("http")
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            Tish is free and open source under the PIF license.
          </p>
        </div>
      </div>
    </footer>
  )
}
