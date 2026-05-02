import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-[12px] bg-[#111827]/60 border border-[rgba(148,163,184,0.1)]",
        "p-6 transition-all duration-300",
        "hover:border-[rgba(124,196,255,0.25)] hover:bg-[#111827]/80",
        "hover:shadow-[0_8px_32px_-8px_rgba(124,196,255,0.18)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn("text-[15px] font-semibold tracking-tight text-[#E8EEF7]", className)}
    {...props}
  />
);

export const CardBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("text-[14px] leading-[1.65] text-[#94A3B8]", className)}
    {...props}
  />
);
