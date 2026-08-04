import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = { label: string; href: string };

export function SiteNav({
  brand,
  brandAccent,
  links,
  bookHref,
  otherLocation,
}: {
  brand: string;
  brandAccent: string;
  links: NavLink[];
  bookHref: string;
  otherLocation: { label: string; to: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight sm:text-xl">
          {brand} <span className="text-primary">{brandAccent}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <Link to="/" className="transition-colors hover:text-foreground">
            ← All Locations
          </Link>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Link to={otherLocation.to} className="transition-colors hover:text-foreground">
            ↔ {otherLocation.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={bookHref}
            className="hidden rounded-full bg-gradient-amber px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 text-sm lg:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-muted-foreground">
            ← All Locations
          </Link>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            to={otherLocation.to}
            onClick={() => setOpen(false)}
            className="block py-2 text-muted-foreground"
          >
            ↔ {otherLocation.label}
          </Link>
          <a
            href={bookHref}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full bg-gradient-amber px-5 py-2 font-semibold text-primary-foreground"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
