import { createFileRoute, Link } from "@tanstack/react-router";
import { BedDouble, Building2, MapPin, ArrowRight } from "lucide-react";
import { images } from "@/lib/site-data";
import { SiteFooter } from "@/components/site/ContactSection";
import { PreferenceControls, useSitePreferences } from "@/components/site/SitePreferences";

type Location = {
  to: "/bepanda" | "/bonamoussadi";
  image: string;
  alt: string;
  area: string;
  meta: string;
  Icon: typeof BedDouble;
  title: string;
  text: string;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guest House Douala — Choose Your Location" },
      {
        name: "description",
        content:
          "Two premium guest houses in Douala, Cameroon: Bépanda and Bonamoussadi. Fully furnished studios and luxury apartments.",
      },
      { property: "og:title", content: "Guest House Douala — Choose Your Location" },
      {
        property: "og:description",
        content:
          "Two premium guest houses in Douala, Cameroon. Pick the neighborhood that fits your stay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const locations: Location[] = [
  {
    to: "/bepanda" as const,
    image: images.living1,
    alt: "Bépanda Guest House",
    area: "Bépanda · Clinique Etienno",
    meta: "2 Furnished Studios",
    Icon: BedDouble,
    title: "Bépanda Guest House",
    text: "Two premium fully furnished studios on the paved main road. Perfect for expatriates, tourists, and professionals.",
  },
  {
    to: "/bonamoussadi" as const,
    image: images.bonaSalon,
    alt: "Bonamoussadi Guest House",
    area: "Bonamoussadi · Santa Barbara",
    meta: "14 Studios · 3 Apartments · Conference Hall",
    Icon: Building2,
    title: "Bonamoussadi Guest House",
    text: "Ultra-modern studios and luxury 2-bedroom apartments with panoramic city views and an onsite conference hall.",
  },
];

const locationsFr: Location[] = [
  { to: "/bepanda", image: images.living1, area: "Bépanda · Clinique Etienno", Icon: BedDouble, alt: "Maison d'hôtes de Bépanda", meta: "2 studios meublés", title: "Maison d'hôtes de Bépanda", text: "Deux studios haut de gamme entièrement meublés sur la route principale goudronnée. Parfaits pour les expatriés, touristes et professionnels." },
  { to: "/bonamoussadi", image: images.bonaSalon, area: "Bonamoussadi · Santa Barbara", Icon: Building2, alt: "Maison d'hôtes de Bonamoussadi", meta: "14 studios · 3 appartements · Salle de conférence", title: "Maison d'hôtes de Bonamoussadi", text: "Des studios ultramodernes et des appartements luxueux de 2 chambres avec vue panoramique sur la ville et salle de conférence sur place." },
];

function Index() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const displayedLocations = fr ? locationsFr : locations;
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <span className="font-display text-lg font-bold">Guest House</span>
          <PreferenceControls />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Douala · {fr ? "Cameroun" : "Cameroon"}
          </span>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
            {fr ? "Maison d'hôtes" : "Guest House"}
            <span className="block text-gradient-amber">{fr ? "Choisissez votre établissement" : "Choose your location"}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            {fr ? "Deux maisons d'hôtes haut de gamme à Douala, chacune avec son propre caractère. Choisissez le quartier qui correspond à votre séjour." : "Two premium guest houses in Douala, each with its own character. Pick the neighborhood that fits your stay."}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {displayedLocations.map(({ Icon, ...loc }) => (
            <article
              key={loc.to}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-colors hover:border-primary/50"
            >
              <div className="relative">
                <img
                  src={loc.image}
                  alt={loc.alt}
                  className="aspect-16/10 w-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {loc.area}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {loc.meta}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{loc.title}</h2>
                <p className="mt-3 text-muted-foreground">{loc.text}</p>
                <Link
                  to={loc.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-amber px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  {fr ? "Découvrir cet établissement" : "Explore this location"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
