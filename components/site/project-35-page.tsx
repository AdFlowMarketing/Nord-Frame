import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { ProjectStructuredData } from "@/components/site/structured-data";
import { SiteCta } from "@/components/site/site-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const projectStats = [
  { label: "Powierzchnia", value: "35 m²" },
  { label: "Lokalizacja", value: "Lubliniec, woj. śląskie" },
  { label: "Typ realizacji", value: "Dom szkieletowy całoroczny" },
  { label: "Zakres", value: "Prefabrykacja i montaż konstrukcji" },
] as const;

const projectHighlights = [
  "Zwarta bryła zoptymalizowana pod małą działkę i szybki montaż.",
  "Przegrody projektowane z myślą o energooszczędności i niskich kosztach użytkowania.",
  "Duże przeszklenia otwierające strefę dzienną na ogród mimo kompaktowego metrażu.",
  "Realizacja w technologii szkieletowej z naciskiem na powtarzalność i jakość detalu.",
] as const;

const processNotes = [
  {
    title: "Założenia inwestora",
    description:
      "Projekt miał połączyć niewielki metraż z pełnym komfortem całorocznego użytkowania. Kluczowe były szybki proces realizacji, przewidywalny budżet i prosty układ funkcjonalny.",
  },
  {
    title: "Rozwiązania projektowe",
    description:
      "Postawiliśmy na lekką, czytelną bryłę domu szkieletowego. Otwarta strefa dzienna, antresola i oszczędna forma pomagają wykorzystać każdy metr.",
  },
  {
    title: "Efekt końcowy",
    description:
      "Powstał dom 35 m², który sprawdza się jako nowoczesny, całoroczny dom poza miastem lub świetna inwestycja pod wynajem.",
  },
] as const;

export function Project35Page() {
  return (
    <>
      <ProjectStructuredData
        title="Dom szkieletowy 35 m² w Lublińcu"
        description="Realizacja domu szkieletowego 35 m² w Lublińcu. Zobacz założenia projektu, zakres prac i efekt końcowy inwestycji Nord Frame."
        path="/realizacje/dom-35m2-lubliniec"
        image={{
          src: "/images/project-35-lubliniec.jpg",
          alt: "Dom szkieletowy 35 m² zrealizowany przez Nord Frame w Lublińcu",
          width: 1600,
          height: 1100,
        }}
      />
      <SiteHeader />
      <main id="content">
        <section className="container-shell pt-4 md:pt-6">
          <div className="relative isolate overflow-hidden rounded-[2rem] shadow-[var(--shadow-hero)] md:rounded-[2.4rem]">
            <Image
              src="/images/project-35-lubliniec.jpg"
              alt="Dom szkieletowy 35 m² zrealizowany przez Nord Frame w Lublińcu"
              width={1600}
              height={1100}
              priority
              sizes="100vw"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,14,0.8)_0%,rgba(10,20,14,0.44)_44%,rgba(10,20,14,0.2)_100%)]" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-8 md:p-10">
              <div className="max-w-2xl space-y-5 text-white">
                <span className="eyebrow">Realizacja Nord Frame</span>
                <h1 className="font-display text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-6xl">
                  Dom szkieletowy bez pozwolenia 35 m² w Lublińcu
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                  Kompaktowy dom całoroczny zaprojektowany z myślą o szybkim
                  montażu, energooszczędności i nowoczesnym, prostym układzie
                  funkcjonalnym.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Opis projektu"
                title="Mały metraż, pełnowymiarowy standard życia"
                description="Ta realizacja pokazuje, że dom 35 m² może być dopracowaną, estetyczną i wygodną przestrzenią do całorocznego użytkowania. Priorytetem były krótki czas realizacji, przewidywalny proces i dobra efektywność energetyczna."
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="button-primary">
                  Zapytaj o podobny dom
                </Link>
                <Link href="/technologia" className="button-dark">
                  Zobacz technologię
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectStats.map((item) => (
                <article key={item.label} className="card-surface p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </p>
                  <p className="pt-3 font-display text-2xl font-semibold text-foreground">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-surface/75">
          <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-line/70 shadow-[var(--shadow-card)]">
              <Image
                src="/images/konstrukcja-dom-szkieletowy-35m2-Lubliniec.jpg"
                alt="Konstrukcja domu szkieletowego 35 m² w Lublińcu w trakcie realizacji"
                width={1600}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Atuty realizacji"
                title="Co wyróżnia ten projekt"
                description="W tym domu liczyły się prostota bryły, dobrze wykorzystana powierzchnia i rozwiązania, które sprawdzają się zarówno na etapie budowy, jak i późniejszego użytkowania."
              />

              <ul className="space-y-3">
                {projectHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.4rem] border border-line/80 bg-surface px-5 py-4 text-base leading-7 text-muted shadow-[var(--shadow-card)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell space-y-10">
            <SectionHeading
              eyebrow="Przebieg realizacji"
              title="Od założeń do gotowej bryły"
              description="Każdy etap tej inwestycji był podporządkowany temu, aby mały dom zachował dużą funkcjonalność, estetykę i komfort użytkowania."
              centered
            />

            <div className="grid gap-4 md:grid-cols-3">
              {processNotes.map((item, index) => (
                <article
                  key={item.title}
                  className="card-surface border-t-4 border-t-brand p-6 sm:p-7"
                >
                  <div className="space-y-4">
                    <span className="font-display text-3xl font-semibold text-brand/28">
                      0{index + 1}
                    </span>
                    <div className="space-y-3">
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        {item.title}
                      </h2>
                      <p className="text-base leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
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
