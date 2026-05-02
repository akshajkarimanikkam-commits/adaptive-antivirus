"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Gamepad2, Network, Play, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { fadeUp, fadeUpStagger, fadeUpItem, easeOutSoft } from "@/lib/motion";

const PLATFORM_ICONS = {
  Monitor,
  Smartphone,
  Gamepad2,
  Network,
} as const;

const PLATFORMS = [
  { label: "Desktop", icon: "Monitor" },
  { label: "Mobile", icon: "Smartphone" },
  { label: "Console", icon: "Gamepad2" },
  { label: "Cross-Platform", icon: "Network" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <GridBackground fade="radial" />
      <ParticleField count={42} />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.16),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeUpItem} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(17,24,39,0.5)] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#94A3B8] backdrop-blur">
              <Shield size={12} className="text-[#7CC4FF]" />
              Detect <span className="text-[#64748B]">·</span> Adapt <span className="text-[#64748B]">·</span> Immunize
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="mx-auto max-w-5xl text-[44px] sm:text-[64px] md:text-[80px] lg:text-[104px] font-bold tracking-[-0.04em] leading-[1.02] text-[#E8EEF7]"
          >
            <span className="text-gradient-cyan">Adaptive</span> Antivirus
          </motion.h1>

          <motion.div
            variants={fadeUpItem}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-[rgba(148,163,184,0.4)]" />
            <p className="text-[18px] sm:text-[22px] md:text-[26px] font-medium tracking-[-0.02em] text-[#E8EEF7]">
              Security that learns at the speed of attack
            </p>
            <span className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[rgba(148,163,184,0.4)]" />
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mx-auto mt-7 max-w-2xl text-[15px] sm:text-[16px] leading-[1.7] text-[#94A3B8]"
          >
            Detect, adapt, and immunize across desktop, mobile, and console. When malware hits one device,
            the system synthesizes a counter-pattern in milliseconds and shares the defense fleet-wide.
            One encounter becomes network-wide resilience.
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {PLATFORMS.map((p) => {
              const Icon = PLATFORM_ICONS[p.icon as keyof typeof PLATFORM_ICONS];
              return (
                <Pill
                  key={p.label}
                  tone="default"
                  size="md"
                  className="border-[rgba(148,163,184,0.16)] bg-[rgba(17,24,39,0.55)] backdrop-blur"
                >
                  <Icon size={13} className="text-[#7CC4FF]" />
                  {p.label}
                </Pill>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="#cta">
              <Button size="lg">
                Get Protected <ArrowRight size={16} />
              </Button>
            </Link>
            <Button variant="ghost" size="lg">
              <Play size={14} />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.7, ease: easeOutSoft }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="relative rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(10,14,26,0.7)] backdrop-blur-xl p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 sm:gap-4">
              <div className="flex items-center gap-3">
                <SystemActiveBadge />
                <span className="text-[12px] text-[#94A3B8] font-mono">
                  Fleet sync · 2.4M endpoints
                </span>
              </div>
              <div className="hidden sm:block w-px bg-[rgba(148,163,184,0.12)]" />
              <div className="flex items-center gap-2 text-center">
                <span className="text-[12px] uppercase tracking-[0.16em] text-[#64748B]">Promise</span>
                <span className="text-[13px] font-semibold tracking-tight text-[#E8EEF7]">
                  Detect. Adapt. Immunize.
                </span>
              </div>
              <div className="hidden sm:block w-px bg-[rgba(148,163,184,0.12)]" />
              <div className="text-[12px] text-[#94A3B8]">
                Share protection instantly <span className="text-[#7CC4FF]">→</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
