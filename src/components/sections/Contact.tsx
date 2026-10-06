"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { contactPoints } from "@/data/content";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder-white focus:bg-white/15 focus:border-brand-lime focus:outline-none transition-all";
const labelClass = "block text-xs uppercase font-mono tracking-wider text-gray-300 mb-1";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="contact">
      <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-lime/15 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-brand-lime mb-4">
              Session Stratégique Offerte
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              Réservez votre audit SEO &amp; conversion (30 min).
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Je décortique personnellement votre présence en ligne et vos concurrents directs. Aucun discours
              commercial agressif : 3 recommandations concrètes applicables dès le lendemain.
            </p>
            <div className="space-y-2.5 text-xs text-gray-300">
              {contactPoints.map((point) => (
                <div key={point.icon} className="flex items-center gap-2">
                  <Icon name={point.icon} className="text-brand-lime text-base" />
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {!submitted ? (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className={labelClass} htmlFor="url">
                    Adresse de votre site (ou nouveau projet) *
                  </label>
                  <input className={inputClass} id="url" placeholder="ex: www.monentreprise.fr" required type="text" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="activity">
                      Secteur d&apos;activité *
                    </label>
                    <input className={inputClass} id="activity" placeholder="ex: Rénovation, Avocat, BTP" required type="text" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="city">
                      Ville ou Rayon géographique *
                    </label>
                    <input className={inputClass} id="city" placeholder="ex: Nantes & région" required type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Votre Email Pro *
                    </label>
                    <input className={inputClass} id="email" placeholder="contact@entreprise.fr" required type="email" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Téléphone direct *
                    </label>
                    <input className={inputClass} id="phone" placeholder="06 00 00 00 00" required type="tel" />
                  </div>
                </div>
                <button
                  className="w-full py-4 rounded-full bg-brand-lime text-brand-black font-bold text-sm tracking-tight hover:scale-[1.02] hover:bg-[#d0f230] transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_4px_20px_rgba(217,249,68,0.3)]"
                  type="submit"
                >
                  <Icon name="rocket_launch" className="text-base" />
                  <span>Demander mon Audit Gratuit (30 min)</span>
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-white/10 border border-white/20 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-lime text-brand-black flex items-center justify-center mx-auto mb-3">
                  <Icon name="check" className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Demande bien reçue !</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Merci. J&apos;analyse votre secteur sous 24h et je vous envoie personnellement mon lien de calendrier
                  pour notre session stratégique.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
