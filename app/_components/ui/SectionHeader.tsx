type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeader({ title, description, eyebrow }: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
      <div
        className="mx-auto mt-6 h-px w-20 max-w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden
      />
    </header>
  );
}
