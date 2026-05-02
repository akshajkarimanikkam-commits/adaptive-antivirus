import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  hint?: string;
  align?: "left" | "center";
}

export function StatCard({
  value,
  label,
  hint,
  align = "left",
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#111827]/50 p-5",
        "transition-all duration-300 hover:border-[rgba(124,196,255,0.25)]",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    >
      <div className="font-mono text-[28px] font-semibold tracking-tight text-gradient-cyan leading-none">
        {value}
      </div>
      <div className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#64748B]">
        {label}
      </div>
      {hint && <div className="mt-1 text-[12px] text-[#94A3B8]">{hint}</div>}
    </div>
  );
}
