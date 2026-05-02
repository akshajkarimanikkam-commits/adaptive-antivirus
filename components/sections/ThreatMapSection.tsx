"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/shared/SectionShell";
import { ThreatMap } from "@/components/shared/ThreatMap";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { StatCard } from "@/components/ui/StatCard";

export function ThreatMapSection() {
  return (
    <SectionShell id="threat-map" className="!py-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 lg:grid-cols-[2fr_1fr]"
      >
        <ThreatMap />
        <div className="grid gap-3">
          <StatCard value="2.4M+" label="Endpoints in fleet" hint="across 150+ countries" />
          <StatCard value="11.7s" label="Median adapt cycle" hint="across all threat types" />
          <StatCard value="<1s" label="Fleet propagation" hint="counter-pattern distribution" />
        </div>
      </motion.div>
    </SectionShell>
  );
}
