import type { ReactNode } from "react";

export const trustItems = [
  { icon: "check_circle", label: "100% sans frais cachés" },
  { icon: "verified_user", label: "Propriété totale de votre site" },
  { icon: "schedule", label: "Livraison en 3 à 4 semaines" },
  { icon: "person_pin", label: "Artisan solopreneur dédié" },
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
    note: "Paiement unique",
    title: "Site Vitrine SEO",
    description: "Le site qui pose les bases saines pour être trouvé et convertir immédiatement vos visiteurs.",
    price: "2 200 €",
    priceSuffix: "HT",
    priceSuffixClass: "font-body-sm text-body-sm text-secondary font-semibold",
    priceRowClass: "gap-1.5",
    priceNote: "Facilités de paiement disponibles en 2x ou 3x sans frais.",
    persona: "Artisans, professions libérales et PME sans présence crédible ou avec un site désuet.",
    features: [
      { bold: "5 pages sur-mesure :", text: " Accueil, Services, Réalisations, À propos, Devis" },
      { bold: "Score vitesse ultra-rapide", text: " (< 1s de chargement mobile)" },
      { bold: "SEO local on-page :", text: " balisage sémantique & mots-clés zone" },
      { bold: "Entonnoir conversion :", text: " clics d'appel & formulaire devis épuré" },
      { bold: "Formation vidéo 30 min", text: " pour piloter votre site en totale autonomie" },
    ],
  },
  {
    pill: "Stratégie Complète",
    note: "6 mois d'impact",
    title: "Pack Première Page",
    description: "Le site premium et le travail SEO d'artisan pour viser et verrouiller la première page Google.",
    price: "2 200 €",
    priceSuffix: "+ 600 € / mois",
    priceSuffixClass: "font-headline-sm text-headline-sm font-bold text-on-surface",
    priceRowClass: "gap-2 flex-wrap",
    priceNote: "Engagement 6 mois. Aucun renouvellement automatique tacite.",
    persona: "Entreprises locales avec concurrence active voulant capter les demandes chaque semaine.",
    features: [
      { bold: "Tout le Site Vitrine SEO", text: " inclus (5 pages haute vélocité)" },
      { bold: "6 mois d'action SEO continue :", text: " rédactions, sémantique & netlinking local" },
      { bold: "Fiche Google Business Profile", text: " gérée, optimisée et animée" },
      { bold: "Tableau de bord live", text: " de vos positions sur les mots-clés clés" },
      { bold: "Rapport mensuel vidéo Loom (5 min) :", text: " clair, limpide, sans jargon" },
    ],
    featured: true,
  },
  {
    pill: "Visibilité locale immédiate",
    note: "Sans engagement",
    title: "Domination Fiche Google",
    description: "Dominez la carte Google Maps de votre ville dès qu'un prospect cherche votre métier.",
    price: "300 €",
    priceSuffix: "/ mois",
    priceSuffixClass: "font-headline-sm text-headline-sm font-semibold text-secondary",
    priceRowClass: "gap-1",
    priceNote: "Sans aucun engagement de durée. Résiliable chaque mois en 1 clic.",
    persona: "Entreprises ayant déjà un site correct mais totalement invisibles sur Google Maps.",
    features: [
      { bold: "Audit complet", text: " et déblocage de votre fiche Google Business" },
      { bold: "Système d'avis 5 étoiles :", text: " processus de collecte et réponses rédigées" },
      { bold: "Publications bimensuelles :", text: " actualités, chantiers et offres ciblées" },
      { bold: "Catégories & zones :", text: " optimisation chirurgicale de votre rayon d'action" },
      { bold: "Rapport mensuel d'appels", text: " et demandes d'itinéraire reçues" },
    ],
  },
];

/** A table cell: "check" renders the filled tick icon, otherwise plain text. */
export type Cell = { content: ReactNode | "check"; className?: string };

export const comparisonRows: [string, Cell, Cell, Cell][] = [
  ["Nombre de pages créées sur-mesure", { content: "5 pages" }, { content: "5 pages + articles réguliers", className: "font-bold" }, { content: "—", className: "text-secondary" }],
  ["Architecture technique < 1s (Core Web Vitals)", { content: "check" }, { content: "check" }, { content: "—", className: "text-secondary" }],
  ["Recherche approfondie des mots-clés de votre zone", { content: "check" }, { content: "check", className: "font-bold" }, { content: "Ciblage basique", className: "text-secondary" }],
  ["Optimisation Google Business Profile (Maps)", { content: "En option (+300 €)", className: "text-secondary" }, { content: "Inclus & Offert (6 mois)", className: "font-bold text-primary" }, { content: "check" }],
  ["Rédaction de contenus & cocons sémantiques mensuels", { content: "Lancement initial", className: "text-secondary" }, { content: "2 contenus / mois", className: "font-bold" }, { content: "—", className: "text-secondary" }],
  ["Netlinking & acquisition de citations locales", { content: "—", className: "text-secondary" }, { content: "check", className: "font-bold" }, { content: "Citations Maps", className: "text-secondary" }],
  ["Rapport de positions mensuel vidéo Loom", { content: "—", className: "text-secondary" }, { content: "check", className: "font-bold" }, { content: "Stats mensuelles PDF" }],
  ["Ligne directe WhatsApp / Téléphone avec votre artisan", { content: "Durant le projet" }, { content: "Illimité 6 mois", className: "font-bold" }, { content: "WhatsApp dédié" }],
  ["Délai moyen de mise en production", { content: "3 à 4 semaines", className: "font-bold" }, { content: "Site en 3 sem. + 6 mois SEO", className: "font-bold" }, { content: "7 jours ouvrés", className: "font-bold" }],
];

export const steps = [
  { title: "Diagnostic & Audit", text: "Visio de 30 minutes. Analyse des recherches locales de votre secteur, décorticage de vos concurrents et feuille de route limpide.", duration: "Durée : 30 min", accent: true },
  { title: "Conception & Validation", text: "Création de la maquette et de l'entonnoir de vente. Vous validez l'aspect visuel et le texte avant toute ligne de code technique.", duration: "Durée : 2 semaines", accent: false },
  { title: "Mise en ligne & SEO", text: "Déploiement sur serveur ultra-rapide, indexation instantanée sur Google Search Console et sécurisation intégrale.", duration: "Durée : 1 semaine", accent: false },
  { title: "Suivi & Prospects", text: "Montée des positions sur vos requêtes stratégiques. Réception des premiers appels directs et formulaires de devis qualifiés.", duration: "Durée : Continue", accent: true },
];

export const faqs = [
  { question: "Y a-t-il des frais mensuels cachés après la création ?", answer: "Non, absolument aucun. Pour le Site Vitrine SEO, vous ne réglez que les 2 200 € convenus. Le seul coût externe récurrent est votre nom de domaine et votre hébergement (environ 50 à 70 € par an, que vous payez directement au registrar à votre nom). Vous ne m'êtes redevable d'aucune rente mensuelle forcée." },
  { question: "Quand verrai-je les premiers résultats sur Google ?", answer: "En référencement local, la fiche Google Maps commence généralement à générer des interactions au bout de 2 à 4 semaines après optimisation. Pour le positionnement organique du site sur des requêtes concurrentielles (\"artisan peintre bordeaux\", \"plombier annecy\"), comptez entre 60 et 90 jours d'actions régulières pour dépasser des domaines installés depuis plusieurs années." },
  { question: "Suis-je propriétaire de mon site web ?", answer: "Oui, à 100%. Contrairement à de nombreuses agences qui vous louent votre site sous contrat de 48 mois, vous disposez ici de tous les accès administrateurs, du code et de vos contenus dès le solde de la commande. Vous êtes totalement indépendant." },
  { question: "Puis-je échelonner le paiement ?", answer: "Oui. Pour le Site Vitrine SEO, le paiement peut s'effectuer en 2 fois (50% au lancement, 50% à la mise en ligne) ou en 3 mensualités sans frais additionnels pour soulager votre trésorerie." },
  { question: "Que se passe-t-il après les 6 mois du Pack Première Page ?", answer: "Le contrat prend fin automatiquement, sans tacite reconduction. Vos positions acquises restent votre propriété. Nous faisons un bilan complet : si vous souhaitez poursuivre la maintenance SEO mensuelle pour consolider vos positions, nous continuons au mois le mois. Sinon, vous reprenez la main en totale liberté." },
];
