'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/authentification', label: 'Connexion' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-border/50 bg-background/80 px-3 py-2 shadow-sm backdrop-blur-md">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              pathname === link.href
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {link.label}
          </Link>
        ))}

        <div className="ml-1 border-l border-border/60 pl-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
