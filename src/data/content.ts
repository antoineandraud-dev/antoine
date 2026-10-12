export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "La Méthode", href: "/methode" },
  { label: "Le Diagnostic", href: "/diagnostic" },
  { label: "Offre & Tarifs", href: "/offres" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks: NavLink[] = [
  { label: "La Méthode", href: "/methode" },
  { label: "Le Diagnostic", href: "/diagnostic" },
  { label: "Offre & Tarifs", href: "/offres" },
  { label: "Réserver un créneau", href: "#contact" },
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
    icon: "search",
    tag: "Étape 01",
    title: "Être trouvé",
    text: "SEO local. Chaque service et chaque ville a sa page, pour apparaître quand on cherche exactement ce que vous vendez.",
    metric: "Visibilité locale",
    badge: "Une page par ville",
    tone: "lime",
  },
  {
    icon: "speed",
    tag: "Étape 02",
    title: "Rassurer en 3 secondes",
    text: "Un site rapide, clair et lisible sur mobile : vos visiteurs comprennent tout de suite ce que vous faites et à qui vous le proposez.",
    metric: "Vitesse sur mobile",
    badge: "Objectif : plus de 90",
    tone: "teal",
  },
  {
    icon: "call",
    tag: "Étape 03",
    title: "Déclencher l'appel",
    text: "Des textes écrits pour lever les doutes et un parcours qui mène à l'appel ou au devis.",
    metric: "Parcours visiteur",
    badge: "Appel ou devis",
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
  { strong: "Site lent :", text: "plugins inutiles, styles CSS redondants, lourdeur mobile." },
  { strong: "Textes génériques :", text: "jargon d'entreprise sans étude de mots-clés ni analyse d'intention d'achat." },
  {
    strong: "Zéro stratégie de conversion :",
    text: "un formulaire austère à rallonge qui fait fuir les visiteurs.",
  },
  { strong: "Intermédiaire multiple :", text: "chefs de projet juniors et délais d'attente interminables." },
];

export const artisanPoints: { strong: string; text: string }[] = [
  {
    strong: "Je comprends les enjeux de votre site :",
    text: "je pars de votre activité et de vos clients, pas d'un modèle de site tout fait.",
  },
  {
    strong: "Je vous place sur Google :",
    text: "une page par service et par ville, pour apparaître quand on cherche exactement ce que vous vendez.",
  },
  {
    strong: "Je pense le site pour convertir :",
    text: "rapide sur mobile (objectif plus de 90), des textes qui lèvent les doutes et un parcours qui mène à l'appel ou au devis.",
  },
  {
    strong: "Accès direct :",
    text: "vous échangez directement avec moi, par WhatsApp ou par téléphone, du début à la fin du projet.",
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
      "Une agence facture ses locaux, ses commerciaux et sa hiérarchie lourde, ce qui se traduit par des coûts élevés et un travail souvent sous-traité. Avec moi, vous parlez directement à la personne qui code votre site, optimise le référencement et rédige vos pages. Réactivité garantie sous 2h et engagement personnel sur vos résultats.",
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
