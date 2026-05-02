"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Bug,
  Lock,
  Skull,
  Eye,
  Worm,
  Crosshair,
  Ghost,
  FileCode,
  Banknote,
  KeyRound,
  Smartphone,
  Wifi,
} from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { THREAT_TYPES } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const ICONS = [Bug, Lock, Skull, Eye, Worm, Crosshair, Ghost, FileCode, Banknote, KeyRound, Smartphone, Wifi];

export function ThreatMatrix() {
  return (
    <SectionShell id="threats">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Threat coverage matrix"
          title={
            <>
              Coverage you can{" "}
              <span className="text-gradient-cyan">name</span>.
            </>
          }
          blurb="Eleven canonical threat families, one adaptive engine. Detection rate validated against the open malware corpus and real-world telemetry."
        />
        <div className="flex gap-3">
          <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">Threat types</div>
            <div className="mt-1 font-mono text-[22px] font-semibold tracking-tight text-gradient-cyan leading-none">
              11+
            </div>
          </div>
          <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">Detection rate</div>
            <div className="mt-1 font-mono text-[22px] font-semibold tracking-tight text-gradient-cyan leading-none">
              99.9%
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {THREAT_TYPES.map((t, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={t.title}
              variants={fadeUpItem}
              className="group relative rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#111827]/40 p-5 transition-all hover:border-[rgba(124,196,255,0.3)] hover:bg-[#111827]/70"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-[rgba(124,196,255,0.18)] bg-[rgba(124,196,255,0.05)] text-[#7CC4FF]">
                  <Icon size={16} />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-[#34D399]">
                  <span className="pulse-dot relative inline-block h-1 w-1 rounded-full bg-[#34D399] text-[#34D399]" />
                  Protected
                </span>
              </div>
              <h3 className="mt-4 text-[14.5px] font-semibold tracking-tight text-[#E8EEF7]">
                {t.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#94A3B8]">{t.body}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 rounded-[12px] border-l-2 border-[#7CC4FF] bg-[rgba(124,196,255,0.04)] p-4">
        <div className="text-[13px] leading-[1.55] text-[#E8EEF7]">
          <span className="text-[#7CC4FF] font-mono text-[11px] uppercase tracking-[0.12em]">Source</span>
          <div className="mt-1.5">
            Mobile banking trojan detections were nearly{" "}
            <span className="font-semibold text-gradient-cyan">4× higher</span>{" "}
            in H1 2025 vs H1 2024 — Kaspersky.
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
