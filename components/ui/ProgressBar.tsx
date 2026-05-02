"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  label?: string;
  hint?: string;
  tone?: "primary" | "warning" | "danger" | "success";
  className?: string;
}

const toneGradient: Record<string, string> = {
  primary: "from-[#4D9CD6] via-[#7CC4FF] to-[#A8D8FF]",
  warning: "from-[#B45309] via-[#F59E0B] to-[#FBBF24]",
  danger: "from-[#7F1D1D] via-[#DC2626] to-[#F87171]",
  success: "from-[#065F46] via-[#10B981] to-[#34D399]",
};

export function ProgressBar({
  value,
  label,
  hint,
  tone = "primary",
  className,
}: ProgressBarProps) {
  const reduced = useReducedMotion();
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("w-full", className)}>
      {(label || hint) && (
        <div className="mb-2 flex items-baseline justify-between text-[12px]">
          {label && <span className="text-[#94A3B8]">{label}</span>}
          {hint && <span className="font-mono text-[#E8EEF7]">{hint}</span>}
        </div>
      )}
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[rgba(148,163,184,0.08)]">
        <motion.div
          initial={reduced ? { width: `${v}%` } : { width: 0 }}
          whileInView={{ width: `${v}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            toneGradient[tone],
          )}
        />
      </div>
    </div>
  );
}
