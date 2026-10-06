import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { deliverables } from "./data";

export function Quote() {
  return (
    <section className="w-full bg-primary-container py-space-2xl my-space-xl">
      <div className="max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter text-center">
        <p className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-primary-fixed font-black tracking-tight leading-none max-w-[980px] mx-auto">
          « Être en ligne, ça ne rapporte rien. <br className="hidden sm:inline" />
          Être en haut de Google, si. »
        </p>
      </div>
    </section>
  );
}

export function Deliverables() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
      <div className="text-center max-w-[640px] mx-auto mb-space-2xl">
        <div className="inline-flex items-center gap-1.5 font-label-pill text-label-pill uppercase tracking-wider text-secondary mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Livrables concrets
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
          Ce que vous recevez avec APEX
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {deliverables.map((item) => (
          <div
            key={item.icon}
            className="bg-surface-container-lowest rounded-ds-lg p-space-lg shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md">
              <Icon name={item.icon} className="text-[24px]" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MethodeFinalCta() {
  return (
    <section className="w-full max-w-[1040px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="bg-surface-container-lowest rounded-ds-xl p-space-xl lg:p-space-2xl shadow-xl text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center mb-space-lg shadow-sm">
          <Icon name="screen_search_desktop" className="text-[28px] text-on-surface" />
        </div>
        <h2 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-tight max-w-[780px] mb-space-md">
          Voyons où vous en êtes sur Google, en direct.
        </h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-[620px] mb-space-xl leading-relaxed">
          30 minutes. Je tape votre métier dans votre ville devant vous. On regarde qui apparaît, et je vous dis ce
          qu&apos;il faudrait pour que ce soit vous.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-lg">
          <Link
            href="/diagnostic#reserver-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-extrabold shadow-[0_8px_30px_rgba(217,249,68,0.4)] hover:scale-[1.02] transition-transform"
          >
            <span>Réserver mon audit gratuit</span>
            <Icon name="arrow_forward" className="text-[20px]" />
          </Link>
        </div>
        <p className="font-body-sm text-body-sm text-secondary max-w-[500px]">
          Sans engagement. Vous repartez avec une vision claire, même si vous ne travaillez pas avec moi.
        </p>
      </div>
    </section>
  );
}
