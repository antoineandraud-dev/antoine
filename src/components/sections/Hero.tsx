import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { HeroPill } from "@/components/ui/Badge";
import { heroPills, socials } from "@/data/content";

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center pt-6 pb-20">
      <div className="relative mb-6">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-b from-brand-border to-transparent shadow-md">
          <Image
            alt="Antoine Andraud - Artisan SEO"
            className="w-full h-full object-cover rounded-full"
            src="/images/antoine-andraud.jpg"
            width={144}
            height={144}
            priority
          />
        </div>
        <span
          className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-brand-lime border-2 border-white shadow-sm flex items-center justify-center"
          title="Disponible pour 2 projets"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
        </span>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pillBg border border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-black mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
        SEO &amp; Création Web pour PME locales
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-black mb-6 leading-tight max-w-3xl">
        Je ne fais pas de sites web.
        <br className="hidden sm:inline" />
        <span className="mt-2 block">
          Je fais des sites{" "}
          <span className="relative inline-block">
            <span className="relative z-10">en haut de Google</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-lime -z-0 opacity-70 rounded" />
          </span>
          .
        </span>
      </h1>

      <p className="text-base sm:text-lg text-brand-muted max-w-2xl font-normal leading-relaxed mb-8">
        Le premier site que Google montre est celui qu&apos;on appelle.{" "}
        <strong className="font-semibold text-brand-black">Votre concurrent y est déjà. Pas vous.</strong>{" "}
        <span className="text-brand-black font-semibold">Ça se corrige.</span>
      </p>

      <div className="flex items-center justify-center gap-5 mb-10 text-brand-black">
        {socials.map((social) => (
          <a
            key={social.label}
            aria-label={social.label}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-brand-pillBg transition-colors"
            href="#contact"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {heroPills.map((pill) => (
          <HeroPill key={pill.label} tone={pill.tone}>
            {pill.label}
          </HeroPill>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-lime text-brand-black font-bold text-sm tracking-tight shadow-[0_4px_20px_rgba(217,249,68,0.45)] hover:scale-105 hover:bg-[#d0f230] transition-all flex items-center justify-center gap-2"
          href="#contact"
        >
          <span>Recevoir mon audit Google offert</span>
          <Icon name="arrow_forward" className="text-base" />
        </a>
        <a
          className="w-full sm:w-auto px-6 py-4 rounded-full bg-white border border-brand-border text-brand-black font-semibold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          href="#methode"
        >
          <span>Voir comment je travaille</span>
          <Icon name="south" className="text-base text-brand-muted" />
        </a>
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs text-brand-muted font-medium">
        <span className="flex items-center text-brand-lime font-bold">
          <Icon name="verified" className="text-base" />
        </span>
        <span className="text-brand-muted">
          30 minutes, sans engagement. Je vous montre où vous apparaissez aujourd&apos;hui face à vos concurrents.
        </span>
      </div>
    </section>
  );
}
