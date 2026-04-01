"use client"

import { useInView } from "@/hooks/use-in-view"

const sections = [
  {
    number: "01",
    title: "familiar syntax",
    subtitle: "javascript/typescript feel, multiple compile targets",
    description:
      "tish is a minimal js/ts-like language: let/const, arrow functions, async/await, template literals, and modules. the same source runs in an interpreter or compiles to native (rust or cranelift backend), wasm, or javascript — pick the target that fits.",
    capabilities: [
      "strict equality, no undefined — null and familiar typeof",
      "import/export and native tish:* modules on the rust backend",
      "optional type annotations (parsed; enforcement evolving)",
      "secure-by-default: network, fs, and process behind feature flags",
    ],
  },
  {
    number: "02",
    title: "rechargeable batteries",
    subtitle: "the features and functionality you keep coming back for",
    description:
      "use global console.log and json like node. pull in real modules: import from 'http' for fetch and serve, tish:fs for readFile/writeFile, tish:process for env and argv. for dataframes, the ecosystem provides tish:polars when the embedder registers it — not a fake std:data.",
    capabilities: [
      "http: fetch, fetchAll, serve (with the http feature)",
      "tish:fs: readFile, writeFile, readDir, mkdir (fs feature)",
      "optional polars: import { Polars } from 'tish:polars' when available",
      "same patterns as the examples in the tish repo",
    ],
  },
  {
    number: "03",
    title: "native compilation",
    subtitle: "more metal, more native, more blazingly fast",
    description:
      "compile tish to a native executable for servers and cli tools, or to wasm for the browser and wasi, or to js for bundlers. no made-up tensor stack in the core language — you interop with rust and native crates where you need heavy numeric or ml work.",
    capabilities: [
      "tish compile — native, wasm, wasi, or js targets",
      "cranelift or rust codegen paths depending on backend",
      "examples: http-hello, json-api, json-file-edit, async-await",
      "deploy with zectre or run the binary anywhere",
    ],
  },
]

export function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        {sections.map((section, i) => (
          <div
            key={section.number}
            className="border-b border-border py-16 last:border-b-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(8px)",
              transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
            }}
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs text-primary">{section.number}</p>
                <h2 className="mt-2 text-xl font-medium leading-tight text-foreground md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-xs text-primary">
                  {section.subtitle}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <div className="border border-border p-5 transition-colors duration-500 hover:border-primary/20">
                  <p className="mb-4 text-xs text-muted-foreground/60">
                    {"// capabilities"}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {section.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-xs leading-relaxed"
                      >
                        <span className="mt-0.5 text-primary">-</span>
                        <span className="text-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
