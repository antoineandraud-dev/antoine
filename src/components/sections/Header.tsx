import { MobileNav } from "@/components/site/MobileNav";
import { navLinks } from "@/data/content";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-brand-border rounded-full py-2.5 px-4 sm:px-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex items-center justify-between transition-all">
        <a className="flex items-center gap-3 group" href="#">
          <div className="w-3.5 h-3.5 rounded-full bg-brand-lime shadow-[0_0_10px_#D9F944] ring-2 ring-brand-lime/40" />
          <div className="flex items-baseline whitespace-nowrap">
            <span className="font-bold text-base tracking-tight text-brand-black whitespace-nowrap">Antoine A.</span>
            <span className="ml-1 text-xs font-mono text-brand-muted font-medium">/ APEX</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8 whitespace-nowrap text-sm font-medium text-brand-muted">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:text-brand-black transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden xl:inline-block text-xs font-medium text-brand-muted">Prêt à dominer Google ?</span>
          <a
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap px-7 py-2 rounded-full bg-brand-lime text-brand-black font-semibold text-xs leading-5 tracking-tight shadow-sm hover:brightness-105 hover:scale-[1.02] transition-all"
            href="#contact"
          >
            Réserver un Appel
          </a>
          <MobileNav links={navLinks} cta={{ label: "Réserver un Appel", href: "#contact" }} />
        </div>
      </div>
    </header>
  );
}
