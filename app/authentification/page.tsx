import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

/* ─── Brand icons (SVG inline — lucide-react ne garantit pas ces icônes) ── */

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function AuthentificationPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md py-0 shadow-sm">

        {/* En-tête */}
        <CardHeader className="gap-1 px-8 pt-8 pb-4 text-center">
          <h1 className="font-serif text-2xl font-light text-foreground">
            Connexion
          </h1>
          <p className="text-sm text-muted-foreground">
            Accédez à votre espace MR Insights
          </p>
        </CardHeader>

        <CardContent className="px-8 pb-8 pt-2">

          {/* Boutons sociaux */}
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full gap-2 font-normal">
              <GoogleIcon />
              Continuer avec Google
            </Button>
            <Button variant="outline" className="w-full gap-2 font-normal">
              <GitHubIcon />
              Continuer avec GitHub
            </Button>
            <Button variant="outline" className="w-full gap-2 font-normal">
              <LinkedInIcon />
              Continuer avec LinkedIn
            </Button>
          </div>

          {/* Séparateur */}
          <div className="relative my-6 flex items-center">
            <div className="flex-1 border-t border-border" />
            <span className="mx-4 text-xs uppercase tracking-widest text-muted-foreground">
              ou
            </span>
            <div className="flex-1 border-t border-border" />
          </div>

          {/* Formulaire */}
          <form className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <Button
              type="submit"
              className="h-9 w-full bg-primary text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Se connecter
            </Button>
          </form>

          {/* Lien inscription */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Pas encore de compte ?{' '}
            <Link
              href="#"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              S&apos;inscrire
            </Link>
          </p>

        </CardContent>
      </Card>
    </main>
  );
}
