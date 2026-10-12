/**
 * Liens externes du site. À renseigner :
 *  - bookingUrl  : lien de réservation Calendly (ex. https://calendly.com/votre-nom/30min)
 *  - linkedinUrl : profil LinkedIn affiché dans le footer
 */
export const siteConfig = {
  bookingUrl: "",
  linkedinUrl: "https://www.linkedin.com/",
};

/** Tant que le lien Calendly n'est pas renseigné, les boutons ramènent à la section de réservation. */
export const booking = {
  href: siteConfig.bookingUrl || "/#contact",
  external: Boolean(siteConfig.bookingUrl),
};
