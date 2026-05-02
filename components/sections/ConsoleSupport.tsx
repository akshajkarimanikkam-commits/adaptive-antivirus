"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Pill } from "@/components/ui/Pill";
import { CONSOLE_REASONS } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function ConsoleSupport() {
  return (
    <SectionShell id="console">
      <SectionHeader
        eyebrow="Why console support matters"
        title={
          <>
            The living room is now a{" "}
            <span className="text-gradient-cyan">network endpoint</span>.
          </>
        }
        blurb="Consoles run modern operating systems, hold payment credentials, and share the same LAN as your laptop. Most antivirus vendors pretend they don't exist."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
        >
          {CONSOLE_REASONS.map((c) => (
            <motion.div key={c.title} variants={fadeUpItem}>
              <Card>
                <CardTitle>{c.title}</CardTitle>
                <CardBody className="mt-2">{c.body}</CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-6">
            <div className="flex items-center justify-between">
              <Gamepad2 size={20} className="text-[#7CC4FF]" />
              <Pill tone="warning">Underserved</Pill>
            </div>
            <div className="mt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] text-[#94A3B8]">Console Vulnerability</span>
                <span className="font-mono text-[20px] font-semibold text-[#FBBF24]">85%</span>
              </div>
              <ProgressBar value={85} tone="warning" className="mt-2" />
            </div>
            <div className="mt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] text-[#94A3B8]">Threat Detection (AV avg.)</span>
                <span className="font-mono text-[20px] font-semibold text-[#F87171]">12%</span>
              </div>
              <ProgressBar value={12} tone="danger" className="mt-2" />
            </div>
            <div className="mt-5 pt-5 border-t border-[rgba(148,163,184,0.08)]">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] text-[#94A3B8]">Adaptive AV Coverage</span>
                <span className="font-mono text-[20px] font-semibold text-gradient-cyan">99%</span>
              </div>
              <ProgressBar value={99} tone="primary" className="mt-2" />
            </div>
          </div>

          <div className="rounded-[12px] border-l-2 border-[#7CC4FF] bg-[rgba(124,196,255,0.04)] p-4">
            <div className="text-[13px] leading-[1.5] text-[#E8EEF7]">
              <span className="text-[#7CC4FF] font-mono text-[11px] uppercase tracking-[0.12em]">Insight</span>
              <div className="mt-1.5">
                The first vendor to treat console as a Tier 1 platform inherits the next decade of network risk.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
