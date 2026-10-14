import { Icon } from "@/components/ui/Icon";
import { SectionTag } from "@/components/ui/Badge";
import { BookingLink } from "@/components/ui/BookingLink";

type Offer = {
  tag: string;
  title: string;
  subtitle: string;
  audience: string;
  price: React.ReactNode;
  priceNote: string;
  features: React.ReactNode[];
  highlighted?: boolean;
};

const offers: Offer[] = [
  {
    tag: "Offre #1",
    title: "Site Vitrine SEO",
    subtitle: "Le site qui travaille pour vous dès le premier jour.",
    audience: "Vous n'avez pas de site, ou il est dépassé.",
    price: <>2 200 €</>,
    priceNote: "Paiement unique",
    features: [
      "5 pages pensées pour vous faire appeler",
      "Textes rédigés pour vous",
      "Visible sur Google dans votre zone",
      "Rapide et lisible sur mobile",
      "Planning annoncé dès le départ",
      "Le site vous appartient",
    ],
  },
  {
    tag: "Offre #2",
    title: "Pack Visibilité",
    subtitle: "Le site, puis 6 mois de SEO pour être mieux trouvé.",
    audience: "Vous voulez être trouvé, mois après mois.",
    price: (
      <>
        2 200 € + 600 €<span className="text-sm font-normal text-brand-muted">/mois</span>
      </>
    ),
    priceNote: "Pendant 6 mois",
    features: [
      <strong key="all" className="font-bold">
        Tout le Site Vitrine SEO, plus :
      </strong>,
      "Du SEO chaque mois sur vos recherches clés",
      "Fiche Google Business gérée, offerte",
      "Rapport mensuel : positions, visites, appels",
      "Un point de 15 min chaque mois",
    ],
    highlighted: true,
  },
  {
    tag: "Offre #3",
    title: "Fiche Google Business",
    subtitle: "Soyez visible quand on cherche près de chez vous.",
    audience: "Vous avez un site, mais peu de visibilité locale.",
    price: (
      <>
        300 € <span className="text-sm font-normal text-brand-muted">/ mois</span>
      </>
    ),
    priceNote: "Engagement minimum 3 mois",
    features: [
      "Fiche optimisée de A à Z",
      "Publications et avis gérés pour vous",
      "Suivi mensuel : vues, appels, itinéraires",
      "Vous ne touchez à rien",
    ],
  },
];

function OfferCard({ offer }: { offer: Offer }) {
  const { highlighted } = offer;
  return (
    <div
      className={
        highlighted
          ? "bg-white border-2 border-brand-lime rounded-3xl p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.06)] relative md:scale-[1.03] transition-all"
          : "bg-white border border-brand-border rounded-3xl p-8 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-all"
      }
    >
      <div>
        {highlighted && (
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-brand-lime text-brand-black text-xs font-bold tracking-tight shadow-sm uppercase font-mono">
            LE PLUS CHOISI
          </div>
        )}
        <div className="mb-6">
          <span
            className={`text-xs font-mono font-bold uppercase tracking-wider ${
              highlighted ? "text-brand-black" : "text-brand-muted"
            }`}
          >
            {offer.tag}
          </span>
          <h3 className="text-xl font-bold text-brand-black mt-1">{offer.title}</h3>
          <p className="text-xs sm:text-sm text-brand-muted mt-2">{offer.subtitle}</p>
          <div className="mt-4 rounded-xl bg-brand-pillBg px-3 py-2.5">
            <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-muted">
              Pour vous si
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-black">{offer.audience}</span>
          </div>
        </div>
        <div className="mb-6 pb-6 border-b border-brand-border">
          <div className="text-3xl font-extrabold text-brand-black tracking-tight">{offer.price}</div>
          <div className="text-xs text-brand-muted mt-1">{offer.priceNote}</div>
        </div>
        <ul className="space-y-3.5 text-sm text-brand-black mb-8">
          {offer.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <Icon name="check_circle" className="text-base text-brand-black shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <BookingLink
          className={
            highlighted
              ? "w-full py-3.5 rounded-full bg-brand-lime text-brand-black font-bold text-xs leading-5 tracking-tight shadow-[0_4px_20px_rgba(217,249,68,0.45)] hover:scale-105 hover:bg-[#d0f230] transition-all flex items-center justify-center gap-2 text-center"
              : "w-full py-3.5 rounded-full bg-white border border-brand-border text-brand-black font-semibold text-xs leading-5 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-center"
          }
        >
          Réserver mon audit gratuit (30 min)
        </BookingLink>
      </div>
    </div>
  );
}

export function Offres() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="offre">
      <div className="text-center mb-12">
        <SectionTag className="bg-lime-100 text-lime-900 border border-lime-300">TARIFS CLAIRS &amp; TRANSPARENTS</SectionTag>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3">
          Trois façons de passer devant vos concurrents sur Google
        </h2>
        <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Des tarifs clairs, sans frais cachés. Vous savez ce que vous payez et ce que vous recevez.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pillBg border border-brand-border text-xs sm:text-sm text-brand-muted font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-lime shrink-0" />
          <span>
            Pas sûr de l&apos;offre qu&apos;il vous faut ? Je regarde votre situation sur Google en 30 minutes et je
            vous dis laquelle a du sens.
          </span>
        </div>
      </div>
    </section>
  );
}
