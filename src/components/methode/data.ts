export const problems = [
  { icon: "visibility_off", title: "Vous n'apparaissez pas", text: "Un client tape votre métier + votre ville. Google lui montre trois entreprises sur la carte, puis une liste de sites. Pas vous ? Il ne sait même pas que vous existez.", result: "0 visibilité locale" },
  { icon: "contact_support", title: "Votre site ne répond à aucune recherche", text: "Un site « joli » qui présente votre entreprise ne suffit pas. Google a besoin de pages qui répondent à ce que vos clients tapent vraiment.", result: "Hors des radars de recherche" },
  { icon: "call_missed", title: "Le client appelle le premier qu'il voit", text: "Il ne compare pas dix sites. Il clique sur l'un des premiers résultats et il appelle.", result: "Appel manqué au profit d'un rival" },
];

export type Step = {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  doIcon: string;
  doText: string;
  gainIcon: string;
  gainText: string;
};

export const steps: Step[] = [
  { number: "01", title: "Je regarde où vous en êtes", subtitle: "Audit sans filtre", doIcon: "checklist", doText: "Je tape votre métier dans votre ville, comme vos clients.", gainIcon: "trending_up", gainText: "Vous voyez enfin qui prend vos appels, et pourquoi." },
  { number: "02", title: "Je choisis les recherches qui rapportent", subtitle: "Ciblage de rentabilité", doIcon: "filter_alt", doText: "Je cible les requêtes de clients prêts à demander un devis.", gainIcon: "payments", gainText: "Vous ne visez pas la visibilité pour le plaisir, mais celle qui remplit le carnet." },
  { number: "03", title: "Je construis votre site autour de ces recherches", subtitle: "Architecture conversion", doIcon: "construction", doText: "Chaque page répond à une recherche précise et pousse à l'appel ou au devis.", gainIcon: "speed", gainText: "Un site rapide, clair sur mobile, que Google comprend du premier coup." },
  { number: "04", title: "Je renforce votre fiche Google", subtitle: "Domination Google Map", doIcon: "pin_drop", doText: "J'optimise votre fiche, celle qui apparaît sur la carte avant les sites.", gainIcon: "star", gainText: "Vous êtes visible là où les clients regardent en premier." },
  { number: "05", title: "Je fais monter votre position, mois après mois", badge: "Étape incluse dans le Pack Première Page", doIcon: "tune", doText: "J'ajuste, je renforce, je suis vos positions.", gainIcon: "military_tech", gainText: "Vous montez, puis vous restez devant." },
];

export const classicPoints = [
  "Présente votre entreprise",
  "Pages créées « au feeling »",
  "Visible si on tape votre nom",
  "Fiche Google laissée de côté",
  "Vous attendez que ça marche",
  "Un joli site en ligne",
];

export const methodPoints = [
  "Répond à ce que vos clients cherchent",
  "Chaque page cible une recherche précise",
  "Visible quand on tape votre métier + votre ville",
  "Fiche Google optimisée",
  "Vos positions sont suivies et ajustées",
  "Un site qui apporte des appels",
];

export const deliverables = [
  { icon: "calendar_today", title: "Un site pensé pour le référencement dès le premier jour" },
  { icon: "target", title: "Des pages qui visent vos recherches rentables" },
  { icon: "storefront", title: "Une fiche Google qui travaille pour vous" },
  { icon: "person", title: "Un seul interlocuteur, de la stratégie à la mise en ligne" },
];
