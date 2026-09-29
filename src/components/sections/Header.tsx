import Image from "next/image";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#constat", label: "Pourquoi nous" },
  { href: "#approche", label: "Approche" },
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070708]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="h-20 w-full max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="#">
          <Image
            src="/images/logo.png"
            alt="Naga Studio Logo"
            width={360}
            height={80}
            priority
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase font-display text-on-surface-variant">
          {links.map((l) => (
            <a key={l.href} className="hover:text-primary transition-colors duration-200" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            href="#contact"
            icon="arrow_forward"
            disc="light"
            iconSize="text-[15px]"
            className="gap-2.5 px-5 py-2.5 text-[13px] shadow-lg shadow-primary/25 hover:scale-[1.03]"
          >
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </header>
  );
}
