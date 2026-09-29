import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#050506]/80 border-t border-white/[0.08]">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 py-16 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 flex flex-col gap-4">
            <a className="flex items-center gap-3" href="#">
              <Image src="/images/logo.png" alt="Naga Studio Logo" width={360} height={80} className="h-8 w-auto object-contain" />
            </a>
            <p className="font-body text-xs md:text-sm text-on-surface-variant max-w-md leading-relaxed">
              Studio de design web d&apos;élite forgeant des architectures numériques singulières, taillées pour l&apos;autorité et la conversion haut de gamme.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-display text-[11px] uppercase tracking-wider text-on-surface-variant">Disponibilité : T2 2025</span>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-wider text-white font-semibold">Contact direct</span>
            <a className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors" href="mailto:hello@nagastudio.fr">
              hello@nagastudio.fr
            </a>
            <span className="font-body text-xs text-on-surface-variant">Paris / International</span>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-wider text-white font-semibold">Réseaux &amp; Plateformes</span>
            <div className="flex flex-col gap-1 font-body text-sm text-on-surface-variant">
              <a className="hover:text-white transition-colors" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a className="hover:text-white transition-colors" href="https://x.com" rel="noopener noreferrer" target="_blank">Twitter / X</a>
              <a className="hover:text-white transition-colors" href="#">ReadCV</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-on-surface-variant">
          <span>© 2025 Naga Studio. Tous droits réservés. Inspiré de l&apos;excellence Fluxora.</span>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors uppercase font-display text-[11px]" href="#">Mentions légales</a>
            <a className="hover:text-white transition-colors uppercase font-display text-[11px]" href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
