"use client"

import { useState } from "react"

const tabs = [
  {
    label: "hello.tish",
    code: `import { print } from "std:io"

fn main() {
  const name: string = "world"
  print(\`hello, \${name}!\`)

  const numbers = [1, 2, 3, 4, 5]
  const doubled = numbers.map(n => n * 2)

  print(doubled) // [2, 4, 6, 8, 10]
}`,
  },
  {
    label: "inference.tish",
    code: `import { Model, Tensor } from "std:ai"

fn main() {
  // load a model from ONNX or tishlang format
  const model = Model.load("./sentiment.onnx")

  // built-in tensor operations
  const input = Tensor.from_text("tishlang is fast")
  const result = model.predict(input)

  print(result.label)      // "positive"
  print(result.confidence) // 0.9847
}`,
  },
  {
    label: "pipeline.tish",
    code: `import { DataFrame } from "std:data"
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
    const highlighted = line
      .replace(
        /\b(import|from|fn|const|let|async|return|if|else|for)\b/g,
        '<span style="color: oklch(0.7 0.17 155)">$1</span>'
      )
      .replace(
        /\b(string|number|boolean|void)\b/g,
        '<span style="color: oklch(0.75 0.12 60)">$1</span>'
      )
      .replace(
        /"([^"]*)"/g,
        '<span style="color: oklch(0.7 0.17 155)">\"$1\"</span>'
      )
      .replace(
        /`([^`]*)`/g,
        '<span style="color: oklch(0.7 0.17 155)">`$1`</span>'
      )
      .replace(
        /(\/\/.*)/g,
        '<span style="color: oklch(0.35 0 0); font-style: italic">$1</span>'
      )
      .replace(
        /\b(\d+\.?\d*)\b/g,
        '<span style="color: oklch(0.75 0.12 60)">$1</span>'
      )

    return (
      <div key={i} className="leading-7">
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
      </div>
    )
  })
}

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="px-8 pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {/* Window chrome */}
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/10" />
            </div>
            <div className="flex items-center gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`rounded px-3 py-1 text-xs transition-colors ${
                    activeTab === i
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code content */}
          <div className="overflow-x-auto p-6">
            <pre className="text-sm">
              <code>{highlightSyntax(tabs[activeTab].code)}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
