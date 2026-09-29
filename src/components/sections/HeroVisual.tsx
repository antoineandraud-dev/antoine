"use client";

import Image from "next/image";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

/**
 * Hero visual: a warm halo behind a cut-out subject. The subject follows the pointer (subtle 3D turn),
 * and the neon visor outline is re-lit from a dedicated mask (breathing bloom + crisp core + light sweep).
 */
export function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);
  useMouseParallax(stageRef);

  return (
    <div ref={stageRef} className="hero-stage relative w-full h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden">
      <div className="hero-halo absolute inset-0" aria-hidden="true" />

      <div className="hero-subject absolute inset-0">
        <Image
          src="/images/hero-subject.webp"
          alt="Naga Studio Visual — Futuristic Neon Amber Visor"
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover object-center filter saturate-[1.1] contrast-[1.05]"
        />
        <div className="hero-glow-bloom absolute inset-0" aria-hidden="true">
          <div className="hero-glow-mask absolute inset-0" />
        </div>
        <div className="hero-glow-core absolute inset-0" aria-hidden="true">
          <div className="hero-glow-mask absolute inset-0" />
        </div>
        <div className="hero-glow-sweep absolute inset-0" aria-hidden="true">
          <div className="hero-glow-sweep-bar" />
        </div>
      </div>
    </div>
  );
}
