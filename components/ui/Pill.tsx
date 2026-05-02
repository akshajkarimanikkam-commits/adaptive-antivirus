import * as React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "primary" | "success" | "warning" | "danger" | "muted";
  size?: "sm" | "md";
}

export function Pill({
  className,
  tone = "default",
  size = "sm",
  children,
  ...props
}: PillProps) {
  const tones: Record<string, string> = {
    default:
      "bg-[rgba(148,163,184,0.08)] text-[#E8EEF7] border-[rgba(148,163,184,0.18)]",
    primary:
      "bg-[rgba(124,196,255,0.1)] text-[#7CC4FF] border-[rgba(124,196,255,0.25)]",
    success:
      "bg-[rgba(52,211,153,0.1)] text-[#34D399] border-[rgba(52,211,153,0.25)]",
    warning:
      "bg-[rgba(251,191,36,0.1)] text-[#FBBF24] border-[rgba(251,191,36,0.25)]",
    danger:
      "bg-[rgba(248,113,113,0.1)] text-[#F87171] border-[rgba(248,113,113,0.25)]",
    muted:
      "bg-[rgba(100,116,139,0.08)] text-[#94A3B8] border-[rgba(100,116,139,0.2)]",
  };
  const sizes: Record<string, string> = {
    sm: "h-6 px-2.5 text-[11px]",
    md: "h-7 px-3 text-[12px]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium tracking-tight",
        tones[tone],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
