import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Tv, Snowflake, Droplets, Building2, ShieldCheck } from "lucide-react";
import { images, contact } from "@/lib/site-data";
import { SiteNav } from "@/components/site/SiteNav";
import { Carousel, GalleryGrid, type GalleryItem } from "@/components/site/Gallery";
import { PolicySection } from "@/components/site/PolicySection";
import { ContactSection, SiteFooter } from "@/components/site/ContactSection";
import { useSitePreferences } from "@/components/site/SitePreferences";

export const Route = createFileRoute("/bonamoussadi")({
  head: () => ({
    meta: [
      { title: "Bonamoussadi Guest House — Premium Suites in Douala" },
      {
        name: "description",
        content:
          "14 ultra-modern studios and 3 luxury 2-bedroom apartments at Bonamoussadi, Santa Barbara, Douala — with conference hall and secure parking.",
      },
      { property: "og:title", content: "Bonamoussadi Guest House — Premium Suites in Douala" },
      {
        property: "og:description",
        content:
          "Premium suites, redefined hospitality: panoramic city views, onsite conference hall, secure private parking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bonamoussadi,
});

const gallery: GalleryItem[] = [
  { src: images.bonaLiving1, label: "Sitting Room" },
  { src: images.bonaBedroom1, label: "Master Bedroom" },
  { src: images.bonaLounge, label: "Living Room" },
  { src: images.bonaKitchen, label: "Open Kitchen" },
  { src: images.bonaSuite1, label: "Studio Bedroom" },
  { src: images.bonaBalcony, label: "Panoramic Balcony" },
  { src: images.bonaLiving2, label: "TV Lounge" },
  { src: images.bonaBedroom2, label: "Bedroom View" },
  { src: images.bonaSalon, label: "Grand Salon" },
];

const features = [
  {
    src: images.bonaBedroom1,
    title: "Ultra-Modern Studios",
    text: "14 elegant studios with premium finishes, private balcony, and panoramic city views.",
  },
  {
    src: images.bonaLounge,
    title: "Luxury 2-Bedroom Apartments",
    text: "3 spacious apartments — perfect for families or executive stays with full comfort.",
  },
  {
    src: images.bonaSalon,
    title: "Onsite Conference Hall",
    text: "State-of-the-art, fully equipped venue for seminars, meetings, and events.",
  },
  {
    src: images.bonaBalcony,
    title: "Secure Private Parking",
    text: "Hassle-free parking in a prime, sophisticated neighborhood.",
  },
];

const amenities = [
  { Icon: Wifi, title: "High-Speed Wi-Fi", text: "Fast, uninterrupted connectivity" },
  { Icon: Tv, title: "Canal+ Subscription", text: "Premium TV entertainment included" },
  { Icon: Snowflake, title: "Full Air Conditioning", text: "Cool comfort in every room" },
  { Icon: Droplets, title: "Constant Hot Water", text: "Reliable hot water day and night" },
  { Icon: Building2, title: "Panoramic Balconies", text: "Private balconies with city views" },
  { Icon: ShieldCheck, title: "24/7 Security", text: "Safe, sophisticated neighborhood" },
];

const galleryFr: GalleryItem[] = ["Séjour", "Chambre principale", "Salon", "Cuisine ouverte", "Chambre du studio", "Balcon panoramique", "Salon TV", "Vue de la chambre", "Grand salon"].map((label, index) => ({ ...gallery[index], label }));
const featuresFr = [
  { ...features[0], title: "Studios ultramodernes", text: "14 studios élégants avec finitions haut de gamme, balcon privé et vue panoramique sur la ville." },
  { ...features[1], title: "Appartements luxueux de 2 chambres", text: "3 appartements spacieux, parfaits pour les familles ou les séjours professionnels tout confort." },
  { ...features[2], title: "Salle de conférence sur place", text: "Un espace moderne et entièrement équipé pour séminaires, réunions et événements." },
  { ...features[3], title: "Parking privé sécurisé", text: "Un stationnement facile dans un quartier privilégié et élégant." },
];
const amenitiesFr = [
  { ...amenities[0], title: "Wi-Fi haut débit", text: "Connexion rapide et ininterrompue" },
  { ...amenities[1], title: "Abonnement Canal+", text: "Divertissement TV haut de gamme inclus" },
  { ...amenities[2], title: "Climatisation complète", text: "Fraîcheur dans chaque pièce" },
  { ...amenities[3], title: "Eau chaude permanente", text: "Eau chaude fiable jour et nuit" },
  { ...amenities[4], title: "Balcons panoramiques", text: "Balcons privés avec vue sur la ville" },
  { ...amenities[5], title: "Sécurité 24 h/24", text: "Quartier sûr et élégant" },
];

function Bonamoussadi() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const shownGallery = fr ? galleryFr : gallery;
  const shownFeatures = fr ? featuresFr : features;
  const shownAmenities = fr ? amenitiesFr : amenities;
  return (
    <div className="min-h-screen">
      <SiteNav
        brand="Bonamoussadi"
        brandAccent="Guest House"
        links={[
          { label: fr ? "Espaces" : "Features", href: "#features" },
          { label: fr ? "Galerie" : "Gallery", href: "#gallery" },
          { label: fr ? "Équipements" : "Amenities", href: "#amenities" },
          { label: fr ? "Règlement" : "Policy", href: "#policy" },
          { label: "Contact", href: "#contact" },
        ]}
        bookHref="#contact"
        otherLocation={{ label: "Bépanda", to: "/bepanda" }}
      />

      <main className="pt-16">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
              Douala · Bonamoussadi · Santa Barbara
            </span>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              {fr ? "Suites haut de gamme," : "Premium Suites,"}
              <span className="block text-gradient-amber">{fr ? "L'hospitalité réinventée" : "Redefined Hospitality"}</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              {fr ? "14 studios ultramodernes ou 3 appartements luxueux de 2 chambres avec vue panoramique sur la ville, salle de conférence sur place et parking privé sécurisé dans l'un des quartiers les plus élégants de Douala." : "14 ultra-modern studios or 3 luxury 2-bedroom apartments with panoramic city views, an onsite conference hall, and secure private parking in one of Douala's most sophisticated neighborhoods."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-amber px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                {fr ? "Réserver votre séjour" : "Reserve Your Stay"}
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary"
              >
                {fr ? "Voir la galerie" : "View Gallery"}
              </a>
            </div>
            <dl className="mt-10 flex gap-10">
              {[
                ["14", "Studios"],
                ["3", fr ? "Appartements" : "Apartments"],
                ["24/7", fr ? "Parking sécurisé" : "Secure Parking"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold text-primary">{n}</dt>
                  <dd className="text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Carousel items={shownGallery} />
        </section>

        <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {fr ? "Pensé pour " : "Built for "}<span className="text-gradient-amber">{fr ? "chaque séjour" : "every stay"}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {fr ? "Du voyage d'affaires aux vacances en famille, choisissez l'espace adapté à votre séjour." : "From business travelers to vacationing families — choose the space that fits your journey."}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {shownFeatures.map((f) => (
              <article
                key={f.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <GalleryGrid
          items={shownGallery}
          title={fr ? "À l'intérieur de la |résidence" : "Inside the |property"}
          subtitle={fr ? "Faites glisser ou utilisez les flèches pour découvrir les espaces." : "Swipe or use the arrows to explore the spaces."}
        />

        <section id="amenities" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {fr ? "Des équipements " : "Top-tier "}<span className="text-gradient-amber">{fr ? "d'exception" : "amenities"}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {fr ? "Tout est inclus pour votre confort, votre autonomie et une expérience luxueuse." : "Everything included for comfort, autonomy, and luxury."}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shownAmenities.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/50"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <PolicySection />

        <ContactSection
          blurb={fr ? "Contactez-nous dès aujourd'hui pour connaître les tarifs, les disponibilités et réserver. Découvrez une nouvelle vision de l'hospitalité." : "Contact us today for rates, availability, and reservations. Experience hospitality redefined."}
          primaryTel={contact.phone2Tel}
          primaryLabel={contact.phone2}
          secondaryLabel={contact.phone1}
          location="Bonamoussadi, Santa Barbara"
          whatsapp="https://wa.me/237675535727"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
