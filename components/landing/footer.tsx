import Link from "next/link"

const links = {
  product: ["documentation", "playground", "changelog", "roadmap"],
  community: ["github", "discord", "twitter", "forum"],
  resources: ["blog", "examples", "benchmarks", "faq"],
}

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

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-medium text-muted-foreground">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            Tish is open source under the PIF license.
          </p>
        </div>
      </div>
    </footer>
  )
}
