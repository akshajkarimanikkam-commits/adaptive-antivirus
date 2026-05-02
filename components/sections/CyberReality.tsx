"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import { TrendingUp, FileText } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { StatCard } from "@/components/ui/StatCard";
import { GridBackground } from "@/components/shared/GridBackground";
import { CYBER_REALITY, ATTACK_GROWTH } from "@/lib/constants";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

export function CyberReality() {
  return (
    <SectionShell id="cyber-reality">
      <GridBackground fade="radial" fine />

      <div className="flex items-start justify-between flex-wrap gap-4">
        <SectionHeader
          eyebrow="The cyber reality"
          title={
            <>
              The threat surface{" "}
              <span className="text-gradient-cyan">expanded</span>. The defense{" "}
              didn't.
            </>
          }
          blurb="Mobile and console endpoints joined the fleet a decade ago. Most antivirus stacks still treat them like an afterthought."
        />
        <Pill tone="primary" size="md" className="mt-2">
          <FileText size={11} />
          Threat Intelligence Report
        </Pill>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {CYBER_REALITY.map((c) => (
            <motion.div key={c.title} variants={fadeUpItem}>
              <Card>
                <CardTitle>{c.title}</CardTitle>
                <CardBody className="mt-2">{c.body}</CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3"
        >
          <div className="relative h-full overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/60 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
                  Attack Growth Trend
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold tracking-tight text-[#E8EEF7]">
                    H1 2025
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12px] text-[#FBBF24] font-mono">
                    <TrendingUp size={12} /> +148%
                  </span>
                </div>
              </div>
              <Pill tone="warning">Live</Pill>
            </div>

            <div className="mt-6 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ATTACK_GROWTH} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="growth" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,163,184,0.08)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#64748B", fontSize: 11, fontFamily: "var(--font-mono)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64748B", fontSize: 11, fontFamily: "var(--font-mono)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(10,14,26,0.95)",
                      border: "1px solid rgba(124,196,255,0.25)",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "#94A3B8" }}
                    itemStyle={{ color: "#E8EEF7" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#7CC4FF"
                    strokeWidth={2}
                    fill="url(#growth)"
                    isAnimationActive
                    animationDuration={1400}
                  />
                  <ReferenceDot x="Jun" y={248} r={4} fill="#A8D8FF" stroke="#0A0E1A" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <StatCard value="+29%" label="H1 2025 vs H1 2024" hint="Total endpoint compromises" />
              <StatCard value="+48%" label="H1 2025 vs H2 2024" hint="Mobile-targeted incidents" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
