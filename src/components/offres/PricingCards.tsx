import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { plans, type PricingPlan } from "./data";

function PricingCard({ plan }: { plan: PricingPlan }) {
  const { featured } = plan;
  return (
    <div
      className={`flex flex-col bg-surface-container-lowest rounded-3xl p-space-xl transition-all duration-300 relative justify-between ${
        featured
          ? "shadow-xl lg:-mt-4 lg:mb-[-1rem] bg-gradient-to-b from-primary-container/20 via-surface-container-lowest to-surface-container-lowest"
          : "shadow-md hover:shadow-xl"
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary-container text-on-surface font-label-pill text-label-pill font-extrabold uppercase tracking-wide shadow-md whitespace-nowrap">
          ★ Le plus choisi — Résultats rapides
        </div>
      )}
      <div>
        <div className={`flex items-center justify-between mb-space-md ${featured ? "pt-2" : ""}`}>
          <span
            className={`rounded-full font-label-pill text-[12px] font-bold tracking-wide uppercase text-on-surface ${
              featured ? "px-3.5 py-1 bg-primary-container" : "px-3 py-1 bg-surface-container"
            }`}
          >
            {plan.pill}
          </span>
          <span
            className={`font-label-pill text-[13px] ${
              featured ? "text-on-surface font-semibold" : "text-secondary font-medium"
            }`}
          >
            {plan.note}
          </span>
        </div>
        <h2
          className={`font-headline-md text-headline-md text-on-surface mb-space-xs ${
            featured ? "font-extrabold" : "font-bold"
          }`}
        >
          {plan.title}
        </h2>
        <p className="font-body-sm text-body-sm text-secondary mb-space-lg min-h-[40px]">{plan.description}</p>

        <div
          className={`bg-surface-container-low rounded-2xl p-space-md ${
            featured ? "mb-space-md shadow-inner" : "mb-space-lg"
          }`}
        >
          <div className={`flex items-baseline ${plan.priceRowClass}`}>
            <span className="font-display-hero text-display-hero font-extrabold text-on-surface leading-none">
              {plan.price}
            </span>
            <span className={plan.priceSuffixClass}>{plan.priceSuffix}</span>
          </div>
          <p
            className={`font-body-sm text-body-sm mt-1.5 ${
              featured ? "text-secondary font-medium" : "text-on-surface-variant"
            }`}
          >
            {plan.priceNote}
          </p>
        </div>

        {featured && (
          <div className="bg-primary-container/30 rounded-2xl p-space-sm mb-space-md flex items-center gap-space-xs">
            <Icon name="verified" className="text-primary text-[20px] shrink-0" />
            <p className="font-body-sm text-body-sm text-on-surface font-bold leading-tight">
              Fiche Google Maps offerte durant tout le pack (valeur 1 800 € économisée)
            </p>
          </div>
        )}

        <div className="bg-surface-container-low/70 rounded-2xl p-space-md mb-space-lg">
          <span className="font-label-pill text-[11px] uppercase text-secondary font-bold tracking-wider block mb-1">
            Idéal pour :
          </span>
          <p className="font-body-sm text-body-sm text-on-surface font-medium leading-relaxed">{plan.persona}</p>
        </div>

        <div className="space-y-space-sm mb-space-xl">
          {plan.features.map((feature) => (
            <div key={feature.bold} className="flex items-start gap-space-sm">
              <Icon name="check_circle" filled className="text-primary text-[20px] shrink-0 mt-0.5" />
              <p className="font-body-sm text-body-sm text-on-surface">
                <span className="font-bold">{feature.bold}</span>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="#audit-contact"
        className={`w-full px-space-lg rounded-full text-on-surface font-label-md text-label-md text-center block ${
          featured
            ? "py-4 bg-primary-container font-bold tracking-tight transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(217,249,68,0.5)]"
            : "py-3.5 bg-surface-container transition-all hover:bg-surface-container-high active:scale-95 shadow-sm"
        }`}
      >
        Demander un audit gratuit
      </Link>
    </div>
  );
}

export function PricingCards() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
        {plans.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  );
}
