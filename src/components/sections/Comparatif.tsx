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
          Travailler avec moi ou avec une agence ?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-brand-border">
          <h3 className="text-xl font-bold text-brand-black mb-6">Agence classique</h3>
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
          <h3 className="text-xl font-bold text-brand-black">Travailler avec moi</h3>
          <p className="text-sm text-brand-muted mt-1 mb-6">Un seul interlocuteur, de A à Z</p>
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
