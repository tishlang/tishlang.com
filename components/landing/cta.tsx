export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-border bg-card p-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Start building with tishlang
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-pretty text-muted-foreground">
            Join the growing community of developers shipping native AI
            applications with a language that feels like home.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Install tishlang
            </a>
            <a
              href="#"
              className="rounded-md border border-border px-8 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
