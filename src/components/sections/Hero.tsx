"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "./HeroVisual";

const partners = ["SHOPIFY PLUS", "WORDPRESS HEADLESS", "TAILWIND CSS", "FIGMA BESPOKE", "CLOUDFLARE EDGE"];
const bars = [
  "bg-white/15 h-2",
  "bg-white/20 h-3.5",
  "bg-primary/40 h-4",
  "bg-primary/70 h-[22px]",
  "bg-primary h-7 shadow-[0_0_8px_#ff5722]",
];

export function Hero() {
  const [variantB, setVariantB] = useState(false);
  const [hidden, setHidden] = useState(false);

  const toggle = () => {
    setHidden(true);
    setTimeout(() => {
      setVariantB((v) => !v);
      setHidden(false);
    }, 150);
  };

  return (
    <section className="relative w-full pt-10 md:pt-16 pb-20 md:pb-28 overflow-hidden">
      <Container>
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high/70 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ff5722]" />
            <span className="font-display text-[11px] tracking-widest uppercase text-on-surface">Agence de Design Web &amp; CRO</span>
            <span className="text-white/20">•</span>
            <span className="font-display text-[11px] tracking-wider text-primary font-medium">Disponibilités T2 2025</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1
            className={`font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] transition-opacity duration-300 ${
              hidden ? "opacity-0" : ""
            }`}
          >
            {variantB ? (
              <>
                Des sites web qui ont du <span className="font-serif-italic font-normal text-primary-focus">style</span> et qui ramènent des{" "}
                <span className="font-serif-italic font-normal text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">clients</span>.
              </>
            ) : (
              <>
                Des sites conçus pour <span className="font-serif-italic font-normal text-primary-focus">marquer</span> les esprits, taillés pour{" "}
                <span className="font-serif-italic font-normal text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">convertir</span>.
              </>
            )}
          </h1>

          <div className="mt-5 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/80 border border-white/5 backdrop-blur-sm">
            <span className="text-[11px] font-display text-on-surface-variant uppercase tracking-wider">Variante :</span>
            <button
              type="button"
              onClick={toggle}
              className="group flex items-center gap-1.5 text-[11px] font-display text-primary hover:text-white transition-colors"
            >
              <span className="underline decoration-dotted underline-offset-4">
                {variantB ? "Afficher version originale" : "Afficher alternative conversion"}
              </span>
              <Icon name="swap_horiz" className="text-[14px] group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          <p className="mt-6 max-w-2xl font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            Nous sculptons des identités numériques à fort magnétisme visuel, combinées à l’ingénierie du CRO. Finis les sites vitrines oubliés : place aux outils d&apos;acquisition mesurables.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <Button
              href="#contact"
              icon="arrow_forward"
              disc="dark"
              iconSize="text-[15px]"
              className="w-full sm:w-auto justify-center gap-3 px-8 py-3.5 text-[13px] shadow-xl shadow-primary/30 hover:scale-[1.03]"
            >
              Discutons de votre projet
            </Button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-16 w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-surface-container-lowest">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <HeroVisual />

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 p-5 md:p-6 rounded-2xl bg-surface-container/85 border border-white/15 backdrop-blur-xl max-w-[210px] box-glow-amber">
            <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight block">150+</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-primary font-semibold block mt-1">Projets livrés</span>
            <p className="font-body text-[12px] text-on-surface-variant mt-2 leading-tight">Solutions sur mesure pour marques ambitieuses.</p>
          </div>

          <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-4 rounded-2xl bg-surface-container/85 border border-white/15 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary/30 border border-primary flex items-center justify-center text-[10px] font-bold text-primary">★</div>
                <div className="w-7 h-7 rounded-full bg-amber-500/30 border border-amber-500 flex items-center justify-center text-[10px] font-bold text-amber-300">★</div>
                <div className="w-7 h-7 rounded-full bg-red-500/30 border border-red-500 flex items-center justify-center text-[10px] font-bold text-red-200">★</div>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white leading-none block">98%</span>
                <span className="text-[11px] font-display text-on-surface-variant tracking-wider uppercase">Satisfaction client</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 p-5 md:p-6 rounded-2xl bg-surface-container/85 border border-white/15 backdrop-blur-xl max-w-[220px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-primary font-display text-2xl md:text-3xl font-bold">+140%</span>
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            </div>
            <span className="font-display text-[11px] uppercase tracking-wider text-white font-medium block">Conversion moyenne</span>
            <div className="flex items-end gap-1.5 h-7 mt-3">
              {bars.map((b) => (
                <div key={b} className={`w-2.5 rounded-t ${b}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center md:justify-between gap-8 text-on-surface-variant opacity-60">
          <span className="font-display text-[11px] tracking-widest uppercase">Écosystème &amp; Partenaires de pointe</span>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 font-display text-[14px] font-semibold tracking-wider">
            {partners.map((p) => (
              <span key={p} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/40" /> {p}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
