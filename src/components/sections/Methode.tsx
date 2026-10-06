import { Icon } from "@/components/ui/Icon";
import { MetricBadge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/data/content";

export function Methode() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12" id="methode">
      <SectionHeading
        title="Le Système de Domination APEX"
        titleClass="mb-3"
        subtitle="Chaque site est bâti sur une architecture chirurgicale alliant vélocité extrême, pertinence sémantique et psychologie d'achat."
        subtitleClass="text-base max-w-xl mx-auto"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.tag}
            className="p-8 rounded-2xl bg-white border border-brand-border hover:border-gray-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-pillBg flex items-center justify-center mb-6 group-hover:bg-brand-lime transition-colors">
                <Icon name={pillar.icon} className="text-brand-black text-xl" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-muted font-semibold">
                {pillar.tag}
              </span>
              <h3 className="text-xl font-bold text-brand-black mt-2 mb-3">{pillar.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{pillar.text}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-xs font-medium text-brand-black">
              <span>{pillar.metric}</span>
              <MetricBadge tone={pillar.tone}>{pillar.badge}</MetricBadge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
