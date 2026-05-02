"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Cpu, Lock, Zap, GitBranch, Bell, Workflow } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const SPEC_ROWS = [
  {
    label: "Runtime",
    value: "Native binary",
    note: "Per-OS, no JIT, kernel-aware",
  },
  {
    label: "Memory ceiling",
    value: "< 96 MB",
    note: "Includes engine + recent adaptation cache",
  },
  {
    label: "Idle CPU",
    value: "0.4–0.7%",
    note: "Sustained on a 4-core consumer device",
  },
  {
    label: "Detection model",
    value: "Behavioral + adaptive synthesis",
    note: "Not signature-only, not ML-only",
  },
  {
    label: "Cold-start scan",
    value: "< 90 seconds",
    note: "Full disk on a 1 TB SSD",
  },
  {
    label: "Adaptation cycle",
    value: "< 1 second",
    note: "Detect → adapt → harden → share",
  },
  {
    label: "Distribution",
    value: "Signed, peer-validated",
    note: "Counter-patterns can be re-derived; no opaque updates",
  },
  {
    label: "Telemetry",
    value: "Threat-only",
    note: "User content never leaves the device",
  },
];

const FEATURES = [
  { icon: Cpu, title: "On-device synthesis", body: "Counter-patterns are compiled locally — no cloud dependency, no signature lag." },
  { icon: Workflow, title: "Layered runtime", body: "Endpoint agent, adaptive engine, intelligence hub, and fleet distribution cooperate as one stack." },
  { icon: Zap, title: "Sub-second cycle", body: "End-to-end from first contact to fleet propagation in under one second." },
  { icon: Lock, title: "Signed adaptations", body: "Every counter-pattern is cryptographically signed and re-derivable from the captured behavior." },
  { icon: GitBranch, title: "Reversible", body: "Every neutralized payload can be rolled back; every defense decision is auditable." },
  { icon: Bell, title: "Quiet by default", body: "No scareware, no upsell prompts. The engine surfaces only what matters." },
];

export function EngineSpec() {
  return (
    <SectionShell id="engine">
      <SectionHeader
        eyebrow="Engine specification"
        title={
          <>
            The technical{" "}
            <span className="text-gradient-cyan">spec sheet</span>.
          </>
        }
        blurb="What the platform actually is, line by line. Numbers are real budgets, not marketing rounding."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#0A0E1A]/60"
        >
          <div className="border-b border-[rgba(148,163,184,0.08)] bg-[rgba(17,24,39,0.5)] px-5 py-3 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
              engine.spec
            </span>
            <span className="text-[11px] font-mono text-[#64748B]">v3.1.0</span>
          </div>
          <div className="divide-y divide-[rgba(148,163,184,0.06)]">
            {SPEC_ROWS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="grid items-baseline gap-2 px-5 py-4 sm:grid-cols-[1fr_1.4fr_2fr]"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                  {r.label}
                </div>
                <div className="font-mono text-[14px] font-semibold text-gradient-cyan">
                  {r.value}
                </div>
                <div className="text-[13px] text-[#94A3B8]">{r.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUpItem}
                className="rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#111827]/40 p-5 transition-all hover:border-[rgba(124,196,255,0.25)]"
              >
                <Icon size={16} className="text-[#7CC4FF]" />
                <div className="mt-3 text-[14px] font-semibold tracking-tight text-[#E8EEF7]">
                  {f.title}
                </div>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#94A3B8]">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionShell>
  );
}
