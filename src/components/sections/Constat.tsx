import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const pitfalls = [
  {
    n: "01",
    title: "Le piège du beau inutile",
    text: "Un design splendide mais dénué de parcours utilisateur réfléchi ne génère aucun lead. C'est une œuvre d'art, pas un investissement rentable pour votre trésorerie.",
    result: "Taux de rebond élevé & zéro conversion",
  },
  {
    n: "02",
    title: "Le désastre de l'austère",
    text: "Un entonnoir ultra-standardisé mais visuellement médiocre détruit votre crédibilité en 3 secondes. Vos prospects filent immédiatement vers vos concurrents plus inspirants.",
    result: "Érosion de confiance instantanée",
  },
];

const metrics = [
  { value: "400+", label: "Écrans & funnels audités", icon: "query_stats", accent: false },
  { value: "230+", label: "Mises en production sans accroc", icon: "rocket_launch", accent: true },
  { value: "3 à 5 sem.", label: "Délai moyen de livraison clé en main", icon: "speed", accent: false },
];

export function Constat() {
  return (
    <section className="w-full py-24 bg-[#0a0a0c] border-y border-white/[0.06] relative" id="constat">
      <div className="absolute -top-32 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              La plupart des sites échouent sur l&apos;un de ces <Accent>deux écueils</Accent>.
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
            Chez Naga Studio, nous réunissons designers, stratèges CRO et artisans du code pour façonner des expériences où chaque détail sert la croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {pitfalls.map((p) => (
            <div
              key={p.n}
              className="lg:col-span-4 p-8 rounded-2xl bg-surface-container-low border border-white/[0.08] hover:border-primary/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary font-display font-bold text-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {p.n}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{p.text}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-red-400 font-display text-[11px] uppercase tracking-wider">
                <Icon name="close" className="text-[16px]" />
                <span>{p.result}</span>
              </div>
            </div>
          ))}

          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-[#1a1412] to-[#121113] border border-primary/40 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-md shadow-primary/30">
                <Icon name="all_inclusive" className="text-[20px]" />
              </div>
              <span className="font-display text-[11px] uppercase tracking-wider text-primary font-semibold">L&apos;alchimie signature</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1 mb-3">L&apos;équation Naga Studio</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                L&apos;émotion brute d&apos;une direction artistique d&apos;avant-garde alliée à la science impitoyable de la conversion. Résultat : autorité incontestable et flux continu de rendez-vous qualifiés.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-primary font-display text-[11px] uppercase tracking-wider font-semibold">
              <Icon name="verified" className="text-[16px]" />
              <span>Impact commercial et rentabilité</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {metrics.map((m) => (
            <div key={m.label} className="p-6 rounded-2xl bg-surface-container border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className={`font-display text-3xl font-bold ${m.accent ? "text-primary" : "text-white"}`}>{m.value}</span>
                <span className="block font-display text-[11px] uppercase tracking-wider text-on-surface-variant mt-1">{m.label}</span>
              </div>
              <Icon name={m.icon} className="text-[32px] text-primary/40" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
