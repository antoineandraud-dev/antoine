import { Icon } from "@/components/ui/Icon";
import { BookingLink } from "@/components/ui/BookingLink";
import { contactPoints } from "@/data/content";

export function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="contact">
      <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-lime/15 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-brand-lime mb-4">
              Session Stratégique Offerte
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              Réservez votre audit SEO &amp; conversion (30 min).
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Je décortique personnellement votre présence en ligne et vos concurrents directs. Aucun discours
              commercial agressif : 3 recommandations concrètes applicables dès le lendemain.
            </p>
            <div className="space-y-2.5 text-xs text-gray-300">
              {contactPoints.map((point) => (
                <div key={point.icon} className="flex items-center gap-2">
                  <Icon name={point.icon} className="text-brand-lime text-base" />
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white/10 border border-white/15 text-center">
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Choisissez directement un créneau dans mon agenda. La réservation est confirmée par email.
              </p>
              <BookingLink className="w-full py-4 rounded-full bg-brand-lime text-brand-black font-bold text-sm tracking-tight hover:scale-[1.02] hover:bg-[#d0f230] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(217,249,68,0.3)]">
                <Icon name="rocket_launch" className="text-base" />
                <span>Réserver mon audit gratuit (30 min)</span>
              </BookingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
