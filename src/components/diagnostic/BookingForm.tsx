"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const fields = [
  { label: "Votre Prénom & Nom", placeholder: "ex. Pierre Lambert", type: "text" },
  { label: "Votre Métier & Ville ciblée", placeholder: "ex. Plombier Chauffagiste à Annecy", type: "text" },
  { label: "Votre Adresse Email", placeholder: "pierre@exemple.fr", type: "email" },
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter py-space-2xl" id="reserver-form">
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

        {submitted ? (
          <div className="w-full max-w-[520px] p-space-xl rounded-ds bg-surface-container-low text-center" role="status">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mx-auto mb-space-sm">
              <Icon name="check" className="text-[24px]" />
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Demande bien reçue !</p>
            <p className="font-body-md text-secondary">Votre demande de créneau est enregistrée.</p>
          </div>
        ) : (
          <form
            className="w-full max-w-[520px] flex flex-col gap-space-sm text-left"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {fields.map((field) => (
              <div key={field.label}>
                <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                  {field.label}
                </label>
                <input
                  className="w-full h-[52px] px-4 rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-on-surface transition-all text-body-md"
                  placeholder={field.placeholder}
                  required
                  type={field.type}
                />
              </div>
            ))}
            <button
              className="mt-space-sm w-full py-4 px-space-lg rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm font-extrabold text-center hover:shadow-[0_8px_30px_rgba(217,249,68,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-space-xs"
              type="submit"
            >
              <span>Réserver mon audit gratuit de 30 min</span>
              <Icon name="arrow_forward" className="text-[24px]" />
            </button>
          </form>
        )}

        <div className="flex items-center gap-space-sm mt-space-lg text-secondary font-label-md text-label-md">
          <Icon name="lock" className="text-primary text-[20px]" />
          <span>Vos données restent confidentielles. Zéro démarchage intempestif.</span>
        </div>
      </div>
    </section>
  );
}
