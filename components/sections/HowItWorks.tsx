"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Cpu, Lock, Network, Activity, Zap } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Pill } from "@/components/ui/Pill";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { HOW_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function StepVisualOne() {
  return (
    <div className="flex flex-col gap-4">
      <CodeBlock
        filename="threat-analyzer.ts"
        language="ts"
        lines={[
          { text: "// Analyzing suspicious behavior", tone: "comment" },
          { text: "if (process.anomaly > threshold) {", tone: "keyword" },
          "  isolate(malicious_code);",
          "  analyze(behavior_pattern);",
          { text: "}", tone: "keyword" },
          "",
          { text: "// Threat fingerprint identified", tone: "comment" },
          { text: 'fingerprint: "0xA8C4F2…"', tone: "string" },
        ]}
      />
      <div className="grid grid-cols-3 gap-3">
        <Stat label="Precision" value="99.9%" />
        <Stat label="Latency" value="<10ms" />
        <Stat label="Status" value="LIVE" tone="success" />
      </div>
    </div>
  );
}

function StepVisualTwo() {
  return (
    <div className="flex flex-col gap-4">
      <CodeBlock
        filename="defense-logic.rs"
        language="rs"
        lines={[
          { text: "if malware.detected {", tone: "keyword" },
          "  analyze(code_pattern);",
          "  generate(counter_pattern);",
          "  apply(defense_logic);",
          { text: "}", tone: "keyword" },
          "",
          { text: "// counter-pattern compiled", tone: "comment" },
          { text: 'state: "IMMUNIZED"', tone: "success" },
        ]}
      />
      <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] text-[#94A3B8]">Protection Level</span>
          <span className="font-mono text-[20px] font-semibold text-gradient-cyan">100%</span>
        </div>
        <ProgressBar value={100} tone="primary" className="mt-3" />
      </div>
    </div>
  );
}

function StepVisualThree() {
  const cards = [
    { title: "Device Resistance", icon: ShieldCheck },
    { title: "Malware Neutralization", icon: Zap },
    { title: "Exploit Protection", icon: Lock },
    { title: "Standard Protection", icon: Cpu },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-4"
            >
              <Icon size={16} className="text-[#7CC4FF]" />
              <div className="mt-3 text-[13px] font-semibold text-[#E8EEF7]">{c.title}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#34D399]">
                Active
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Stat label="Protection Level" value="95%" />
        <Stat label="Response Time" value="<1s" tone="success" />
      </div>
    </div>
  );
}

function StepVisualFour() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[280px] rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-5 overflow-hidden">
        <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
          Intelligence Distribution
        </div>
        <svg
          viewBox="0 0 400 220"
          className="mt-4 h-[210px] w-full"
          fill="none"
        >
          <defs>
            <linearGradient id="edge" x1="0" x2="1">
              <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.1} />
              <stop offset="50%" stopColor="#7CC4FF" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0.1} />
            </linearGradient>
            <radialGradient id="hub-glow">
              <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
            </radialGradient>
          </defs>

          {/* HQ */}
          <circle cx="200" cy="110" r="42" fill="url(#hub-glow)" />
          <circle cx="200" cy="110" r="18" fill="#0A0E1A" stroke="#7CC4FF" strokeWidth="1.5" />
          <text x="200" y="114" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#7CC4FF">
            HQ
          </text>

          {/* nodes */}
          {[
            { x: 60, y: 50, label: "PC" },
            { x: 340, y: 50, label: "MOB" },
            { x: 60, y: 170, label: "TAB" },
            { x: 340, y: 170, label: "CON" },
          ].map((n, i) => (
            <g key={n.label}>
              <line
                x1="200"
                y1="110"
                x2={n.x}
                y2={n.y}
                stroke="url(#edge)"
                strokeWidth="1"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="80"
                  to="0"
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </line>
              <circle cx={n.x} cy={n.y} r="14" fill="#0A0E1A" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
              <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#94A3B8">
                {n.label}
              </text>
              {/* particle */}
              <circle r="2" fill="#A8D8FF">
                <animateMotion
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M 200 110 L ${n.x} ${n.y}`}
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>
      <div className="rounded-[12px] border-l-2 border-[#7CC4FF] bg-[rgba(124,196,255,0.04)] p-4">
        <div className="text-[13.5px] leading-[1.5] text-[#E8EEF7]">
          Every defended device makes the whole ecosystem smarter.
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "success";
}) {
  return (
    <div className="rounded-[10px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/50 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">{label}</div>
      <div
        className={cn(
          "mt-1 font-mono text-[16px] font-semibold tracking-tight",
          tone === "success" ? "text-[#34D399]" : "text-[#E8EEF7]",
        )}
      >
        {value}
      </div>
    </div>
  );
}

const VISUALS = [StepVisualOne, StepVisualTwo, StepVisualThree, StepVisualFour] as const;

export function HowItWorks() {
  const [active, setActive] = React.useState(0);

  return (
    <SectionShell id="how-it-works">
      <SectionHeader
        eyebrow="How it works"
        title={
          <>
            From first contact to{" "}
            <span className="text-gradient-cyan">fleet-wide immunity</span>{" "}
            in four steps.
          </>
        }
        blurb="Behavioral analysis, on-device adaptation, hardening, and intelligence distribution — all in under one second."
      />

      <div className="mt-12 flex items-center gap-3 overflow-x-auto pb-2">
        {HOW_STEPS.map((s, i) => (
          <button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "group flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 text-[12px] font-mono uppercase tracking-[0.14em] transition-all",
              i === active
                ? "border-[rgba(124,196,255,0.4)] bg-[rgba(124,196,255,0.08)] text-[#7CC4FF]"
                : "border-[rgba(148,163,184,0.14)] bg-[rgba(17,24,39,0.4)] text-[#94A3B8] hover:border-[rgba(124,196,255,0.25)] hover:text-[#E8EEF7]",
            )}
          >
            <span className="font-semibold">{s.n}</span>
            <span className="hidden sm:inline">{s.title.split(" ").slice(0, 3).join(" ")}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <NumberBadge n={HOW_STEPS[active].n} />
            <Pill tone="primary">Step {active + 1} of 4</Pill>
          </div>
          <h3 className="mt-5 text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] leading-[1.15] text-[#E8EEF7]">
            {HOW_STEPS[active].title}
          </h3>
          <ul className="mt-6 space-y-3">
            {HOW_STEPS[active].points.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-[rgba(148,163,184,0.08)] bg-[#111827]/30 p-3"
              >
                <span className="font-mono text-[11px] tabular-nums text-[#7CC4FF] mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[1.55] text-[#E8EEF7]">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <SystemActiveBadge label={active === 0 ? "Live Monitoring" : "System Active"} />
            <div className="flex items-center gap-2 text-[12px] font-mono text-[#94A3B8]">
              <Activity size={12} className="text-[#7CC4FF]" />
              telemetry stream
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {React.createElement(VISUALS[active])}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
