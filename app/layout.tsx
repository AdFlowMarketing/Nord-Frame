import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "domy szkieletowe",
    "domy prefabrykowane",
    "domy pod klucz",
    "budowa domu w 3 miesiące",
    "nowoczesne stodoły",
    "energooszczędne domy drewniane",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nord Frame - nowoczesne domy szkieletowe pod klucz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#173625",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full scroll-smooth">
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <a className="skip-link" href="#content">
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
