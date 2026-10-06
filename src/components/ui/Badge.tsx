import type { Tone } from "@/data/content";

/** Small bordered badge used inside cards (pillar metrics, case regions, offer notes). */
const toneClasses: Record<Tone, string> = {
  teal: "text-teal-700 bg-teal-50 border-teal-200",
  lime: "text-lime-900 bg-lime-100/70 border-lime-300",
  amber: "text-amber-900 bg-amber-50 border-amber-200",
};

export function MetricBadge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`font-bold px-2 py-0.5 rounded-full border ${toneClasses[tone]}`}>{children}</span>
  );
}

export function RegionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
      {children}
    </span>
  );
}

const pillTone: Record<Tone, string> = {
  teal: "border-teal-500/70 text-teal-800 bg-teal-50/50",
  lime: "border-lime-500/80 text-lime-900 bg-lime-50/60",
  amber: "border-amber-400/80 text-amber-900 bg-amber-50/50",
};

export function HeroPill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`px-4 py-1.5 rounded-full border text-xs font-semibold ${pillTone[tone]}`}>{children}</span>
  );
}

export function SectionTag({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
}
