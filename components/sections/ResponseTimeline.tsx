"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { StatCard } from "@/components/ui/StatCard";
import { TIMELINE } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function ResponseTimeline() {
  return (
    <SectionShell id="timeline">
      <SectionHeader
        eyebrow="Response speed"
        title={
          <>
            One attack becomes{" "}
            <span className="text-gradient-cyan">protection for all</span>.
          </>
        }
        blurb="From first encounter to fleet-wide distribution, the entire adaptive cycle runs in under a second."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 relative"
      >
        <div className="hidden lg:block absolute inset-x-0 top-[36px] h-px bg-gradient-to-r from-transparent via-[rgba(124,196,255,0.2)] to-transparent" />

        <div className="grid gap-4 lg:grid-cols-5 lg:gap-3">
          {TIMELINE.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUpItem}
              className="relative rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#111827]/50 p-5 transition-all hover:border-[rgba(124,196,255,0.3)]"
            >
              <NumberBadge n={s.n} size="sm" />
              <h3 className="mt-4 text-[14.5px] font-semibold tracking-tight leading-[1.3] text-[#E8EEF7]">
                {s.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-[1.55] text-[#94A3B8]">{s.body}</p>

              {i < TIMELINE.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-9 h-6 w-6 items-center justify-center rounded-full border border-[rgba(124,196,255,0.25)] bg-[#0A0E1A] text-[#7CC4FF]">
                  <ArrowRight size={11} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-[12px] gradient-border bg-[rgba(124,196,255,0.03)] p-7 sm:p-9 text-center"
      >
        <p className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.02em] leading-[1.35] text-[#E8EEF7]">
          What starts as one attack becomes{" "}
          <span className="text-gradient-cyan">protection for all</span>.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value="<1s" label="Response Time" />
        <StatCard value="100%" label="Fleet Coverage" />
        <StatCard value="99.9%" label="Protection Rate" />
        <StatCard value="Global" label="Distribution" />
      </div>
    </SectionShell>
  );
}
