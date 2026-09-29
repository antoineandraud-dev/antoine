"use client";

import { useEffect, type RefObject } from "react";

type Options = {
  /** Max head rotation around Y / X, in degrees. */
  maxRotateY?: number;
  maxRotateX?: number;
  /** Max horizontal / vertical drift of the subject, in px. */
  maxShiftX?: number;
  maxShiftY?: number;
  /** Interpolation factor per frame (0..1) – lower is smoother. */
  ease?: number;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/**
 * Smoothly maps the pointer position to CSS custom properties on `ref`:
 * --ry / --rx (deg), --tx / --ty (px), --hx / --hy (px, halo counter-drift) and --boost (0..1).
 * A single rAF loop runs only while the element is visible and the values are still moving.
 * Disabled for touch pointers and when the user prefers reduced motion.
 */
export function useMouseParallax(
  ref: RefObject<HTMLElement | null>,
  { maxRotateY = 5, maxRotateX = 3, maxShiftX = 14, maxShiftY = 8, ease = 0.08 }: Options = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;
    let visible = true;

    const apply = () => {
      const { x, y } = current;
      // Head turns toward the pointer; vertical drift is one-way so the cropped neck never detaches.
      el.style.setProperty("--ry", `${(-x * maxRotateY).toFixed(3)}deg`);
      el.style.setProperty("--rx", `${(-y * maxRotateX).toFixed(3)}deg`);
      el.style.setProperty("--tx", `${(x * maxShiftX).toFixed(2)}px`);
      el.style.setProperty("--ty", `${(Math.max(0, y) * maxShiftY).toFixed(2)}px`);
      el.style.setProperty("--hx", `${(-x * maxShiftX * 0.8).toFixed(2)}px`);
      el.style.setProperty("--hy", `${(-y * maxShiftY).toFixed(2)}px`);
      el.style.setProperty("--boost", clamp(0.5 + x * 0.5, 0, 1).toFixed(3));
    };

    const tick = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      apply();
      const settled = Math.abs(target.x - current.x) < 0.0005 && Math.abs(target.y - current.y) < 0.0005;
      raf = settled || !visible ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      target.x = clamp((e.clientX / window.innerWidth) * 2 - 1, -1, 1);
      target.y = clamp((e.clientY / window.innerHeight) * 2 - 1, -1, 1);
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(el);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    apply();

    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, maxRotateY, maxRotateX, maxShiftX, maxShiftY, ease]);
}
