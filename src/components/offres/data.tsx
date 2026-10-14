import type { ReactNode } from "react";

export const trustItems = [
  { icon: "check_circle", label: "100% sans frais cachés" },
  { icon: "verified_user", label: "Propriété totale de votre site" },
  { icon: "schedule", label: "Livraison en 3 à 4 semaines" },
  { icon: "person_pin", label: "Un seul interlocuteur : moi" },
];

export type PricingPlan = {
  pill: string;
  note: string;
  title: string;
  description: string;
  price: string;
  priceSuffix: string;
  priceSuffixClass: string;
  priceRowClass: string;
  priceNote: string;
  persona: string;
  features: { bold: string; text: string }[];
  featured?: boolean;
};

export const plans: PricingPlan[] = [
  {
    pill: "Fondations solides",
    note: "5 pages",
    title: "Site Vitrine SEO",
    description: "Un site qui travaille pour vous dès le premier jour.",
    price: "2 200 €",
    priceSuffix: "",
    priceSuffixClass: "font-body-sm text-body-sm text-secondary font-semibold",
    priceRowClass: "gap-1.5",
    priceNote: "Paiement unique",
    persona: "Sans site, ou site dépassé",
    features: [
      { bold: "", text: "5 pages conçues pour le SEO et la conversion" },
      { bold: "", text: "Textes rédigés par moi-même" },
      { bold: "", text: "Optimisé mobile : vitesse et affichage" },
      { bold: "", text: "Pensé pour vous faire apparaître sur Google" },
      { bold: "", text: "Un site 100 % à vous" },
    ],
  },
  {
    pill: "Stratégie Complète",
    note: "6 mois de suivi",
    title: "Pack Visibilité",
    description: "Le site, puis 6 mois de SEO.",
    price: "2 200 €",
    priceSuffix: "+ 600 € / mois",
    priceSuffixClass: "font-headline-sm text-headline-sm font-bold text-on-surface",
    priceRowClass: "gap-2 flex-wrap",
    priceNote: "Pendant 6 mois",
    persona: "Être trouvé, mois après mois",
    features: [
      { bold: "Tout le Site Vitrine SEO, plus :", text: "" },
      { bold: "", text: "SEO chaque mois : articles, backlinks, optimisations" },
      { bold: "", text: "Objectif clair : prendre la première page Google" },
      { bold: "", text: "Suivi mensuel de vos positions" },
      { bold: "", text: "Fiche Google Business offerte (valeur 300 €/mois)" },
    ],
    featured: true,
  },
  {
    pill: "Visibilité locale",
    note: "Suivi mensuel",
    title: "Fiche Google Business",
    description: "Soyez visible près de chez vous.",
    price: "300 €",
    priceSuffix: "/ mois",
    priceSuffixClass: "font-headline-sm text-headline-sm font-semibold text-secondary",
    priceRowClass: "gap-1",
    priceNote: "Engagement minimum 3 mois",
    persona: "Un site, mais peu visible localement",
    features: [
      { bold: "", text: "Optimisation complète de votre fiche" },
      { bold: "", text: "4 publications par mois" },
      { bold: "", text: "Suivi mensuel de votre visibilité locale" },
      { bold: "", text: "Stratégie ajustée chaque mois" },
      { bold: "", text: "Objectif clair : prendre la première page Google" },
    ],
  },
];

/** A table cell: "check" renders the filled tick icon, otherwise plain text. */
export type Cell = { content: ReactNode | "check"; className?: string };

export const comparisonRows: [string, Cell, Cell, Cell][] = [
  ["Site de 5 pages : SEO, conversion, textes rédigés par moi, rapide sur mobile, 100 % à vous", { content: "check" }, { content: "check" }, { content: "—", className: "text-secondary" }],
  ["SEO chaque mois : articles, backlinks, optimisations", { content: "—", className: "text-secondary" }, { content: "check" }, { content: "—", className: "text-secondary" }],
  ["Fiche Google Business optimisée", { content: "En option (300 €/mois)", className: "text-secondary" }, { content: "Offerte 6 mois", className: "font-bold text-primary" }, { content: "check" }],
  ["4 publications par mois sur votre fiche", { content: "—", className: "text-secondary" }, { content: "check" }, { content: "check" }],
  ["Suivi mensuel", { content: "—", className: "text-secondary" }, { content: "Vos positions", className: "font-bold" }, { content: "Votre visibilité locale" }],
  ["Stratégie ajustée chaque mois", { content: "—", className: "text-secondary" }, { content: "check" }, { content: "check" }],
  ["Objectif : la première page Google", { content: "—", className: "text-secondary" }, { content: "check" }, { content: "check" }],
  ["Durée", { content: "Paiement unique", className: "font-bold" }, { content: "6 mois", className: "font-bold" }, { content: "3 mois minimum", className: "font-bold" }],
];

export const steps = [
  { title: "Diagnostic & Audit", text: "Visio de 30 minutes. Analyse des recherches locales de votre secteur, décorticage de vos concurrents et feuille de route limpide.", duration: "Durée : 30 min", accent: true },
  { title: "Conception & Validation", text: "Création de la maquette et de l'entonnoir de vente. Vous validez l'aspect visuel et le texte avant toute ligne de code technique.", duration: "Durée : 2 semaines", accent: false },
  { title: "Mise en ligne & SEO", text: "Déploiement sur serveur ultra-rapide, indexation instantanée sur Google Search Console et sécurisation intégrale.", duration: "Durée : 1 semaine", accent: false },
  { title: "Suivi & Prospects", text: "Montée des positions sur vos requêtes stratégiques. Réception des premiers appels directs et formulaires de devis qualifiés.", duration: "Durée : Continue", accent: true },
];

export const faqs = [
  { question: "Y a-t-il des frais mensuels cachés après la création ?", answer: "Non, absolument aucun. Pour le Site Vitrine SEO, vous ne réglez que les 2 200 € convenus. Le seul coût externe récurrent est votre nom de domaine et votre hébergement (environ 50 à 70 € par an, que vous payez directement au registrar à votre nom). Vous ne m'êtes redevable d'aucune rente mensuelle forcée." },
  { question: "Quand verrai-je les premiers résultats sur Google ?", answer: "Le référencement est un travail de fond : il faut compter plusieurs mois. Les premiers signes peuvent apparaître assez vite, puis les résultats progressent un peu plus chaque mois. C'est ce qui rend votre visibilité solide : plus votre site et votre fiche Google gagnent en crédibilité, mieux ils résistent face à vos concurrents. Le délai exact dépend de votre métier et de votre zone." },
  { question: "Suis-je propriétaire de mon site web ?", answer: "Oui, à 100%. Contrairement à de nombreuses agences qui vous louent votre site sous contrat de 48 mois, vous disposez ici de tous les accès administrateurs, du code et de vos contenus dès le solde de la commande. Vous êtes totalement indépendant." },
  { question: "Puis-je échelonner le paiement ?", answer: "Oui. Pour le Site Vitrine SEO, le paiement peut s'effectuer en 2 fois : 50% au lancement, 50% à la mise en ligne." },
  { question: "Que se passe-t-il après les 6 mois du Pack Visibilité ?", answer: "Le contrat prend fin automatiquement, sans tacite reconduction. Vos positions acquises restent votre propriété. Nous faisons un bilan complet : si vous souhaitez poursuivre la maintenance SEO mensuelle pour consolider vos positions, nous continuons au mois le mois. Sinon, vous reprenez la main en totale liberté." },
];
