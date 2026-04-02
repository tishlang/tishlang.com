"use client"

import { useInView } from "@/hooks/use-in-view"

const sections = [
  {
    number: "01",
    title: "opinionated syntax",
    subtitle: "javascript/typescript feel, multiple compile targets",
    description:
      "tish is a hardened js/ts-like surface: let/const, arrow functions, async/await, template literals, and modules. one source tree runs in a tree-walking interpreter or bytecode vm, transpiles to javascript, or ships as wasm/wasi or a native binary — pick the backend and target that fit your deploy story.",
    capabilities: [
      "strict equality only; no undefined — null or a real value",
      "native modules on the rust backend: tish:http, tish:fs, tish:process, and more",
      "optional type syntax parsed at compile time (checked types and codegen still evolving)",
      "secure-by-default: http, fs, process, and regex behind explicit feature flags",
    ],
  },
  {
    number: "02",
    title: "rechargeable batteries",
    subtitle: "the features and functionality you keep coming back for",
    description:
      "javascript- and node-shaped builtins out of the box: console, math, json, arrays, strings, promises when http is enabled. on the rust backend, pull in vetted native surface area — fetch, serve, filesystem, process env — without hand-rolled c ffi; extend the host with rust modules the compiler understands.",
    capabilities: [
      "http feature: fetch, fetchAll, serve, timers; tish:ws for websocket clients/servers when enabled",
      "fs feature: readFile, writeFile, readDir, mkdir for local io",
      "optional polars: import { Polars } from 'tish:polars' when the embedder registers it",
      "examples and tests in the tish repo mirror what the toolchain actually supports",
    ],
  },
  {
    number: "03",
    title: "native compilation",
    subtitle: "more metal, more native, more blazingly fast",
    description:
      "`tish build` turns the same program into a standalone native binary, browser wasm, wasi for wasmtime-style runtimes, or plain javascript for any js engine. the default rust backend emits rust that links `tishlang_runtime` and can load `tish:*` modules; cranelift and llvm paths embed bytecode and run the vm inside a small native shell — ideal when you want a quick compile with no cargo in the loop.",
    capabilities: [
      "tish build — native (rust, cranelift, or llvm), wasm, wasi, or js",
      "rust backend: full interop with native tish modules; cranelift/llvm: pure tish, vm-class throughput today",
      "standalone binaries: ship without asking users to install the tish toolchain",
      "deploy to the zectre platform with the same artifacts you build locally",
    ],
  },
  {
    number: "04",
    title: "ecosystem synergy",
    subtitle: "cargo, npm, bun, deno, brew",
    description:
      "install the cli from homebrew or run it ad hoc with npx. compile from source with cargo when you are hacking the compiler. emit javascript and drop the output beside existing npm, bun, or deno projects. editor support ships as fmt, lint, and an lsp that editors can wire up — including the tish vscode extension.",
    capabilities: [
      "brew tap tishlang/tish and brew install tish on macos and linux",
      "npx @tishlang/tish run or build without a global install; create-tish-app for scaffolds",
      "tish build --target js for bundlers and runtimes that already speak javascript",
      "tish-fmt, tish-lint, tish-lsp, and crates published to crates.io for deeper integration",
    ],
  },
]

export function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="border-b border-border pb-20 py-6 lg:py-6">
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
