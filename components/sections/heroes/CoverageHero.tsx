"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Gamepad2,
  Tablet,
  Laptop,
  Tv,
  Watch,
  HardDrive,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { ThreatMap } from "@/components/shared/ThreatMap";
import { fadeUpStagger, fadeUpItem } from "@/lib/motion";

const DEVICES = [
  { icon: Monitor, label: "Desktop" },
  { icon: Laptop, label: "Laptop" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Tablet, label: "Tablet" },
  { icon: Gamepad2, label: "Console" },
  { icon: Tv, label: "TV" },
  { icon: Watch, label: "Wearable" },
  { icon: HardDrive, label: "NAS" },
];

const COUNTERS = [
  { value: "5B+", label: "Devices protected" },
  { value: "150+", label: "Countries" },
  { value: "11", label: "Threat families" },
  { value: "99.9%", label: "Detection rate" },
];

export function CoverageHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridBackground fade="radial" fine />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[440px] w-[640px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.14),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUpItem}>
            <Pill tone="primary" size="md">
              <Globe size={11} />
              Global Coverage
            </Pill>
          </motion.div>
          <motion.h1
            variants={fadeUpItem}
            className="mt-5 text-[40px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.04] text-[#E8EEF7]"
          >
            Every endpoint, every OS,{" "}
            <span className="text-gradient-cyan">every threat</span>.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8]"
          >
            One adaptive engine, deployed everywhere people compute. Desktop, mobile, console, tablet, TV — protected by the same intelligence network, in real time.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#cta">
              <Button size="lg">
                Get Protected <ArrowRight size={15} />
              </Button>
            </Link>
            <Link href="/platform">
              <Button variant="ghost" size="lg">
                See the platform
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ThreatMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {COUNTERS.map((c) => (
              <div
                key={c.label}
                className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-4"
              >
                <div className="font-mono text-[26px] font-semibold tracking-tight text-gradient-cyan leading-none">
                  {c.value}
                </div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                  {c.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8"
        >
          {DEVICES.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="group flex flex-col items-center gap-2 rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#111827]/40 p-3 transition-all hover:border-[rgba(124,196,255,0.3)]"
              >
                <Icon size={18} className="text-[#94A3B8] transition-colors group-hover:text-[#7CC4FF]" />
                <span className="text-[10.5px] font-mono uppercase tracking-[0.1em] text-[#64748B]">
                  {d.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
