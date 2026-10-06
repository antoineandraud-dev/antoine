import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const reassurances = ["Gratuit & sans engagement", "Pas de pitch commercial agressif", "Analyse concrète sur votre écran"];

export function OffresFinalCta() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl" id="audit-contact">
      <div className="bg-surface-container-lowest rounded-3xl p-space-xl lg:p-space-2xl shadow-lg text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <span className="px-4 py-1.5 rounded-full bg-surface-container-low font-label-pill text-label-pill text-on-surface uppercase font-bold tracking-wider mb-space-md">
          Passez à l&apos;action dès aujourd&apos;hui
        </span>
        <h2 className="font-display-hero text-display-hero text-on-surface font-extrabold tracking-tight max-w-[760px] leading-tight mb-space-md">
          Prêt à ne plus laisser vos concurrents prendre vos clients ?
        </h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-[580px] mb-space-xl">
          Réservez un échange de 30 minutes. Nous analysons ensemble votre potentiel local sur Google et identifions
          les opportunités immédiates.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center max-w-[480px]">
          <Link
            href="/diagnostic#reserver-form"
            className="w-full sm:w-auto px-space-xl py-4 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_6px_24px_rgba(217,249,68,0.6)] text-center"
          >
            Demander mon audit gratuit de 30 min
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-md text-secondary font-body-sm text-body-sm mt-space-lg">
          {reassurances.map((label) => (
            <span key={label} className="flex items-center gap-1">
              <Icon name="check" filled className="text-[16px] text-primary" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
