import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  LeafIcon,
  RulerIcon,
  ShieldIcon,
  WindIcon,
} from "@/components/site/icons";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteCta } from "@/components/site/site-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TechnologyStructuredData } from "@/components/site/structured-data";
import { TechnologyWallPanel } from "@/components/site/technology-wall-panel";

const materials = [
  {
    title: "Drewno C24",
    description:
      "Certyfikowane drewno konstrukcyjne suszone komorowo i czterostronnie strugane. Gwarantuje stabilność wymiarową oraz odporność na paczenie i szkodniki.",
    icon: ShieldIcon,
  },
  {
    title: "Izolacja z włókna drzewnego",
    description:
      "Naturalna wełna drzewna poprawia akumulację cieplną, chroni przed przegrzewaniem latem i wspiera otwartość dyfuzyjną całej przegrody.",
    icon: LeafIcon,
  },
  {
    title: "Membrany otwarte dyfuzyjnie",
    description:
      "Systemy membran pozwalają przegrodzie oddychać, ograniczają kondensację wilgoci i wspierają zdrowy mikroklimat wewnątrz budynku.",
    icon: WindIcon,
  },
] as const;

const standards = [
  {
    title: "Szczelność powietrzna (Blower Door)",
    description:
      "Każdy budynek projektujemy i składamy z naciskiem na ciągłość warstw, dzięki czemu ograniczamy niekontrolowane ucieczki ciepła.",
  },
  {
    title: "Certyfikaty jakości materiałów",
    description:
      "Korzystamy wyłącznie z materiałów sprawdzonych, europejskich dostawców z pełną dokumentacją pochodzenia i parametrami użytkowymi.",
  },
  {
    title: "Instalacje zintegrowane",
    description:
      "Fabryczne przygotowanie peszli i kanałów wentylacyjnych w panelach ściennych skraca czas prac instalacyjnych na budowie.",
  },
] as const;

const faqItems = [
  {
    question: "Czy dom w technologii szkieletowej nadaje się do całorocznego użytkowania?",
    answer:
      "Tak. Odpowiednio dobrana przegroda, szczelność powietrzna i kontrola mostków termicznych pozwalają osiągnąć bardzo dobre parametry cieplne, dzięki czemu dom sprawdza się przez cały rok.",
  },
  {
    question: "Z czego wykonana jest konstrukcja domu szkieletowego?",
    answer:
      "Konstrukcja domu szkieletowego powstaje z drewna konstrukcyjnego, najczęściej klasy C24, które ma odpowiednie parametry wytrzymałościowe do budowy domów drewnianych całorocznych. O trwałości budynku decyduje jednak nie tylko samo drewno, ale też poprawny układ warstw, izolacja, zabezpieczenie przed wilgocią i dokładność wykonania połączeń.",
  },
  {
    question: "Czy otwartość dyfuzyjna oznacza, że ściana przepuszcza zimno?",
    answer:
      "Nie. Otwartość dyfuzyjna dotyczy kontrolowanego przepływu pary wodnej przez warstwy przegrody, a nie utraty izolacyjności cieplnej. Dobrze zaprojektowana ściana jednocześnie chroni przed stratami ciepła i bezpiecznie pracuje wilgotnościowo.",
  },
  {
    question: "Jakie materiały izolacyjne stosujecie w ścianie?",
    answer:
      "W zależności od układu przegrody stosujemy między innymi izolację z włókna drzewnego, wełnę mineralną oraz warstwy instalacyjne uzupełniające parametry termiczne i akustyczne budynku.",
  },
] as const;

export function TechnologyPage() {
  return (
    <>
      <TechnologyStructuredData faq={faqItems} />
      <SiteHeader />
      <main id="content">
        <section className="section-space pb-8">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-xl space-y-5">
              <span className="section-tag">Technologia</span>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl">
                Technologia budowy domów szkieletowych
              </h1>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Sprawdź, jak powstaje dom szkieletowy, z jakich materiałów się
                go buduje i czym różni się od budynku murowanego pod względem
                kosztu, energetyki i procesu realizacji.
              </p>
              <div className="pt-1">
                <Link href="/kontakt" className="button-dark">
                  Zapytaj o budowę
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-line/70 shadow-[var(--shadow-card)]">
              <Image
                src="/images/konstrukcja-dom-szkieletowy-35m2-Lubliniec.jpg"
                alt="Nowoczesny dom szkieletowy Nord Frame w otoczeniu lasu"
                width={1368}
                height={768}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-space pt-4">
          <div className="container-shell space-y-8">
            <SectionHeading
              title="Czym jest dom szkieletowy?"
              description="Dzisiejsze domy szkieletowe nie są już jedynie alternatywą dla małych domków rekreacyjnych. To pełnoprawne budynki całoroczne, projektowane z myślą o wysokiej energooszczędności i nowoczesnym komforcie użytkowania."
            />

            <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-line/70 shadow-[var(--shadow-card)]">
                <Image
                  src="/images/deska-opalana.png"
                  alt="Detal zwęglonej deski elewacyjnej pokazujący strukturę drewna"
                  width={1366}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <article className="card-surface flex h-full items-center p-7 sm:p-9">
                <div className="max-w-md space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-surface-strong text-brand">
                    <RulerIcon className="size-6" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-foreground">
                    Lekka technologia, duża precyzja, szybki montaż
                  </h3>
                  <p className="text-base leading-8 text-muted">
                    Przy dobrze przygotowanym projekcie technologia szkieletowa
                    daje dużą przewidywalność harmonogramu i wysoką kontrolę nad
                    jakością wykonania.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-space bg-surface/75">
          <div className="container-shell space-y-8">
            <SectionHeading
              title="Materiały"
              description="System ściany budujemy z komponentów, które współpracują ze sobą pod kątem nośności, izolacyjności i trwałości eksploatacyjnej."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {materials.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="card-surface p-6 sm:p-7">
                    <div className="space-y-4">
                      <div className="flex size-11 items-center justify-center rounded-full bg-surface-strong text-brand">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <TechnologyWallPanel />
          </div>
        </section>

        <section className="section-space bg-surface/75">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-xl space-y-5">
              <SectionHeading
                title="Energooszczędność i ekologia"
                description="Technologia szkieletu drewnianego w połączeniu z odpowiednią izolacją pozwala osiągnąć standardy budynku pasywnego. Znacznie obniża to koszty ogrzewania i chłodzenia, a użycie drewna jako głównego materiału konstrukcyjnego pomaga ograniczać ślad węglowy inwestycji."
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-line/70 shadow-[var(--shadow-card)]">
              <Image
                src="/images/dom-szkieletowy-35m2-Katowice.jpg"
                alt="Energooszczędny dom szkieletowy Nord Frame z drewnianą elewacją"
                width={1008}
                height={756}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell space-y-8">
            <SectionHeading
              title="Standardy wykończenia"
              description="Parametry techniczne nie są dodatkiem, tylko częścią naszego standardu wykonania już na etapie projektu i prefabrykacji."
            />

            <div className="overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-[var(--shadow-card)]">
              {standards.map((item, index) => (
                <article
                  key={item.title}
                  className={[
                    "flex gap-4 px-5 py-5 sm:px-7",
                    index !== standards.length - 1 ? "border-b border-line/80" : "",
                  ].join(" ")}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-strong text-brand">
                    <CheckCircleIcon className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-space bg-surface/75">
          <div className="container-shell space-y-8">
            <SectionHeading
              title="FAQ technologiczne"
              description="Najczęstsze pytania o parametry ścian, prefabrykację CNC i działanie warstw w domu szkieletowym Nord Frame."
              centered
            />

            <div className="mx-auto max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="details-reset card-surface group overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6">
                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {item.question}
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-full bg-surface-strong text-brand">
                      <span className="text-lg font-medium transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-line px-5 py-5 text-base leading-7 text-muted sm:px-6">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SiteCta />
      </main>
      <SiteFooter />
    </>
  );
}
