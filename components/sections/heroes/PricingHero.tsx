"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Sparkles, Users, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { fadeUpStagger, fadeUpItem } from "@/lib/motion";

const TIERS = [
  { icon: Sparkles, name: "Consumer", price: "$9.99", from: "/mo" },
  { icon: Users, name: "Family", price: "$19.99", from: "/mo", highlight: true },
  { icon: Building2, name: "Enterprise", price: "Custom", from: "" },
  { icon: Handshake, name: "OEM", price: "Rev share", from: "" },
];

export function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <GridBackground fade="radial" />
      <ParticleField count={20} />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.14),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUpItem} className="flex justify-center">
            <Pill tone="primary" size="md">
              <Tag size={11} />
              Pricing
            </Pill>
          </motion.div>
          <motion.h1
            variants={fadeUpItem}
            className="mt-5 text-[40px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.04] text-[#E8EEF7]"
          >
            From one device to{" "}
            <span className="text-gradient-cyan">one billion</span>.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8]"
          >
            One adaptive engine. Four ways to deploy it. Same protection, different surface area — from a single laptop to platform-embedded fleets of millions.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="#pricing">
              <Button size="lg">
                Compare Plans <ArrowRight size={15} />
              </Button>
            </Link>
            <Link href="/#cta">
              <Button variant="ghost" size="lg">
                Start Free Trial
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <div className="rounded-[16px] gradient-border bg-[#0A0E1A]/80 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {TIERS.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className={`group rounded-[12px] border p-4 transition-all ${
                      t.highlight
                        ? "border-[rgba(124,196,255,0.4)] bg-[rgba(124,196,255,0.06)]"
                        : "border-[rgba(148,163,184,0.12)] bg-[#111827]/60 hover:border-[rgba(124,196,255,0.3)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-lg border ${
                          t.highlight
                            ? "border-[rgba(124,196,255,0.3)] bg-[rgba(124,196,255,0.08)]"
                            : "border-[rgba(124,196,255,0.18)] bg-[rgba(124,196,255,0.04)]"
                        } text-[#7CC4FF]`}
                      >
                        <Icon size={14} />
                      </div>
                      {t.highlight && <Pill tone="primary" size="sm">Popular</Pill>}
                    </div>
                    <div className="mt-4 text-[13px] font-semibold text-[#E8EEF7]">
                      {t.name}
                    </div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-mono text-[18px] font-semibold tracking-tight text-gradient-cyan">
                        {t.price}
                      </span>
                      {t.from && (
                        <span className="text-[11px] text-[#64748B]">{t.from}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
