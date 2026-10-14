"use client";

import { useState } from "react";
import { BookingLink } from "@/components/ui/BookingLink";
import { useTypewriter } from "@/hooks/useTypewriter";

const searchQueries = [
  "artisan couvreur bordeaux",
  "chirurgien dentiste nantes",
  "cabinet avocat lyon",
  "installateur pompe à chaleur toulouse",
] as const;

type Mode = "before" | "after";

/**
 * Simulation d'une page de résultats Google : la recherche se tape toute seule et le bouton
 * « Avant / Après » montre l'entreprise passer de la page 2 au 1er rang. Exemple fictif.
 */
export function SerpDemo() {
  const [mode, setMode] = useState<Mode>("after");
  const query = useTypewriter(searchQueries);
  const isAfter = mode === "after";

  return (
    <section className="max-w-6xl mx-auto px-6 pt-4 pb-24 relative" id="serp-demo">
      <div
        className="hidden lg:flex items-center gap-3 absolute -top-4 left-12 z-20 bg-white/90 backdrop-blur shadow-lg border border-gray-100 px-4 py-2 rounded-2xl text-xs font-semibold text-gray-800 animate-bounce motion-reduce:animate-none"
        style={{ animationDuration: "3s" }}
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Le 1er résultat est celui qu&apos;on appelle</span>
      </div>
      <div className="hidden lg:flex items-center gap-2 absolute top-20 right-4 z-20 bg-white/95 backdrop-blur shadow-lg border border-brand-lime/50 px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-900 shadow-[0_10px_25px_-5px_rgba(217,249,68,0.4)]">
        <span className="text-sm">⚡</span>
        <span>Objectif : la 1re position</span>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl overflow-hidden relative">
        {/* Barre du navigateur + bascule avant / après */}
        <div className="bg-gray-50/80 border-b border-gray-200/70 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="ml-2 text-xs text-gray-400 font-mono hidden sm:inline">
              google.fr/search?q=votre-metier-votre-ville
            </span>
          </div>
          <div className="flex items-center bg-gray-200/80 p-1 rounded-full text-xs font-bold" role="group" aria-label="Avant ou après">
            <button
              type="button"
              aria-pressed={!isAfter}
              onClick={() => setMode("before")}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                isAfter ? "text-gray-600" : "bg-white text-gray-900 shadow-sm"
              }`}
            >
              Avant APEX (Page 2)
            </button>
            <button
              type="button"
              aria-pressed={isAfter}
              onClick={() => setMode("after")}
              className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                isAfter ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              Après APEX (Rang #1)
            </button>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="p-4 sm:p-7 border-b border-gray-100 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.86c2.26-2.09 3.685-5.17 3.685-9.09z" fill="#4285F4" />
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.37 24 12 24z" fill="#34A853" />
                <path d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" fill="#FBBC05" />
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" fill="#EA4335" />
              </svg>
              <div className="flex-1 text-sm sm:text-base font-medium text-gray-800 flex items-center min-h-[1.5rem]" aria-live="off">
                <span className="font-normal text-gray-900">{query}</span>
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-blue-500 animate-pulse motion-reduce:animate-none" />
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-4 px-2">
              <div className="flex items-center gap-4 sm:gap-6 font-medium">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Tous</span>
                <span>Maps</span>
                <span>Images</span>
                <span>Actualités</span>
              </div>
              <span className="hidden sm:inline text-gray-400">Environ 1 420 000 résultats (0.28 secondes)</span>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="p-4 sm:p-8 bg-[#fdfdfd] space-y-6">
          <div
            className={`serp-card-transition relative bg-white border-2 rounded-2xl p-5 sm:p-6 shadow-xl ${
              isAfter
                ? "border-brand-lime ring-4 ring-brand-lime/10"
                : "border-gray-200 opacity-40 grayscale translate-y-5 scale-[0.98]"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-lime text-gray-950">
                {isAfter ? "🏆 RÉSULTAT #1 NATUREL (VOTRE ENTREPRISE)" : "VOTRE ENTREPRISE (PAGE 2)"}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                ⚡ Site rapide sur mobile
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <span className="w-5 h-5 rounded-full bg-gray-900 text-brand-lime flex items-center justify-center font-bold text-[10px]">
                A
              </span>
              <span className="font-medium text-gray-900">https://www.votre-entreprise.fr</span>
              <span className="text-gray-400">› bordeaux › intervention</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight mb-2">
              Votre Entreprise Bordeaux — Rénovation &amp; Devis gratuit
            </h3>
            <div className="flex items-center gap-2 mb-2.5 text-xs text-gray-600">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <span>Avis clients Google</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-4">
              Entreprise locale intervenant rapidement sur toute la métropole. Réalisation soignée et devis clair, sans
              surprise. Contactez-nous directement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
              {[
                ["Demander un devis en ligne", "Réponse rapide"],
                ["Nos réalisations", "Photos avant / après"],
                ["Tarifs & prise de RDV", "Transparent, sans frais cachés"],
              ].map(([title, text]) => (
                <div key={title} className="p-2.5 rounded-lg bg-gray-50">
                  <span className="text-xs font-bold text-blue-800 block">{title}</span>
                  <span className="text-[11px] text-gray-500">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="serp-card-transition bg-white border border-gray-200/80 rounded-xl p-4 sm:p-5 opacity-70">
            <div className="flex items-center justify-between mb-1 gap-2">
              <div className="flex items-center gap-2 text-xs text-gray-500 min-w-0">
                <span className="w-4 h-4 rounded-full bg-gray-200 shrink-0" />
                <span className="truncate">https://www.concurrent-historique.fr</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded shrink-0">
                Concurrent (Rang #2)
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-medium text-blue-800">
              Couverture Bâtiment Traditionnel Bordeaux - Depuis 1998
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Entreprise locale de toiture et charpente. Pour toute demande, veuillez nous adresser un courriel ou
              laisser vos coordonnées sur notre formulaire de contact...
            </p>
          </div>

          <div className="serp-card-transition bg-white border border-gray-200/80 rounded-xl p-4 sm:p-5 opacity-50">
            <div className="flex items-center justify-between mb-1 gap-2">
              <div className="flex items-center gap-2 text-xs text-gray-500 min-w-0">
                <span className="w-4 h-4 rounded-full bg-gray-200 shrink-0" />
                <span className="truncate">https://www.annuaire-artisans-france.com/bordeaux</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded shrink-0">
                Annuaire (Rang #3)
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-medium text-blue-800">Les 10 Meilleurs Couvreurs à Bordeaux &amp; Environs</h4>
            <p className="text-xs text-gray-500 mt-1">
              Trouvez le bon pro près de chez vous. Consultez la liste des numéros payants et coordonnées répertoriées...
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shrink-0" />
            <span className="font-bold">Votre place sur Google :</span>
            <span className="text-gray-300">vos clients appellent d&apos;abord les premiers résultats.</span>
          </div>
          <BookingLink className="text-brand-lime font-bold hover:underline whitespace-nowrap">
            Voir où vous apparaissez aujourd&apos;hui →
          </BookingLink>
        </div>
      </div>
      <p className="text-center text-xs text-brand-lightMuted mt-4">
        Simulation illustrative : exemple fictif d&apos;une page de résultats Google.
      </p>
    </section>
  );
}
