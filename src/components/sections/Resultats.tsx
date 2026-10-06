import { RegionBadge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cases, stats } from "@/data/content";

export function Resultats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="resultats">
      <SectionHeading
        title="Résultats audités & Métriques réelles"
        titleClass=""
        subtitle="Des indicateurs vérifiables sur Search Console et des carnets de commandes remplis pour nos clients."
        subtitleClass="text-base max-w-xl mx-auto mt-2"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.value} className="p-8 rounded-2xl bg-white border border-brand-border text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-brand-black tracking-tight mb-2">
              {stat.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-muted">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-white border border-brand-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-muted uppercase">{item.sector}</span>
                <RegionBadge>{item.region}</RegionBadge>
              </div>
              <h4 className="text-base font-bold text-brand-black mb-2">{item.title}</h4>
              <p className="text-xs text-brand-muted leading-relaxed mb-4">{item.text}</p>
              <div className="bg-gray-50 p-3 rounded-xl space-y-1 text-xs">
                {item.rows.map((row) => (
                  <div key={row.label} className={`flex justify-between ${row.rowClass}`}>
                    <span>{row.label}</span> <span className={row.valueClass}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border text-xs font-medium text-brand-black">
              {item.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
