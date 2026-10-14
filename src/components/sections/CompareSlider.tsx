"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BookingLink } from "@/components/ui/BookingLink";
import { agencyCard, meCard } from "@/data/comparison";

const clamp = (value: number) => Math.min(Math.max(value, 0), 100);

/**
 * `position` = part de la carte occupée par l'agence (colonne de gauche) : 0 → tout « Avec moi »,
 * 100 → toute l'agence. (Le code Stitch d'origine inversait les préréglages par rapport à leurs libellés.)
 */
function describe(position: number) {
  if (position >= 95) return "Vue 100% Agence classique";
  if (position <= 5) return "Vue 100% Travailler avec moi";
  return `Comparatif dynamique (${Math.round(position)}% Agence / ${Math.round(100 - position)}% Avec moi)`;
}

const presets = [
  { label: "100% Agence", value: 100, active: (p: number) => p >= 98 },
  { label: "50 / 50 (Split)", value: 50, active: (p: number) => Math.abs(p - 50) < 2 },
  { label: "✨ 100% Avec moi", value: 0, active: (p: number) => p <= 2 },
];

/**
 * Comparateur à séparateur glissant : « Agence classique » à gauche, « Travailler avec moi » à droite.
 * Le séparateur se déplace au glisser (souris, doigt), au clic sur la carte, aux flèches du clavier
 * ou via les boutons de préréglage.
 */
export function CompareSlider() {
  const [position, setPosition] = useState(50);
  const container = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const frame = useRef<number | null>(null);

  const stopAnimation = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);

  useEffect(() => stopAnimation, [stopAnimation]);

  // Sur petit écran, le 50/50 superpose deux colonnes trop étroites : on démarre sur « Avec moi ».
  useEffect(() => {
    if (window.matchMedia("(max-width: 639px)").matches) setPosition(0);
  }, []);

  const moveToClientX = (clientX: number) => {
    const rect = container.current?.getBoundingClientRect();
    if (!rect) return;
    stopAnimation();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const animateTo = (target: number) => {
    stopAnimation();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPosition(target);
      return;
    }
    const start = position;
    const startTime = performance.now();
    const duration = 280;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
      setPosition(start + (target - start) * eased);
      frame.current = progress < 1 ? requestAnimationFrame(step) : null;
    };
    frame.current = requestAnimationFrame(step);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement).closest("a, button")) return;
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveToClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveToClientX(event.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number | undefined> = {
      ArrowLeft: clamp(position - 5),
      ArrowDown: clamp(position - 5),
      ArrowRight: clamp(position + 5),
      ArrowUp: clamp(position + 5),
      Home: 0,
      End: 100,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    stopAnimation();
    setPosition(next);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <div
          className="bg-neutral-100 p-1.5 rounded-full inline-flex items-center gap-1 border border-neutral-200/80 shadow-inner"
          role="group"
          aria-label="Vue du comparatif"
        >
          {presets.map((preset) => {
            const active = preset.active(position);
            return (
              <button
                key={preset.label}
                type="button"
                aria-pressed={active}
                onClick={() => animateTo(preset.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active ? "bg-white text-black shadow-sm" : "hover:text-black text-neutral-600"
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-50 border border-neutral-200/70 rounded-full text-[11px] font-medium text-neutral-500">
          <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Glissez le séparateur ou cliquez sur la carte
        </div>
      </div>

      <div
        ref={container}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative grid w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(17,19,21,0.12)] border-2 border-neutral-900 select-none touch-pan-y cursor-ew-resize"
      >
        {/* Couche du dessous : agence classique */}
        <div className="col-start-1 row-start-1 bg-[#F4F4F5] text-neutral-800 flex flex-col justify-between p-7 sm:p-10">
          <div>
            <div className="flex items-center justify-between mb-2 gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 tracking-tight">{agencyCard.title}</h3>
              </div>
              <span className="hidden sm:inline text-xs font-semibold px-3 py-1 bg-neutral-200/80 text-neutral-600 rounded-md">
                {agencyCard.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 mb-8 max-w-xl">{agencyCard.intro}</p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <ul className="space-y-5 lg:col-span-7">
                {agencyCard.points.map((point) => (
                  <li key={point.strong} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mt-0.5 font-bold shadow-sm">
                      ✕
                    </span>
                    <div className="text-sm">
                      <strong className="font-bold text-neutral-800 block mb-0.5">{point.strong}</strong>
                      <span className="text-neutral-600 leading-snug">{point.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-300/80 bg-white/90 shadow-sm">
                  <Image
                    src="/images/compare-agency.jpg"
                    alt={agencyCard.imageAlt}
                    width={512}
                    height={382}
                    sizes="(min-width: 1024px) 400px, 90vw"
                    draggable={false}
                    className="w-full h-56 sm:h-64 object-cover object-top opacity-90"
                  />
                  <div className="absolute bottom-2.5 inset-x-2.5 bg-neutral-900/80 backdrop-blur-md rounded-xl py-1.5 px-3 flex items-center justify-between text-[11px] text-white">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse motion-reduce:animate-none" />
                      {agencyCard.imageCaption.left}
                    </span>
                    <span className="text-neutral-300 font-mono text-[10px]">{agencyCard.imageCaption.right}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-300/80">
            <div className="grid grid-cols-3 gap-3 text-center max-w-xl">
              {agencyCard.metrics.map((metric) => (
                <div key={metric.label} className="bg-white/80 rounded-2xl p-3 border border-neutral-200/80 shadow-sm">
                  <span className="block text-xs text-neutral-500 font-medium mb-0.5">{metric.label}</span>
                  <span className={`text-sm sm:text-lg font-bold ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Couche du dessus (rideau) : travailler avec moi, révélée à droite du séparateur */}
        <div
          className="col-start-1 row-start-1 bg-white text-brand-black flex flex-col justify-between p-7 sm:p-10 z-10"
          style={{ clipPath: `polygon(${position}% 0%, 100% 0%, 100% 100%, ${position}% 100%)` }}
        >
          <div>
            <div className="flex items-center justify-between mb-2 gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">{meCard.title}</h3>
              </div>
              <div className="hidden sm:block bg-brand-lime border border-neutral-950 px-3.5 py-1 rounded-full shadow-sm">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black">
                  {meCard.badge}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 mb-8 font-medium max-w-2xl leading-relaxed">{meCard.intro}</p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <ul className="space-y-5 lg:col-span-7">
                {meCard.points.map((point) => (
                  <li key={point.strong} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-brand-lime flex items-center justify-center text-xs mt-0.5 font-bold shadow-sm">
                      ✓
                    </span>
                    <div className="text-sm">
                      <strong className="font-bold text-neutral-950 block mb-0.5">{point.strong}</strong>
                      <span className="text-neutral-700 leading-snug">{point.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-neutral-900/10 bg-neutral-950 shadow-md">
                  <Image
                    src="/images/compare-apex.jpg"
                    alt={meCard.imageAlt}
                    width={512}
                    height={382}
                    sizes="(min-width: 1024px) 400px, 90vw"
                    draggable={false}
                    className="w-full h-56 sm:h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-2.5 inset-x-2.5 bg-neutral-950/85 backdrop-blur-md rounded-xl py-1.5 px-3 flex items-center justify-between text-[11px] text-white border border-white/10">
                    <span className="flex items-center gap-1.5 font-semibold text-brand-lime">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse motion-reduce:animate-none" />
                      {meCard.imageCaption.left}
                    </span>
                    <span className="text-neutral-300 font-mono text-[10px]">{meCard.imageCaption.right}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="grid grid-cols-3 gap-2.5 text-center flex-1 max-w-lg">
              {meCard.metrics.map((metric) => (
                <div key={metric.label} className="bg-neutral-50 border border-neutral-200/70 rounded-2xl p-2.5 shadow-sm">
                  <span className="block text-xs text-neutral-500 font-medium mb-0.5">{metric.label}</span>
                  <span className={`text-sm sm:text-lg font-bold ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
            <BookingLink className="sm:w-auto bg-neutral-950 hover:bg-neutral-800 text-brand-lime font-bold text-sm tracking-wide py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-[0_10px_35px_-5px_rgba(217,249,68,0.45)] cursor-pointer">
              <span>{meCard.cta}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BookingLink>
          </div>
        </div>

        {/* Séparateur et poignée */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
          style={{ left: `clamp(28px, ${position}%, calc(100% - 28px))`, transform: "translateX(-50%)" }}
        >
          <div className="w-[3px] h-full bg-neutral-950 shadow-[0_0_12px_rgba(0,0,0,0.35)]" />
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="hidden sm:block bg-neutral-950 text-brand-lime text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap border border-white/20 animate-bounce motion-reduce:animate-none">
              Glissez pour comparer
            </div>
            <div
              role="slider"
              tabIndex={0}
              aria-label="Comparateur : agence classique ou travailler avec moi"
              aria-orientation="horizontal"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              aria-valuetext={describe(position)}
              onKeyDown={onKeyDown}
              className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-lime shadow-[0_0_0_4px_rgba(255,255,255,0.95),0_10px_25px_-3px_rgba(0,0,0,0.35)] flex items-center justify-center text-neutral-950 outline-none focus-visible:ring-4 focus-visible:ring-neutral-950/40"
            >
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 7.5L4 12l4.5 4.5V13h7v3.5l4.5-4.5L15.5 7.5V11h-7V7.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-neutral-400 mt-4 max-w-5xl mx-auto px-2 gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" /> <span className="hidden sm:inline">Agence classique</span>
        </span>
        <span className="font-mono text-[11px] text-neutral-500 font-semibold text-center" aria-live="polite">
          {describe(position)}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="hidden sm:inline">Travailler avec moi</span> <span className="w-2 h-2 rounded-full bg-brand-lime" />
        </span>
      </div>
    </>
  );
}
