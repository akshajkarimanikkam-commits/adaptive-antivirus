"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Network, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { fadeUpStagger, fadeUpItem } from "@/lib/motion";

const LAYERS = [
  { icon: Shield, label: "Endpoint Agent", note: "Scan · Monitor · Quarantine" },
  { icon: Cpu, label: "Adaptive Engine", note: "Analyze · Synthesize · Defend" },
  { icon: Database, label: "Intelligence Hub", note: "Validate · Classify · Sign" },
  { icon: Network, label: "Fleet Distribution", note: "Propagate · Inherit · Verify" },
];

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridBackground fade="radial" />
      <ParticleField count={28} />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-[480px] w-[680px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.18),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={fadeUpStagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUpItem}>
              <Pill tone="primary" size="md">
                <Cpu size={11} />
                The Adaptive Engine
              </Pill>
            </motion.div>
            <motion.h1
              variants={fadeUpItem}
              className="mt-5 text-[40px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.04] text-[#E8EEF7]"
            >
              The platform that{" "}
              <span className="text-gradient-cyan">synthesizes defense</span>{" "}
              on first contact.
            </motion.h1>
            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-xl text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8]"
            >
              Four cooperating layers — endpoint agent, adaptive engine, intelligence hub, fleet distribution — packaged into one runtime that analyzes malware, generates a counter-pattern, and propagates the defense in under a second.
            </motion.p>
            <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/#cta">
                <Button size="lg">
                  See the Engine <ArrowRight size={15} />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="ghost" size="lg">
                  Read the cycle
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUpItem} className="mt-8 flex items-center gap-3">
              <SystemActiveBadge />
              <span className="font-mono text-[12px] text-[#94A3B8]">
                Engine v3.1 · 2.4M endpoints
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[16px] gradient-border bg-[#0A0E1A]/80 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
                  Engine Stack
                </span>
                <Pill tone="primary" size="sm">Live</Pill>
              </div>
              <div className="space-y-2.5">
                {LAYERS.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-4 transition-all hover:border-[rgba(124,196,255,0.3)]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.06)] text-[#7CC4FF]">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-semibold tracking-tight text-[#E8EEF7]">
                            {l.label}
                          </div>
                          <div className="font-mono text-[11px] text-[#64748B] mt-0.5 truncate">
                            {l.note}
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-[#7CC4FF] tabular-nums">
                          0{i + 1}
                        </span>
                      </div>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[rgba(124,196,255,0.4)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 pt-5 border-t border-[rgba(148,163,184,0.08)]">
                {[
                  { label: "Latency", value: "<10ms" },
                  { label: "Cycle", value: "<1s" },
                  { label: "Coverage", value: "99.9%" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                      {m.label}
                    </div>
                    <div className="font-mono text-[15px] font-semibold text-gradient-cyan mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
