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
      "tishlang compiles to native machine code via llvm. no vm, no jit warmup, no garbage collection pauses. the language gives you javascript/typescript ergonomics -- arrow functions, destructuring, async/await, generics -- with the performance characteristics of c++ or rust.",
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
  return (
    <section id="features" className="border-t border-border">
      {sections.map((section) => (
        <div
          key={section.number}
          className="border-b border-border px-6 py-24 sm:px-10 md:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left column */}
              <div>
                <p className="mb-6 text-sm text-primary">{section.number}</p>
                <h2 className="mb-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-foreground">
                  {section.title}
                </h2>
                <p className="mb-6 text-base text-muted-foreground sm:text-lg">
                  {section.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>

              {/* Right column - capabilities */}
              <div className="flex flex-col justify-end">
                <p className="mb-6 text-xs tracking-widest text-muted-foreground uppercase">
                  {"// capabilities"}
                </p>
                <ul className="flex flex-col gap-4">
                  {section.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-3 text-sm leading-relaxed text-secondary-foreground"
                    >
                      <span className="mt-0.5 text-muted-foreground">-</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
