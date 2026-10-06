import { Icon } from "@/components/ui/Icon";
import { agencyPoints, artisanPoints } from "@/data/content";

export function Comparatif() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="solution">
      <div className="text-center mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-muted">
          Matrice Comparative
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-2">
          Pourquoi les dirigeants choisissent un artisan dédié.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-brand-border">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">Agence Web Classique</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              Approche Générique
            </span>
          </div>
          <h3 className="text-xl font-bold text-brand-black mb-6">Site Vitrine Conventionnel</h3>
          <ul className="space-y-4 text-sm text-brand-muted">
            {agencyPoints.map((point) => (
              <li key={point.strong} className="flex items-start gap-3">
                <Icon name="close" className="text-red-500 text-lg shrink-0 mt-0.5" />
                <span>
                  <strong className="text-brand-black">{point.strong}</strong> {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#fcfcfc] border-2 border-brand-black shadow-[0_4px_25px_rgba(0,0,0,0.05)] relative">
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-brand-lime text-brand-black text-xs font-bold tracking-tight shadow-sm">
            MÉTHODE RECOMMANDÉE
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-black">
              Antoine A. — Artisan SEO
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-900 font-mono">
              100% Dédié
            </span>
          </div>
          <h3 className="text-xl font-bold text-brand-black mb-6">Machine de Capture &amp; Domination #1</h3>
          <ul className="space-y-4 text-sm text-brand-black">
            {artisanPoints.map((point) => (
              <li key={point.strong} className="flex items-start gap-3">
                <Icon name="check_circle" className="text-brand-black text-lg shrink-0 mt-0.5" />
                <span>
                  <strong className="font-bold">{point.strong}</strong> {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
