import Image from "next/image";
import Link from "next/link";
import { footerNavigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/6 bg-background">
      <div className="container-shell grid gap-10 py-10 text-sm text-muted sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
        <div className="space-y-4">
          <Link
            href="/"
            aria-label="Nord Frame - strona główna"
            className="inline-block"
          >
            <Image
              src="/images/nord-frame-logo-header.png"
              alt=""
              width={852}
              height={325}
              sizes="160px"
              className="h-auto w-[160px]"
            />
          </Link>
          <p className="max-w-sm leading-6">
            Nowoczesne domy szkieletowe projektowane z myślą o spokojnym
            procesie budowy, trwałości konstrukcji i codziennym komforcie
            użytkowania.
          </p>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title} className="space-y-3">
            <p className="font-semibold uppercase tracking-[0.08em] text-foreground">
              {group.title}
            </p>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? (
                    <a href={link.href} className="hover:text-foreground">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-foreground">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
