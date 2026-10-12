/**
 * Liens externes du site. À renseigner :
 *  - bookingUrl  : lien de réservation Calendly (ex. https://calendly.com/votre-nom/30min)
 *  - linkedinUrl : profil LinkedIn affiché dans le footer
 */
export const siteConfig = {
  bookingUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/antoine-andraud/",
};

/**
 * Tant que le lien Calendly n'est pas renseigné, les boutons de réservation ramènent à la section contact,
 * qui propose alors de prendre contact via LinkedIn.
 */
export const booking = {
  href: siteConfig.bookingUrl || "/#contact",
  external: Boolean(siteConfig.bookingUrl),
};
