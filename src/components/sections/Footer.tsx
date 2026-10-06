import { footerLinks } from "@/data/content";

const legalLinks = ["Mentions Légales", "Confidentialité", "CGV"];

export function Footer() {
  return (
    <footer className="w-full border-t border-brand-border bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-brand-lime" />
            <span className="font-extrabold text-brand-black tracking-tight text-base">Antoine A. / APEX.SEO</span>
            <span className="text-xs text-brand-muted font-medium">Artisan Web &amp; Domination SEO</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-brand-muted font-medium">
            {footerLinks.map((link) => (
              <a key={link.href} className="hover:text-brand-black transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <div>© 2024 Antoine Andraud — APEX.SEO. Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            {legalLinks.map((label) => (
              <a key={label} className="hover:text-brand-black transition-colors" href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
