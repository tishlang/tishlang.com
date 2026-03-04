import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 py-24 sm:px-10 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm text-primary">get started</p>
        <h2 className="mb-6 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-foreground">
          start building with tishlang
        </h2>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          join the growing community of developers shipping native ai
          applications with a language that feels like home.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            install tishlang
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-md border border-border px-7 py-3.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary"
          >
            view on github
          </a>
        </div>
      </div>
    </section>
  )
}
