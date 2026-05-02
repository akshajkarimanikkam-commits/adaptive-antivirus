"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckRow } from "@/components/shared/CheckRow";
import {
  COMPETITIVE_LEGACY,
  COMPETITIVE_ADAPTIVE,
  COMPARISON_TABLE,
} from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function Competitive() {
  return (
    <SectionShell id="competitive">
      <SectionHeader
        eyebrow="Legacy vs Adaptive"
        title={
          <>
            The same problem,{" "}
            <span className="text-gradient-cyan">solved differently</span>.
          </>
        }
        blurb="Legacy vendors patch a static defense. Adaptive Antivirus generates a new defense the moment a new threat appears."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-7"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#94A3B8]">
            Legacy AV
          </div>
          <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[#E8EEF7]">
            Built for the threats of 2010.
          </h3>
          <ul className="mt-6 space-y-3">
            {COMPETITIVE_LEGACY.map((c) => (
              <motion.div key={c.label} variants={fadeUpItem}>
                <CheckRow ok={c.ok}>{c.label}</CheckRow>
              </motion.div>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-[12px] gradient-border bg-[rgba(124,196,255,0.04)] p-7"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
            Adaptive Antivirus
          </div>
          <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-[#E8EEF7]">
            Built for the threats of tomorrow.
          </h3>
          <ul className="mt-6 space-y-3">
            {COMPETITIVE_ADAPTIVE.map((c) => (
              <motion.div key={c.label} variants={fadeUpItem}>
                <CheckRow ok={c.ok}>{c.label}</CheckRow>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40"
      >
        <table className="w-full text-left text-[13.5px]">
          <thead className="bg-[rgba(17,24,39,0.6)] text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
            <tr>
              <th className="px-5 py-3.5 font-medium">Capability</th>
              <th className="px-5 py-3.5 font-medium">Legacy AV</th>
              <th className="px-5 py-3.5 font-medium text-[#7CC4FF]">Adaptive</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_TABLE.map((r, i) => (
              <tr
                key={r.row}
                className={i % 2 ? "bg-[rgba(17,24,39,0.25)]" : ""}
              >
                <td className="px-5 py-4 font-medium text-[#E8EEF7]">{r.row}</td>
                <td className="px-5 py-4 text-[#94A3B8]">{r.legacy}</td>
                <td className="px-5 py-4 text-[#E8EEF7]">{r.adaptive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </SectionShell>
  );
}
