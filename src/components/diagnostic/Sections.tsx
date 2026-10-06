import { Icon } from "@/components/ui/Icon";
import { agencyPoints, apexPoints, errors, faqs, timeline } from "./data";

export function Timeline() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <div className="max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="max-w-[720px] mx-auto text-center mb-space-2xl">
          <div className="inline-block px-3 py-1 bg-surface-container-highest text-secondary rounded-full font-label-pill text-label-pill font-bold uppercase mb-space-xs">
            Rigueur &amp; Transparence
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-space-xs">
            Le déroulé exact de vos 30 minutes
          </h2>
          <p className="font-body-lg text-secondary">Une méthode chirurgicale, chrono en main. Ni blabla, ni flatterie inutile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg max-w-[980px] mx-auto">
          {timeline.map((step) => (
            <div
              key={step.range}
              className="bg-surface-container-lowest rounded-ds-lg p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span
                    className={`px-3 py-1 rounded-full font-label-md text-label-md font-bold ${
                      step.accent ? "bg-primary-container text-on-primary-fixed" : "bg-surface-container text-on-surface"
                    }`}
                  >
                    {step.range}
                  </span>
                  <Icon name={step.icon} className={`${step.accent ? "text-primary" : "text-secondary"} text-[24px]`} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">{step.title}</h3>
                <p className="font-body-md text-secondary">{step.text}</p>
              </div>
              <div
                className={`mt-space-md pt-space-sm rounded-ds p-3 text-body-sm flex items-center gap-2 ${
                  step.accent
                    ? "bg-primary-container/20 text-on-primary-fixed-variant font-medium"
                    : "bg-surface-container-low/60 text-secondary"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${step.accent ? "bg-primary" : "bg-primary-container"}`}
                />
                <span>{step.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Errors() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="max-w-[760px] mx-auto text-center mb-space-2xl">
        <div className="inline-block px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-pill text-label-pill font-bold uppercase mb-space-xs">
          Constat terrain récurrent
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
          Ce que nous découvrons presque toujours
        </h2>
        <p className="font-body-lg text-secondary mt-2">
          La majorité des entreprises perdent des clients locaux non pas à cause de leur réputation, mais à cause
          d&apos;erreurs structurelles invisibles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {errors.map((error, index) => (
          <div
            key={error.title}
            className="bg-surface-container-lowest rounded-ds-lg p-space-xl flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-on-surface font-extrabold mb-space-md">
              {index + 1}
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">{error.title}</h3>
              <p className="font-body-md text-secondary mb-space-md">{error.text}</p>
            </div>
            <div className="bg-surface-container-low p-3 rounded-ds text-body-sm text-secondary">
              <strong className="text-on-surface">Impact :</strong> {error.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function QuoteBand() {
  return (
    <section className="w-full bg-primary-container text-on-primary-fixed py-space-2xl my-space-lg">
      <div className="max-w-[1040px] mx-auto px-gutter-mobile lg:px-gutter text-center">
        <Icon name="format_quote" className="text-[48px] text-on-primary-fixed-variant mb-space-sm opacity-60" />
        <blockquote className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-black tracking-tight leading-tight text-on-primary-fixed max-w-[900px] mx-auto">
          « En 30 minutes d&apos;analyse réelle, vous comprenez plus votre marché local que lors des 3 dernières
          années avec une agence classique. »
        </blockquote>
        <div className="mt-space-md font-label-md text-label-md uppercase tracking-widest text-on-primary-fixed-variant font-bold">
          Antoine A. — Artisan SEO &amp; Fondateur APEX
        </div>
      </div>
    </section>
  );
}

export function FaceToFace() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="max-w-[720px] mx-auto text-center mb-space-2xl">
        <div className="inline-block px-3 py-1 bg-surface-container-highest text-secondary rounded-full font-label-pill text-label-pill font-bold uppercase mb-space-xs">
          Face à face
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
          Un audit franc vs un pitch commercial
        </h2>
        <p className="font-body-lg text-secondary">
          Pourquoi ce format de 30 minutes surpasse n&apos;importe quel rendez-vous commercial classique.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg max-w-[940px] mx-auto">
        <div className="bg-surface-container-low rounded-ds-lg p-space-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">Le pitch d&apos;agence traditionnel</h3>
            </div>
            <ul className="space-y-space-md font-body-md text-secondary">
              {agencyPoints.map((point) => (
                <li key={point} className="flex items-start gap-space-xs">
                  <Icon name="close" className="text-error text-[20px] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-space-xl pt-space-md text-body-sm text-secondary italic">
            Bilan : Une perte de temps pour vous vendre un pack standardisé.
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-ds-lg p-space-xl flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary-container text-on-primary-fixed px-4 py-1 rounded-bl-ds font-label-pill text-label-pill font-extrabold uppercase">
            Recommandé
          </div>
          <div>
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_rgba(217,249,68,0.9)]" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                Le diagnostic APEX avec Antoine
              </h3>
            </div>
            <ul className="space-y-space-md font-body-md text-on-surface">
              {apexPoints.map((point) => (
                <li key={point.strong} className="flex items-start gap-space-xs">
                  <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5 font-bold" />
                  <span>
                    <strong>{point.strong}</strong>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-space-xl pt-space-md text-body-sm font-semibold text-primary">
            Bilan : Une consultation stratégique à haute valeur ajoutée.
          </div>
        </div>
      </div>
    </section>
  );
}

export function DiagnosticFaq() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <div className="max-w-[820px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center mb-space-xl">
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            Le déroulé exact de vos 30 minutes
          </h2>
          <p className="font-body-lg text-secondary mt-1">Tout ce que vous devez savoir avant de bloquer vos 30 minutes.</p>
        </div>
        <div className="space-y-space-md">
          {faqs.map((item) => (
            <div key={item.question} className="bg-surface-container-lowest rounded-ds-lg p-space-lg shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs flex items-center justify-between">
                <span>{item.question}</span>
                <Icon name="help_outline" className="text-secondary" />
              </h3>
              <p className="font-body-md text-secondary">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
