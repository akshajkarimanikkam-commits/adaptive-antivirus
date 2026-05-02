"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROADMAP } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const STATUS_TONE = {
  Active: "success",
  "In Progress": "warning",
  Planned: "muted",
  Future: "muted",
} as const;

export function Roadmap() {
  return (
    <SectionShell id="roadmap">
      <SectionHeader
        eyebrow="Roadmap"
        title={
          <>
            From MVP to{" "}
            <span className="text-gradient-cyan">global intelligence mesh</span>.
          </>
        }
        blurb="A staged rollout from local adaptation to a global, real-time defense network."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {ROADMAP.map((m, i) => {
          const tone =
            STATUS_TONE[m.status as keyof typeof STATUS_TONE] ?? "muted";
          const progressTone =
            m.status === "Active"
              ? "success"
              : m.status === "In Progress"
                ? "warning"
                : "primary";
          return (
            <motion.div
              key={m.phase}
              variants={fadeUpItem}
              className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-6 transition-all hover:border-[rgba(124,196,255,0.25)]"
            >
              <div className="flex items-center justify-between">
                <NumberBadge n={String(i + 1).padStart(2, "0")} size="sm" />
                <Pill tone={tone}>{m.status}</Pill>
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#E8EEF7]">
                {m.phase}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {m.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[13px] text-[#94A3B8]">
                    <span className="h-1 w-1 rounded-full bg-[#7CC4FF]" />
                    {it}
                  </li>
                ))}
              </ul>
              <ProgressBar
                value={m.progress}
                tone={progressTone}
                label="Progress"
                hint={`${m.progress}%`}
                className="mt-5"
              />
            </motion.div>
          );
        })}
      </motion.div>

      <p className="mt-8 text-center text-[12.5px] italic text-[#64748B] max-w-2xl mx-auto">
        This roadmap represents long-term vision and is not indicative of current achieved traction or market share.
      </p>
    </SectionShell>
  );
}
