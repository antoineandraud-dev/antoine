import { Approche } from "@/components/sections/Approche";
import { Constat } from "@/components/sections/Constat";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Methode } from "@/components/sections/Methode";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";

export default function Home() {
  return (
    <>
      {/* Top ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-b from-[#ff5722]/15 via-[#ff3d00]/5 to-transparent blur-[160px] pointer-events-none z-0" />
      <Header />
      <main className="w-full pt-20 relative z-10">
        <Hero />
        <Constat />
        <Approche />
        <Services />
        <Methode />
        <Studio />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
