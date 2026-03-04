"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL https://tishlang.dev/install | sh")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">v0.4.0-beta now available</span>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Native Performance.{" "}
          <span className="text-primary">Familiar Syntax.</span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          tishlang is a compiled language with JavaScript/TypeScript-like syntax
          that targets native binaries. Built-in AI inference and data
          processing modules let you ship production ML pipelines without
          leaving the language you already know.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
          <a
            href="#"
            className="rounded-md border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
          >
            Read the Docs
          </a>
        </div>

        <div className="group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3">
          <span className="text-sm text-muted-foreground">$</span>
          <code className="text-sm text-foreground">
            curl -fsSL https://tishlang.dev/install | sh
          </code>
          <button
            onClick={handleCopy}
            className="ml-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Copy install command"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
