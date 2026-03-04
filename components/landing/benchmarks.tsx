const benchmarks = [
  { label: "tishlang", value: 100, time: "0.42s", highlight: true },
  { label: "Rust", value: 95, time: "0.44s", highlight: false },
  { label: "C++", value: 92, time: "0.46s", highlight: false },
  { label: "Go", value: 58, time: "0.72s", highlight: false },
  { label: "Node.js", value: 12, time: "3.51s", highlight: false },
  { label: "Python", value: 3, time: "14.2s", highlight: false },
]

export function Benchmarks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Performance that speaks for itself
          </h2>
          <p className="text-muted-foreground">
            Matrix multiplication benchmark (1024x1024, f32). Lower is better.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col gap-4">
            {benchmarks.map((bench) => (
              <div key={bench.label} className="flex items-center gap-4">
                <span
                  className={`w-20 text-right text-sm ${
                    bench.highlight
                      ? "font-semibold text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {bench.label}
                </span>
                <div className="flex-1">
                  <div className="h-6 w-full rounded-sm bg-secondary">
                    <div
                      className={`flex h-full items-center rounded-sm px-3 transition-all duration-700 ${
                        bench.highlight ? "bg-primary" : "bg-muted-foreground/20"
                      }`}
                      style={{ width: `${bench.value}%` }}
                    >
                      <span
                        className={`text-xs font-medium ${
                          bench.highlight
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {bench.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
