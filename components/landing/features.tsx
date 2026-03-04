const features = [
  {
    title: "native compilation",
    description:
      "compiles to native machine code via llvm. no runtime overhead, no garbage collection pauses.",
  },
  {
    title: "built-in ai modules",
    description:
      "first-class tensor operations, model loading (onnx, safetensors), and inference. just import and use.",
  },
  {
    title: "data processing",
    description:
      "native dataframe operations, csv/parquet/json parsing, and streaming pipelines out of the box.",
  },
  {
    title: "familiar syntax",
    description:
      "arrow functions, destructuring, template literals, async/await -- it all works the way you expect.",
  },
  {
    title: "zero-cost abstractions",
    description:
      "generics, traits, and pattern matching compile away completely. high-level code, low-level perf.",
  },
  {
    title: "memory safe",
    description:
      "ownership-based memory model inspired by rust, with a simpler surface. no dangling pointers.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm text-primary">features</p>
        <h2 className="mb-4 text-2xl font-normal text-foreground sm:text-3xl">
          everything you need to ship native ai apps
        </h2>
        <p className="mb-16 max-w-xl text-sm leading-relaxed text-muted-foreground">
          tishlang combines the ergonomics of typescript with the performance
          of systems languages and an ml-first standard library.
        </p>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-border p-6"
            >
              <h3 className="mb-3 text-sm text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
