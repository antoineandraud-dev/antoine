import type { Metadata } from "next";
import { BeamsBackgroundDemo } from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Beams Background — démo",
  robots: { index: false, follow: false },
};

export default function BeamsDemoPage() {
  return <BeamsBackgroundDemo />;
}
