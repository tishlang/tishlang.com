import Link from "next/link"

const links = {
  Product: ["Documentation", "Playground", "Changelog", "Roadmap"],
  Community: ["GitHub", "Discord", "Twitter", "Forum"],
  Resources: ["Blog", "Examples", "Benchmarks", "FAQ"],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  t.
                </span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                tishlang
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A compiled language for the AI era. Native performance with the
              syntax you already know.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="mb-4 text-sm font-semibold text-foreground">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          <p className="text-center text-xs text-muted-foreground">
            tishlang is open source under the MIT license.
          </p>
        </div>
      </div>
    </footer>
  )
}
