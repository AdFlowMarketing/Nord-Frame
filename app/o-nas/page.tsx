import { AboutPage } from "@/components/site/about-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "O nas",
  description:
    "Poznaj Nord Frame i sprawdź, jak budujemy domy szkieletowe, domki całoroczne i letniskowe z drewna dla inwestorów ze Śląska i Małopolski.",
  path: "/o-nas",
});

export default function AboutRoute() {
  return <AboutPage />;
}
