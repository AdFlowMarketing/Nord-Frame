import { Project35Page } from "@/components/site/project-35-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Realizacja: dom szkieletowy 35 m² w Lublińcu",
  description:
    "Poznaj realizację domu szkieletowego 35 m² w Lublińcu. Zobacz założenia projektu, zakres prac i efekt końcowy inwestycji Nord Frame.",
  path: "/realizacje/dom-35m2-lubliniec",
  openGraphTitle: "Dom szkieletowy 35 m² w Lublińcu | Nord Frame",
  openGraphDescription:
    "Kompaktowy dom całoroczny 35 m² zrealizowany w technologii szkieletowej przez Nord Frame.",
  openGraphImage: {
    url: "/images/project-35-lubliniec.jpg",
    width: 1200,
    height: 825,
    alt: "Dom szkieletowy 35 m² w Lublińcu",
  },
});

export default function Project35Route() {
  return <Project35Page />;
}
