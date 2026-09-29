import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`w-full max-w-[1400px] mx-auto px-5 md:px-10 ${className}`}>{children}</div>;
}
