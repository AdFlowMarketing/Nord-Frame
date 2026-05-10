export const siteConfig = {
  name: "Domy szkieletowe i drewniane całoroczne | Nord Frame",
  shortName: "Nord Frame",
  description:
    "Budujemy energooszczędne domy szkieletowe i drewniane domy całoroczne. Realizacje pod klucz, indywidualne projekty, sprawna organizacja budowy i przejrzysty kosztorys.",
  url: "https://nordframe.pl",
  email: "marek.nordframe@gmail.com",
  phoneLabel: "575 338 245",
  phoneHref: "+48575338245",
  address: {
    street: "ul. Spiżowa 7",
    postalCode: "41-706",
    city: "Ruda Śląska",
    country: "Polska",
  },
  serviceLocations: [
    "Ruda Śląska",
    "Katowice",
    "Gliwice",
    "Lubliniec",
    "Żywiec",
    "Śląsk",
    "Małopolska",
  ],
  openingHours: [
    { label: "Pon - Pt", value: "08:00 - 16:00" },
    { label: "Sobota", value: "Po umówieniu" },
    { label: "Niedziela", value: "Zamknięte" },
  ],
  maps: {
    directionsUrl:
      "https://maps.google.com/?q=ul.+Spi%C5%BCowa+7,+41-706+Ruda+%C5%9Al%C4%85ska,+Polska",
    officeEmbedUrl:
      "https://www.google.com/maps?q=ul.+Spi%C5%BCowa+7,+41-706+Ruda+%C5%9Al%C4%85ska,+Polska&z=15&output=embed",
    regionEmbedUrl:
      "https://www.google.com/maps?q=ul.+Spi%C5%BCowa+7,+41-706+Ruda+%C5%9Al%C4%85ska,+Polska&z=9&output=embed",
  },
} as const;

export const siteNavigation = [
  { label: "O nas", href: "/o-nas" },
  { label: "Technologia", href: "/technologia" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerNavigation = [
  {
    title: "Oferta",
    links: [
      { label: "O Nord Frame", href: "/o-nas" },
      { label: "Technologia budowy", href: "/technologia" },
      { label: "Realizacje", href: "/realizacje" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Lokalizacje",
    links: [
      { label: "Ruda Śląska", href: "/kontakt" },
      { label: "Katowice", href: "/kontakt" },
      { label: "Gliwice", href: "/kontakt" },
      { label: "Lubliniec", href: "/kontakt" },
      { label: "Żywiec", href: "/kontakt" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: siteConfig.phoneLabel, href: `tel:${siteConfig.phoneHref}` },
      { label: "Umów konsultację", href: "/kontakt" },
    ],
  },
] as const;
