"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, Network, Layers } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { BREAKTHROUGHS, HERO_METRICS } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const ICONS = [Zap, Network, Layers];

export function Breakthroughs() {
  return (
    <SectionShell id="breakthroughs">
      <SectionHeader
        eyebrow="What makes it different"
        title={
          <>
            Three breakthroughs that turn defense into{" "}
            <span className="text-gradient-cyan">advantage</span>.
          </>
        }
        blurb="Adaptive Antivirus rebuilds the AV stack around three core ideas the legacy market never combined."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 md:grid-cols-3"
      >
        {BREAKTHROUGHS.map((b, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div key={b.n} variants={fadeUpItem} className="flex">
              <GlowCard highlighted={i === 1} className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <NumberBadge n={b.n} size="md" />
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.06)] text-[#7CC4FF]">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-[#E8EEF7]">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-[13px] font-mono uppercase tracking-[0.12em] text-[#7CC4FF]">
                  {b.blurb}
                </p>
                <ul className="mt-6 space-y-3">
                  {b.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-[#94A3B8]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7CC4FF]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[rgba(148,163,184,0.1)] rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 overflow-hidden"
      >
        {HERO_METRICS.map((m) => (
          <div key={m.label} className="p-5 text-center sm:text-left">
            <div className="font-mono text-[24px] sm:text-[28px] font-semibold tracking-tight text-gradient-cyan leading-none">
              {m.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
