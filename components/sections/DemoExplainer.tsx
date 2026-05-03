"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Cpu, Lock, Network } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: Eye,
    title: "What you saw: Detection",
    body: "The behavioral telemetry caught an unknown process with a high anomaly score. In production this is continuous, per-process, sub-10 ms.",
  },
  {
    icon: Cpu,
    title: "What you saw: Adaptation",
    body: "The engine extracted a fingerprint, generated a counter-pattern from the observed behavior, and compiled defense logic — entirely on-device.",
  },
  {
    icon: Lock,
    title: "What you saw: Hardening",
    body: "The endpoint was immunized against the same attack vector. The payload was rolled back; the device cannot be re-infected by this pattern.",
  },
  {
    icon: Network,
    title: "What you saw: Sharing",
    body: "The signed adaptation was distributed to seven peer endpoints. Every peer inherited the defense before the attack could spread.",
  },
];

export function DemoExplainer() {
  return (
    <SectionShell id="demo-explainer">
      <SectionHeader
        eyebrow="What just happened"
        title={
          <>
            Four phases. One{" "}
            <span className="text-gradient-cyan">continuous defense</span>.
          </>
        }
        blurb="The simulation compresses real-world timing — in production, the entire cycle completes in under one second."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              variants={fadeUpItem}
              className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-5 transition-all hover:border-[rgba(124,196,255,0.3)]"
            >
              <Icon size={16} className="text-[#7CC4FF]" />
              <h3 className="mt-4 text-[14px] font-semibold tracking-tight text-[#E8EEF7]">
                {c.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-[#94A3B8]">{c.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
