import { FileSearch, GitMerge, LayoutList, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Business Analysis',
    tagline: 'Clarifier pour mieux construire',
    description:
      "L'analyse métier est le point de départ de tout projet réussi. J'interviens pour éliciter, structurer et valider les besoins avec toutes les parties prenantes.",
    points: [
      "Ateliers d'élicitation des besoins",
      "Rédaction de user stories et cas d'usage",
      'Validation fonctionnelle avec les équipes métier',
      'Cadrage de projet et feuille de route',
    ],
  },
  {
    icon: LayoutList,
    number: '02',
    title: 'Analyse Fonctionnelle',
    tagline: 'Documenter pour mieux implémenter',
    description:
      "Une documentation fonctionnelle rigoureuse évite des semaines de retravail. Je modélise les processus et produis des spécifications qui permettent des développements précis.",
    points: [
      'Modélisation des processus (BPMN)',
      'Rédaction de spécifications fonctionnelles',
      "Analyse d'impact et de faisabilité",
      'Référentiel de recette fonctionnelle',
    ],
  },
  {
    icon: GitMerge,
    number: '03',
    title: 'Gestion de Projet',
    tagline: "L'interface qui fait avancer",
    description:
      "Je coordonne les acteurs, structure les livraisons et assure le suivi opérationnel pour que les projets tiennent leurs engagements — dans les délais et le périmètre.",
    points: [
      'Planification et suivi de livraisons',
      'Gestion des risques et dépendances',
      'Reporting et communication aux stakeholders',
      'Coordination métier ↔ IT',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background pt-28">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl border-b border-border px-6 py-24">
        <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground sm:text-6xl">
          Des interventions ciblées,
          <br />
          des livrables qui durent.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Chaque mission est différente. J&apos;adapte mon niveau d&apos;intervention — analyse,
          documentation, pilotage — selon les besoins réels du projet et de l&apos;équipe.
        </p>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="grid items-start gap-8 rounded-xl border border-border bg-card p-8 shadow-sm lg:grid-cols-2 lg:gap-12"
              >
                {/* Left */}
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-serif text-5xl font-light leading-none text-border">
                      {service.number}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-primary">{service.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Right — points */}
                <div className="space-y-3 pt-1">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl border-t border-border px-6 py-24">
        <h2 className="font-serif text-3xl text-foreground">Un projet en vue ?</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Décrivez votre besoin et voyons ensemble comment j&apos;interviens.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Prendre contact
        </Link>
      </section>

    </main>
  );
}
