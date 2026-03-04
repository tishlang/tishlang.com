import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="px-6 pt-36 pb-24 sm:px-10 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm tracking-wide text-primary">
          v0.4.0 -- beta now available
        </p>

        <h1 className="mb-8 text-balance text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] tracking-tight text-foreground">
          the native language
          <br />
          for ai & data
        </h1>

        <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          write familiar javascript/typescript syntax, compile to
          native binaries, and ship ai inference and data pipelines
          at any scale. zero runtime overhead.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            start building
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-md border border-border px-7 py-3.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary"
          >
            read the docs
          </a>
        </div>
      </div>
    </section>
  )
}
