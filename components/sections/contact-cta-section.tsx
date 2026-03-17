import Link from 'next/link';

export function ContactCtaSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Contact
            </p>
            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
            Structurons votre prochain
            <br />
            projet ensemble.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Un besoin de cadrage, une analyse fonctionnelle à produire, un projet
            à piloter&nbsp;? Parlons-en.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              Prendre contact
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-10 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
