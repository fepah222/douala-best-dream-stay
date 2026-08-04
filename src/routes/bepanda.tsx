import { createFileRoute } from "@tanstack/react-router";
import { Wifi, ShieldCheck, Zap, Snowflake, Tv, MapPin } from "lucide-react";
import { images, contact } from "@/lib/site-data";
import { SiteNav } from "@/components/site/SiteNav";
import { Carousel, GalleryGrid, type GalleryItem } from "@/components/site/Gallery";
import { PolicySection } from "@/components/site/PolicySection";
import { ContactSection, SiteFooter } from "@/components/site/ContactSection";

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

const amenities = [
  { Icon: Wifi, title: "High-Speed Wi-Fi", text: "Uninterrupted global connectivity" },
  { Icon: ShieldCheck, title: "24/7 Security", text: "On-site personnel around the clock" },
  { Icon: Zap, title: "Standby Generator", text: "Automatic backup — never lose power" },
  { Icon: Snowflake, title: "Air Conditioning", text: "Cool comfort in every room" },
  { Icon: Tv, title: "Smart TV", text: "Flat-screen entertainment" },
  { Icon: MapPin, title: "Prime Access", text: "On the paved main road" },
];

function Bepanda() {
  return (
    <div className="min-h-screen">
      <SiteNav
        brand="Bépanda"
        brandAccent="Guest House"
        links={[
          { label: "Features", href: "#features" },
          { label: "Gallery", href: "#gallery" },
          { label: "Amenities", href: "#amenities" },
          { label: "Policy", href: "#policy" },
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
              Luxury &amp; Comfort,
              <span className="block text-gradient-amber">Fully Furnished</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Two premium studios designed to international standards. Perfect for expatriates,
              tourists, and professionals seeking a secure, modern stay in Douala.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-amber px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Reserve Your Stay
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary"
              >
                View Gallery
              </a>
            </div>
            <dl className="mt-10 flex gap-10">
              {[
                ["24/7", "Security"],
                ["2", "Studios"],
                ["100%", "Furnished"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold text-primary">{n}</dt>
                  <dd className="text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Carousel items={gallery} />
        </section>

        <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Designed for <span className="text-gradient-amber">comfort</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every detail considered. From the plush bedding to the equipped kitchen — your home
            away from home.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
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
          items={gallery}
          title="Inside the |studios"
          subtitle="Swipe or use the arrows to explore each room."
        />

        <section id="amenities" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Premium <span className="text-gradient-amber">amenities</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Everything included — so you can settle in and feel at home from day one.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ Icon, title, text }) => (
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
          blurb="Contact us today for rates, availability, and reservations. We respond promptly."
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
