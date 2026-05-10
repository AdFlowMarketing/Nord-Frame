export type ProjectCard = {
  title: string;
  details: string;
  image: {
    src: string;
    alt: string;
  };
  href?: string;
  status?: "published" | "coming-soon";
  summary: string;
};

export const projectCards: readonly ProjectCard[] = [
  {
    title: "Dom szkieletowy 35 m² - Lubliniec",
    details: "35 m² • Lubliniec, woj. śląskie",
    href: "/realizacje/dom-35m2-lubliniec",
    status: "published",
    summary:
      "Kompaktowy dom szkieletowy, który dobrze sprawdza się jako mały dom szkieletowy bez pozwolenia, domek rekreacyjny lub inwestycja na działce.",
    image: {
      src: "/images/project-35-lubliniec.jpg",
      alt: "Dom szkieletowy 35 m² w Lublińcu",
    },
  },
  {
    title: "Dom szkieletowy 70 m² - Katowice",
    details: "70 m² • Katowice, woj. śląskie",
    status: "coming-soon",
    summary:
      "Funkcjonalny dom szkieletowy na zgłoszenie dla osób szukających wygodnej przestrzeni przy rozsądnym metrażu i niższych kosztach użytkowania.",
    image: {
      src: "/images/project-70-katowice.jpg",
      alt: "Dom szkieletowy 70 m² w Katowicach",
    },
  },
  {
    title: "Dom szkieletowy 120 m² - Gliwice",
    details: "120 m² • Gliwice, woj. śląskie",
    status: "coming-soon",
    summary:
      "Całoroczny dom szkieletowy dla rodziny, zaprojektowany z myślą o komforcie, energooszczędności i codziennej funkcjonalności.",
    image: {
      src: "/images/project-120-gliwice.jpg",
      alt: "Dom szkieletowy 120 m² w Gliwicach",
    },
  },
] as const;
