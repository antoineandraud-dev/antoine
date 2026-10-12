import { Comparatif } from "@/components/sections/Comparatif";
import { Contact } from "@/components/sections/Contact";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Methode } from "@/components/sections/Methode";
import { Offres } from "@/components/sections/Offres";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-32 pb-20">
        <Hero />
        <Methode />
        <Diagnostic />
        <Comparatif />
        <Offres />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
