"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { fadeUpStagger, fadeUpItem } from "@/lib/motion";

const QUARTERS = ["Detect", "Adapt", "Harden", "Share"];

function CycleVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[460px] mx-auto">
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="cycle-glow">
            <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="cycle-stroke" x1="0" x2="1">
            <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.1} />
            <stop offset="50%" stopColor="#7CC4FF" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="60" fill="url(#cycle-glow)" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="0.4" strokeDasharray="2 3" />

        {/* main rotating ring */}
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="url(#cycle-stroke)"
          strokeWidth="1.2"
          strokeDasharray="80 280"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* quarter dots */}
        {QUARTERS.map((q, i) => {
          const angle = (i * Math.PI) / 2 - Math.PI / 2;
          const x = 100 + Math.cos(angle) * 58;
          const y = 100 + Math.sin(angle) * 58;
          return (
            <g key={q}>
              <circle cx={x} cy={y} r="3.6" fill="#0A0E1A" stroke="#7CC4FF" strokeWidth="1.2" />
              <text
                x={x + (i === 1 ? 12 : i === 3 ? -12 : 0)}
                y={y + (i === 0 ? -10 : i === 2 ? 16 : 4)}
                textAnchor={i === 1 ? "start" : i === 3 ? "end" : "middle"}
                fontSize="8"
                fontFamily="var(--font-mono)"
                fill="#94A3B8"
                letterSpacing="0.14em"
              >
                {q.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* center node */}
        <circle cx="100" cy="100" r="14" fill="#0A0E1A" stroke="rgba(124,196,255,0.4)" strokeWidth="1" />
        <text x="100" y="102" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="#7CC4FF" letterSpacing="0.16em">
          ADAPT
        </text>
        <text x="100" y="111" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono)" fill="#64748B">
          {"<1s"}
        </text>

        {/* orbiting particle */}
        <circle r="2" fill="#A8D8FF">
          <animateMotion dur="6s" repeatCount="indefinite" path="M 100 42 A 58 58 0 1 1 99.99 42 Z" />
        </circle>
      </svg>
    </div>
  );
}

export function HowHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridBackground fade="radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 h-[440px] w-[720px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.14),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div variants={fadeUpStagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUpItem}>
              <Pill tone="primary" size="md">
                <Activity size={11} />
                The Adaptive Cycle
              </Pill>
            </motion.div>
            <motion.h1
              variants={fadeUpItem}
              className="mt-5 text-[40px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.04] text-[#E8EEF7]"
            >
              From signal to{" "}
              <span className="text-gradient-cyan">immunity</span> in under a second.
            </motion.h1>
            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-xl text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8]"
            >
              Detect, adapt, harden, share — the four phases of every adaptive defense cycle. Each pass turns a single encounter into permanent network-wide resilience.
            </motion.p>

            <motion.div variants={fadeUpItem} className="mt-7 grid grid-cols-2 gap-2 max-w-md">
              {QUARTERS.map((q, i) => (
                <div
                  key={q}
                  className="flex items-center gap-2 rounded-lg border border-[rgba(148,163,184,0.1)] bg-[#111827]/40 px-3 py-2"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[#7CC4FF]">
                    0{i + 1}
                  </span>
                  <span className="text-[13px] font-medium text-[#E8EEF7]">{q}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/#cta">
                <Button size="lg">
                  Start Free Trial <ArrowRight size={15} />
                </Button>
              </Link>
              <Link href="/platform">
                <Button variant="ghost" size="lg">
                  See the platform
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUpItem} className="mt-7">
              <SystemActiveBadge label="Cycle Running" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <CycleVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
