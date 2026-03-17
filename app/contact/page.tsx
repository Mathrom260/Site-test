import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-6 pb-24 pt-32">
      <Card className="shadow-sm py-0">

        {/* ── En-tête ──────────────────────────────────────── */}
        <CardHeader className="px-8 pt-8 pb-2 gap-1">
          <h1 className="font-serif text-4xl font-light leading-tight text-foreground">
            Discutons de votre projet.
          </h1>
          <p className="text-sm text-muted-foreground">
            Réponse sous 24h, sans engagement.
          </p>
        </CardHeader>

        {/* ── Formulaire ───────────────────────────────────── */}
        <CardContent className="px-8 pb-8 pt-4">
          <form className="space-y-4">

            {/* Prénom + Nom */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Votre prénom" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Votre nom" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>

            {/* Société */}
            <div className="space-y-1.5">
              <Label htmlFor="company">
                Société{' '}
                <span className="text-muted-foreground font-normal">(optionnel)</span>
              </Label>
              <Input id="company" placeholder="Nom de votre organisation" />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Décrivez votre besoin, votre contexte, vos contraintes..."
                className="min-h-32 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="space-y-2 pt-1">
              <Button
                type="submit"
                className="h-9 w-full bg-primary text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Envoyer
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Vos données ne sont pas partagées.
              </p>
            </div>

          </form>
        </CardContent>

        {/* ── Alternative email ────────────────────────────── */}
        <div className="border-t border-border px-8 py-5">
          <p className="text-sm text-muted-foreground">
            Vous préférez écrire directement ?{' '}
            <a
              href="mailto:mr_insights@outlook.com"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              mr_insights@outlook.com
            </a>
          </p>
        </div>

      </Card>
    </main>
  );
}
