const benchmarks = [
  { label: "tishlang", value: 100, time: "0.42s", highlight: true },
  { label: "rust", value: 95, time: "0.44s", highlight: false },
  { label: "c++", value: 92, time: "0.46s", highlight: false },
  { label: "go", value: 58, time: "0.72s", highlight: false },
  { label: "node.js", value: 12, time: "3.51s", highlight: false },
  { label: "python", value: 3, time: "14.2s", highlight: false },
]

export function Benchmarks() {
  return (
    <section className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm text-primary">performance</p>
        <h2 className="mb-4 text-2xl font-normal text-foreground sm:text-3xl">
          performance that speaks for itself
        </h2>
        <p className="mb-16 text-sm text-muted-foreground">
          matrix multiplication benchmark (1024x1024, f32). lower is better.
        </p>

        <div className="flex flex-col gap-5">
          {benchmarks.map((bench) => (
            <div key={bench.label} className="flex items-center gap-4">
              <span
                className={`w-20 text-right text-xs ${
                  bench.highlight
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {bench.label}
              </span>
              <div className="flex-1">
                <div className="h-5 w-full rounded-sm bg-secondary">
                  <div
                    className={`flex h-full items-center rounded-sm px-3 ${
                      bench.highlight ? "bg-primary" : "bg-muted-foreground/15"
                    }`}
                    style={{ width: `${bench.value}%` }}
                  >
                    <span
                      className={`text-xs ${
                        bench.highlight
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
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
    </section>
  )
}
