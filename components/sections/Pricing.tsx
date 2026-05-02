"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Building2, Handshake, Plus } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { PRICING_TIERS, PRICING_ADDON } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const TIER_ICONS = [Sparkles, Users, Building2, Handshake];

export function Pricing() {
  return (
    <SectionShell id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            One adaptive engine.{" "}
            <span className="text-gradient-cyan">Five</span> ways to deploy it.
          </>
        }
        blurb="Consumer, family, enterprise, embedded, and add-ons. Same adaptive core, different surface area."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {PRICING_TIERS.map((t, i) => {
          const Icon = TIER_ICONS[i];
          return (
            <motion.div key={t.name} variants={fadeUpItem} className="flex">
              <GlowCard highlighted={t.popular} className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.06)] text-[#7CC4FF]">
                    <Icon size={16} />
                  </div>
                  {t.popular && <Pill tone="primary">Popular</Pill>}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-[#E8EEF7]">
                  {t.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#94A3B8]">{t.blurb}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-mono text-[28px] font-semibold tracking-tight text-gradient-cyan">
                    {t.price}
                  </span>
                  {t.cadence && (
                    <span className="text-[13px] text-[#64748B]">{t.cadence}</span>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {t.pills.map((p) => (
                    <Pill key={p} tone="muted" size="sm">
                      {p}
                    </Pill>
                  ))}
                </div>

                <Button
                  variant={t.popular ? "primary" : "ghost"}
                  size="md"
                  className="mt-6 w-full"
                >
                  {t.cta}
                  <ArrowRight size={14} />
                </Button>
              </GlowCard>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-5 grid gap-5 md:grid-cols-[1fr_auto] items-center rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-7"
      >
        <div className="flex items-start gap-5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.06)] text-[#7CC4FF]">
            <Plus size={16} />
          </div>
          <div>
            <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#E8EEF7]">
              {PRICING_ADDON.name}
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#94A3B8]">
              {PRICING_ADDON.blurb}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {PRICING_ADDON.items.map((p) => (
                <Pill key={p} tone="muted" size="sm">
                  {p}
                </Pill>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="font-mono text-[20px] font-semibold tracking-tight text-gradient-cyan">
            {PRICING_ADDON.range}
          </span>
          <Button variant="ghost" size="sm">
            Browse Add-ons <ArrowRight size={13} />
          </Button>
        </div>
      </motion.div>
    </SectionShell>
  );
}
