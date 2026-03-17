import { FileSearch, GitMerge, LayoutList } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Business Analysis',
    description:
      'Cadrage des besoins métier, élicitation des exigences, rédaction de spécifications claires qui engagent toutes les parties prenantes et sécurisent le démarrage des projets.',
  },
  {
    icon: LayoutList,
    number: '02',
    title: 'Analyse Fonctionnelle',
    description:
      "Modélisation des processus, analyse d'impact, documentation fonctionnelle rigoureuse. Une base solide pour que chaque implémentation soit précise et sans ambiguïté.",
  },
  {
    icon: GitMerge,
    number: '03',
    title: 'Gestion de Projet',
    description:
      "Coordination entre métier et IT, suivi de livraisons, gestion des risques et reporting structuré. L'interface humaine qui fait avancer les projets complexes.",
  },
];

export function ServicesSection() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
                Expertises
              </p>
            </div>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
              Une méthode rigoureuse,
              <br />
              des livrables qui comptent.
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline lg:self-auto"
          >
            Voir tous les services →
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Gold accent line on hover */}
                <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-xl bg-accent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Number + Icon */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-heading text-4xl font-light text-border">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
