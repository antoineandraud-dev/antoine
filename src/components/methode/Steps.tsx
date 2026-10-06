import { Icon } from "@/components/ui/Icon";
import { steps, type Step } from "./data";

function StepCard({ step }: { step: Step }) {
  const highlighted = Boolean(step.badge);
  return (
    <div
      className={`bg-surface-container-lowest rounded-ds-lg p-space-lg lg:py-space-xl shadow-sm flex flex-col md:flex-row gap-space-lg items-start md:items-center justify-between group hover:shadow-md transition-all ${
        highlighted ? "relative overflow-hidden" : ""
      }`}
    >
      <div className="flex items-center gap-space-md">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
            highlighted ? "bg-primary-container/30" : "bg-surface-container-low"
          }`}
        >
          <span className="font-display-hero text-headline-lg font-black text-on-surface tracking-tighter">
            {step.number}
          </span>
        </div>
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">{step.title}</h3>
          {step.subtitle && (
            <p className="font-label-pill text-label-pill text-secondary uppercase tracking-wider mt-1">
              {step.subtitle}
            </p>
          )}
          {step.badge && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-pill text-label-pill">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {step.badge}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md w-full md:w-auto md:max-w-[540px]">
        <div className="bg-surface rounded-md p-3.5 flex flex-col gap-1">
          <span className="font-label-md text-label-md text-secondary font-bold inline-flex items-center gap-1.5 whitespace-nowrap">
            <Icon name={step.doIcon} className="text-[16px] text-on-surface" /> Ce que je fais&nbsp;:
          </span>
          <p className="font-body-sm text-body-sm text-on-surface">{step.doText}</p>
        </div>
        <div className="bg-primary-container/20 rounded-md p-3.5 flex flex-col gap-1">
          <span className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1.5 whitespace-nowrap">
            <Icon name={step.gainIcon} className="text-[16px]" /> Ce que vous y gagnez&nbsp;:
          </span>
          <p className="font-body-sm text-body-sm text-on-surface">{step.gainText}</p>
        </div>
      </div>
    </div>
  );
}

export function Steps() {
  return (
    <section className="w-full max-w-[980px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="text-center max-w-[640px] mx-auto mb-space-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container text-on-primary-container font-label-pill text-label-pill uppercase font-extrabold mb-3">
          Processus Opérationnel
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
          5 étapes méthodiques pour dominer votre zone
        </h2>
      </div>
      <div className="flex flex-col gap-space-lg relative">
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </section>
  );
}
