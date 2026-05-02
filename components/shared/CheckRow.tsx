import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckRowProps {
  ok?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function CheckRow({ ok = true, children, className }: CheckRowProps) {
  return (
    <li className={cn("flex items-start gap-3 text-[14px] leading-[1.55]", className)}>
      <span
        className={cn(
          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
          ok
            ? "bg-[rgba(52,211,153,0.12)] text-[#34D399] border border-[rgba(52,211,153,0.3)]"
            : "bg-[rgba(248,113,113,0.12)] text-[#F87171] border border-[rgba(248,113,113,0.3)]",
        )}
      >
        {ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
      </span>
      <span className={cn(ok ? "text-[#E8EEF7]" : "text-[#94A3B8]")}>{children}</span>
    </li>
  );
}
