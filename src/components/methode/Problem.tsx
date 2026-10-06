import { Icon } from "@/components/ui/Icon";
import { problems } from "./data";

export function Problem() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
      <div className="text-center max-w-[740px] mx-auto mb-space-xl">
        <div className="inline-flex items-center gap-1.5 font-label-pill text-label-pill uppercase tracking-wider text-secondary mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Diagnostic du marché local
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
          Pourquoi vos concurrents prennent vos appels
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-2xl">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-surface-container-lowest rounded-ds-lg p-space-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-surface-container-low rounded-full opacity-50" />
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface mb-space-lg">
                <Icon name={problem.icon} className="text-[24px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 tracking-tight">{problem.title}</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">{problem.text}</p>
            </div>
            <div className="mt-space-lg pt-space-md text-on-surface-variant font-label-pill text-label-pill flex items-center gap-1">
              <Icon name="close" className="text-[16px] text-error" />
              {problem.result}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center max-w-[700px] mx-auto py-space-md bg-surface-container-low/70 rounded-full px-space-xl">
        <p className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
          Bonne nouvelle : tout ça se corrige. Voici comment.
        </p>
      </div>
    </section>
  );
}
