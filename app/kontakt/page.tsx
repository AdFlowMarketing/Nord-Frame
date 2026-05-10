import { ContactPage } from "@/components/site/contact-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z Nord Frame i porozmawiaj o budowie domu szkieletowego. Sprawdź dane kontaktowe, godziny otwarcia i wyślij zapytanie.",
  path: "/kontakt",
  openGraphTitle: "Kontakt | Nord Frame",
  openGraphDescription:
    "Dane kontaktowe Nord Frame, godziny otwarcia i formularz dla inwestorów planujących dom szkieletowy.",
});

export default function ContactRoute() {
  return <ContactPage />;
}
