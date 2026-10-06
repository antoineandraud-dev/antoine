import type { Metadata } from "next";
import { BookingForm } from "@/components/diagnostic/BookingForm";
import { BookingHero } from "@/components/diagnostic/BookingHero";
import { DiagnosticFaq, Errors, FaceToFace, QuoteBand, Timeline } from "@/components/diagnostic/Sections";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Le Diagnostic offert — Antoine A. / APEX",
  description:
    "30 minutes pour voir exactement pourquoi vos concurrents vous devancent sur Google. Réservez votre diagnostic gratuit.",
};

export default function DiagnosticPage() {
  return (
    <PageShell active="diagnostic">
      <BookingHero />
      <Timeline />
      <Errors />
      <QuoteBand />
      <FaceToFace />
      <DiagnosticFaq />
      <BookingForm />
    </PageShell>
  );
}
