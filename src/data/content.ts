export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "La Méthode", href: "/methode" },
  { label: "Le Diagnostic", href: "/diagnostic" },
  { label: "Résultats", href: "#resultats" },
  { label: "Offre & Tarifs", href: "/offres" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks: NavLink[] = [
  { label: "La Méthode", href: "/methode" },
  { label: "Le Diagnostic", href: "/diagnostic" },
  { label: "Résultats", href: "#resultats" },
  { label: "Offre & Tarifs", href: "/offres" },
  { label: "Réserver un créneau", href: "#contact" },
];

export const socials = [
  {
    label: "X (Twitter)",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3m1.37 9.74v-8.37H5.09v8.37h2.74z",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

export type Tone = "teal" | "lime" | "amber";

export const heroPills: { tone: Tone; label: string }[] = [
  { tone: "teal", label: "Zéro usine à gaz (0.6s)" },
  { tone: "lime", label: "Positions #1 ciblées Google" },
  { tone: "amber", label: "Audit stratégique 30 min offert" },
];

export const pillars: {
  icon: string;
  tag: string;
  title: string;
  text: string;
  metric: string;
  badge: string;
  tone: Tone;
}[] = [
  {
    icon: "speed",
    tag: "Pilier #01",
    title: "Vitesse Instantanée < 0.8s",
    text: "Zéro usine à gaz, zéro template WordPress alourdi par 40 extensions. Un code épuré au millimètre pour obtenir la note maximale de 100/100 sur Google Core Web Vitals.",
    metric: "Score Mobile PageSpeed",
    badge: "99 - 100 / 100",
    tone: "teal",
  },
  {
    icon: "account_tree",
    tag: "Pilier #02",
    title: "Silos Sémantiques & Mots-Clés",
    text: "Cartographie exhaustive des intentions d'achat de vos futurs clients. Chaque page cible une requête commerciale précise pour saturer la première page de Google.",
    metric: "Intention commerciale",
    badge: "Trafic 100% qualifié",
    tone: "lime",
  },
  {
    icon: "bolt",
    tag: "Pilier #03",
    title: "Copywriting Orienté Vente",
    text: "Un trafic sans conversion ne sert à rien. Les textes sont rédigés pour lever immédiatement les freins psychologiques, installer l'autorité et déclencher l'appel ou le devis.",
    metric: "Taux de conversion",
    badge: "x3 vs site classique",
    tone: "amber",
  },
];

export const traps: {
  icon: string;
  title: string;
  text: { before: string; strong?: string; after: string };
  result: string;
}[] = [
  {
    icon: "visibility_off",
    title: "Piège #01 : Le site fantôme",
    text: {
      before: "Vous avez payé une agence 4 000€ à 6 000€. Le design est « joli », mais vous enregistrez ",
      strong: "zéro appel entrant",
      after: ". Personne ne vous trouve sans taper votre nom exact.",
    },
    result: "Résultat : 0 contact intentionnel / semaine",
  },
  {
    icon: "hourglass_empty",
    title: "Piège #02 : L'usine à gaz lente",
    text: {
      before: "Un template surchargé qui met ",
      strong: "6 secondes à s'afficher",
      after: ". Google pénalise impitoyablement ces classements, et 53% des visiteurs mobiles quittent la page avant le premier mot.",
    },
    result: "Score Mobile moyen : 34/100 (Rejeté par Google)",
  },
  {
    icon: "groups_2",
    title: "Piège #03 : L'agence impersonnelle",
    text: {
      before:
        "Vous signez avec un commercial senior, puis votre dossier est confié à un stagiaire. À la moindre modification, on vous facture des frais opaques sans garantie de rentabilité.",
      after: "",
    },
    result: "Responsabilité client : Diluée & sans garantie",
  },
];

export const agencyPoints: { strong: string; text: string }[] = [
  { strong: "Score PageSpeed lent (40/100) :", text: "plugins inutiles, styles CSS redondants, lourdeur mobile." },
  { strong: "Textes génériques :", text: "jargon d'entreprise sans étude de mots-clés ni analyse d'intention d'achat." },
  {
    strong: "Zéro stratégie de conversion :",
    text: "un simple formulaire austère à 12 champs qui fait fuir 80% des visiteurs.",
  },
  { strong: "Intermédiaire multiple :", text: "chefs de projet juniors et délais d'attente interminables." },
];

export const artisanPoints: { strong: string; text: string }[] = [
  {
    strong: "Score Google PageSpeed 99/100 garanti :",
    text: "architecture épurée, affichage instantané sous 800ms.",
  },
  {
    strong: "Architecture sémantique en silos :",
    text: "cartographie chirurgicale des recherches pour capter les positions #1.",
  },
  {
    strong: "Copywriting psychologique :",
    text: "suppression des objections et parcours fluide menant au devis immédiat.",
  },
  {
    strong: "Accès direct à l'artisan :",
    text: "un canal WhatsApp / ligne directe avec la personne qui conçoit votre succès.",
  },
];

export const stats = [
  { value: "+320%", label: "Hausse trafic organique moyen" },
  { value: "90 Jours", label: "Délai médian pour le Top 3 ciblé" },
  { value: "100%", label: "Conformité Google Core Vitals" },
];

export type CaseRow = { label: string; value: string; valueClass: string; rowClass: string };

export const cases: {
  sector: string;
  region: string;
  title: string;
  text: string;
  rows: CaseRow[];
  impact: string;
}[] = [
  {
    sector: "Rénovation & BTP",
    region: "Rhône-Alpes",
    title: "Artisan Rénovation Haut de Gamme",
    text: "Invisible en page 4 de Google malgré 15 ans de savoir-faire. Mise en place d'une structure en silos géolocalisés et vitesse mobile de 0.6s.",
    rows: [
      { label: "Position avant :", value: "Page 4 (Pos. 38)", valueClass: "text-red-500 font-semibold", rowClass: "text-brand-muted" },
      { label: "Position actuelle :", value: "#1 sur 12 requêtes", valueClass: "text-teal-700", rowClass: "text-brand-black font-semibold" },
      { label: "Demandes :", value: "18 devis / mois", valueClass: "", rowClass: "text-brand-black font-bold" },
    ],
    impact: "Impact : Panier moyen de 15 000€ par chantier.",
  },
  {
    sector: "Finance & Conseil",
    region: "Île-de-France",
    title: "Cabinet Comptable & Conseil",
    text: "Site WordPress vieillissant générant des spams. Refonte intégrale axée sur les créateurs d'entreprise et les professions libérales.",
    rows: [
      { label: "Trafic SEO :", value: "+410% en 4 mois", valueClass: "text-brand-black font-semibold", rowClass: "text-brand-muted" },
      { label: "Taux conversion :", value: "7.2% des visiteurs", valueClass: "text-teal-700", rowClass: "text-brand-black font-semibold" },
      { label: "Résultat :", value: "Planning associé saturé", valueClass: "", rowClass: "text-brand-black font-bold" },
    ],
    impact: "Impact : 24 nouveaux dossiers récurrents annuels.",
  },
  {
    sector: "Industrie B2B",
    region: "National",
    title: "Fabricant Matériel Industriel",
    text: "Zéro présence digitale hors prospection froide. Déploiement d'un écosystème technique ciblant directeurs d'usine et acheteurs B2B.",
    rows: [
      { label: "Appels d'offres :", value: "3 contrats signés T1", valueClass: "text-brand-black font-semibold", rowClass: "text-brand-muted" },
      { label: "Vitesse mobile :", value: "100/100 Core Vitals", valueClass: "text-teal-700", rowClass: "text-brand-black font-semibold" },
      { label: "ROI 1ère année :", value: "x14 l'investissement", valueClass: "", rowClass: "text-brand-black font-bold" },
    ],
    impact: "Impact : Contrats grands comptes signés (180k€).",
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Combien de temps faut-il pour atteindre la première page Google ?",
    answer:
      "Le SEO est un levier d'acquisition durable. En moyenne, les premiers gains de positions sont visibles entre 30 et 45 jours après la mise en ligne. Pour atteindre le Top 3 et la 1ère place sur des mots-clés transactionnels locaux ou régionaux, comptez entre 60 et 120 jours selon la concurrence du secteur.",
  },
  {
    question: "Pourquoi choisir un solopreneur plutôt qu'une grosse agence web ?",
    answer:
      "Une agence facture ses locaux, ses commerciaux et sa hiérarchie lourde, ce qui se traduit par des coûts élevés et un travail souvent sous-traité. Avec moi, vous êtes en contact direct avec l'expert qui code votre site, optimise le référencement et rédige vos pages. Réactivité garantie sous 2h et engagement personnel sur vos résultats.",
  },
  {
    question: "Et si j'ai déjà un site existant ?",
    answer:
      "C'est un excellent point de départ ! Nous conservons l'autorité historique de votre domaine via un plan de redirection 301 strict (zéro perte de trafic, zéro erreur 404). Nous remplaçons simplement l'ancienne structure lente par un moteur moderne haute vitesse.",
  },
  {
    question: "Suis-je propriétaire à 100% de mon site et de mon nom de domaine ?",
    answer:
      "Absolument, sans aucune condition restrictive. Dès la livraison, vous recevez les accès administrateurs complets, le code source propre et la pleine propriété administrative. Aucun abonnement caché, aucun piège contractuel.",
  },
];

export const contactPoints = [
  { icon: "timer", label: "Format visio rapide 30 minutes chrono" },
  { icon: "task_alt", label: "Rapport PDF de vos fuites de trafic inclus" },
  { icon: "verified_user", label: "100% sans engagement et confidentiel" },
];
