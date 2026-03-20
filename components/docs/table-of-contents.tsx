"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const el = document.querySelector(".mdx-content");
    if (!el) return;

    const nodes = el.querySelectorAll("h2, h3");
    const list: Heading[] = [];
    nodes.forEach((node) => {
      const id = node.id || (node.textContent?.toLowerCase().replace(/\s+/g, "-") ?? "");
      if (id) list.push({ id, text: node.textContent ?? "", level: parseInt(node.tagName[1], 10) });
    });
    setHeadings(list);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden shrink-0 w-48 text-sm xl:block">
      <h4 className="mb-3 font-medium text-muted-foreground">On this page</h4>
      <ul className="flex flex-col gap-1">
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ paddingLeft: h.level === 3 ? 12 : 0 }}
            className="leading-tight"
          >
            <a
              href={`#${h.id}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
