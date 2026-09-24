import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact } from "@/lib/site-data";
import { useSitePreferences } from "@/components/site/SitePreferences";

export function ContactSection({
  blurb,
  primaryTel,
  primaryLabel,
  secondaryLabel,
  location,
  whatsapp,
}: {
  blurb: string;
  primaryTel: string;
  primaryLabel: string;
  secondaryLabel: string;
  location: string;
  whatsapp: string;
}) {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{fr ? "Réservez votre séjour" : "Book your stay"}</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{blurb}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`tel:${primaryTel}`}
          className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
        >
          <Phone className="h-5 w-5 text-primary" />
          <p className="mt-3 text-sm text-muted-foreground">{fr ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}</p>
          <p className="mt-1 font-display text-xl font-semibold">{primaryLabel}</p>
          <p className="font-display text-xl font-semibold">{secondaryLabel}</p>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
        >
          <Mail className="h-5 w-5 text-primary" />
          <p className="mt-3 text-sm text-muted-foreground">Email</p>
          <p className="mt-1 break-all font-display text-xl font-semibold">{contact.email}</p>
        </a>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-card">
        <MapPin className="h-5 w-5 text-primary" />
        <p className="mt-3 text-sm text-muted-foreground">{fr ? "Adresse" : "Location"}</p>
        <p className="mt-1 font-display text-xl font-semibold">{location}</p>
        <p className="text-muted-foreground">Douala, {fr ? "Cameroun" : "Cameroon"}</p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-amber px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
      >
        <MessageCircle className="h-5 w-5" /> {fr ? "Écrire sur WhatsApp" : "Chat on WhatsApp"}
      </a>
    </section>
  );
}

export function SiteFooter() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-sm text-muted-foreground sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <a href={`tel:${contact.phone1Tel}`} className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4" /> {contact.phone1}
          </a>
          <a href={`tel:${contact.phone2Tel}`} className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4" /> {contact.phone2}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-foreground">
            <Mail className="h-4 w-4" /> {contact.email}
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={contact.tiktok1}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-1.5 hover:text-foreground"
          >
            TikTok · {fr ? "Visite 1" : "Tour 1"}
          </a>
          <a
            href={contact.tiktok2}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-1.5 hover:text-foreground"
          >
            TikTok · {fr ? "Visite 2" : "Tour 2"}
          </a>
        </div>
      </div>
    </footer>
  );
}
