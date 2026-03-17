import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '12+', label: "ans d'expérience" },
  { value: '20+', label: 'projets livrés' },
  { value: '5', label: 'grands groupes assurance' },
];

export function AboutSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-accent/30" />
              <div className="relative h-[420px] w-[340px] overflow-hidden rounded-2xl">
                <Image
                  src="/Images/DSC_9166.jpg"
                  alt="Mathieu Renard"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                À propos
              </p>
            </div>

            <h2 className="font-heading text-4xl font-semibold leading-tight text-primary-foreground lg:text-5xl">
              Mathieu Renard
            </h2>
            <p className="mt-1 font-heading text-xl font-light text-accent">
              Senior Analyste Business, Process &amp; Fonctionnel
            </p>

            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              Spécialisé dans le secteur assurance depuis plus de 12 ans, j&apos;interviens
              chez les grands acteurs belges et internationaux pour structurer leurs projets,
              clarifier leurs besoins métier et produire une documentation fonctionnelle
              qui permet des implémentations sans ambiguïté.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Ma conviction : une bonne analyse, bien documentée, évite des mois de
              retravail. J&apos;aide les équipes à délivrer avec méthode.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-medium text-primary-foreground/70 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
