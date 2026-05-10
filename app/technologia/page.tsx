import { TechnologyPage } from "@/components/site/technology-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Technologia budowy domów szkieletowych",
  description:
    "Sprawdź, jak powstaje dom szkieletowy, z jakich materiałów się go buduje i czym różni się od budynku murowanego pod względem kosztu, energetyki i procesu realizacji.",
  path: "/technologia",
});

export default function TechnologyRoute() {
  return <TechnologyPage />;
}
