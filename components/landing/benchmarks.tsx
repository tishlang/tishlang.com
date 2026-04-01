"use client"

import { useInView } from "@/hooks/use-in-view"

/**
 * Tish native (Rust, release build), Node, Bun, Deno, QuickJS: measured averages from
 * the Tish core test suite (tish/docs/perf.md, latest release run, 47 tests, TOTAL ÷ 47).
 *   rust=576ms  bun=669ms  quickjs=579ms  deno=1218ms  node=1412ms  (47-test totals)
 * Go and Python (~): indicative from public benchmarks (benchmarks game, pyperformance).
 * Bar = relative throughput. Higher = faster. Ceiling: Go ~10ms avg.
 */
const benchmarks = [
  { label: "go",      value: 100, time: "~10ms",  highlight: false, estimated: true  },
  { label: "tish",    value: 81,  time: "12ms",   highlight: true,  estimated: false },
  { label: "quickjs", value: 81,  time: "12ms",   highlight: false, estimated: false },
  { label: "bun",     value: 70,  time: "14ms",   highlight: false, estimated: false },
  { label: "deno",    value: 39,  time: "26ms",   highlight: false, estimated: false },
  { label: "node.js", value: 33,  time: "30ms",   highlight: false, estimated: false },
  { label: "python",  value: 2,   time: "~600ms", highlight: false, estimated: true  },
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
            <p className="text-xs text-primary">core language suite · avg per test</p>
            <h2 className="mt-2 text-xl font-medium leading-tight text-foreground md:text-2xl">
              faster is better
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Average execution time across 47 core language tests — arrays, objects,
              math, strings, and control flow. Tish native (Rust release), Node, Bun,
              Deno, and QuickJS are measured on identical workloads from the Tish test
              suite. Go and Python (~) are reference points from public benchmarks
              (benchmarks game, pyperformance). Higher bar = faster.
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
                      : bench.estimated
                        ? "text-muted-foreground/50"
                        : "text-muted-foreground"
                  }`}
                >
                  {bench.label}
                </span>
                <div className="flex flex-1 items-center gap-2">
                  <div className="flex-1">
                    <div className="h-6 w-full rounded-sm bg-secondary">
                      <div
                        className={`flex h-full min-w-1 items-center rounded-sm ${
                          bench.value >= 15 ? "px-3" : ""
                        } ${
                          bench.highlight
                            ? "bg-primary"
                            : bench.estimated
                              ? "bg-muted-foreground/10"
                              : "bg-muted-foreground/15"
                        }`}
                        style={{ width: `${bench.value}%` }}
                      >
                        {bench.value >= 15 && (
                          <span
                            className={`text-xs ${
                              bench.highlight
                                ? "text-primary-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {bench.time}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {bench.value < 15 && (
                    <span className="w-16 text-xs text-muted-foreground/50">
                      {bench.time}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
