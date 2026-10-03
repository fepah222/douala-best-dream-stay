import { createFileRoute } from "@tanstack/react-router";
import { Wifi, ShieldCheck, Zap, Snowflake, Tv, MapPin } from "lucide-react";
import { images, contact } from "@/lib/site-data";
import { SiteNav } from "@/components/site/SiteNav";
import { Carousel, GalleryGrid, type GalleryItem } from "@/components/site/Gallery";
import { PolicySection } from "@/components/site/PolicySection";
import { ContactSection, SiteFooter } from "@/components/site/ContactSection";
import { useSitePreferences } from "@/components/site/SitePreferences";

type Amenity = {
  Icon: typeof Wifi;
  title: string;
  text: string;
};

export const Route = createFileRoute("/bepanda")({
  head: () => ({
    meta: [
      { title: "Bépanda Guest House — Furnished Studios in Douala" },
      {
        name: "description",
        content:
          "Two premium fully furnished studios at Bépanda, Clinique Etienno, Douala. 24/7 security, Wi-Fi, AC and standby generator.",
      },
      { property: "og:title", content: "Bépanda Guest House — Furnished Studios in Douala" },
      {
        property: "og:description",
        content:
          "Luxury and comfort, fully furnished. Premium studios for expatriates, tourists and professionals in Douala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bepanda,
});

const gallery: GalleryItem[] = [
  { src: images.living1, label: "Living Room" },
  { src: images.bedroom, label: "Bedroom" },
  { src: images.kitchen2, label: "Kitchen" },
  { src: images.living2, label: "Lounge" },
  { src: images.bathroom, label: "Bathroom" },
  { src: images.living3, label: "Sofa Suite" },
  { src: images.kitchen1, label: "Kitchenette" },
];

const features = [
  {
    src: images.living1,
    title: "Spacious Living Room",
    text: "Comfortable sofa, Smart TV, and AC for relaxing or entertaining.",
  },
  {
    src: images.bedroom,
    title: "Cozy Bedroom",
    text: "Plush bed, premium bedding, AC, and built-in wooden wardrobes.",
  },
  {
    src: images.kitchen2,
    title: "Equipped Kitchen",
    text: "Gas cooker, refrigerator, microwave, and essential utensils.",
  },
  {
    src: images.bathroom,
    title: "Modern Bathroom",
    text: "Fully tiled with a functional hot-water shower system.",
  },
];

const amenities: Amenity[] = [
  { Icon: Wifi, title: "High-Speed Wi-Fi", text: "Uninterrupted global connectivity" },
  { Icon: ShieldCheck, title: "24/7 Security", text: "On-site personnel around the clock" },
  { Icon: Zap, title: "Standby Generator", text: "Automatic backup — never lose power" },
  { Icon: Snowflake, title: "Air Conditioning", text: "Cool comfort in every room" },
  { Icon: Tv, title: "Smart TV", text: "Flat-screen entertainment" },
  { Icon: MapPin, title: "Prime Access", text: "On the paved main road" },
];

const galleryFr: GalleryItem[] = ["Salon", "Chambre", "Cuisine", "Espace détente", "Salle de bain", "Canapé-lit", "Kitchenette"].map((label, index) => ({ src: gallery[index]?.src ?? "", label }));
const featuresFr = [
  { ...features[0], title: "Salon spacieux", text: "Canapé confortable, Smart TV et climatisation pour vous détendre ou recevoir." },
  { ...features[1], title: "Chambre confortable", text: "Lit douillet, literie haut de gamme, climatisation et placards intégrés en bois." },
  { ...features[2], title: "Cuisine équipée", text: "Cuisinière à gaz, réfrigérateur, micro-ondes et ustensiles essentiels." },
  { ...features[3], title: "Salle de bain moderne", text: "Entièrement carrelée avec un système de douche à eau chaude fonctionnel." },
];
const amenitiesFr: Amenity[] = [
  { Icon: Wifi, title: "Wi-Fi haut débit", text: "Connexion mondiale ininterrompue" },
  { Icon: ShieldCheck, title: "Sécurité 24 h/24", text: "Personnel sur place en permanence" },
  { Icon: Zap, title: "Groupe électrogène", text: "Alimentation de secours automatique" },
  { Icon: Snowflake, title: "Climatisation", text: "Fraîcheur dans chaque pièce" },
  { Icon: Tv, title: "Smart TV", text: "Divertissement sur écran plat" },
  { Icon: MapPin, title: "Accès privilégié", text: "Sur la route principale goudronnée" },
];

function Bepanda() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const shownGallery = fr ? galleryFr : gallery;
  const shownFeatures = fr ? featuresFr : features;
  const shownAmenities = fr ? amenitiesFr : amenities;
  return (
    <div className="min-h-screen">
      <SiteNav
        brand="Bépanda"
        brandAccent="Guest House"
        links={[
          { label: fr ? "Espaces" : "Features", href: "#features" },
          { label: fr ? "Galerie" : "Gallery", href: "#gallery" },
          { label: fr ? "Équipements" : "Amenities", href: "#amenities" },
          { label: fr ? "Règlement" : "Policy", href: "#policy" },
          { label: "Contact", href: "#contact" },
        ]}
        bookHref="#contact"
        otherLocation={{ label: "Bonamoussadi", to: "/bonamoussadi" }}
      />

      <main className="pt-16">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
              Douala · Bépanda · Clinique Etienno
            </span>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              {fr ? "Luxe et confort," : "Luxury & Comfort,"}
              <span className="block text-gradient-amber">{fr ? "Entièrement meublé" : "Fully Furnished"}</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              {fr ? "Deux studios haut de gamme conçus selon les normes internationales. Parfaits pour les expatriés, touristes et professionnels à la recherche d'un séjour moderne et sécurisé à Douala." : "Two premium studios designed to international standards. Perfect for expatriates, tourists, and professionals seeking a secure, modern stay in Douala."}
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
                ["24/7", fr ? "Sécurité" : "Security"],
                ["2", "Studios"],
                ["100%", fr ? "Meublés" : "Furnished"],
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
            {fr ? "Pensé pour votre " : "Designed for "}<span className="text-gradient-amber">{fr ? "confort" : "comfort"}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {fr ? "Chaque détail a été pensé, de la literie douillette à la cuisine équipée : votre maison loin de chez vous." : "Every detail considered. From the plush bedding to the equipped kitchen — your home away from home."}
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
          title={fr ? "À l'intérieur des |studios" : "Inside the |studios"}
          subtitle={fr ? "Faites glisser ou utilisez les flèches pour découvrir chaque pièce." : "Swipe or use the arrows to explore each room."}
        />

        <section id="amenities" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {fr ? "Des équipements " : "Premium "}<span className="text-gradient-amber">{fr ? "haut de gamme" : "amenities"}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {fr ? "Tout est inclus pour que vous vous sentiez chez vous dès le premier jour." : "Everything included — so you can settle in and feel at home from day one."}
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
          blurb={fr ? "Contactez-nous dès aujourd'hui pour connaître les tarifs, les disponibilités et réserver. Nous répondons rapidement." : "Contact us today for rates, availability, and reservations. We respond promptly."}
          primaryTel={contact.phone1Tel}
          primaryLabel="671 300 185"
          secondaryLabel="675 535 727"
          location="Bépanda, Clinique Etienno"
          whatsapp="https://wa.me/237671300185"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
