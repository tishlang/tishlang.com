import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm text-primary">get started</p>
        <h2 className="mb-4 text-2xl font-normal text-foreground sm:text-3xl">
          start building with tishlang
        </h2>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
          join the growing community of developers shipping native ai
          applications with a language that feels like home.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            install tishlang
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-md border border-border px-6 py-3 text-sm text-secondary-foreground transition-colors hover:bg-secondary"
          >
            view on github
          </a>
        </div>
      </div>
    </section>
  )
}
