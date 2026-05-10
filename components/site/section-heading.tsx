type SectionHeadingProps = {
  title: string;
  description: string;
  eyebrow?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-3xl space-y-4",
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow ? <span className="section-tag">{eyebrow}</span> : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p
          className={[
            "max-w-2xl text-base leading-7 text-muted sm:text-lg",
            centered ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
