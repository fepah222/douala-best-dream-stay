import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, Building2, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { images } from "@/lib/site-data";
import { SiteFooter } from "@/components/site/ContactSection";
import { PreferenceControls, useSitePreferences } from "@/components/site/SitePreferences";

type Collection = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  to: "/bepanda" | "/bonamoussadi";
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Douala Best Dreams | Furnished Stays in Douala" },
      {
        name: "description",
        content: "Discover furnished studios and comfortable apartments at Douala Best Dreams in Bépanda and Bonamoussadi, Douala, Cameroon.",
      },
      { property: "og:title", content: "Douala Best Dreams | Furnished Stays in Douala" },
      { property: "og:description", content: "Comfortable furnished stays and warm hospitality in Douala, Cameroon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const whatsapp = "https://wa.me/237675535727?text=" + encodeURIComponent(
    fr ? "Bonjour, je souhaite avoir des informations sur vos logements à Douala." : "Hello, I would like information about your furnished stays in Douala."
  );

  const collections: Collection[] = [
    { title: fr ? "Séjours à Bépanda" : "Bépanda Stays", subtitle: fr ? "Studios meublés" : "Furnished studios", image: images.living1, alt: "Furnished studio living space in Bépanda", to: "/bepanda" },
    { title: fr ? "Séjours à Bonamoussadi" : "Bonamoussadi Stays", subtitle: fr ? "Studios et appartements" : "Studios and apartments", image: images.bonaSalon, alt: "Modern furnished living room in Bonamoussadi", to: "/bonamoussadi" },
    { title: fr ? "Espaces de vie" : "Living Spaces", subtitle: fr ? "Confort au quotidien" : "Comfort for everyday living", image: images.bonaLiving1, alt: "Comfortable furnished living area", to: "/bonamoussadi" },
    { title: fr ? "Chambres accueillantes" : "Restful Bedrooms", subtitle: fr ? "Détente et repos" : "Rest and recharge", image: images.bonaBedroom1, alt: "Neatly furnished guest-house bedroom", to: "/bonamoussadi" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ec] text-[#292820]">
      <header className="relative z-30 border-b border-[#e6e0d6] bg-[#fbfaf7]">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Douala Best Dreams home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#394337] font-display text-lg text-white">D</span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">Douala Best Dreams</span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8b806e]">Furnished stays · Douala</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#625d52] md:flex">
            <a href="#collections" className="transition-colors hover:text-[#b9784d]">{fr ? "Nos logements" : "Our stays"}</a>
            <a href="#about" className="transition-colors hover:text-[#b9784d]">{fr ? "À propos" : "About"}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#394337] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#52604c]">
              <MessageCircle className="h-4 w-4" />{fr ? "Réserver" : "Book now"}
            </a>
          </nav>
          <div className="md:hidden"><PreferenceControls /></div>
          <div className="hidden md:block"><PreferenceControls /></div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-[1440px] px-4 pt-4 sm:px-7 sm:pt-7 lg:px-10">
          <div className="relative min-h-[490px] overflow-hidden rounded-[1.4rem] bg-[#d8d0c3] sm:min-h-[570px] lg:min-h-[630px]">
            <img src={images.living3} alt="Bright and welcoming furnished guest-house living room" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e9]/95 via-[#f6f1e9]/78 to-[#f6f1e9]/5 sm:from-[#f6f1e9]/95 sm:via-[#f6f1e9]/65 sm:to-transparent" />
            <div className="relative z-10 flex min-h-[490px] items-center px-6 py-14 sm:min-h-[570px] sm:px-12 lg:min-h-[630px] lg:px-16">
              <div className="max-w-[590px]">
                <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a66d48] sm:text-xs">
                  <span className="h-px w-9 bg-[#a66d48]" />{fr ? "Douala · Cameroun" : "Douala · Cameroon"}
                </p>
                <h1 className="font-display text-[clamp(3.1rem,6.5vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#292820]">
                  {fr ? "Votre séjour," : "Feel at home"}
                  <span className="block italic text-[#a66d48]">{fr ? "en mieux." : "in Douala."}</span>
                </h1>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#625d52] sm:text-base sm:leading-8">
                  {fr
                    ? "Des studios meublés et des appartements confortables pour vos séjours courts ou prolongés à Douala."
                    : "Furnished studios and comfortable apartments for short visits, business trips and longer stays in Douala."}
                </p>
                <a href="#collections" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#bd8055] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#8b5b3b]/20 transition-all hover:-translate-y-0.5 hover:bg-[#a96d45]">
                  {fr ? "Découvrir nos logements" : "Explore our stays"} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-20 mx-3 -mt-10 grid gap-3 sm:mx-8 sm:grid-cols-3 lg:mx-12 lg:-mt-14">
            <article className="flex min-h-[132px] items-center gap-4 rounded-2xl border border-[#e8e1d7] bg-[#fffefa] p-5 shadow-[0_16px_40px_-24px_rgba(44,39,29,0.35)] sm:p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eee8dc] text-[#9c704d]"><BedDouble className="h-7 w-7" /></span>
              <div><h2 className="font-display text-xl font-semibold">{fr ? "Studios meublés" : "Furnished Studios"}</h2><p className="mt-1 text-xs leading-5 text-[#827a6d]">{fr ? "Pratiques et confortables" : "Practical and comfortable"}</p><Link to="/bepanda" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#9c704d]">{fr ? "Découvrir" : "Explore"} <ArrowUpRight className="h-3 w-3" /></Link></div>
            </article>
            <article className="flex min-h-[132px] items-center gap-4 rounded-2xl border border-[#e8e1d7] bg-[#fffefa] p-5 shadow-[0_16px_40px_-24px_rgba(44,39,29,0.35)] sm:p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eee8dc] text-[#9c704d]"><Building2 className="h-7 w-7" /></span>
              <div><h2 className="font-display text-xl font-semibold">{fr ? "Appartements" : "Apartments"}</h2><p className="mt-1 text-xs leading-5 text-[#827a6d]">{fr ? "De l'espace pour vivre" : "Room to settle in"}</p><Link to="/bonamoussadi" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#9c704d]">{fr ? "Découvrir" : "Explore"} <ArrowUpRight className="h-3 w-3" /></Link></div>
            </article>
            <article className="flex min-h-[132px] items-center gap-4 rounded-2xl border border-[#e8e1d7] bg-[#fffefa] p-5 shadow-[0_16px_40px_-24px_rgba(44,39,29,0.35)] sm:p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eee8dc] text-[#9c704d]"><Sparkles className="h-7 w-7" /></span>
              <div><h2 className="font-display text-xl font-semibold">{fr ? "Séjours flexibles" : "Flexible Stays"}</h2><p className="mt-1 text-xs leading-5 text-[#827a6d]">{fr ? "Courte ou longue durée" : "Short or extended visits"}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#9c704d]">{fr ? "Nous contacter" : "Contact us"} <ArrowUpRight className="h-3 w-3" /></a></div>
            </article>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-[#a66d48]">{fr ? "Trouvez votre espace" : "Find your space"}</p>
              <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{fr ? "Nos logements" : "Featured Stays"}</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#7b7468]">{fr ? "Explorez nos espaces meublés et choisissez l'emplacement qui convient à votre séjour." : "Explore our furnished spaces and choose the location that suits your stay."}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {collections.map((item, index) => (
              <Link key={item.title} to={item.to} className="group overflow-hidden rounded-xl border border-[#e5dfd5] bg-[#fffefa] shadow-[0_12px_34px_-26px_rgba(44,39,29,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(44,39,29,0.3)]">
                <div className="relative overflow-hidden bg-[#e8e2d8]">
                  <img src={item.image} alt={item.alt} className="aspect-[1.18/1] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#fbfaf7]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#625d52]">{index < 2 ? (fr ? "Emplacement" : "Location") : (fr ? "Intérieur" : "Interior")}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-xl font-semibold text-[#302e26]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#827a6d]">{item.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#9c704d]">{fr ? "Voir les détails" : "Explore details"} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#eae5db] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a66d48]">{fr ? "Un séjour sans complication" : "A stay made simple"}</p>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">{fr ? "Besoin d'aide pour choisir ?" : "Need help choosing your stay?"}</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#746d61]">{fr ? "Écrivez-nous sur WhatsApp pour connaître les disponibilités et obtenir de l'aide pour votre réservation." : "Message us on WhatsApp for availability and help arranging your booking."}</p>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 self-start rounded-xl bg-[#394337] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#52604c] md:self-center"><MessageCircle className="h-4 w-4" />{fr ? "Discuter sur WhatsApp" : "Chat on WhatsApp"} <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>

      <div className="bg-[#292820] text-[#eee9df]"><SiteFooter /></div>
    </div>
  );
}
