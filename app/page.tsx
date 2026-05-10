import { HomePage } from "@/components/site/home-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Domy szkieletowe i drewniane całoroczne",
  description:
    "Budujemy energooszczędne domy szkieletowe i drewniane domy całoroczne. Realizacje pod klucz, indywidualne projekty, sprawna organizacja budowy i przejrzysty kosztorys.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
