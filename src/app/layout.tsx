import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naga Studio — Sites web de prestige & conversion",
  description:
    "Naga Studio conçoit des sites web sur-mesure à fort magnétisme visuel, combinés à l'ingénierie du CRO.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`dark scroll-smooth ${spaceGrotesk.variable} ${plusJakarta.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-background font-body text-on-surface antialiased selection:bg-primary selection:text-white relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
