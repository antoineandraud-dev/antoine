import type { Metadata } from "next";
import LinkeCash from "./LinkeCash";

export const metadata: Metadata = { title: "Linkecash" };

export default function Page() {
  return <LinkeCash />;
}
