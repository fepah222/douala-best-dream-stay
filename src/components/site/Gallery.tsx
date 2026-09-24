import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSitePreferences } from "@/components/site/SitePreferences";

export type GalleryItem = { src: string; label: string };

export function Carousel({ items }: { items: GalleryItem[] }) {
  const [i, setI] = useState(0);
  const { language } = useSitePreferences();
  const item = items[i] ?? items[0];
  if (!item) return null;


  return (
    <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
      <img
        src={item.src}
        alt={item.label}
        className="aspect-4/3 w-full object-cover"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/85 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-6 font-display text-xl font-semibold sm:text-2xl">
        {item.label}
      </span>
      <Button
        type="button"
        aria-label={language === "fr" ? "Image précédente" : "Previous image"}
        variant="ghost"
        size="icon"
        onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        type="button"
        aria-label={language === "fr" ? "Image suivante" : "Next image"}
        variant="ghost"
        size="icon"
        onClick={() => setI((v) => (v + 1) % items.length)}
        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}

export function GalleryGrid({
  items,
  title,
  subtitle,
}: {
  items: GalleryItem[];
  title: string;
  subtitle: string;
}) {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">
        {title.split("|")[0]}
        <span className="text-gradient-amber">{title.split("|")[1]}</span>
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <figure
            key={it.label}
            className="group relative overflow-hidden rounded-2xl border border-border shadow-card"
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/85 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 text-sm font-medium">
              {it.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
