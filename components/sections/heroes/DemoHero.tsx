"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, AlertTriangle } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { GridBackground } from "@/components/shared/GridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { fadeUpStagger, fadeUpItem } from "@/lib/motion";

export function DemoHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
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
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUpItem} className="flex justify-center">
            <Pill tone="primary" size="md">
              <Play size={11} />
              Interactive Demo
            </Pill>
          </motion.div>
          <motion.h1
            variants={fadeUpItem}
            className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.04] text-[#E8EEF7]"
          >
            Watch one threat become{" "}
            <span className="text-gradient-cyan">fleet-wide immunity</span>.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8]"
          >
            Trigger a simulated threat. Watch the engine detect, analyze, synthesize a counter-pattern, harden the endpoint, and propagate the defense to every peer in the fleet — in real time.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-7 flex justify-center">
            <div className="inline-flex items-start gap-3 rounded-full border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.05)] px-4 py-2 text-left max-w-xl">
              <AlertTriangle size={13} className="mt-0.5 shrink-0 text-[#FBBF24]" />
              <span className="text-[12px] leading-[1.5] text-[#E8EEF7]">
                <span className="font-semibold text-[#FBBF24]">Simulation only.</span>{" "}
                No real malware is executed, downloaded, or installed. Everything below is a UI animation of what the engine does in production.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
