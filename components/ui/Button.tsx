import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CC4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7CC4FF] text-[#0A0E1A] hover:bg-[#A8D8FF] hover:shadow-[0_0_24px_-4px_rgba(124,196,255,0.5)] active:scale-[0.98]",
        ghost:
          "border border-[rgba(148,163,184,0.18)] text-[#E8EEF7] hover:border-[rgba(124,196,255,0.4)] hover:bg-[rgba(124,196,255,0.05)]",
        outline:
          "border border-[rgba(148,163,184,0.2)] text-[#E8EEF7] hover:bg-[rgba(255,255,255,0.04)]",
        link: "text-[#7CC4FF] hover:text-[#A8D8FF] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
