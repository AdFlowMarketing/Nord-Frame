import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { ProjectsStructuredData } from "@/components/site/structured-data";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { projectCards } from "@/lib/projects";

export function ProjectsPage() {
  return (
    <>
      <ProjectsStructuredData projects={projectCards} />
      <SiteHeader />
      <main id="content">
        <section className="section-space">
          <div className="container-shell space-y-12">
            <div className="max-w-4xl space-y-5 pt-4 md:pt-8">
              <span className="section-tag">Realizacje</span>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
                Realizacje domów szkieletowych
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                Zobacz wybrane projekty Nord Frame: od kompaktowych domów
                całorocznych po większe realizacje rodzinne. Część realizacji ma
                już osobne strony ze szczegółami, kolejne są w przygotowaniu.
              </p>
            </div>

            <section aria-labelledby="projects-list-heading" className="space-y-8">
              <SectionHeading
                title="Wybrane projekty"
                description="Każda karta pokazuje konkretną realizację lub projekt przygotowany do publikacji. Aktywne podstrony zawierają więcej zdjęć, opis założeń i przebieg realizacji."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projectCards.map((project, index) => {
                  const content = (
                    <>
                      <div className="relative aspect-[16/11] overflow-hidden">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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

                      <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
                        <div className="space-y-2">
                          <h2 className="font-display text-2xl font-semibold text-foreground">
                            {project.title}
                          </h2>
                          <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
                            {project.details}
                          </p>
                        </div>
                        <p className="text-base leading-7 text-muted">
                          {project.summary}
                        </p>
                        <div className="mt-auto pt-1">
                          {project.href ? (
                            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                              Zobacz realizację
                              <span aria-hidden="true">→</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                              Szczegóły wkrótce
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  );

                  return project.href ? (
                    <Link
                      key={project.title}
                      href={project.href}
                      className="card-surface group overflow-hidden"
                    >
                      {content}
                    </Link>
                  ) : (
                    <article
                      key={project.title}
                      className="card-surface overflow-hidden"
                    >
                      {content}
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[2rem] border border-line/80 bg-surface px-6 py-8 shadow-[var(--shadow-card)] sm:px-8 sm:py-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <span className="section-tag">Kolejne realizacje</span>
                  <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                    Chcesz zobaczyć projekt podobny do Twojej działki?
                  </h2>
                  <p className="text-base leading-7 text-muted sm:text-lg">
                    Napisz do nas, a pokażemy realizacje zbliżone metrażem,
                    bryłą lub zakresem prac do planowanej inwestycji.
                  </p>
                </div>

                <Link href="/kontakt" className="button-dark shrink-0 self-start lg:self-center">
                  Zapytaj o podobny projekt
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
