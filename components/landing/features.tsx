"use client"

import { useInView } from "@/hooks/use-in-view"

const sections = [
  {
    number: "01",
    title: "ai compute",
    subtitle: "models, inference, and agents at native speed",
    description:
      "load onnx and safetensors models directly. built-in tensor operations, batched inference, and streaming pipelines. chain models into autonomous agents with tool calling and memory. all compiled to native machine code.",
    capabilities: [
      "native tensor operations with zero-copy memory",
      "onnx and safetensors model loading out of the box",
      "agent orchestration with built-in tool calling",
      "batched inference with automatic parallelization",
      "gpu acceleration via vulkan and metal backends",
    ],
  },
  {
    number: "02",
    title: "data processing",
    subtitle: "dataframes, streaming, and pipelines built in",
    description:
      "native dataframe operations that compile to vectorized simd instructions. read csv, parquet, json, and arrow formats. stream gigabytes of data through typed pipelines with backpressure and fault tolerance. no pandas, no spark -- just your code.",
    capabilities: [
      "columnar dataframes with simd-accelerated operations",
      "csv, parquet, json, and arrow format support",
      "streaming pipelines with backpressure and batching",
      "typed schemas with compile-time validation",
      "parallel execution across all available cores",
    ],
  },
  {
    number: "03",
    title: "native compilation",
    subtitle: "llvm backend, zero runtime overhead",
    description:
      "tish compiles to native machine code via llvm. no vm, no jit warmup, no garbage collection pauses. the language gives you javascript/typescript ergonomics -- arrow functions, destructuring, async/await, generics -- with the performance characteristics of c++ or rust.",
    capabilities: [
      "compiles to native via llvm for every major platform",
      "ownership-based memory model with no gc pauses",
      "zero-cost generics and trait-based polymorphism",
      "sub-millisecond startup for cli and server workloads",
      "cross-compile to linux, macos, and windows from any host",
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
              {/* Left column */}
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

              {/* Right column - capabilities (bordered box, source-style) */}
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
