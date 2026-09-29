import type { ReactNode } from "react";

type EyebrowProps = { children: ReactNode; size?: "sm" | "md"; ping?: boolean; className?: string };

export function Eyebrow({ children, size = "sm", ping = false, className = "mb-3" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display ${
        size === "sm" ? "text-[12px]" : "text-xs"
      } text-primary uppercase tracking-widest ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full bg-primary ${ping ? "animate-ping" : ""}`} />
      {children}
    </span>
  );
}
