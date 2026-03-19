"use client"

import { useInView } from "@/hooks/use-in-view"

const benchmarks = [
  { label: "tish", value: 100, time: "0.42s", highlight: true },
  { label: "rust", value: 95, time: "0.44s", highlight: false },
  { label: "c++", value: 92, time: "0.46s", highlight: false },
  { label: "go", value: 58, time: "0.72s", highlight: false },
  { label: "node.js", value: 12, time: "3.51s", highlight: false },
  { label: "python", value: 3, time: "14.2s", highlight: false },
]

export function Benchmarks() {
  const { ref, inView } = useInView()

  return (
    <section className="border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Left column */}
          <div>
            <p className="text-xs text-primary">performance</p>
            <h2 className="mt-2 text-xl font-medium leading-tight text-foreground md:text-2xl">
              performance that speaks for itself
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              matrix multiplication benchmark (1024x1024, f32). tish compiles
              to the same llvm ir as rust and c++, delivering native throughput
              with higher-level syntax. lower is better.
            </p>
          </div>

          {/* Right column - bars */}
          <div className="flex flex-col justify-end gap-4">
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
