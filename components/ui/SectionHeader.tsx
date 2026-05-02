"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  blurb,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7CC4FF]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7CC4FF]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.03em] leading-[1.05] text-[#E8EEF7]">
        {title}
      </h2>
      {blurb && (
        <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.65] text-[#94A3B8] max-w-2xl">
          {blurb}
        </p>
      )}
    </motion.div>
  );
}
