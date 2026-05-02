"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Zap, Lock, Share2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const PHASES = [
  {
    icon: Eye,
    n: "01",
    title: "Detect",
    body: "Behavioral telemetry surfaces an anomaly. The suspicious code is isolated and fingerprinted in milliseconds.",
    metric: "<10 ms",
    metricLabel: "Latency",
  },
  {
    icon: Zap,
    n: "02",
    title: "Adapt",
    body: "The engine analyzes the captured pattern, synthesizes a counter-pattern, and applies it to the live runtime.",
    metric: "<200 ms",
    metricLabel: "Synthesis",
  },
  {
    icon: Lock,
    n: "03",
    title: "Harden",
    body: "Vector-specific resistance is baked into the device. The same exploit chain cannot run again on this endpoint.",
    metric: "Permanent",
    metricLabel: "Persistence",
  },
  {
    icon: Share2,
    n: "04",
    title: "Share",
    body: "The validated adaptation is signed and propagated. Every other endpoint inherits the new defense in real time.",
    metric: "<1 s",
    metricLabel: "Fleet propagate",
  },
];

export function CycleDiagram() {
  return (
    <SectionShell id="cycle">
      <SectionHeader
        eyebrow="The full cycle"
        title={
          <>
            Four phases. One{" "}
            <span className="text-gradient-cyan">continuous loop</span>.
          </>
        }
        blurb="The cycle never pauses. Each completed pass enriches the engine that runs the next pass — both on the device and across the fleet."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 relative grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* connecting line on lg */}
        <div
          aria-hidden
          className="hidden lg:block absolute inset-x-12 top-[44px] h-px bg-gradient-to-r from-[rgba(124,196,255,0.05)] via-[rgba(124,196,255,0.4)] to-[rgba(124,196,255,0.05)]"
        />

        {PHASES.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.n}
              variants={fadeUpItem}
              className="relative rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/50 p-6 transition-all hover:border-[rgba(124,196,255,0.3)]"
            >
              <div className="relative flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(124,196,255,0.3)] bg-[#0A0E1A] text-[#7CC4FF] z-10">
                  <Icon size={16} />
                </div>
                <span className="font-mono text-[12px] tabular-nums text-[#7CC4FF]">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#E8EEF7]">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#94A3B8]">
                {p.body}
              </p>
              <div className="mt-5 flex items-baseline justify-between border-t border-[rgba(148,163,184,0.08)] pt-4">
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                  {p.metricLabel}
                </span>
                <span className="font-mono text-[15px] font-semibold tracking-tight text-gradient-cyan">
                  {p.metric}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-[12px] gradient-border bg-[rgba(124,196,255,0.03)] p-7 text-center"
      >
        <p className="text-[16px] sm:text-[18px] tracking-[-0.01em] leading-[1.55] text-[#E8EEF7]">
          Each pass turns one device's encounter into the{" "}
          <span className="text-gradient-cyan">whole fleet's defense</span>.
        </p>
      </motion.div>
    </SectionShell>
  );
}
