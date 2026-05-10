import Image from "next/image";
import Link from "next/link";
import { siteNavigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/92 backdrop-blur">
      <div className="container-shell flex min-h-18 items-center justify-between gap-4 py-3 sm:gap-6">
        <Link
          href="/"
          aria-label="Nord Frame - strona główna"
          className="shrink-0"
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
            {siteNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/kontakt" className="button-dark shrink-0">
          Skontaktuj się
        </Link>
      </div>
    </header>
  );
}
