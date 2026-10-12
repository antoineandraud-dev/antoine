import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function DiagnosticFinalCta() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="bg-surface-container-lowest rounded-ds-xl p-space-xl lg:p-space-2xl shadow-xl flex flex-col items-center text-center max-w-[880px] mx-auto relative overflow-hidden">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-space-md shadow-md ring-4 ring-primary-container">
          <Image
            className="w-full h-full object-cover"
            src="/images/antoine-portrait-cta.jpg"
            alt="Portrait authentique d'Antoine Andraud, créateur et artisan web"
            width={80}
            height={80}
          />
        </div>
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-low text-secondary font-label-pill text-label-pill font-bold mb-space-xs uppercase">
          Consultation Directe • Antoine A.
        </div>
        <h2 className="font-display-hero text-headline-lg-mobile lg:text-headline-lg text-on-surface font-extrabold max-w-[680px] tracking-tight mb-space-sm">
          Prêt à voir ce que vos clients voient vraiment sur Google ?
        </h2>
        <p className="font-body-lg text-secondary max-w-[580px] mb-space-xl">
          Bloquez vos 30 minutes avec moi maintenant. Aucun commercial, aucun intermédiaire : juste de l&apos;analyse
          brute et des réponses concrètes.
        </p>
        <a
          href="#reserver"
          className="w-full max-w-[520px] py-4 px-space-lg rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm font-extrabold text-center hover:shadow-[0_8px_30px_rgba(217,249,68,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-space-xs"
        >
          <span>Réserver mon audit gratuit (30 min)</span>
          <Icon name="arrow_forward" className="text-[24px]" />
        </a>
        <div className="flex items-center gap-space-sm mt-space-lg text-secondary font-label-md text-label-md">
          <Icon name="lock" className="text-primary text-[20px]" />
          <span>Vos données restent confidentielles. Zéro démarchage intempestif.</span>
        </div>
      </div>
    </section>
  );
}
