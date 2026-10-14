"use client";

import { useEffect, useState } from "react";

/**
 * Effet "machine à écrire" en boucle : tape, marque une pause, efface, passe à la requête suivante.
 * Démarre sur la première requête déjà affichée (pas de saut au chargement) et reste statique
 * si l'utilisateur préfère réduire les animations.
 */
export function useTypewriter(queries: readonly string[]) {
  const [text, setText] = useState(queries[0] ?? "");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let queryIndex = 0;
    let charIndex = queries[0].length;
    let deleting = true;

    const tick = () => {
      const current = queries[queryIndex];
      charIndex += deleting ? -1 : 1;
      setText(current.substring(0, charIndex));

      let delay = deleting ? 40 : 80;
      if (!deleting && charIndex === current.length) {
        delay = 2200; // pause sur la requête complète
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        queryIndex = (queryIndex + 1) % queries.length;
        delay = 400; // pause avant la requête suivante
      }
      timer = setTimeout(tick, delay);
    };

    let timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [queries]);

  return text;
}
