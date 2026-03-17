import Image from 'next/image';
import Link from 'next/link';
import { Mail, FileSearch, LayoutList, GitMerge } from 'lucide-react';

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const services = [
  {
    icon: FileSearch,
    title: 'Business Analysis',
    description:
      "Élicitation et structuration des besoins métier, rédaction de user stories, cadrage de projet. Une fondation solide avant d'écrire la première ligne de code.",
  },
  {
    icon: LayoutList,
    title: 'Analyse Fonctionnelle',
    description:
      "Modélisation des processus, spécifications fonctionnelles détaillées, référentiel de recette. Une documentation qui rend chaque implémentation prévisible.",
  },
  {
    icon: GitMerge,
    title: 'Gestion de Projet',
    description:
      'Coordination métier et IT, suivi des livraisons, gestion des risques, reporting. Le lien humain qui fait avancer les projets complexes.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Comprendre avant tout',
    description:
      "J'investis du temps à comprendre votre contexte réel — les contraintes, les acteurs, les enjeux — avant de proposer quoi que ce soit.",
  },
  {
    number: '02',
    title: 'Structurer avec rigueur',
    description:
      "Je produis une documentation claire, validée par toutes les parties. Pas de flou, pas d'interprétation : chaque livrable est actionnable.",
  },
  {
    number: '03',
    title: 'Livrer, sans surprises',
    description:
      "Je reste présent jusqu'à la réception. Les écarts sont détectés tôt, les décisions sont tracées, les équipes avancent en confiance.",
  },
];

export default function Home() {
  return (
    <main className="pt-28">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="mb-8">
          <Image
            src="/Images/DSC_9166.jpg"
            alt="Mathieu Renard"
            width={48}
            height={48}
            className="rounded-full object-cover object-top ring-2 ring-border"
            priority
          />
        </div>

        <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground lg:text-6xl">
          Consultant BA, FA & PM. Je transforme vos besoins métier en solutions
          qui tiennent.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Senior consultant spécialisé assurance — je cadre, documente et pilote
          vos projets pour que chaque livraison soit précise et sans ambiguïté.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:mr_insights@outlook.com"
            aria-label="Envoyer un email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="border-y border-border py-6">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>10 ans d&apos;expérience</span>
            <span aria-hidden>·</span>
            <span>30+ projets livrés</span>
            <span aria-hidden>·</span>
            <span>Belgique & international</span>
          </p>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-serif text-3xl text-foreground">Ce que je fais</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── APPROCHE ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-serif text-3xl text-foreground">Comment je travaille</h2>

        <div className="mt-12 space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8">
              <span
                className="shrink-0 font-serif text-4xl font-light leading-none text-border"
                aria-hidden
              >
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-lg text-muted-foreground">
          Un projet en tête ?{' '}
          <Link
            href="/contact"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            Parlons-en →
          </Link>
        </p>
      </section>

    </main>
  );
}
