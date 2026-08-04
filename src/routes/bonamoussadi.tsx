import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Tv, Snowflake, Droplets, Building2, ShieldCheck } from "lucide-react";
import { images, contact } from "@/lib/site-data";
import { SiteNav } from "@/components/site/SiteNav";
import { Carousel, GalleryGrid, type GalleryItem } from "@/components/site/Gallery";
import { PolicySection } from "@/components/site/PolicySection";
import { ContactSection, SiteFooter } from "@/components/site/ContactSection";

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

function Bonamoussadi() {
  return (
    <div className="min-h-screen">
      <SiteNav
        brand="Bonamoussadi"
        brandAccent="Guest House"
        links={[
          { label: "Features", href: "#features" },
          { label: "Gallery", href: "#gallery" },
          { label: "Amenities", href: "#amenities" },
          { label: "Policy", href: "#policy" },
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
              Premium Suites,
              <span className="block text-gradient-amber">Redefined Hospitality</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              14 ultra-modern studios or 3 luxury 2-bedroom apartments with panoramic city views,
              an onsite conference hall, and secure private parking in one of Douala's most
              sophisticated neighborhoods.
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
                ["14", "Studios"],
                ["3", "Apartments"],
                ["24/7", "Secure Parking"],
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
            Built for <span className="text-gradient-amber">every stay</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From business travelers to vacationing families — choose the space that fits your
            journey.
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
          title="Inside the |property"
          subtitle="Swipe or use the arrows to explore the spaces."
        />

        <section id="amenities" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Top-tier <span className="text-gradient-amber">amenities</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Everything included for comfort, autonomy, and luxury.
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
          blurb="Contact us today for rates, availability, and reservations. Experience hospitality redefined."
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
