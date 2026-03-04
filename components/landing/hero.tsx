import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="px-8 pt-40 pb-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-sm text-primary">
          v0.4.0 -- beta now available
        </p>

        <h1 className="mb-8 text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          the native language{"\n"}
          <br />
          for ai & data
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          write familiar javascript/typescript syntax, compile to
          native binaries, and ship ai inference and data pipelines
          at any scale. zero runtime overhead.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-md border border-border px-6 py-3 text-sm text-secondary-foreground transition-colors hover:bg-secondary"
          >
            read the docs
          </a>
        </div>
      </div>
    </section>
  )
}
