import Image from "next/image";
import Link from "next/link";

export function Reassurance() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl">
      <div className="bg-surface-container-lowest rounded-3xl p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-xl">
        <div className="flex items-start gap-space-md max-w-[700px]">
          <Image
            src="/images/antoine-portrait-cta.jpg"
            alt="Antoine Andraud"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover shrink-0 shadow-md ring-2 ring-primary-container"
          />
          <div>
            <span className="font-label-pill text-label-pill uppercase text-secondary font-bold tracking-wider">
              Avis objectif sans engagement
            </span>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 mb-2">
              Pas certain de l&apos;option la plus rentable pour votre activité ?
            </h3>
            <p className="font-body-md text-body-md text-secondary">
              Je regarde votre position actuelle sur Google en 30 minutes en direct et je vous dis avec une
              franchise absolue laquelle a du sens. Si vous n&apos;avez besoin de rien ou si un simple ajustement
              suffit, je vous le dis aussi.
            </p>
          </div>
        </div>
        <Link
          href="#audit-contact"
          className="shrink-0 px-space-xl py-3.5 rounded-full bg-on-surface text-surface-container-lowest font-label-md text-label-md font-bold transition-all hover:bg-surface-tint active:scale-95 shadow-sm"
        >
          Réserver mon créneau de 30 min
        </Link>
      </div>
    </section>
  );
}
