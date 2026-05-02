"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Radio, Layers, Globe2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { ARCHITECTURE } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function Architecture() {
  return (
    <SectionShell id="architecture">
      <SectionHeader
        eyebrow="System architecture"
        title={
          <>
            Four layers, one{" "}
            <span className="text-gradient-cyan">unified</span> defense surface.
          </>
        }
        blurb="The endpoint agent runs the engine. The hub coordinates intelligence. Distribution makes every endpoint smarter."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 space-y-3"
      >
        {ARCHITECTURE.map((row, i) => (
          <motion.div
            key={row.title}
            variants={fadeUpItem}
            className="group relative rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-5 sm:p-6 transition-all hover:border-[rgba(124,196,255,0.3)] hover:bg-[#111827]/70"
          >
            <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr_auto]">
              <div className="flex items-center gap-4">
                <NumberBadge n={row.n} size="md" />
                <div className="hidden sm:block h-px w-10 bg-gradient-to-r from-[rgba(124,196,255,0.4)] to-transparent" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#E8EEF7]">
                  {row.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.55] text-[#94A3B8]">{row.body}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {row.pills.map((p) => (
                  <Pill key={p} tone="muted" size="sm">
                    {p}
                  </Pill>
                ))}
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-[rgba(124,196,255,0.2)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 md:grid-cols-3"
      >
        {[
          { icon: Radio, title: "Real-time Sync", body: "Sub-second propagation between endpoints and hub." },
          { icon: Layers, title: "Adaptive Defense", body: "Counter-patterns synthesized at runtime, never pre-baked." },
          { icon: Globe2, title: "Cross-Platform", body: "One engine, every OS — desktop, mobile, console." },
        ].map((f) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.title} variants={fadeUpItem}>
              <Card>
                <Icon size={18} className="text-[#7CC4FF]" />
                <CardTitle className="mt-4">{f.title}</CardTitle>
                <CardBody className="mt-2">{f.body}</CardBody>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
