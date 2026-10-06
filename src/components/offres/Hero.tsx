import { Icon } from "@/components/ui/Icon";
import { trustItems } from "./data";

export function OffresHero() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pt-space-xl pb-space-2xl">
      <div className="flex flex-col items-center text-center max-w-[840px] mx-auto">
        <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm mb-space-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(217,249,68,0.9)] animate-pulse" />
          <span className="font-label-pill text-label-pill text-on-surface uppercase tracking-wider font-semibold">
            Investissement transparent &amp; rentable
          </span>
        </div>
        <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight font-extrabold max-w-[760px] leading-[1.08] mb-space-md">
          Trois façons de passer devant vos concurrents sur Google
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-[660px] mb-space-xl">
          Des tarifs clairs, sans frais cachés. Vous savez exactement ce que vous payez et le retour sur
          investissement que vous obtenez. Aucun engagement au-delà de ce qui est prévu.
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-space-sm md:gap-space-md bg-surface-container-lowest shadow-sm rounded-full px-space-lg py-space-sm text-on-surface mx-auto">
          {trustItems.map((item, index) => (
            <div key={item.label} className="contents">
              {index > 0 && (
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
              )}
              <div className="flex items-center gap-space-xs font-label-md text-[13px] md:text-label-md whitespace-nowrap">
                <Icon name={item.icon} filled className="text-primary text-[18px] md:text-[20px]" />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
