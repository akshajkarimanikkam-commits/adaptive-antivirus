"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Pill } from "@/components/ui/Pill";
import { PRIVACY } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function Privacy() {
  return (
    <SectionShell id="privacy">
      <SectionHeader
        eyebrow="Privacy & trust"
        title={
          <>
            Your content stays local. The{" "}
            <span className="text-gradient-cyan">threat</span> is what travels.
          </>
        }
        blurb="Adaptation intelligence is the malicious code pattern, not your data. Trust posture is a product feature, not a footnote."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
        >
          {PRIVACY.map((c) => (
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
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#7CC4FF]" />
                <span className="text-[13px] font-semibold text-[#E8EEF7]">Trust as a feature</span>
              </div>
              <Pill tone="primary">Score</Pill>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] text-[#94A3B8]">Privacy Score</span>
                <span className="font-mono text-[28px] font-semibold tracking-tight text-gradient-cyan leading-none">
                  94%
                </span>
              </div>
              <ProgressBar value={94} tone="primary" className="mt-3" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 pt-5 border-t border-[rgba(148,163,184,0.08)]">
              {["SOC 2 II", "ISO 27001", "GDPR", "CCPA"].map((c) => (
                <div
                  key={c}
                  className="rounded-md border border-[rgba(148,163,184,0.12)] bg-[rgba(17,24,39,0.6)] px-3 py-2 text-center text-[11px] font-mono uppercase tracking-[0.14em] text-[#94A3B8]"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-[12px] border-l-2 border-[#7CC4FF] bg-[rgba(124,196,255,0.04)] p-4">
            <div className="text-[13px] leading-[1.55] text-[#E8EEF7]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#7CC4FF]">Survey</span>
              <div className="mt-1.5">
                <span className="font-semibold">57%</span> of non-users worry security software makers could misuse personal data. We make that worry obsolete.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
