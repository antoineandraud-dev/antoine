"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export type MobileNavLink = { label: string; href: string; active?: boolean };

/**
 * Hamburger + dropdown shown below `lg`, where the inline nav is hidden.
 * The panel is positioned against the (relative) header pill that contains it.
 */
export function MobileNav({ links, cta }: { links: MobileNavLink[]; cta?: { label: string; href: string } }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-brand-black hover:bg-brand-pillBg transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav
          id={panelId}
          className="lg:hidden absolute left-0 right-0 top-full mt-2 rounded-3xl border border-brand-border bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3 flex flex-col"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-2xl text-sm transition-colors hover:bg-brand-pillBg hover:text-brand-black ${
                link.active ? "bg-brand-pillBg text-brand-black font-semibold" : "text-brand-muted font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {cta && (
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="sm:hidden mt-2 px-4 py-3 rounded-full bg-brand-lime text-brand-black text-sm font-bold text-center"
            >
              {cta.label}
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
