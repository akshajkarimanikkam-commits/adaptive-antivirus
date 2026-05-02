"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const REASONS = [
  {
    label: "Why now",
    body: "Mobile banking trojan detections were 4× higher in H1 2025 vs 2024. Console connectivity is universal. The legacy stack didn't keep up.",
  },
  {
    label: "Why this",
    body: "66% of users lack cross-platform protection. Adaptive defense with fleet learning is the architectural answer, not a feature.",
  },
  {
    label: "Why us",
    body: "We treat console as Tier 1. We synthesize defenses on-device. We make every encounter compound across the entire network.",
  },
];

export function Thesis() {
  return (
    <SectionShell id="thesis">
      <SectionHeader
        eyebrow="Thesis"
        align="center"
        title={
          <>
            The future of antivirus should not just{" "}
            <span className="text-gradient-cyan">detect</span> attack —{" "}
            it should <span className="text-gradient-cyan">evolve past</span> it.
          </>
        }
      />

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7 }}
        className="relative mt-12 mx-auto max-w-3xl rounded-[12px] gradient-border bg-[rgba(124,196,255,0.04)] p-8 sm:p-10 text-center"
      >
        <Quote size={22} className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#7CC4FF] bg-[#0A0E1A] px-1.5" />
        <p className="text-[20px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-[1.4] text-[#E8EEF7]">
          We believe that{" "}
          <span className="text-gradient-cyan">every threat encounter</span>{" "}
          should make the entire network harder to break.
        </p>
      </motion.blockquote>

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {REASONS.map((r) => (
          <motion.div key={r.label} variants={fadeUpItem}>
            <Card>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#7CC4FF]">
                {r.label}
              </div>
              <CardBody className="mt-3 text-[14px] text-[#E8EEF7]">{r.body}</CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-[12px] border border-[rgba(124,196,255,0.2)] bg-gradient-to-r from-[rgba(124,196,255,0.06)] via-[rgba(124,196,255,0.03)] to-[rgba(124,196,255,0.06)] p-8 text-center"
      >
        <p className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.02em] text-[#E8EEF7]">
          Adaptive Antivirus turns malware contact into{" "}
          <span className="text-gradient-cyan">permanent advantage</span>.
        </p>
      </motion.div>
    </SectionShell>
  );
}
