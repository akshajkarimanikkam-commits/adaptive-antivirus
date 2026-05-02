"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Laptop, Smartphone, Tablet, Gamepad2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { COVERAGE } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const ICONS = { Monitor, Laptop, Smartphone, Tablet, Gamepad2 } as const;

export function Coverage() {
  return (
    <SectionShell id="coverage">
      <SectionHeader
        eyebrow="Coverage"
        title={
          <>
            Every endpoint, <span className="text-gradient-cyan">first-class</span>.
          </>
        }
        blurb="Adaptive Antivirus is not a desktop product with a mobile companion app. It's one engine, every device class."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {COVERAGE.map((c) => {
          const Icon = ICONS[c.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={c.title}
              variants={fadeUpItem}
              className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-5 transition-all hover:border-[rgba(124,196,255,0.3)] hover:bg-[#111827]/70"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.06)] text-[#7CC4FF]">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-[#E8EEF7]">
                {c.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.platforms.map((p) => (
                  <Pill key={p} tone="muted" size="sm">
                    {p}
                  </Pill>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(124,196,255,0.2)] bg-[rgba(124,196,255,0.04)] px-5 py-2.5">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
            Protected Devices
          </span>
          <span className="font-mono text-[18px] font-semibold tracking-tight text-gradient-cyan">
            5+ Billion
          </span>
        </div>
      </div>
    </SectionShell>
  );
}
