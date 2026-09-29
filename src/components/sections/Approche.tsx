import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const tile = "p-3.5 rounded-xl bg-surface-container border border-white/5 text-center";
const pillars = ["Typographie sculptée", "UI Bespoke Figma", "Micro-interactions"];
const pillarIcons = ["font_download", "dashboard_customize", "motion_mode"];
const chips = ["Scores 95+ PageSpeed", "SEO sémantique clean", "Temps < 0.9s"];
const card = "p-8 rounded-3xl bg-surface-container-low border border-white/[0.08] hover:border-primary/40 transition-all flex flex-col justify-between";

export function Approche() {
  return (
    <section className="w-full py-24 bg-transparent relative overflow-hidden" id="approche">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Excellence méthodologique</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Design with <Accent>Purpose</Accent>.<br />
            Build with <Accent color="text-primary">Impact</Accent>.
          </h2>
          <p className="mt-4 font-body text-on-surface-variant text-base">
            Notre approche réconcilie l&apos;élégance radicale et l&apos;optimisation mathématique du parcours d&apos;achat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className={`md:col-span-7 ${card} relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xs uppercase tracking-widest text-primary font-semibold">Pilier 01 • Sur-mesure</span>
                <Icon name="palette" className="text-primary text-[24px]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Design sur mesure sans modèle générique</h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl">
                Pas de thèmes achetés ni de gabarits préfabriqués. Nous façonnons une direction artistique singulière, taillée au millimètre pour refléter votre niveau d&apos;excellence et subjuguer votre niche.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-3">
              {pillars.map((label, i) => (
                <div key={label} className={tile}>
                  <Icon name={pillarIcons[i]} className="text-primary text-[20px] mb-1" />
                  <span className="block font-display text-[11px] text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`md:col-span-5 ${card} relative group`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xs uppercase tracking-widest text-primary font-semibold">Pilier 02 • CRO Scientifique</span>
                <Icon name="insights" className="text-primary text-[24px]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Conversion (CRO) &amp; Psychologie</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Architecture de l&apos;information calibrée, hiérarchie oculaire, psychologie cognitive et micro-copies persuasives : chaque pixel guide le visiteur vers l&apos;action clé.
              </p>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-surface-container border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-display block">Optimisation du funnel</span>
                <span className="font-display text-xl font-bold text-white">+84% d&apos;efficacité</span>
              </div>
              <div className="flex items-end gap-1.5 h-10">
                <div className="w-2 bg-white/20 rounded h-3" />
                <div className="w-2 bg-white/30 rounded h-5" />
                <div className="w-2 bg-primary/60 rounded h-7" />
                <div className="w-2 bg-primary rounded h-10 shadow-[0_0_8px_#ff5722]" />
              </div>
            </div>
          </div>

          <div className={`md:col-span-5 ${card}`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xs uppercase tracking-widest text-primary font-semibold">Pilier 03 • Performance</span>
                <Icon name="bolt" className="text-primary text-[24px]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Vitesse fulgurante &amp; SEO propre</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Vitesse de chargement inférieure à 1 seconde, scores Core Web Vitals impeccables et balisage sémantique rigoureux. Google et vos prospects adorent.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-lg bg-surface-container border border-white/5 font-display text-[11px] text-white">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 p-8 rounded-3xl bg-gradient-to-r from-surface-container to-surface-container-high border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-md">
              <span className="font-display text-[11px] uppercase tracking-widest text-primary font-semibold">Prêt à transformer votre marque ?</span>
              <h4 className="font-display text-2xl font-bold text-white mt-1">Passez d&apos;un site vitrine passif à un levier de croissance.</h4>
              <p className="font-body text-xs text-on-surface-variant mt-2">Chaque projet est conçu comme un actif pérenne qui valorise votre entreprise.</p>
            </div>
            <Button href="#contact" icon="arrow_forward" className="shrink-0 gap-2 px-6 py-3.5 text-xs shadow-lg shadow-primary/30 hover:scale-105">
              Lancer un projet
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
