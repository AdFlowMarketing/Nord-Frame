import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  openGraphImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
  openGraphImage,
}: PageMetadataInput): Metadata {
  const image = openGraphImage ?? {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${title} - ${siteConfig.shortName}`,
  };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: openGraphTitle ?? `${title} | ${siteConfig.shortName}`,
      description: openGraphDescription ?? description,
      url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? openGraphTitle ?? `${title} | ${siteConfig.shortName}`,
      description: twitterDescription ?? openGraphDescription ?? description,
      images: [image.url],
    },
  };
}
