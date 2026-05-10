import Image from "next/image";
import Link from "next/link";
import {
  CompassIcon,
  DraftIcon,
  LeafIcon,
  ShieldIcon,
  TimerIcon,
} from "@/components/site/icons";
import { AboutStructuredData } from "@/components/site/structured-data";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { projectCards } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

const values = [
  {
    title: "Jakość wykonania",
    description:
      "Jakość wykonania domu szkieletowego ma znaczenie, dlatego korzystamy ze sprawdzonych materiałów i rozwiązań, które dobrze sprawdzają się w domach drewnianych całorocznych.",
    icon: ShieldIcon,
  },
  {
    title: "Certyfikowane drewno C24",
    description:
      "Drewno konstrukcyjne C24 to ważny element bezpiecznej i trwałej konstrukcji szkieletowej. Stosujemy je w realizacjach, w których liczy się stabilność, powtarzalność parametrów i jakość materiału.",
    icon: CompassIcon,
  },
  {
    title: "Energooszczędność",
    description:
      "Dobrze wykonany domek szkieletowy przy odpowiedniej izolacji i wentylacji ma zapewniać wygodne warunki do codziennego mieszkania niezależnie od pory roku.",
    icon: LeafIcon,
  },
  {
    title: "Przejrzysta współpraca",
    description:
      "Budowa domu to ważna decyzja finansowa. Dlatego jasno omawiamy zakres, standard, możliwe koszty i kolejne etapy realizacji. Inwestor powinien wiedzieć, co kupuje i czego może oczekiwać.",
    icon: TimerIcon,
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Rozmowa i analiza potrzeb",
    description:
      "Zaczynamy od poznania działki, oczekiwań inwestora i planowanego sposobu użytkowania budynku.",
    extra:
      "Przygotowujemy zakres prac i wycenę dopasowaną do konkretnego projektu. Dzięki temu inwestor wie, co obejmuje realizacja i jakie decyzje trzeba podjąć przed rozpoczęciem budowy.",
    icon: DraftIcon,
  },
  {
    step: "02",
    title: "Dobór technologii",
    description:
      "Na podstawie założeń dobieramy rozwiązania konstrukcyjne, izolacyjne i wykończeniowe. Omawiamy, jaki standard będzie najlepszy dla danej inwestycji.",
    extra:
      "Przy domkach całorocznych szczególnie ważne są izolacja, wentylacja i szczelność. To właśnie te elementy decydują o tym, czy budynek będzie trwały i komfortowy do życia.",
    icon: CompassIcon,
  },
  {
    step: "03",
    title: "Budowa i koordynacja prac",
    description:
      "Prowadzimy realizację zgodnie z ustalonym zakresem. Dbamy o konstrukcję, montaż, izolację, detale i organizację prac na budowie. Dom szkieletowy wymaga dokładności, dlatego nie pomijamy elementów, które później wpływają na trwałość, szczelność i komfort użytkowania.",
    extra: "",
    icon: ShieldIcon,
  },
  {
    step: "04",
    title: "Przekazanie domu",
    description:
      "Po zakończeniu prac omawiamy wykonany zakres i przekazujemy inwestorowi najważniejsze informacje dotyczące użytkowania budynku. W zależności od ustaleń może to być gotowy domek letniskowy całoroczny, dom szkieletowy do dalszego wykończenia albo dom pod klucz.",
    extra: "",
    icon: TimerIcon,
  },
] as const;

const faqItems = [
  {
    question: "Jak wygląda współpraca z Nord Frame od pierwszego kontaktu?",
    answer:
      "Zaczynamy od rozmowy o działce, potrzebach domowników i budżecie. Następnie przechodzimy do doboru technologii, zakresu współpracy oraz harmonogramu, tak aby od początku prowadzić inwestycję w przewidywalny sposób.",
  },
  {
    question: "Czy pomagacie dopasować technologię do konkretnego projektu?",
    answer:
      "Tak. Analizujemy założenia architektoniczne, oczekiwany standard energetyczny i sposób użytkowania budynku. Dzięki temu możemy dobrać rozwiązania konstrukcyjne i warstwy ściany odpowiednie dla danej inwestycji.",
  },
  {
    question: "Czy realizujecie domy tylko w jednym standardzie?",
    answer:
      "Nie. Pracujemy zarówno przy domach do stanu surowego, jak i przy szerszym zakresie realizacji. Każdy projekt ustalamy indywidualnie, tak aby inwestor wiedział dokładnie, co zawiera oferta.",
  },
  {
    question: "Dlaczego wykorzystujecie drewno konstrukcyjne C24?",
    answer:
      "Drewno C24 zapewnia powtarzalne parametry nośności, stabilność wymiarową i dobrą jakość powierzchni po obróbce. To materiał, który dobrze wpisuje się w standard trwałego domu szkieletowego budowanego na lata.",
  },
] as const;

export function AboutPage() {
  return (
    <>
      <AboutStructuredData faq={faqItems} />
      <SiteHeader />
      <main id="content">
        <section className="container-shell pt-4 md:pt-6">
          <div className="relative isolate overflow-hidden rounded-[2rem] shadow-[var(--shadow-hero)] md:rounded-[2.4rem]">
            <Image
              src="/images/o-nas-banner.png"
              alt="Banner strony O nas przedstawiający dom szkieletowy Nord Frame"
              width={1280}
              height={720}
              priority
              sizes="100vw"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,40,27,0.18)_0%,rgba(16,40,27,0.34)_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="rounded-[1.75rem] bg-black/16 px-6 py-5 text-center text-white backdrop-blur-[2px] sm:px-10 sm:py-7">
                <h1 className="font-display text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl">
                  Budujemy domy, które przetrwają pokolenia
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-xl space-y-6">
              <span className="section-tag">O nas</span>
              <div className="space-y-4">
                <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                  Budujemy domy szkieletowe, domki całoroczne i letniskowe z drewna
                </h2>
                <p className="text-base leading-8 text-muted sm:text-lg">
                  W Nord Frame specjalizujemy się w budowie domów
                  szkieletowych, drewnianych domów całorocznych oraz mniejszych
                  domków rekreacyjnych. Realizujemy zarówno większe domy
                  rodzinne, jak i kompaktowe inwestycje, takie jak domek 35 m²
                  bez pozwolenia, domek 70 m² na zgłoszenie czy domek
                  letniskowy całoroczny.
                </p>
                <p className="text-base leading-8 text-muted sm:text-lg">
                  Pomagamy inwestorom wybrać rozwiązanie dopasowane do działki,
                  budżetu i sposobu użytkowania budynku. Dla jednych będzie to
                  mały domek szkieletowy na działkę, dla innych całoroczny dom
                  drewniany pod klucz. W każdym przypadku stawiamy na trwałą
                  konstrukcję, dobrą izolację, estetykę i spokojny proces
                  budowy.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/kontakt" className="button-primary">
                  Skontaktuj się z nami
                </Link>
                <Link href="/technologia" className="button-dark">
                  Zobacz technologię
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
              <Image
                src="/images/drewno-C24.jpg"
                alt="Drewno konstrukcyjne C24 przygotowane do budowy domu szkieletowego"
                width={1200}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="overflow-hidden rounded-[2.2rem] border border-line/80 bg-[linear-gradient(180deg,rgba(255,253,249,0.94)_0%,rgba(236,229,219,0.34)_100%)] shadow-[var(--shadow-card)]">
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="border-b border-line/80 bg-brand px-6 py-8 text-white sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
                <div className="space-y-6">
                  <span className="eyebrow">Nasz proces</span>
                  <div className="space-y-4">
                    <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                      Jak prowadzimy realizację domu szkieletowego
                      </h2>
                      <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                        Zależy nam na procesie, który porządkuje decyzje i daje
                        inwestorowi większą kontrolę nad budową. Dotyczy to
                        zarówno większych domów szkieletowych, jak i mniejszych
                        realizacji, takich jak domek 35 m², dom 70 m² na
                        zgłoszenie czy całoroczny domek letniskowy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                  <div className="space-y-4">
                    {processSteps.map((item) => {
                      const Icon = item.icon;

                      return (
                        <article
                          key={item.step}
                          className="rounded-[1.6rem] border border-line/80 bg-surface p-5 shadow-[var(--shadow-card)] sm:p-6"
                        >
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center gap-3">
                              <span className="flex size-12 items-center justify-center rounded-full bg-brand text-sm font-semibold tracking-[0.08em] text-white">
                                {item.step}
                              </span>
                              <span className="h-full w-px bg-line/80" />
                            </div>

                            <div className="min-w-0 flex-1 space-y-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                  <h3 className="font-display text-2xl font-semibold text-foreground">
                                    {item.title}
                                  </h3>
                                </div>
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface-strong text-brand">
                                  <Icon className="size-5" />
                                </div>
                              </div>
                              <div className="space-y-3">
                                <p className="text-base leading-7 text-muted">
                                  {item.description}
                                </p>
                                {item.extra ? (
                                  <div className="rounded-[1.2rem] bg-surface-strong/45 px-4 py-4 text-base leading-7 text-muted">
                                    {item.extra}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-surface/75">
          <div className="container-shell space-y-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="section-tag">Nasze wartości</span>
              <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                Wartości, które porządkują każdą realizację
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={[
                      "overflow-hidden rounded-[1.75rem] border p-6 shadow-[var(--shadow-card)] sm:p-8",
                      index === 0 || index === 3
                        ? "border-brand bg-brand text-white"
                        : "border-line/80 bg-surface text-foreground",
                    ].join(" ")}
                  >
                    <div className="flex h-full flex-col gap-6">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={[
                            "flex size-12 items-center justify-center rounded-full",
                            index === 0 || index === 3
                              ? "bg-white/10 text-white"
                              : "bg-surface-strong text-brand",
                          ].join(" ")}
                        >
                          <Icon className="size-5" />
                        </div>
                        <span
                          className={[
                            "font-display text-3xl font-semibold",
                            index === 0 || index === 3
                              ? "text-white/24"
                              : "text-brand/22",
                          ].join(" ")}
                        >
                          0{index + 1}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-display text-3xl font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p
                          className={[
                            "max-w-xl text-base leading-8",
                            index === 0 || index === 3
                              ? "text-white/82"
                              : "text-muted",
                          ].join(" ")}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={[
                          "mt-auto h-px w-full",
                          index === 0 || index === 3
                            ? "bg-white/12"
                            : "bg-line/80",
                        ].join(" ")}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="overflow-hidden rounded-[2.2rem] bg-brand text-white shadow-[var(--shadow-hero)]">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-6 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <span className="eyebrow">Działamy lokalnie - Śląsk i Małopolska</span>
                  <div className="space-y-4">
                    <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                      Budujemy domy szkieletowe dla inwestorów ze Śląska i Małopolski
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                      Nord Frame działa w Rudzie Śląskiej i prowadzi realizacje
                      między innymi w Katowicach, Gliwicach, Lublińcu, Żywcu
                      oraz na terenie województwa śląskiego i małopolskiego.
                      Realizujemy domy szkieletowe, domki drewniane, domy
                      całoroczne oraz mniejsze budynki rekreacyjne.
                    </p>
                    <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                      Znamy potrzeby osób, które chcą połączyć rozsądny koszt
                      budowy, estetykę drewna, energooszczędność i sprawną
                      realizację. Jeżeli szukasz rzetelnej i uczciwej firmy
                      budującej domy szkieletowe, zapraszamy do rozmowy.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/kontakt" className="button-primary">
                      Skontaktuj się z nami
                    </Link>
                    <Link href="/realizacje" className="button-secondary">
                      Zobacz realizacje
                    </Link>
                  </div>
                </div>

                <div className="min-h-[24rem] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
                  <iframe
                    title="Mapa realizacji Nord Frame na Śląsku i w Małopolsce"
                    src={siteConfig.maps.regionEmbedUrl}
                    className="h-full min-h-[24rem] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-space bg-surface/75">
          <div className="container-shell space-y-8">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="section-tag">FAQ</span>
              <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                Najczęstsze pytania
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają
                się na początku rozmowy o budowie domu szkieletowego.
              </p>
            </div>

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

        <section className="section-space">
          <div className="container-shell space-y-8">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="section-tag">Galeria realizacji</span>
              <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                Wybrane projekty Nord Frame
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Zobacz kilka realizacji, które pokazują różne metraże,
                potrzeby inwestorów i możliwości technologii szkieletowej.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {projectCards.map((project, index) => {
                const cardContent = (
                  <>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={[
                          "object-cover transition-transform duration-300",
                          project.href ? "group-hover:scale-[1.03]" : "",
                          index === 1 ? "object-right" : "object-center",
                        ].join(" ")}
                      />
                      {project.status === "coming-soon" ? (
                        <div className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                          W przygotowaniu
                        </div>
                      ) : null}
                    </div>
                    <div className="space-y-3 p-5 sm:p-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
                        {project.details}
                      </p>
                    </div>
                  </>
                );

                return project.href ? (
                  <Link
                    key={project.title}
                    href={project.href}
                    className="card-surface group overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <article
                    key={project.title}
                    className="card-surface overflow-hidden"
                  >
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
