"use client"

import { useState } from "react"

const tabs = [
  {
    label: "hello.tish",
    code: `import { print } from "std:io"

fn main() {
  const name: string = "world"
  print(\`Hello, \${name}!\`)
  
  const numbers = [1, 2, 3, 4, 5]
  const doubled = numbers.map(n => n * 2)
  
  print(doubled) // [2, 4, 6, 8, 10]
}`,
  },
  {
    label: "inference.tish",
    code: `import { Model, Tensor } from "std:ai"
import { read_csv } from "std:data"

fn main() {
  // Load a model from ONNX or tishlang format
  const model = Model.load("./sentiment.onnx")
  
  // Built-in tensor operations
  const input = Tensor.from_text("tishlang is fast")
  const result = model.predict(input)
  
  print(result.label)      // "positive"
  print(result.confidence) // 0.9847
}`,
  },
  {
    label: "pipeline.tish",
    code: `import { DataFrame } from "std:data"
import { Model } from "std:ai"
import { serve } from "std:http"

fn main() {
  const df = DataFrame.read_csv("./sales.csv")
    .filter(row => row.revenue > 1000)
    .group_by("region")
    .agg({ total: "sum(revenue)" })

  serve(":8080", async (req) => {
    return Response.json(df.to_records())
  })
}`,
  },
]

function highlightSyntax(code: string) {
  const lines = code.split("\n")
  return lines.map((line, i) => {
    let highlighted = line
      .replace(
        /\b(import|from|fn|const|let|async|return|if|else|for)\b/g,
        '<span class="text-accent">$1</span>'
      )
      .replace(
        /\b(string|number|boolean|void)\b/g,
        '<span class="text-[oklch(0.75_0.15_60)]">$1</span>'
      )
      .replace(
        /"([^"]*)"/g,
        '<span class="text-primary">"$1"</span>'
      )
      .replace(
        /`([^`]*)`/g,
        '<span class="text-primary">`$1`</span>'
      )
      .replace(
        /(\/\/.*)/g,
        '<span class="text-muted-foreground/60 italic">$1</span>'
      )
      .replace(
        /\b(\d+\.?\d*)\b/g,
        '<span class="text-[oklch(0.75_0.15_60)]">$1</span>'
      )

    return (
      <div key={i} className="flex">
        <span className="mr-6 inline-block w-6 select-none text-right text-muted-foreground/40">
          {i + 1}
        </span>
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
      </div>
    )
  })
}

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Write what you know. Compile to native.
          </h2>
          <p className="text-muted-foreground">
            If you can write TypeScript, you can write tishlang.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex border-b border-border">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-xs transition-colors ${
                  activeTab === i
                    ? "border-b-2 border-primary bg-secondary/30 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto p-6">
            <pre className="text-sm leading-relaxed">
              <code>{highlightSyntax(tabs[activeTab].code)}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
