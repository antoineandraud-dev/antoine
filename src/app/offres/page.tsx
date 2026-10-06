import type { Metadata } from "next";
import { OffresFaq } from "@/components/offres/OffresFaq";
import { OffresFinalCta } from "@/components/offres/FinalCta";
import { ComparisonTable } from "@/components/offres/ComparisonTable";
import { OffresHero } from "@/components/offres/Hero";
import { PricingCards } from "@/components/offres/PricingCards";
import { Process } from "@/components/offres/Process";
import { Reassurance } from "@/components/offres/Reassurance";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Offres & Tarifs — Antoine A. / APEX",
  description:
    "Trois façons de passer devant vos concurrents sur Google : site vitrine SEO, pack première page et fiche Google Business.",
};

export default function OffresPage() {
  return (
    <PageShell active="offres">
      <OffresHero />
      <PricingCards />
      <Reassurance />
      <ComparisonTable />
      <Process />
      <OffresFaq />
      <OffresFinalCta />
    </PageShell>
  );
}
