import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const values = [
  { title: "0 Intermédiaire", text: "Travail direct avec les artisans concepteurs." },
  { title: "Transparence", text: "Devis forfaitaires fermes, calendrier tenu au jour près." },
  { title: "Pérennité", text: "Code propre, vous êtes propriétaire à 100% sans abonnement." },
];

export function Studio() {
  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      <Container>
        <div className="p-8 md:p-12 rounded-3xl bg-surface-container-low border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group">
            <Image
              src="/images/team.jpg"
              alt="Naga Studio Team in action"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-surface-container-high/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-display text-sm font-bold text-white block">Alexandre V. &amp; Équipe Naga</span>
                <span className="font-display text-[11px] text-primary uppercase tracking-wider">Atelier de conception numérique</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Eyebrow>L&apos;esprit du studio</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Derrière Naga Studio</h2>
            <blockquote className="font-serif-italic text-lg md:text-xl text-on-surface leading-relaxed mb-6 pl-4 border-l-2 border-primary">
              “Nous ne croyons ni aux usines à sites industriels, ni aux promesses mirobolantes sans fondement. Nous sommes un studio à taille humaine qui sélectionne un nombre limité de projets par trimestre pour garantir une attention chirurgicale à chaque détail.”
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              {values.map((v) => (
                <div key={v.title}>
                  <span className="font-display text-base font-bold text-white block mb-1">{v.title}</span>
                  <p className="font-body text-xs text-on-surface-variant">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
