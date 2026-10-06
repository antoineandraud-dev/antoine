import { SiteFooter } from "./SiteFooter";
import { SiteHeader, type SitePage } from "./SiteHeader";

/** Layout of the secondary pages: floating header, content column, footer. */
export function PageShell({ active, children }: { active: SitePage; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
      <SiteHeader active={active} />
      <main className="w-full pt-16 bg-surface">
        <div className="flex flex-col w-full">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
