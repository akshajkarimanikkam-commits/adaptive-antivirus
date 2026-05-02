"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PRODUCT_SEE, PRODUCT_FEEL } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function ProductExperience() {
  return (
    <SectionShell id="product">
      <SectionHeader
        eyebrow="Product experience"
        title={
          <>
            What users{" "}
            <span className="text-gradient-cyan">see</span>. What they{" "}
            <span className="text-gradient-cyan">feel</span>.
          </>
        }
        blurb="Most security software performs anxiety. Ours performs quiet competence."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-4 rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-6"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
            What users see
          </div>
          <ul className="mt-5 space-y-4">
            {PRODUCT_SEE.map((s) => (
              <motion.li
                key={s}
                variants={fadeUpItem}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[rgba(52,211,153,0.12)] text-[#34D399] border border-[rgba(52,211,153,0.3)]">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-[14px] leading-[1.55] text-[#E8EEF7]">{s}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 rounded-[12px] gradient-border bg-[#0A0E1A]/95"
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#7CC4FF]" />
                <span className="text-[12px] font-semibold tracking-tight text-[#E8EEF7]">
                  Adaptive Console
                </span>
              </div>
              <SystemActiveBadge />
            </div>

            <div className="mt-5 rounded-lg border border-[rgba(148,163,184,0.1)] bg-[#111827]/60 p-5">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                Protection state
              </div>
              <div className="mt-2 font-mono text-[40px] font-semibold tracking-tight text-gradient-cyan leading-none">
                IMMUNE
              </div>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-[#94A3B8]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                4 devices · 12 adaptations today
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-[#94A3B8]">Coverage</span>
                  <span className="font-mono text-[12px] text-[#E8EEF7]">100%</span>
                </div>
                <ProgressBar value={100} tone="primary" className="mt-1" />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-[#94A3B8]">Adaptation Health</span>
                  <span className="font-mono text-[12px] text-[#E8EEF7]">96%</span>
                </div>
                <ProgressBar value={96} tone="primary" className="mt-1" />
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Pill tone="muted">PC</Pill>
              <Pill tone="muted">iOS</Pill>
              <Pill tone="muted">Console</Pill>
              <Pill tone="primary">+ Add</Pill>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-4 rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-6"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
            What users feel
          </div>
          <ul className="mt-5 space-y-4">
            {PRODUCT_FEEL.map((s) => (
              <motion.li
                key={s}
                variants={fadeUpItem}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[rgba(124,196,255,0.12)] text-[#7CC4FF] border border-[rgba(124,196,255,0.3)]">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-[14px] leading-[1.55] text-[#E8EEF7]">{s}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionShell>
  );
}
