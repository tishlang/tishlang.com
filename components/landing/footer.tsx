import Link from "next/link"

const links = {
  product: ["documentation", "playground", "changelog", "roadmap"],
  community: ["github", "discord", "twitter", "forum"],
  resources: ["blog", "examples", "benchmarks", "faq"],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 sm:px-10 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-base text-foreground">tishlang</span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              a compiled language for the ai era. native performance
              with the syntax you already know.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="mb-5 text-sm text-foreground">
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

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            tishlang is open source under the mit license.
          </p>
        </div>
      </div>
    </footer>
  )
}
