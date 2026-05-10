import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteCta() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-brand px-6 py-10 text-center text-white shadow-[var(--shadow-hero)] sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl space-y-5">
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Gotowy na swój nowy dom?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              Skontaktuj się z nami i zapytaj o wycenę domu szkieletowego.
              Przygotujemy wstępne informacje o zakresie prac, możliwych
              rozwiązaniach i kolejnych krokach realizacji.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link href="/kontakt" className="button-primary">
                Zapytaj o wycenę
              </Link>
              <a href={`tel:${siteConfig.phoneHref}`} className="button-secondary">
                {siteConfig.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
