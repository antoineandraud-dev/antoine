import { Icon } from "@/components/ui/Icon";
import { traps } from "@/data/content";

export function Diagnostic() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="probleme">
      <div className="bg-brand-cardBg border border-brand-border rounded-3xl p-8 sm:p-12 md:p-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-3">
            Le Diagnostic Brutal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight">
            La réalité qui vous coûte des dizaines de milliers d&apos;euros chaque mois.
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-4">
            91% des sites internet créés pour des TPE/PME ne génèrent aucun client via Google. Voici les 3 pièges
            mortels dans lesquels tombent la majorité des dirigeants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traps.map((trap) => (
            <div
              key={trap.title}
              className="p-6 rounded-2xl bg-white border border-brand-border flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <Icon name={trap.icon} className="text-base" />
                </div>
                <h4 className="text-base font-bold text-brand-black mb-2">{trap.title}</h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {trap.text.before}
                  {trap.text.strong && <strong className="text-brand-black">{trap.text.strong}</strong>}
                  {trap.text.after}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-brand-border text-xs text-red-600 font-medium">
                {trap.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
