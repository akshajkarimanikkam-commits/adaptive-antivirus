"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  language?: string;
  filename?: string;
  lines: Array<string | { text: string; tone?: "comment" | "keyword" | "string" | "fn" | "muted" | "danger" | "success" }>;
  className?: string;
}

const toneClass: Record<string, string> = {
  comment: "text-[#64748B]",
  keyword: "text-[#7CC4FF]",
  string: "text-[#34D399]",
  fn: "text-[#FBBF24]",
  muted: "text-[#94A3B8]",
  danger: "text-[#F87171]",
  success: "text-[#34D399]",
};

export function CodeBlock({ language = "ts", filename, lines, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "scanline relative overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#0A0E1A]/90",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-[rgba(148,163,184,0.08)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]/60" />
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-[#64748B]">
          {filename && <span>{filename}</span>}
          <span className="uppercase tracking-[0.14em]">{language}</span>
        </div>
      </div>
      <pre className="relative px-5 py-4 font-mono text-[12.5px] leading-[1.7] text-[#E8EEF7] overflow-x-auto">
        <code>
          {lines.map((line, i) => {
            const text = typeof line === "string" ? line : line.text;
            const tone = typeof line === "string" ? undefined : line.tone;
            return (
              <div key={i} className="flex">
                <span className="select-none pr-4 text-[#64748B] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("flex-1", tone && toneClass[tone])}>
                  {text || " "}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
