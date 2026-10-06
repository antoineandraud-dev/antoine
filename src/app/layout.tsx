import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antoine A. — Artisan Web & Domination SEO pour TPE/PME",
  description:
    "Sites web conçus pour apparaître en haut de Google : vitesse, architecture sémantique et copywriting orienté vente pour TPE/PME.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`light scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#ffffff] font-sans text-brand-black antialiased selection:bg-brand-lime selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
