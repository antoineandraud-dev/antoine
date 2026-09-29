import type { ReactNode } from "react";

/** Serif italic highlighted word used inside headings. */
export function Accent({ children, color = "text-secondary", className = "" }: { children: ReactNode; color?: string; className?: string }) {
  return <span className={`font-serif-italic font-normal ${color} ${className}`}>{children}</span>;
}
