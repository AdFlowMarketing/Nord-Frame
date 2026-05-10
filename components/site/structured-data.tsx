import { siteConfig } from "@/lib/site";
import type { ProjectCard } from "@/lib/projects";

export type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ProjectStructuredDataInput = {
  title: string;
  description: string;
  path: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.shortName,
    description: siteConfig.description,
    inLanguage: "pl-PL",
  };
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneLabel,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/nord-frame-logo-header.png"),
    },
    image: absoluteUrl("/images/hero-section-dom-szkieletowy.png"),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: "PL",
    },
    areaServed: siteConfig.serviceLocations.map((location) => ({
      "@type": "AdministrativeArea",
      name: location,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneLabel,
        email: siteConfig.email,
        contactType: "customer support",
        areaServed: "PL",
        availableLanguage: "pl-PL",
      },
    ],
  };
}

function breadcrumbNode(items: readonly BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqNode(faq: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function pageNode(input: {
  type: string;
  id: string;
  path: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": input.type,
    "@id": `${siteConfig.url}${input.id}`,
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    inLanguage: "pl-PL",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(input.image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(input.image),
          },
        }
      : {}),
  };
}

export function HomeStructuredData({ faq }: { faq: readonly FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "WebPage",
        id: "/#webpage",
        path: "/",
        name: "Domy szkieletowe i drewniane całoroczne",
        description: siteConfig.description,
        image: "/images/hero-section-dom-szkieletowy.png",
      }),
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "Budowa domów szkieletowych i drewnianych domów całorocznych",
        description: siteConfig.description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: siteConfig.serviceLocations.map((location) => ({
          "@type": "AdministrativeArea",
          name: location,
        })),
        serviceType: [
          "Domy szkieletowe",
          "Drewniane domy całoroczne",
          "Domy pod klucz",
          "Indywidualne projekty domów",
        ],
      },
      faqNode(faq),
    ],
  };

  return <JsonLd data={data} />;
}

export function ContactStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "ContactPage",
        id: "/kontakt#webpage",
        path: "/kontakt",
        name: "Kontakt | Nord Frame",
        description:
          "Skontaktuj się z Nord Frame i porozmawiaj o budowie domu szkieletowego, zakresie prac i możliwych rozwiązaniach.",
      }),
      breadcrumbNode([
        { name: "Strona główna", path: "/" },
        { name: "Kontakt", path: "/kontakt" },
      ]),
    ],
  };

  return <JsonLd data={data} />;
}

export function AboutStructuredData({ faq }: { faq: readonly FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "AboutPage",
        id: "/o-nas#webpage",
        path: "/o-nas",
        name: "O nas | Nord Frame",
        description:
          "Poznaj Nord Frame i sprawdź, jak budujemy domy szkieletowe, domki całoroczne i letniskowe z drewna dla inwestorów ze Śląska i Małopolski.",
        image: "/images/o-nas-banner.png",
      }),
      breadcrumbNode([
        { name: "Strona główna", path: "/" },
        { name: "O nas", path: "/o-nas" },
      ]),
      faqNode(faq),
    ],
  };

  return <JsonLd data={data} />;
}

export function TechnologyStructuredData({
  faq,
}: {
  faq: readonly FaqItem[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "WebPage",
        id: "/technologia#webpage",
        path: "/technologia",
        name: "Technologia budowy domów szkieletowych | Nord Frame",
        description:
          "Sprawdź, jak powstaje dom szkieletowy, z jakich materiałów się go buduje i czym różni się od budynku murowanego pod względem kosztu, energetyki i procesu realizacji.",
        image: "/images/konstrukcja-dom-szkieletowy-35m2-Lubliniec.jpg",
      }),
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/technologia#service`,
        name: "Technologia budowy domów szkieletowych",
        description:
          "Projektowanie i realizacja domów szkieletowych z naciskiem na trwałość konstrukcji, energooszczędność i przewidywalny proces budowy.",
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: siteConfig.serviceLocations.map((location) => ({
          "@type": "AdministrativeArea",
          name: location,
        })),
      },
      breadcrumbNode([
        { name: "Strona główna", path: "/" },
        { name: "Technologia", path: "/technologia" },
      ]),
      faqNode(faq),
    ],
  };

  return <JsonLd data={data} />;
}

export function ProjectsStructuredData({
  projects,
}: {
  projects: readonly ProjectCard[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "CollectionPage",
        id: "/realizacje#webpage",
        path: "/realizacje",
        name: "Realizacje domów szkieletowych | Nord Frame",
        description:
          "Zobacz wybrane realizacje domów szkieletowych Nord Frame: kompaktowe domy całoroczne, projekty rodzinne i nowoczesne konstrukcje drewniane.",
        image: "/images/project-35-lubliniec.jpg",
      }),
      breadcrumbNode([
        { name: "Strona główna", path: "/" },
        { name: "Realizacje", path: "/realizacje" },
      ]),
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/realizacje#projects`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.summary,
          ...(project.href ? { url: absoluteUrl(project.href) } : {}),
        })),
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function ProjectStructuredData({
  title,
  description,
  path,
  image,
}: ProjectStructuredDataInput) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      pageNode({
        type: "WebPage",
        id: `${path}#webpage`,
        path,
        name: `${title} | ${siteConfig.shortName}`,
        description,
        image: image.src,
      }),
      breadcrumbNode([
        { name: "Strona główna", path: "/" },
        { name: "Realizacje", path: "/realizacje" },
        { name: title, path },
      ]),
      {
        "@type": "CreativeWork",
        "@id": `${siteConfig.url}${path}#project`,
        name: title,
        description,
        url: absoluteUrl(path),
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(image.src),
          width: image.width,
          height: image.height,
          caption: image.alt,
        },
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return <JsonLd data={data} />;
}
