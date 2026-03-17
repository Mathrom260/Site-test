import Image from 'next/image';
import Link from 'next/link';

const clients = [
  'AG Assurance',
  'NN',
  'Atradius',
  'Athora',
  'ACM Assurance',
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.65_0.14_75/0.06),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── Left — Content ── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                Senior Consultant · Assurance &amp; Transformation
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-foreground lg:text-6xl xl:text-7xl">
              Là où la{' '}
              <span className="text-primary">complexité</span>
              <br />
              devient méthode.
            </h1>

            {/* Sub */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Business Analysis · Analyse Fonctionnelle · Gestion de Projet.
              <br />
              Intervention sur mesure dans le secteur assurance, en Belgique et
              à l&apos;international.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-md transition-opacity hover:opacity-90"
              >
                Discutons de votre projet
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Voir mes services
              </Link>
            </div>

            {/* Client strip */}
            <div className="mt-14 border-t border-border pt-8">
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Ils m&apos;ont fait confiance
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="text-sm font-medium text-foreground/50 transition-colors hover:text-foreground/80"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — Photo ── */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-accent/40" />

              {/* Photo */}
              <div className="relative h-[520px] w-[380px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Images/DSC_9180.jpg"
                  alt="Mathieu Renard — Senior Consultant BA FA PM"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 340px, 380px"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 bottom-16 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-muted-foreground">Expérience</p>
                <p className="font-heading text-2xl font-semibold text-primary">12+ ans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
