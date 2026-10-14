import { Icon } from "@/components/ui/Icon";
import { traps } from "@/data/content";

export function Diagnostic() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="probleme">
      <div className="bg-brand-cardBg border border-brand-border rounded-3xl p-8 sm:p-12 md:p-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-3">
            Le constat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight">
            Pourquoi votre site ne vous rapporte pas de clients
          </h2>
          <p className="text-brand-black font-semibold text-base sm:text-lg mt-4">
            Votre site est en ligne. Mais est-ce qu&apos;il vous apporte réellement des opportunités commerciales ?
          </p>
          <p className="text-brand-muted text-sm sm:text-base mt-3">
            Beaucoup de sites de PME passent à côté de leur potentiel : ils sont difficiles à trouver, peu convaincants
            ou compliqués à utiliser.
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
                <span className="text-xs font-mono uppercase tracking-wider text-brand-muted font-semibold">
                  {trap.tag}
                </span>
                <h4 className="text-base font-bold text-brand-black mt-1.5 mb-2">{trap.title}</h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{trap.text}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-brand-border">
                <span className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-red-400 mb-1">
                  Conséquence
                </span>
                <span className="text-xs text-red-600 font-medium">{trap.consequence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
