import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { reassurances } from "./data";

/** Calendly s'affiche directement dans la page ; couleurs alignées sur le site. */
const calendlyUrl = `${siteConfig.bookingUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1c1c&primary_color=556500`;

export function BookingHero() {
  return (
    <section className="relative w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pt-space-xl pb-space-2xl flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-space-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(217,249,68,0.9)] animate-pulse" />
        <span className="font-label-pill text-label-pill uppercase text-on-surface font-bold tracking-wider">
          Le diagnostic offert
        </span>
      </div>
      <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface max-w-[940px] tracking-tight mb-space-md">
        30 minutes pour voir exactement pourquoi vos concurrents vous devancent sur Google.
      </h1>
      <p className="font-body-lg text-body-md lg:text-body-lg text-secondary max-w-[760px] mb-space-2xl">
        Pas de jargon technique, pas de présentation commerciale agressive. On partage mon écran, je tape vos
        mots-clés dans votre zone, et on dissèque ensemble ce qui vous sépare de la première place.
      </p>

      <div
        id="reserver"
        className="w-full max-w-[920px] bg-surface-container-lowest rounded-ds-lg p-space-md md:p-space-lg shadow-xl flex flex-col items-stretch text-left scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md bg-surface-container-low/50 p-4 rounded-ds">
          <div className="flex items-center gap-space-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
              <Image
                className="w-full h-full object-cover"
                src="/images/antoine-portrait-booking.jpg"
                alt="Portrait professionnel d'Antoine Andraud, expert SEO et artisan web"
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                Antoine A.
              </div>
              <div className="font-label-pill text-label-pill text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary" /> Choisissez directement votre créneau
              </div>
            </div>
          </div>
          <div className="inline-flex items-center self-start md:self-auto gap-2 bg-primary-container/20 text-on-primary-container px-3 py-1.5 rounded-full font-label-md text-label-md">
            <Icon name="timer" className="text-[18px]" />
            <span>30 minutes chrono</span>
          </div>
        </div>

        <CalendlyEmbed
          url={calendlyUrl}
          className="min-w-[320px] h-[900px] sm:h-[760px] overflow-hidden rounded-ds"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs mt-space-lg text-secondary font-label-md text-label-md">
        {reassurances.map((item, index) => (
          <div key={item.label} className="contents">
            {index > 0 && <span className="hidden sm:inline text-surface-container-highest">•</span>}
            <span className="flex items-center gap-1.5">
              <Icon name={item.icon} className="text-primary text-[18px]" /> {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
