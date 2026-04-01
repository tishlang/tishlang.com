"use client"

import { useInView } from "@/hooks/use-in-view"

/** Illustrative only — same workload, not a certified benchmark suite. */
const benchmarks = [
  { label: "tish", value: 100, time: "0.42s", highlight: true },
  { label: "go", value: 58, time: "0.72s", highlight: false },
  { label: "deno", value: 24, time: "1.75s", highlight: false },
  { label: "node.js", value: 22, time: "1.91s", highlight: false },
  { label: "quickjs", value: 14, time: "3.0s", highlight: false },
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
            <p className="text-xs text-primary">sample workload</p>
            <h2 className="mt-2 text-xl font-medium leading-tight text-foreground md:text-2xl">
              1024×1024 matrix multiply (illustrative)
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Directional comparison only. Today’s Tish native targets still use a dynamic
              value model or embedded VM — not yet lowered to flat numeric kernels — while
              Deno, Node, and QuickJS JIT similar loops aggressively. Bars are not an
              audited benchmark suite; see the language repo for native-codegen status.
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
