import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const services = [
  {
    icon: "web",
    badge: "Clé en main",
    title: "Création de site sur-mesure",
    text: "Conception intégrale pour marques exigeantes et entreprises ambitieuses sur WordPress headless ou Shopify optimisé sans surcharge de plugins.",
    points: [
      "Direction artistique exclusive & prototypage Figma complet",
      "Intégration responsive ultra fluide & micro-animations",
      "Formation complète à l'administration de votre CMS",
    ],
    tags: ["WordPress Custom", "Shopify Liquid", "Tailwind CSS"],
  },
  {
    icon: "auto_mode",
    badge: "Impact Immédiat",
    title: "Refonte stratégique de site",
    text: "Modernisation visuelle complète et levée immédiate des goulots d'étranglement qui brident votre chiffre d'affaires et votre crédibilité.",
    points: [
      "Audit d'ergonomie et analyse des parcours de drop-off",
      "Repositionnement visuel haut de gamme",
      "Migration sécurisée sans perte d'acquis SEO",
    ],
    tags: ["Audit CRO", "Refonte UX/UI", "Redirections 301"],
  },
  {
    icon: "bolt",
    badge: "Performance",
    title: "Optimisation SEO & Vitesse",
    text: "Nettoyage des goulots techniques, allègement drastique des assets et structure sémantique conçue pour satisfaire les critères de Google.",
    points: [
      "Score Core Web Vitals vert & temps de chargement < 1.2s",
      "Optimisation du maillage interne et architecture en silos",
      "Données structurées (Schema.org) pour rich snippets",
    ],
    tags: ["Lighthouse 95+", "Balisage Schema", "Edge CDN"],
  },
  {
    icon: "mark_email_read",
    badge: "Rétention & Vente",
    title: "Stratégie Contenu & Emailing",
    text: "Copywriting affûté orienté bénéfices clients et mise en place d'automatisations relationnelles qui créent de la récurrence de valeur.",
    points: [
      "Écriture complète des pages stratégiques (Home, Offres, À propos)",
      "Séquence de bienvenue automatisée & lead magnets captivants",
      "Templates d'emails éditoriaux ultra-légers",
    ],
    tags: ["Direct Copywriting", "Klaviyo / Brevo", "Lead Nurturing"],
  },
];

export function Services() {
  return (
    <section className="w-full py-24 bg-[#0a0a0c] border-t border-white/[0.06]" id="services">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Notre catalogue d&apos;intervention</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Quatre expertises claires, <Accent color="text-primary">zéro superflu</Accent>.
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
            Chaque formule est livrée clé en main, prête à performer sans maintenance douloureuse ni dépendance technique toxique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-3xl bg-surface-container-low border border-white/[0.08] hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name={s.icon} className="text-[32px] text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-display text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">{s.text}</p>
                <ul className="space-y-3 mb-8 font-body text-sm text-on-surface">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <Icon name="check_circle" className="text-[18px] text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-display text-on-surface-variant">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
