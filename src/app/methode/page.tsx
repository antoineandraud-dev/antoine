import type { Metadata } from "next";
import { Comparison } from "@/components/methode/Comparison";
import { Deliverables, MethodeFinalCta, Quote } from "@/components/methode/Closing";
import { MethodeHero } from "@/components/methode/Hero";
import { Problem } from "@/components/methode/Problem";
import { Steps } from "@/components/methode/Steps";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "La Méthode — Antoine A. / APEX",
  description:
    "5 étapes pour que votre téléphone sonne quand un client cherche votre métier dans votre ville.",
};

export default function MethodePage() {
  return (
    <PageShell active="methode">
      <MethodeHero />
      <Problem />
      <Steps />
      <Comparison />
      <Quote />
      <Deliverables />
      <MethodeFinalCta />
    </PageShell>
  );
}
