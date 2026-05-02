"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Pill } from "@/components/ui/Pill";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";

const OS_GROUPS = [
  {
    title: "Desktop & Laptop",
    items: [
      { name: "Windows 11", note: "x86 / ARM" },
      { name: "Windows 10", note: "21H2+" },
      { name: "macOS", note: "13 Ventura+" },
      { name: "Linux", note: "kernel 5.10+" },
      { name: "ChromeOS", note: "Flex supported" },
    ],
  },
  {
    title: "Mobile & Tablet",
    items: [
      { name: "iOS", note: "16+" },
      { name: "iPadOS", note: "16+" },
      { name: "Android", note: "11+" },
      { name: "Android Tablet", note: "11+" },
    ],
  },
  {
    title: "Console & Living Room",
    items: [
      { name: "PlayStation 5", note: "Network agent" },
      { name: "Xbox Series X/S", note: "Network agent" },
      { name: "Nintendo Switch", note: "Companion app" },
      { name: "Steam Deck", note: "Native agent" },
      { name: "Apple TV", note: "tvOS 17+" },
    ],
  },
];

export function OSWall() {
  return (
    <SectionShell id="os-wall">
      <SectionHeader
        eyebrow="Supported OSes"
        title={
          <>
            The full{" "}
            <span className="text-gradient-cyan">OS roster</span>, named.
          </>
        }
        blurb="Not a vague 'cross-platform' claim — every supported operating system, listed, with the version floor."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 lg:grid-cols-3"
      >
        {OS_GROUPS.map((g) => (
          <motion.div
            key={g.title}
            variants={fadeUpItem}
            className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-semibold tracking-tight text-[#E8EEF7]">
                {g.title}
              </h3>
              <Pill tone="primary" size="sm">{g.items.length}</Pill>
            </div>
            <ul className="mt-5 space-y-2.5">
              {g.items.map((it) => (
                <li
                  key={it.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[rgba(148,163,184,0.08)] bg-[#0A0E1A]/50 px-3.5 py-2.5"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                    <span className="text-[13.5px] font-medium text-[#E8EEF7]">{it.name}</span>
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#64748B]">
                    {it.note}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
