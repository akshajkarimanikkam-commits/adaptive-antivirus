import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  bleed?: boolean;
}

export function SectionShell({
  id,
  className,
  bleed = false,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bleed ? "py-20 md:py-28 lg:py-32" : "py-20 md:py-24 lg:py-28",
        className,
      )}
      {...props}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
