import { Cpu, Brain, Database, Zap, Layers, Shield } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Native Compilation",
    description:
      "Compiles to native machine code via LLVM. No runtime overhead, no garbage collection pauses. Predictable, blazing-fast performance.",
  },
  {
    icon: Brain,
    title: "Built-in AI Modules",
    description:
      "First-class support for tensor operations, model loading (ONNX, safetensors), and inference. No bindings, no FFI -- just import and use.",
  },
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Native DataFrame operations, CSV/Parquet/JSON parsing, and streaming pipelines. Process millions of rows without leaving the language.",
  },
  {
    icon: Zap,
    title: "Familiar Syntax",
    description:
      "JS/TS developers feel at home immediately. Arrow functions, destructuring, template literals, async/await -- it all works.",
  },
  {
    icon: Layers,
    title: "Zero-Cost Abstractions",
    description:
      "Generics, traits, and pattern matching compile away completely. High-level code with low-level performance characteristics.",
  },
  {
    icon: Shield,
    title: "Memory Safe",
    description:
      "Ownership-based memory model inspired by Rust, but with a simpler surface syntax. No dangling pointers, no data races, no UB.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to ship native AI apps
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            tishlang combines the ergonomics of TypeScript with the performance
            of systems languages and the ML-first stdlib you wish existed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-secondary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
