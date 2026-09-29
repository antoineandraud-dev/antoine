import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const reassurance = [
  { icon: "schedule", title: "Retour garanti sous 24h", text: "Analyse préliminaire offerte sous 1 jour ouvré" },
  { icon: "security", title: "Confidentialité totale", text: "Pas de relance commerciale agressive, vos données restent privées" },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm";
const labelClass = "font-display text-xs uppercase tracking-wider text-on-surface-variant font-medium";

export function Contact() {
  return (
    <section className="w-full py-24 bg-background relative overflow-hidden" id="contact">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Eyebrow>Contact direct</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">Parlons de votre projet.</h2>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed mb-8">
                Une réponse concrète sous 24 heures, sans engagement. Décrivez votre ambition et recevez un premier avis stratégique franc.
              </p>
              <div className="space-y-4 mb-8">
                {reassurance.map((r) => (
                  <div key={r.title} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <Icon name={r.icon} className="text-[20px]" />
                    </div>
                    <div>
                      <span className="block font-display text-sm font-bold text-white">{r.title}</span>
                      <span className="font-body text-xs text-on-surface-variant">{r.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low border border-white/[0.08]">
              <span className="font-display text-[11px] uppercase tracking-wider text-on-surface-variant block mb-1">Email direct</span>
              <a className="font-display text-lg font-bold text-primary hover:underline" href="mailto:hello@nagastudio.fr">
                hello@nagastudio.fr
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-surface-container-low border border-white/[0.08] shadow-2xl">
            <form action="https://formspree.io/f/placeholder" method="POST" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-name">Nom complet *</label>
                  <input className={inputClass} id="contact-name" name="name" placeholder="Claire Dupont" required type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-email">Email professionnel *</label>
                  <input className={inputClass} id="contact-email" name="email" placeholder="claire@entreprise.com" required type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-website">Site web actuel (si existant)</label>
                  <input className={inputClass} id="contact-website" name="website" placeholder="https://votresite.com" type="url" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-service">Type de projet *</label>
                  <select className={inputClass} id="contact-service" name="service" required>
                    <option value="creation">Création complète de site</option>
                    <option value="refonte">Refonte stratégique &amp; CRO</option>
                    <option value="optimisation">Optimisation SEO &amp; Vitesse</option>
                    <option value="autre">Autre demande spécifique</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass} htmlFor="contact-message">Message &amp; objectifs prioritaires *</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  id="contact-message"
                  name="message"
                  placeholder="Expliquez brièvement vos besoins, délais souhaités et objectifs..."
                  required
                  rows={4}
                />
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button type="submit" icon="send" className="w-full sm:w-auto justify-center gap-2.5 px-8 py-3.5 text-xs shadow-lg shadow-primary/25 hover:scale-105">
                  Envoyer ma demande
                </Button>
                <span className="text-[11px] font-body text-on-surface-variant text-center sm:text-right">Réponse garantie sous 24h ouvrées.</span>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
