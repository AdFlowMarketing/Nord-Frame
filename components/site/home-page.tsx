import Image from "next/image";
import Link from "next/link";
import {
  CompassIcon,
  DraftIcon,
  KeyIcon,
  LeafIcon,
  ShieldIcon,
  TimerIcon,
} from "@/components/site/icons";
import { ArrowLink } from "@/components/site/arrow-link";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteCta } from "@/components/site/site-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { HomeStructuredData } from "@/components/site/structured-data";
import { projectCards } from "@/lib/projects";

const advantages = [
  {
    title: "Sprawniejsza realizacja niż w tradycyjnym budownictwie",
    description:
      "Domy szkieletowe powstają szybciej niż wiele budynków w technologii murowanej, ponieważ konstrukcja drewniana ogranicza liczbę czasochłonnych etapów mokrych. Dzięki temu łatwiej zaplanować harmonogram i ograniczyć przestoje na budowie.",
    icon: TimerIcon,
  },
  {
    title: "Przejrzysty kosztorys przed rozpoczęciem prac",
    description:
      "Przed startem realizacji omawiamy zakres, standard wykonania i budżet inwestycji. Dzięki temu inwestor wie, za co płaci i jakie elementy obejmuje wybrany wariant budowy domu szkieletowego.",
    icon: ShieldIcon,
  },
  {
    title: "Energooszczędność i komfort przez cały rok",
    description:
      "Dobrze zaprojektowany dom szkieletowy zapewnia wysoką szczelność, skuteczną izolację i niski koszt użytkowania. To rozwiązanie dla osób, które szukają domu całorocznego, wygodnego zimą i latem.",
    icon: LeafIcon,
  },
  {
    title: "Zdrowy mikroklimat w drewnianym domu",
    description:
      "Konstrukcja drewniana, odpowiednio dobrane warstwy przegród i staranne wykonanie pomagają stworzyć przyjazny mikroklimat we wnętrzu. Dom szkieletowy może być ciepły, suchy i komfortowy, pod warunkiem że zostanie poprawnie zaprojektowany oraz zbudowany.",
    icon: DraftIcon,
    image: {
      src: "/images/deska-opalana.png",
      alt: "Opalana deska elewacyjna jako tło sekcji o zdrowym mikroklimacie",
    },
  },
];

const pathways = [
  {
    title: "Projekty gotowe",
    description:
      "Wybierz sprawdzony projekt domu szkieletowego i skróć etap przygotowań. To dobre rozwiązanie dla inwestorów, którzy chcą szybciej rozpocząć budowę i bazować na funkcjonalnym, przemyślanym układzie.",
    cta: "Zobacz katalog",
    href: "/realizacje",
    icon: CompassIcon,
  },
  {
    title: "Indywidualne projekty",
    description:
      "Dopasujemy układ, bryłę i standard domu do Twojego stylu życia, działki oraz budżetu. Projekt indywidualny pozwala stworzyć dom szkieletowy odpowiadający konkretnym potrzebom rodziny.",
    cta: "Skonsultuj projekt",
    href: "/kontakt",
    icon: DraftIcon,
  },
  {
    title: "Domy pod klucz",
    description:
      "Możemy poprowadzić inwestycję kompleksowo — od fundamentów po prace wykończeniowe. Koordynujemy kolejne etapy, pilnujemy zakresu prac i dbamy o spójny standard wykonania.",
    cta: "Sprawdź zakres",
    href: "/kontakt",
    icon: KeyIcon,
  },
];

const reviewItems = [
  {
    quote:
      "Największy plus to dobra organizacja całej budowy. Wiedzieliśmy, kiedy wchodzą kolejne etapy i co dokładnie będzie realizowane.",
    author: "Inwestorzy z Katowic",
    focus: "Sprawna organizacja budowy",
  },
  {
    quote:
      "Doceniliśmy konkretny kontakt, szybkie odpowiedzi i jasne wyjaśnienie technologii domu szkieletowego.",
    author: "Klienci z Gliwic",
    focus: "Komunikacja i doradztwo",
  },
  {
    quote:
      "Dom został wykonany starannie, a cały proces był prowadzony spokojnie i rzeczowo. To miało dla nas duże znaczenie.",
    author: "Inwestorzy z Lublińca",
    focus: "Jakość wykonania",
  },
] as const;

const faqItems = [
  {
    question: "Ile trwa budowa domu szkieletowego?",
    answer:
      "Czas realizacji zależy od metrażu, projektu, zakresu prac, formalności i standardu wykończenia. Domy szkieletowe zazwyczaj można realizować sprawniej niż budynki murowane, ponieważ technologia drewniana ogranicza część czasochłonnych prac mokrych.",
  },
  {
    question: "Czy dom szkieletowy nadaje się do mieszkania przez cały rok?",
    answer:
      "Prawidłowo zaprojektowany i wykonany dom szkieletowy może być pełnoprawnym domem całorocznym. Kluczowe znaczenie mają izolacja, szczelność, wentylacja oraz jakość wykonania przegród.",
  },
  {
    question: "Czy budujecie domy pod klucz?",
    answer:
      "Tak, możemy realizować domy szkieletowe w różnych zakresach — od stanu konstrukcyjnego po dom pod klucz. Szczegółowy zakres ustalamy indywidualnie na etapie rozmowy i kosztorysu.",
  },
  {
    question: "Czy pomagacie przy wyborze projektu?",
    answer:
      "Tak. Możemy pracować zarówno na gotowych projektach, jak i przy projektach indywidualnych. Pomagamy dopasować rozwiązania do działki, budżetu, stylu życia i technologii szkieletowej.",
  },
  {
    question: "Gdzie realizujecie domy szkieletowe?",
    answer:
      "Realizujemy domy szkieletowe między innymi na terenie województwa śląskiego i małopolskiego, w miejscowościach takich jak Katowice, Gliwice, Lubliniec i okolice. W przypadku dalszych lokalizacji zakres współpracy ustalamy indywidualnie.",
  },
];

function HeroSection() {
  return (
    <section className="container-shell pt-4 md:pt-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand text-white shadow-[var(--shadow-hero)] md:rounded-[2.4rem]">
        <Image
          src="/images/hero-section-dom-szkieletowy.png"
          alt="Nowoczesny dom szkieletowy Nord Frame z panoramicznym przeszkleniem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,14,0.86)_0%,rgba(10,20,14,0.56)_38%,rgba(10,20,14,0.18)_70%,rgba(10,20,14,0.34)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(10,20,14,0.22),transparent)]" />
        <div className="relative grid min-h-[36rem] items-end px-5 py-6 sm:px-8 sm:py-8 md:min-h-[42rem] md:px-10 md:py-10">
          <div className="max-w-xl space-y-5 pb-2 md:space-y-6">
            <span className="eyebrow">Skandynawska technologia</span>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-[0.95] text-balance text-white sm:text-5xl md:text-6xl">
                Nord Frame - Nowoczesne domy szkieletowe
              </h1>
              <p className="max-w-lg text-base leading-7 text-white/78 sm:text-lg">
                Budujemy energooszczędne domy szkieletowe i drewniane domy
                całoroczne, które łączą trwałą konstrukcję, estetykę i
                przewidywalny proces realizacji. Prowadzimy inwestora od
                koncepcji, przez projekt i formalności, aż po budowę domu w
                wybranym standardzie.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="button-primary">
                Darmowa wycena
              </Link>
              <Link href="/realizacje" className="button-secondary">
                Nasze realizacje
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTeaserSection() {
  return (
    <section className="section-space pb-8">
      <div className="container-shell">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] bg-brand text-white shadow-[var(--shadow-hero)]">
            <div className="flex h-full flex-col gap-8 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <span className="eyebrow">O Nord Frame</span>
                <h2 className="font-display text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">
                  Budujemy domy szkieletowe
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Nord Frame realizuje domy szkieletowe i drewniane domy
                  całoroczne w technologi ciężkiego szkieletu niemieckiego dla
                  inwestorów, którzy oczekują konkretnego planu, dobrej
                  komunikacji i jakości wykonania. Pomagamy przejść przez
                  kolejne etapy budowy — od wyboru projektu, przez dopasowanie
                  technologii, aż po realizację w ustalonym zakresie.
                </p>
                <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Łączymy doświadczenie wykonawcze, znajomość technologii
                  budownictwa drewnianego oraz praktyczne podejście do potrzeb
                  inwestora. Dzięki temu budowa domu staje się bardziej
                  przewidywalna, a decyzje podejmowane są na podstawie jasnych
                  informacji.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/o-nas" className="button-primary">
                  Poznaj nas bliżej
                </Link>
                <Link href="/technologia" className="button-secondary">
                  Zobacz technologię
                </Link>
              </div>
            </div>
          </article>

          <article>
            <div className="relative aspect-[0.92] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
              <Image
                src="/images/konstrukcja-dom-szkieletowy-35m2-Lubliniec.jpg"
                alt="Budowa domu szkieletowego Nord Frame w trakcie realizacji"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="technologia" className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Dlaczego budowa domu nie musi oznaczać chaosu"
          description="Budowa domu często kojarzy się z opóźnieniami, niejasnymi kosztami i problemami z koordynacją ekip. W Nord Frame stawiamy na przejrzysty proces, dokładne planowanie i technologię szkieletową, która pozwala szybko i sprawnie prowadzić prace budowlane."
        />
        <div className="flex justify-start">
          <Link href="/technologia" className="button-dark">
            Zobacz technologię
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            if (index === 0) {
              return (
                <article
                  key={item.title}
                  className="card-surface md:col-span-8"
                >
                  <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
                    <div className="flex size-11 items-center justify-center rounded-full bg-surface-strong text-brand">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl text-base leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }

            if (index === 1) {
              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[var(--radius-card)] bg-brand text-white md:col-span-4"
                >
                  <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
                    <div className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-white/78">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }

            if (index === 2) {
              return (
                <article
                  key={item.title}
                  className="card-surface md:col-span-4"
                >
                  <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
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
            }

            return (
              <article
                key={item.title}
                className="card-surface relative isolate overflow-hidden md:col-span-8"
              >
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-right"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.96)_0%,rgba(255,253,249,0.92)_34%,rgba(255,253,249,0.3)_100%)]" />
                <div className="relative flex h-full items-start p-6 sm:p-7">
                  <div className="max-w-sm space-y-3 rounded-2xl bg-surface/90 p-5 shadow-[var(--shadow-card)]">
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
  );
}

function PathwaysSection() {
  return (
    <section id="proces" className="section-space bg-surface/80">
      <div className="container-shell space-y-10">
        <SectionHeading
          centered
          title="Twoja droga do własnego domu"
          description="Wybierz model współpracy dopasowany do swojej inwestycji — od gotowego projektu domu szkieletowego po kompleksową budowę domu pod klucz."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pathways.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="card-surface border-t-4 border-t-brand"
              >
                <div className="flex h-full flex-col gap-6 p-6 sm:p-7">
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
                  <div className="pt-2">
                    <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="realizacje" className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          centered
          title="Ostatnie realizacje"
          description="Zobacz wybrane domy szkieletowe, które zrealizowaliśmy dla naszych klientów. Każdy z nich pokazuje inne potrzeby, układ i sposób wykorzystania technologii drewnianej."
        />
        <div className="flex justify-center">
          <Link href="/realizacje" className="button-dark">
            Wszystkie realizacje
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projectCards.map((project, index) => (
            <article key={project.title} className="card-surface overflow-hidden">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={[
                    "object-cover transition-transform duration-300 hover:scale-[1.03]",
                    index === 1 ? "object-right" : "object-center",
                  ].join(" ")}
                />
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
                    {project.details}
                  </p>
                </div>
                {project.href ? (
                  <ArrowLink href={project.href}>Zobacz projekt</ArrowLink>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                    Szczegóły wkrótce
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section-space bg-surface/70">
      <div className="container-shell space-y-10">
        <SectionHeading
          centered
          title="Opinie klientów"
          description="Sprawdź, jak inwestorzy oceniają współpracę z Nord Frame — od pierwszej rozmowy po realizację domu."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {reviewItems.map((item) => (
            <article
              key={item.author}
              className="card-surface flex h-full flex-col gap-5 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-lg tracking-[0.18em] text-amber-500">
                  ★★★★★
                </span>
                <span className="rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Google
                </span>
              </div>

              <p className="text-base leading-8 text-foreground">
                “{item.quote}”
              </p>

              <div className="mt-auto space-y-1 border-t border-line pt-4">
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-muted">{item.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space bg-surface/70">
      <div className="container-shell space-y-10">
        <SectionHeading
          centered
          title="Często zadawane pytania"
          description="Najważniejsze informacje o budowie domu w technologii szkieletowej, harmonogramie współpracy i bezpieczeństwie kosztów."
        />
        <div className="mx-auto max-w-3xl space-y-4">
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
  );
}

export function HomePage() {
  return (
    <>
      <HomeStructuredData faq={faqItems} />
      <SiteHeader />
      <main id="content">
        <HeroSection />
        <BenefitsSection />
        <AboutTeaserSection />
        <PathwaysSection />
        <ProjectsSection />
        <ReviewsSection />
        <SiteCta />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
