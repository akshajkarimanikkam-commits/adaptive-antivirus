import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  fade?: "radial" | "top" | "none";
  fine?: boolean;
}

export function GridBackground({
  className,
  fade = "radial",
  fine = false,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        fine ? "bg-grid-fine" : "bg-grid",
        fade === "radial" && "mask-radial-fade",
        fade === "top" && "mask-radial-fade-bottom",
        className,
      )}
    />
  );
}
