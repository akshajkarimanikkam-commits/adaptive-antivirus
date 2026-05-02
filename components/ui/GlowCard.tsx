import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, highlighted, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-[12px] p-px transition-all duration-300",
        highlighted
          ? "bg-gradient-to-br from-[rgba(124,196,255,0.4)] via-[rgba(124,196,255,0.08)] to-[rgba(124,196,255,0.3)]"
          : "bg-gradient-to-br from-[rgba(148,163,184,0.18)] via-[rgba(148,163,184,0.04)] to-[rgba(124,196,255,0.18)]",
        "hover:from-[rgba(124,196,255,0.5)] hover:via-[rgba(124,196,255,0.1)] hover:to-[rgba(124,196,255,0.4)]",
        className,
      )}
      {...props}
    >
      <div className="relative h-full rounded-[11px] bg-[#0A0E1A]/95 p-6 sm:p-7">
        {children}
      </div>
    </div>
  ),
);
GlowCard.displayName = "GlowCard";
