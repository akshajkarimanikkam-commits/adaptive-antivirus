"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { LEGACY_FAILS } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function LegacyFails() {
  return (
    <SectionShell id="legacy">
      <SectionHeader
        eyebrow="Why legacy AV fails"
        title={
          <>
            Most antivirus products are still{" "}
            <span className="text-gradient-cyan">REACTIVE</span>.
          </>
        }
        blurb="They wait for vendors to publish a signature, then push it down. By the time the update lands, the threat already moved."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
        >
          {LEGACY_FAILS.map((c) => (
            <motion.div key={c.title} variants={fadeUpItem}>
              <Card>
                <CardTitle>{c.title}</CardTitle>
                <CardBody className="mt-2">{c.body}</CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-6 sm:p-7">
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
              Industry Baseline
            </div>
            <div className="mt-6 space-y-7">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#94A3B8]">Detection Rate</span>
                  <span className="font-mono text-[22px] font-semibold tracking-tight text-[#E8EEF7]">
                    75%
                  </span>
                </div>
                <ProgressBar value={75} tone="primary" className="mt-2" />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#94A3B8]">Response Time</span>
                  <span className="font-mono text-[22px] font-semibold tracking-tight text-[#FBBF24]">
                    24h
                  </span>
                </div>
                <ProgressBar value={92} tone="warning" className="mt-2" />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[14px] text-[#94A3B8]">Mobile Parity</span>
                  <span className="font-mono text-[22px] font-semibold tracking-tight text-[#F87171]">
                    34%
                  </span>
                </div>
                <ProgressBar value={34} tone="danger" className="mt-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7 }}
        className="relative mt-14 mx-auto max-w-3xl rounded-[12px] border border-[rgba(124,196,255,0.18)] bg-[rgba(124,196,255,0.04)] p-7 sm:p-9"
      >
        <Quote size={20} className="absolute -top-3 left-7 text-[#7CC4FF] bg-[#0A0E1A] px-1" />
        <p className="text-[18px] sm:text-[20px] leading-[1.55] tracking-[-0.01em] text-[#E8EEF7]">
          The market protects against{" "}
          <span className="text-gradient-cyan">yesterday's threats</span>{" "}
          more effectively than{" "}
          <span className="text-gradient-cyan">tomorrow's</span>.
        </p>
      </motion.blockquote>
    </SectionShell>
  );
}
