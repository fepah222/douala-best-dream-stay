import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, BedDouble, Building2, MapPin, MessageCircle } from "lucide-react";
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
  number: string;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Douala Best Dreams | Furnished Stays in Douala" },
      {
        name: "description",
        content:
          "Find a comfortable furnished studio or apartment in Douala. Explore our Bépanda and Bonamoussadi guest-house locations.",
      },
      { property: "og:title", content: "Douala Best Dreams | Furnished Stays in Douala" },
      {
        property: "og:description",
        content: "Thoughtful spaces, warm hospitality and convenient stays in Douala, Cameroon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const locations: Location[] = [
  {
    to: "/bepanda",
    image: images.living1,
    alt: "Furnished living area at the Bépanda guest house",
    area: "Bépanda · Clinique Etienno",
    meta: "2 furnished studios",
    Icon: BedDouble,
    title: "Bépanda",
    text: "A welcoming, practical place to settle in, with furnished studios along the paved main road.",
    number: "01",
  },
  {
    to: "/bonamoussadi",
    image: images.bonaSalon,
    alt: "Modern apartment living area at the Bonamoussadi guest house",
    area: "Bonamoussadi · Santa Barbara",
    meta: "14 studios · 3 apartments · Conference hall",
    Icon: Building2,
    title: "Bonamoussadi",
    text: "Contemporary studios and spacious two-bedroom apartments, with a conference hall on site.",
    number: "02",
  },
];

const locationsFr: Location[] = [
  {
    ...locations[0],
    area: "Bépanda · Clinique Etienno",
    meta: "2 studios meublés",
    title: "Bépanda",
    text: "Un lieu accueillant et pratique, avec des studios meublés situés le long de la route principale goudronnée.",
  },
  {
    ...locations[1],
    area: "Bonamoussadi · Santa Barbara",
    meta: "14 studios · 3 appartements · Salle de conférence",
    title: "Bonamoussadi",
    text: "Des studios contemporains et de spacieux appartements de deux chambres, avec une salle de conférence sur place.",
  },
];

function Index() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const displayedLocations = fr ? locationsFr : locations;
  const whatsapp = "https://wa.me/237675535727?text=" + encodeURIComponent(
    fr ? "Bonjour, je souhaite avoir des informations sur vos logements à Douala." : "Hello, I would like information about your furnished stays in Douala."
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#29271f]">
      <header className="relative z-20 border-b border-[#ded8ca] bg-[#f7f4ed]/95">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link to="/" className="group flex items-center gap-3" aria-label="Douala Best Dreams home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#343c2d] font-display text-lg text-[#f7f4ed]">D</span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">Douala Best Dreams</span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8a806d]">Furnished stays · Douala</span>
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#locations" className="hidden text-sm font-medium text-[#655f52] transition-colors hover:text-[#a56b3f] sm:inline-flex">
              {fr ? "Nos établissements" : "Our locations"}
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#343c2d] px-5 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#4b5940] sm:inline-flex">
              <MessageCircle className="h-4 w-4" />
              {fr ? "Réserver" : "Book a stay"}
            </a>
            <PreferenceControls />
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a56b3f] sm:text-xs">
              <span className="h-px w-9 bg-[#a56b3f]" />
              {fr ? "Bienvenue à Douala, Cameroun" : "Welcome to Douala, Cameroon"}
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7vw,6.4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#29271f]">
              {fr ? "Un séjour" : "A better"}
              <span className="block italic text-[#a56b3f]">{fr ? "à votre image." : "way to stay."}</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#716b5e] sm:text-lg sm:leading-9">
              {fr
                ? "Découvrez des studios meublés et des appartements confortables dans des quartiers pratiques de Douala. Nous sommes là pour rendre votre séjour simple et agréable."
                : "Discover furnished studios and comfortable apartments in convenient neighbourhoods across Douala. Thoughtful spaces and warm hospitality make settling in feel easy."}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#locations" className="inline-flex items-center gap-3 rounded-full bg-[#a56b3f] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-16px_rgba(98,61,34,0.7)] transition-transform hover:-translate-y-0.5">
                {fr ? "Explorer nos établissements" : "Explore our locations"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs font-medium text-[#8a806d]">{fr ? "Bépanda · Bonamoussadi" : "Bépanda · Bonamoussadi"}</span>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-[#ded8ca] pt-6">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-[#f7f4ed] bg-[#d9c6a8]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#f7f4ed] bg-[#a8ad91]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#f7f4ed] bg-[#c18d66]" />
              </div>
              <p className="text-xs leading-5 text-[#817969]">
                <span className="block font-semibold text-[#494438]">{fr ? "Des espaces pour se sentir chez soi" : "Space to feel at home"}</span>
                {fr ? "Pour les courts et longs séjours" : "For short and extended stays"}
              </p>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#d5c4a8] sm:-right-8 sm:-top-8 sm:h-40 sm:w-40" />
            <div className="relative overflow-hidden rounded-[1.8rem] rounded-bl-[5.5rem] bg-[#e5ddce] shadow-[0_28px_70px_-36px_rgba(54,44,30,0.5)]">
              <img src={images.living3} alt="Warm, furnished guest-house living space in Douala" className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[1.08/1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211d17]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75">{fr ? "Votre prochain séjour" : "Your next stay"}</p>
                  <p className="mt-2 font-display text-2xl sm:text-3xl">{fr ? "Bienvenue chez vous." : "Make yourself at home."}</p>
                </div>
                <span className="mb-1 hidden rounded-full border border-white/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:inline-flex">Douala, CM</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-[#e7dfd1] bg-[#fffdf8] px-4 py-3 shadow-lg sm:-left-7 sm:px-5 sm:py-4">
              <MapPin className="h-5 w-5 text-[#a56b3f]" />
              <span className="text-xs font-semibold text-[#494438]">{fr ? "Deux quartiers, un accueil chaleureux" : "Two locations, one warm welcome"}</span>
            </div>
          </div>
        </section>

        <section id="locations" className="scroll-mt-8 bg-[#eee9de] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a56b3f] sm:text-xs">{fr ? "Trouvez votre quartier" : "Find your neighbourhood"}</p>
                <h2 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-[-0.04em] text-[#29271f] sm:text-5xl">
                  {fr ? "Deux adresses. Votre choix." : "Two addresses. Your choice."}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#716b5e]">
                {fr ? "Chaque établissement a son propre caractère. Choisissez celui qui correspond le mieux à votre séjour." : "Each property has its own character. Choose the setting that works best for your time in Douala."}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {displayedLocations.map(({ Icon, ...loc }) => (
                <article key={loc.to} className="group grid overflow-hidden rounded-[1.5rem] border border-[#ded6c7] bg-[#faf8f2] shadow-[0_16px_45px_-32px_rgba(54,44,30,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[1.02fr_0.98fr]">
                  <div className="relative min-h-[250px] overflow-hidden sm:min-h-[330px]">
                    <img src={loc.image} alt={loc.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#f7f4ed]/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#5b5549]">
                      {loc.area}
                    </span>
                    <span className="absolute bottom-4 left-5 font-display text-5xl font-medium text-white/90 drop-shadow">{loc.number}</span>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a56b3f]">
                      <Icon className="h-4 w-4" />
                      {loc.meta}
                    </p>
                    <h3 className="mt-5 font-display text-3xl font-medium tracking-tight text-[#29271f] sm:text-4xl">{loc.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#716b5e]">{loc.text}</p>
                    <Link to={loc.to} className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#a56b3f] pb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#744b2d] transition-colors hover:text-[#a56b3f]">
                      {fr ? "Voir l'établissement" : "View location"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-7 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a56b3f]">{fr ? "Commençons à organiser votre séjour" : "Let's plan your stay"}</p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-[#29271f] sm:text-4xl">{fr ? "Vous avez trouvé votre adresse ?" : "Found the right place?"}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#716b5e]">{fr ? "Contactez-nous directement pour connaître les disponibilités et organiser votre réservation." : "Get in touch directly to ask about availability and arrange your booking."}</p>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#343c2d] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#4b5940]">
            <MessageCircle className="h-4 w-4" />
            {fr ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <div className="bg-[#29271f] text-[#e9e2d5]">
        <SiteFooter />
      </div>
      <a href="#locations" aria-label={fr ? "Voir les établissements" : "View locations"} className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#a56b3f] text-white shadow-xl transition-transform hover:-translate-y-1 sm:hidden">
        <ArrowDown className="h-5 w-5" />
      </a>
    </div>
  );
}
