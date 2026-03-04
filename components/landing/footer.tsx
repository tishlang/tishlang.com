import Link from "next/link"

const links = {
  product: ["documentation", "playground", "changelog", "roadmap"],
  community: ["github", "discord", "twitter", "forum"],
  resources: ["blog", "examples", "benchmarks", "faq"],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-sm text-foreground">tishlang</span>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              a compiled language for the ai era. native performance
              with the syntax you already know.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="mb-4 text-xs text-foreground">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
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
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            tishlang is open source under the mit license.
          </p>
        </div>
      </div>
    </footer>
  )
}
