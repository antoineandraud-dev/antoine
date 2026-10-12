"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

/**
 * Calendly affiché directement dans la page (widget "inline" officiel).
 * Le script est chargé une seule fois, puis le calendrier est monté dans le conteneur.
 */
export function CalendlyEmbed({ url, className = "" }: { url: string; className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    if (!document.querySelector(`link[href="${STYLE_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLE_HREF;
      document.head.appendChild(link);
    }

    const mount = () => {
      if (window.Calendly && !element.childElementCount) {
        window.Calendly.initInlineWidget({ url, parentElement: element });
      }
    };

    if (window.Calendly) {
      mount();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const onError = () => setFailed(true);
    script.addEventListener("load", mount);
    script.addEventListener("error", onError);
    return () => {
      script?.removeEventListener("load", mount);
      script?.removeEventListener("error", onError);
    };
  }, [url]);

  return (
    <>
      <div ref={container} className={className} />
      <p className="mt-space-sm text-center font-body-sm text-body-sm text-secondary">
        {failed ? "Le calendrier ne s'affiche pas ? " : "Un souci d'affichage ? "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-on-surface underline">
          Ouvrir le calendrier dans un nouvel onglet
        </a>
      </p>
    </>
  );
}
