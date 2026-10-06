import Link from "next/link";

export type SitePage = "accueil" | "methode" | "diagnostic" | "resultats" | "offres" | "faq";

const links: { page: SitePage; label: string; href: string }[] = [
  { page: "accueil", label: "Accueil", href: "/" },
  { page: "methode", label: "La Méthode", href: "/methode" },
  { page: "diagnostic", label: "Le Diagnostic", href: "/diagnostic" },
  { page: "resultats", label: "Résultats", href: "/#resultats" },
  { page: "offres", label: "Offres & Tarifs", href: "/offres" },
  { page: "faq", label: "FAQ", href: "/#faq" },
];

/** Floating header shared by the secondary pages ("Studio Minimal" design). */
export function SiteHeader({ active }: { active: SitePage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-space-sm px-gutter-mobile lg:px-gutter">
      <div className="h-16 w-full max-w-[1180px] bg-surface-container-lowest/90 backdrop-blur-xl rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.05)] px-space-lg flex items-center justify-between transition-all">
        <Link href="/" className="flex items-center gap-space-sm">
          <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_12px_rgba(217,249,68,0.8)]" />
          <span className="font-headline-sm text-[16px] md:text-headline-sm tracking-tight font-extrabold text-on-surface whitespace-nowrap">
            Antoine A. <span className="text-secondary font-medium">/ APEX</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-space-md whitespace-nowrap">
          {links.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              className={`font-label-md text-label-md px-3 py-1.5 rounded-full ${
                link.page === active
                  ? "bg-surface-container text-on-surface font-semibold"
                  : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/diagnostic#reserver-form"
          className="inline-flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold tracking-tight shadow-sm hover:brightness-105 hover:scale-[1.02] transition-all"
        >
          Réserver un Appel
        </Link>
      </div>
    </header>
  );
}
