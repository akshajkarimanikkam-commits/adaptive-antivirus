import { cn } from "@/lib/utils";

interface SystemActiveBadgeProps {
  label?: string;
  tone?: "success" | "warning";
  className?: string;
}

export function SystemActiveBadge({
  label = "System Active",
  tone = "success",
  className,
}: SystemActiveBadgeProps) {
  const dot = tone === "success" ? "text-[#34D399]" : "text-[#FBBF24]";
  const text = tone === "success" ? "text-[#34D399]" : "text-[#FBBF24]";
  const bg =
    tone === "success"
      ? "bg-[rgba(52,211,153,0.06)] border-[rgba(52,211,153,0.2)]"
      : "bg-[rgba(251,191,36,0.06)] border-[rgba(251,191,36,0.2)]";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em]",
        bg,
        text,
        className,
      )}
    >
      <span className={cn("pulse-dot relative inline-block h-1.5 w-1.5 rounded-full bg-current", dot)} />
      {label}
    </span>
  );
}
