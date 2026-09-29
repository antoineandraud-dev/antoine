import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Échange & Cadrage",
    text: "Immersion totale dans votre modèle économique, vos offres phares et la psychologie d'achat de vos prospects prioritaires.",
    when: "Semaine 01",
  },
  {
    n: "02",
    title: "Direction & UX",
    text: "Création des wireframes haute fidélité, de la direction artistique sur-mesure et prototypage interactif sur Figma pour validation sans surprise.",
    when: "Semaine 02 - 03",
  },
  {
    n: "03",
    title: "Développement & Vitesse",
    text: "Développement propre, intégration minutieuse des animations fluides, balisage technique SEO et vérification multi-terminaux rigoureuse.",
    when: "Semaine 04",
  },
  {
    n: "04",
    title: "Lancement & Suivi",
    text: "Mise en production sécurisée sans coupure de service, branchement des traceurs de conversion et accompagnement dédié 30 jours.",
    when: "Semaine 05",
  },
];

export function Methode() {
  return (
    <section className="w-full py-24 bg-[#0a0a0c]/35 border-y border-white/[0.06]" id="methode">
      <Container>
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <Eyebrow>Processus de travail</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Comment nous donnons vie à votre <Accent>outil de vente</Accent>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="p-8 rounded-3xl bg-surface-container-low border border-white/[0.08] hover:border-primary/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-white/20 block mb-4 group-hover:text-primary transition-colors">{s.n}</span>
                <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">{s.text}</p>
              </div>
              <div className="mt-8 pt-3 border-t border-white/[0.06] text-primary font-display text-[11px] uppercase tracking-wider font-semibold">
                {s.when}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
