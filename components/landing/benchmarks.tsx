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
    <section className="border-b border-border px-6 py-24 sm:px-10 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <p className="mb-6 text-sm text-primary">performance</p>
            <h2 className="mb-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-foreground">
              performance that speaks for itself
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              matrix multiplication benchmark (1024x1024, f32). tishlang compiles
              to the same llvm ir as rust and c++, delivering native throughput
              with higher-level syntax. lower is better.
            </p>
          </div>

          {/* Right column - bars */}
          <div className="flex flex-col justify-end gap-4">
            {benchmarks.map((bench) => (
              <div key={bench.label} className="flex items-center gap-4">
                <span
                  className={`w-20 text-right text-sm ${
                    bench.highlight
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {bench.label}
                </span>
                <div className="flex-1">
                  <div className="h-6 w-full rounded-sm bg-secondary">
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
      </div>
    </section>
  )
}
