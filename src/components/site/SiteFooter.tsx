import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Méthode", href: "/methode" },
  { label: "Offres & Tarifs", href: "/offres" },
  { label: "Résultats", href: "/#resultats" },
  { label: "Réserver un créneau", href: "/diagnostic#reserver-form" },
];

const socialIcons = ["share", "mail", "alternate_email"];

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-2xl py-space-2xl shadow-[0_-1px_12px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col items-center text-center gap-space-xl">
        <div className="flex items-center gap-space-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(217,249,68,0.8)]" />
          <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
            Antoine A. <span className="text-secondary font-medium">/ APEX.SEO</span>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-space-lg">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-space-sm">
          {socialIcons.map((name) => (
            <div
              key={name}
              className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            >
              <Icon name={name} className="text-[20px]" />
            </div>
          ))}
        </div>
        <p className="font-body-sm text-body-sm text-secondary">
          © 2024 Antoine Andraud / APEX.SEO. Tous droits réservés. Artisan Web &amp; Domination SEO local à la
          performance.
        </p>
      </div>
    </footer>
  );
}
