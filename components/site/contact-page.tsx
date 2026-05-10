import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/site/icons";
import { ContactStructuredData } from "@/components/site/structured-data";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    label: "Główna siedziba",
    value: `${siteConfig.address.street}\n${siteConfig.address.postalCode} ${siteConfig.address.city}, ${siteConfig.address.country}`,
    href: siteConfig.maps.directionsUrl,
    icon: MapPinIcon,
  },
  {
    label: "Telefon",
    value: siteConfig.phoneLabel,
    href: `tel:${siteConfig.phoneHref}`,
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
  },
] as const;

export function ContactPage() {
  return (
    <>
      <ContactStructuredData />
      <SiteHeader />
      <main id="content">
        <section className="section-space">
          <div className="container-shell space-y-12">
            <div className="max-w-4xl space-y-5 pt-4 md:pt-8">
              <span className="section-tag">Skontaktuj się</span>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
                Porozmawiajmy o Twoim nowym domu
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                Jesteśmy gotowi odpowiedzieć na Twoje pytania i pomóc
                zaplanować ekologiczny dom oparty na skandynawskim rzemiośle,
                prefabrykacji i przewidywalnym harmonogramie realizacji.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <aside className="space-y-10">
                <section
                  aria-labelledby="contact-details-heading"
                  className="space-y-6"
                >
                  <h2
                    id="contact-details-heading"
                    className="font-display text-3xl font-semibold text-foreground"
                  >
                    Dane kontaktowe
                  </h2>
                  <ul className="space-y-6">
                    {contactItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <li key={item.label} className="flex gap-4">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface text-brand shadow-[var(--shadow-card)]">
                            <Icon className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                              {item.label}
                            </p>
                            <a
                              href={item.href}
                              className="whitespace-pre-line text-lg leading-8 text-foreground hover:text-accent"
                            >
                              {item.value}
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>

                <section
                  aria-labelledby="opening-hours-heading"
                  className="border-t border-line pt-8"
                >
                  <div className="space-y-5">
                    <h2
                      id="opening-hours-heading"
                      className="font-display text-3xl font-semibold text-foreground"
                    >
                      Godziny otwarcia
                    </h2>
                    <dl className="space-y-3 text-lg leading-8 text-foreground">
                      {siteConfig.openingHours.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-6"
                        >
                          <dt className="text-muted">{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </section>
              </aside>

              <section
                aria-labelledby="contact-form-heading"
                className="card-surface p-6 sm:p-8 lg:p-10"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2
                      id="contact-form-heading"
                      className="font-display text-3xl font-semibold text-foreground"
                    >
                      Opowiedz nam o inwestycji
                    </h2>
                    <p
                      id="contact-form-note"
                      className="max-w-2xl text-base leading-7 text-muted"
                    >
                      Wypełnij formularz, a przygotujemy kierunek dalszych
                      działań i wrócimy z odpowiedzią w ciągu 24 godzin
                      roboczych. Formularz otwiera domyślny program pocztowy z
                      uzupełnionymi polami wiadomości.
                    </p>
                  </div>

                  <form
                    action={`mailto:${siteConfig.email}`}
                    method="post"
                    encType="text/plain"
                    className="space-y-5"
                    aria-describedby="contact-form-note"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="field-label">
                          Imię i nazwisko
                        </label>
                        <input
                          id="fullName"
                          name="Imię i nazwisko"
                          autoComplete="name"
                          required
                          placeholder="Jan Kowalski"
                          className="field-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="field-label">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="Telefon"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder={siteConfig.phoneLabel}
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="field-label">
                        Adres email
                      </label>
                      <input
                        id="email"
                        name="Adres email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="jan@przyklad.pl"
                        className="field-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="field-label">
                        Wiadomość
                      </label>
                      <textarea
                        id="message"
                        name="Wiadomość"
                        required
                        rows={7}
                        placeholder="Opisz krótko swój projekt, lokalizację działki i oczekiwany termin realizacji."
                        className="field-textarea"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button type="submit" className="button-dark min-w-52">
                        Wyślij wiadomość
                      </button>
                      <p className="max-w-sm text-sm leading-6 text-muted">
                        Wolisz szybszy kontakt? Zadzwoń pod{" "}
                        <a
                          href={`tel:${siteConfig.phoneHref}`}
                          className="font-semibold text-foreground hover:text-accent"
                        >
                          {siteConfig.phoneLabel}
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              </section>
            </div>

            <section
              aria-labelledby="contact-map-heading"
              className="space-y-5 pt-2"
            >
              <h2 id="contact-map-heading" className="sr-only">
                Mapa dojazdu do biura Nord Frame
              </h2>
              <div className="overflow-hidden rounded-[2rem] border border-line/70 bg-surface shadow-[var(--shadow-card)]">
                <iframe
                  title="Mapa Google - Nord Frame, ul. Spiżowa 7, Ruda Śląska"
                  src={siteConfig.maps.officeEmbedUrl}
                  className="h-[24rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
