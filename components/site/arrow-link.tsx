import Link from "next/link";
import { ArrowIcon } from "@/components/site/icons";

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground hover:text-accent"
    >
      <span>{children}</span>
      <ArrowIcon className="size-4" />
    </Link>
  );
}
