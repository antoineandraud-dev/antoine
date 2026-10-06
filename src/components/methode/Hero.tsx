import { Icon } from "@/components/ui/Icon";

export function MethodeHero() {
  return (
    <section className="relative w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pt-space-xl pb-space-2xl text-center flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface mb-space-lg shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(217,249,68,0.9)]" />
        <span className="font-label-pill text-label-pill tracking-widest uppercase font-bold text-on-surface">
          LA MÉTHODE
        </span>
      </div>
      <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface max-w-[960px] tracking-tight leading-[1.08] mb-space-lg">
        Google ne choisit pas au hasard. <br className="hidden sm:inline" />
        <span className="relative inline-block">
          Voici comment je fais gagner
          <span className="relative inline-block px-2 ml-1 text-on-primary-container">
            <span className="absolute inset-0 bg-primary-container rounded-ds-lg -rotate-1 skew-x-1 -z-10 shadow-[0_4px_16px_rgba(217,249,68,0.4)]" />
            votre place.
          </span>
        </span>
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-[700px] leading-relaxed mb-space-xl">
        5 étapes, un seul objectif : que votre téléphone sonne quand un client cherche votre métier dans votre ville.
      </p>
      <div className="w-full max-w-[620px] bg-surface-container-lowest rounded-full p-2 pl-6 shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 overflow-hidden text-left">
          <Icon name="search" className="text-secondary text-[22px]" />
          <div className="flex items-center gap-1 font-body-md text-body-md text-on-surface truncate">
            <span className="text-on-surface font-semibold">artisan plombier</span>
            <span className="text-secondary">bordeaux</span>
            <span className="inline-block w-1.5 h-4 bg-primary-container animate-pulse ml-0.5" />
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-sm shrink-0">
          <Icon name="near_me" className="text-[18px]" />
          <span>Appels directs</span>
        </div>
      </div>
    </section>
  );
}
