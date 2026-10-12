import { booking } from "@/config/site";

/** Bouton/lien de réservation : ouvre Calendly dans un nouvel onglet. */
export function BookingLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      className={className}
      href={booking.href}
      {...(booking.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
