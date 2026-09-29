"use client";

import { useState } from "react";
import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const faqs = [
  {
    q: "Quels sont les délais typiques de réalisation d'un projet ?",
    a: "Pour un site sur-mesure d'envergure moyenne (5 à 10 gabarits clés), notre délai moyen est de 3 à 5 semaines entre le cadrage initial et la mise en production. Les optimisations spécifiques ou audits CRO s'effectuent généralement en 7 à 10 jours ouvrés.",
  },
  {
    q: "Quelle est votre grille tarifaire et comment se passe la facturation ?",
    a: "Nos projets complets débutent généralement à partir de 3 500 € pour des sites vitrines à forte conversion et s'échelonnent selon la complexité et les intégrations requises. La facturation est scindée de façon prévisible : 40% au lancement, 30% à la validation du prototype Figma et 30% lors de la mise en ligne finale.",
  },
  {
    q: "Comment gérez-vous l'hébergement et la maintenance technique ?",
    a: "Nous privilégions des architectures ultra-rapides et sécurisées (Cloudflare, Vercel ou hébergeurs infogérés de haute réputation comme Kinsta). Nous proposons des formules de maintenance optionnelles pour les sauvegardes régulières, mises à jour de sécurité et micro-évolutions mensuelles sans engagement.",
  },
  {
    q: "Suis-je propriétaire à 100% de mon site et de mes créations ?",
    a: "Absolument. Dès le règlement du solde final, l'intégralité des droits de propriété intellectuelle, les maquettes Figma d'origine, le code source et les accès administrateur vous appartiennent sans aucune restriction. Aucun système fermé ne vous retient captif.",
  },
  {
    q: "Quel est l'accompagnement après le lancement ?",
    a: "Chaque livraison inclut une session de passation vidéo en direct (enregistrée pour vos équipes) et une période de garantie réactive de 30 jours pour répondre à vos questions ou affiner les réglages après les premiers retours utilisateurs réels.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-[#0a0a0c] border-t border-white/[0.06]" id="faq">
      <Container>
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Tout ce que vous devez savoir <Accent>avant de démarrer</Accent>.
          </h2>
        </div>
        <div className="max-w-4xl flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl bg-surface-container-low border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-primary/40"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className="font-display text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors">{f.q}</span>
                  <Icon
                    name="expand_more"
                    className={`text-primary text-[22px] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
