import { steps } from "./data";

export function Process() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl">
      <div className="flex flex-col items-center text-center mb-space-xl">
        <span className="font-label-pill text-label-pill uppercase text-secondary font-bold tracking-wider">
          Processus rigoureux
        </span>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mt-1">
          Comment nous travaillons ensemble
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-[600px] mt-2">
          Zéro intermédiaire commercial, zéro dispersion. Vous traitez directement avec le concepteur de A à Z.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm font-extrabold text-on-surface mb-space-md ${
                  step.accent ? "bg-primary-container" : "bg-surface-container"
                }`}
              >
                {index + 1}
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-secondary">{step.text}</p>
            </div>
            <span
              className={`font-label-pill text-label-pill font-bold mt-space-md block ${
                step.accent ? "text-primary" : "text-secondary"
              }`}
            >
              {step.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
