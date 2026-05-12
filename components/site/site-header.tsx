"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "@/components/site/icons";
import { siteNavigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/92 backdrop-blur">
      <div className="container-shell flex min-h-18 items-center justify-between gap-4 py-3 sm:gap-6">
        <Link
          href="/"
          aria-label="Nord Frame - strona główna"
          className="shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/nord-frame-logo-header.png"
            alt=""
            width={852}
            height={325}
            priority
            sizes="(max-width: 640px) 152px, (max-width: 1024px) 170px, 188px"
            className="h-auto w-[152px] sm:w-[170px] lg:w-[188px]"
          />
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {siteNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? "text-foreground" : "hover:text-foreground"}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="flex size-11 items-center justify-center rounded-[0.95rem] border border-line/80 bg-surface text-foreground shadow-[var(--shadow-card)]"
          >
            {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>

        <Link href="/kontakt" className="button-dark hidden shrink-0 md:inline-flex">
          Skontaktuj się
        </Link>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Zamknij menu"
            className="fixed inset-0 z-40 bg-brand-strong/55 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne"
            className="container-shell fixed inset-x-0 top-[5.4rem] z-50"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-line/80 bg-surface shadow-[var(--shadow-hero)]">
              <nav className="p-4" aria-label="Nawigacja mobilna">
                <ul className="space-y-2">
                  {siteNavigation.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={[
                            "flex items-center justify-between rounded-[1rem] px-4 py-3 text-base font-semibold",
                            isActive
                              ? "bg-brand text-white"
                              : "text-foreground hover:bg-surface-strong/65",
                          ].join(" ")}
                        >
                          <span>{item.label}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
