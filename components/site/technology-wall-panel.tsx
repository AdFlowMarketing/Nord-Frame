"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayersIcon,
  LeafIcon,
  RulerIcon,
  ShieldIcon,
  WindIcon,
} from "@/components/site/icons";

const wallLayers = [
  { name: "Elewacja świerk skandynawski na pióro-wpust", value: "22" },
  { name: "Łaty, kontrłaty", value: "38 × 58 × 2" },
  { name: "Membrana wiatroizolacyjna Tyvek Housewrap", value: "-" },
  { name: "Płyta termoizolacyjna z włókna drzewnego", value: "60" },
  { name: "Konstrukcja z drewna C24 KVH klejonego", value: "60 × 160" },
  { name: "Wełna mineralna", value: "160" },
  { name: "Płyta konstrukcyjno-usztywniająca MFP P5", value: "12" },
  { name: "Membrana paroizolacyjna", value: "-" },
  { name: "Przestrzeń instalacyjna", value: "60 × 60" },
  { name: "Wełna mineralna", value: "50" },
  { name: "Płyta gipsowo-włóknowa Fermacell", value: "12,5" },
] as const;

const topics = [
  {
    id: "przegroda",
    label: "Przegroda ściany",
    title: "Ściana zewnętrzna z elewacją drewnianą [40 cm]",
    description:
      "Układ warstw zoptymalizowany pod kątem szczelności, izolacyjności i bezpiecznej pracy wilgotnościowej przegrody. To rozwiązanie łączy wysoką stabilność konstrukcji z komfortem użytkowania przez cały rok.",
    type: "table",
    icon: LayersIcon,
  },
  {
    id: "niemiecki",
    label: "Ciężki szkielet niemiecki",
    title: "Ciężki szkielet niemiecki",
    description:
      "Stawiamy na pełnowymiarowe elementy konstrukcyjne, które pozwalają prowadzić warstwy techniczne w sposób czytelny i powtarzalny. Większa masa przegrody poprawia sztywność układu, stabilność wymiarową i kulturę pracy budynku.",
    body:
      "To rozwiązanie daje większą swobodę w prowadzeniu instalacji, zachowaniu ciągłości izolacji oraz kontroli połączeń na etapie prefabrykacji i montażu.",
    type: "feature-image",
    image: {
      src: "/images/technology-heavy-german.jpg",
      alt: "Konstrukcja ciężkiego szkieletu niemieckiego przygotowana do dalszych warstw zabudowy",
    },
    icon: ShieldIcon,
  },
  {
    id: "termoizolacyjnosc",
    label: "Termoizolacyjność",
    title: "Termoizolacyjność",
    description:
      "Wysoki opór cieplny przegrody uzyskujemy dzięki warstwom włókna drzewnego, izolacji w szkielecie oraz dodatkowej warstwie instalacyjnej. Dzięki temu ograniczamy mostki termiczne i utrzymujemy stabilną temperaturę wnętrz.",
    body:
      "W praktyce przekłada się to na niższe zużycie energii do ogrzewania zimą i mniejsze przegrzewanie latem, bez potrzeby stosowania skomplikowanych systemów osłonowych.",
    type: "text-image",
    image: {
      src: "/images/Wełna-Skalna-Rockwool.jpg",
      alt: "Wełna skalna Rockwool stosowana jako materiał izolacyjny w domu szkieletowym",
    },
    icon: RulerIcon,
  },
  {
    id: "dyfuzja",
    label: "Otwartość dyfuzyjna",
    title: "Otwartość dyfuzyjna",
    description:
      "Projektujemy przegrodę tak, aby wilgoć mogła migrować w kontrolowany sposób na zewnątrz, zamiast kumulować się wewnątrz ściany. To jeden z filarów trwałości konstrukcji drewnianej.",
    body:
      "Dobór membran i płyt oparty jest o logikę kolejnych oporów dyfuzyjnych. Dzięki temu ściana pozostaje bezpieczna wilgotnościowo i wspiera zdrowy mikroklimat wnętrz.",
    type: "text-image",
    image: {
      src: "/images/Mebrana-Dachowa-Eurovent.jfif",
      alt: "Membrana Eurovent stosowana w przegrodzie o otwartości dyfuzyjnej",
    },
    icon: WindIcon,
  },
  {
    id: "kanadyjski",
    label: "Dom kanadyjski",
    title: "Dom kanadyjski",
    description:
      "Lżejszy układ konstrukcyjny domu kanadyjskiego sprawdza się tam, gdzie liczy się prostota montażu, efektywne wykorzystanie materiału i szybkie zamykanie budynku. To technologia dobrze znana, ale wymagająca bardzo dobrego dopracowania detali.",
    body:
      "W tym wariancie szczególną uwagę zwracamy na usztywnienie ścian, ciągłość warstw i właściwe prowadzenie instalacji, aby zachować szczelność oraz powtarzalną jakość wykonania.",
    type: "feature-image",
    image: {
      src: "/images/dom-kanadyjski-konstrukcja.png",
      alt: "Konstrukcja domu kanadyjskiego",
    },
    icon: LeafIcon,
  },
] as const;

type TopicId = (typeof topics)[number]["id"];

export function TechnologyWallPanel() {
  const [activeTopic, setActiveTopic] = useState<TopicId>("przegroda");

  const active = topics.find((topic) => topic.id === activeTopic) ?? topics[0];
  const ActiveIcon = active.icon;

  return (
    <article className="overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-[var(--shadow-card)]">
      <div className="grid gap-0 lg:grid-cols-[15rem_1fr]">
        <aside className="border-b border-line/80 bg-surface-strong/45 p-6 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Technologia
            </p>
            <div
              role="tablist"
              aria-label="Sekcje technologii ściany"
              className="space-y-2"
            >
              {topics.map((topic) => {
                const isActive = topic.id === activeTopic;

                return (
                  <button
                    key={topic.id}
                    id={`tab-${topic.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${topic.id}`}
                    onClick={() => setActiveTopic(topic.id)}
                    className={[
                      "w-full rounded-xl px-4 py-3 text-left text-sm font-medium",
                      isActive
                        ? "bg-brand text-white shadow-[var(--shadow-card)]"
                        : "text-muted hover:bg-white/60 hover:text-foreground",
                    ].join(" ")}
                  >
                    {topic.label}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-strong text-brand">
                <ActiveIcon className="size-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-3xl font-semibold text-foreground">
                  {active.title}
                </h2>
                <p className="max-w-3xl text-base leading-7 text-muted">
                  {active.description}
                </p>
              </div>
            </div>

            {active.type === "table" ? (
              <div className="grid gap-6 xl:grid-cols-[1fr_18rem]">
                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.4rem] border border-line/80">
                    <table className="min-w-full divide-y divide-line/80 text-left">
                      <thead className="bg-surface-strong/35">
                        <tr className="text-sm uppercase tracking-[0.08em] text-muted">
                          <th className="px-4 py-3 font-semibold">Warstwa</th>
                          <th className="px-4 py-3 font-semibold">mm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line/70 bg-surface text-sm text-foreground">
                        {wallLayers.map((layer, index) => (
                          <tr key={`${index + 1}-${layer.name}`}>
                            <td className="px-4 py-3">
                              {index + 1}. {layer.name}
                            </td>
                            <td className="px-4 py-3 font-medium">
                              {layer.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    U = 0,135 W/m²K
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.4rem] border border-line/80 bg-surface-strong/20 p-3">
                  <Image
                    src="/images/przekroj-scian-dom-szkieletowy.png"
                    alt="Przekrój ściany domu szkieletowego z oznaczonymi warstwami"
                    width={1024}
                    height={1024}
                    sizes="(max-width: 1280px) 100vw, 28vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            ) : null}

            {active.type === "feature-image" ? (
              <div className="space-y-5">
                <p className="max-w-3xl text-base leading-7 text-muted">
                  {active.body}
                </p>
                <div className="overflow-hidden rounded-[1.6rem] border border-line/80 bg-surface-strong/20">
                  <Image
                    src={active.image.src}
                    alt={active.image.alt}
                    width={1400}
                    height={760}
                    sizes="100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            ) : null}

            {active.type === "text-image" ? (
              <div className="space-y-5">
                <div className="max-w-4xl space-y-4">
                  <p className="text-base leading-8 text-muted">{active.body}</p>
                  <div className="rounded-[1.4rem] border border-line/80 bg-surface-strong/30 p-5 text-sm leading-7 text-muted">
                    Projektujemy ten parametr już na etapie modelu 3D, a potem
                    weryfikujemy go w detalach warsztatowych i podczas montażu
                    prefabrykatów.
                  </div>
                </div>
                <div className="overflow-hidden rounded-[1.6rem] border border-line/80 bg-surface-strong/20">
                  <Image
                    src={active.image.src}
                    alt={active.image.alt}
                    width={1400}
                    height={760}
                    sizes="100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
