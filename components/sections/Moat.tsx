"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { MOAT } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

function NetworkVisual() {
  const nodes = [
    { x: 50, y: 50, size: 22, label: "HQ", primary: true },
    { x: 18, y: 22, size: 12 },
    { x: 82, y: 22, size: 14 },
    { x: 12, y: 60, size: 10 },
    { x: 88, y: 65, size: 12 },
    { x: 30, y: 86, size: 11 },
    { x: 70, y: 88, size: 13 },
    { x: 50, y: 12, size: 11 },
    { x: 35, y: 38, size: 9 },
    { x: 65, y: 42, size: 10 },
    { x: 25, y: 70, size: 10 },
    { x: 75, y: 72, size: 11 },
  ];

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#0A0E1A]/80 p-4">
      <div aria-hidden className="absolute inset-0 bg-grid-fine mask-radial-fade" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full" fill="none">
        <defs>
          <radialGradient id="moat-glow">
            <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
          </radialGradient>
        </defs>
        {/* connections */}
        {nodes.slice(1).map((n, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="rgba(124,196,255,0.18)"
            strokeWidth="0.3"
            strokeDasharray="0.8 0.8"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="0"
              dur={`${3 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
        {/* HQ glow */}
        <circle cx="50" cy="50" r="14" fill="url(#moat-glow)" />
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.size / 6}
              fill="#0A0E1A"
              stroke={n.primary ? "#7CC4FF" : "rgba(148,163,184,0.4)"}
              strokeWidth="0.3"
            />
            {n.primary && (
              <circle cx={n.x} cy={n.y} r={n.size / 6 + 0.5} fill="none" stroke="#7CC4FF" strokeWidth="0.2">
                <animate attributeName="r" from={n.size / 6 + 0.5} to={n.size / 6 + 3} dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2.5s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}
        {/* particles */}
        {nodes.slice(1, 7).map((n, i) => (
          <circle key={`p-${i}`} r="0.4" fill="#A8D8FF">
            <animateMotion
              dur={`${2.5 + (i % 3)}s`}
              repeatCount="indefinite"
              path={`M 50 50 L ${n.x} ${n.y}`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}

export function Moat() {
  return (
    <SectionShell id="moat">
      <SectionHeader
        eyebrow="The moat"
        title={
          <>
            The system gets{" "}
            <span className="text-gradient-cyan">stronger</span> with every encounter.
          </>
        }
        blurb="Adaptive defense compounds. Cross-platform breadth compounds. The intelligence network compounds. Replicating it would mean rebuilding all three at once."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
        >
          {MOAT.map((c) => (
            <motion.div key={c.title} variants={fadeUpItem}>
              <Card>
                <CardTitle>{c.title}</CardTitle>
                <CardBody className="mt-2">{c.body}</CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <NetworkVisual />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-4 text-center">
              <div className="font-mono text-[24px] font-semibold tracking-tight text-gradient-cyan leading-none">
                99.9%
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                Detection rate
              </div>
            </div>
            <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-4 text-center">
              <div className="font-mono text-[24px] font-semibold tracking-tight text-gradient-cyan leading-none">
                5B+
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                Network nodes
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7 }}
        className="relative mt-12 mx-auto max-w-3xl rounded-[12px] border border-[rgba(124,196,255,0.18)] bg-[rgba(124,196,255,0.04)] p-7 sm:p-9 text-center"
      >
        <Quote size={20} className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#7CC4FF] bg-[#0A0E1A] px-1" />
        <p className="text-[18px] sm:text-[20px] tracking-[-0.01em] leading-[1.5] text-[#E8EEF7]">
          The more the network protects, the{" "}
          <span className="text-gradient-cyan">more valuable</span> the network becomes.
        </p>
      </motion.blockquote>
    </SectionShell>
  );
}
