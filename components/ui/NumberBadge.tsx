import * as React from "react";
import { cn } from "@/lib/utils";

interface NumberBadgeProps {
  n: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NumberBadge({ n, size = "md", className }: NumberBadgeProps) {
  const sizes: Record<string, string> = {
    sm: "h-9 w-9 text-[12px]",
    md: "h-11 w-11 text-[13px]",
    lg: "h-14 w-14 text-[15px]",
  };
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full font-mono font-semibold tabular-nums",
        "bg-gradient-to-br from-[rgba(124,196,255,0.18)] to-[rgba(124,196,255,0.04)]",
        "border border-[rgba(124,196,255,0.3)] text-[#7CC4FF]",
        sizes[size],
        className,
      )}
    >
      {n}
    </div>
  );
}
