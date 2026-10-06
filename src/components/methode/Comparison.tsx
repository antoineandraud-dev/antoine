import { Icon } from "@/components/ui/Icon";
import { classicPoints, methodPoints } from "./data";

export function Comparison() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl">
      <div className="text-center max-w-[720px] mx-auto mb-space-2xl">
        <div className="inline-flex items-center gap-1.5 font-label-pill text-label-pill uppercase tracking-wider text-secondary mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Comparatif direct
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
          Un site vitrine classique vs un site construit avec cette méthode
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        <div className="bg-surface-container-low rounded-ds-lg p-space-xl flex flex-col shadow-sm">
          <div className="flex items-center justify-between pb-space-lg mb-space-md">
            <div>
              <span className="font-label-pill text-label-pill uppercase text-secondary font-bold">
                L&apos;approche standard
              </span>
              <h3 className="font-headline-sm text-headline-sm text-secondary tracking-tight mt-1">
                Site vitrine classique
              </h3>
            </div>
            <Icon name="desktop_access_disabled" className="text-secondary text-[32px]" />
          </div>
          <div className="flex flex-col gap-space-md">
            {classicPoints.map((label, index) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="close" className="text-[16px] text-secondary" />
                </div>
                <span
                  className={`font-body-md text-body-md text-secondary ${
                    index === classicPoints.length - 1 ? "font-medium" : ""
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-ds-lg p-space-xl flex flex-col shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary-container" />
          <div className="flex items-center justify-between pb-space-lg mb-space-md">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-pill text-label-pill font-bold uppercase mb-1">
                Recommandé
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Site avec la méthode</h3>
            </div>
            <Icon name="verified" className="text-primary text-[32px]" />
          </div>
          <div className="flex flex-col gap-space-md">
            {methodPoints.map((label, index) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-0.5 text-on-primary-container">
                  <Icon name="check" className="text-[16px] font-bold" />
                </div>
                <span
                  className={`font-body-md text-body-md text-on-surface ${
                    index === methodPoints.length - 1 ? "font-extrabold text-primary" : "font-semibold"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
