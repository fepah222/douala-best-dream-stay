import living1 from "@/assets/living1.jpeg.asset.json";
import living2 from "@/assets/living2.jpeg.asset.json";
import living3 from "@/assets/living3.jpeg.asset.json";
import bedroom from "@/assets/bedroom.jpeg.asset.json";
import kitchen1 from "@/assets/kitchen1.jpeg.asset.json";
import kitchen2 from "@/assets/kitchen2.jpeg.asset.json";
import bathroom from "@/assets/bathroom.jpeg.asset.json";
import bonaLiving1 from "@/assets/bona-living1.jpeg.asset.json";
import bonaLiving2 from "@/assets/bona-living2.jpeg.asset.json";
import bonaLounge from "@/assets/bona-lounge.jpeg.asset.json";
import bonaSalon from "@/assets/bona-salon.jpeg.asset.json";
import bonaKitchen from "@/assets/bona-kitchen.jpeg.asset.json";
import bonaBedroom1 from "@/assets/bona-bedroom1.jpeg.asset.json";
import bonaBedroom2 from "@/assets/bona-bedroom2.jpeg.asset.json";
import bonaBalcony from "@/assets/bona-balcony.jpeg.asset.json";
import bonaSuite1 from "@/assets/bona-suite1.jpeg.asset.json";

export const images = {
  living1: living1.url,
  living2: living2.url,
  living3: living3.url,
  bedroom: bedroom.url,
  kitchen1: kitchen1.url,
  kitchen2: kitchen2.url,
  bathroom: bathroom.url,
  bonaLiving1: bonaLiving1.url,
  bonaLiving2: bonaLiving2.url,
  bonaLounge: bonaLounge.url,
  bonaSalon: bonaSalon.url,
  bonaKitchen: bonaKitchen.url,
  bonaBedroom1: bonaBedroom1.url,
  bonaBedroom2: bonaBedroom2.url,
  bonaBalcony: bonaBalcony.url,
  bonaSuite1: bonaSuite1.url,
};

export const contact = {
  phone1: "+237 671 300 185",
  phone1Tel: "+237671300185",
  phone2: "+237 675 535 727",
  phone2Tel: "+237675535727",
  email: "gaetanfonka@gmail.com",
  tiktok1:
    "https://www.tiktok.com/@etienne.gae.home?_r=1&_t=ZN-97wG3Br9R5C",
  tiktok2:
    "https://www.tiktok.com/@etienne.gae.home?_r=1&_t=ZN-97wG5KfjTNe",
};

export const policy: { title: string; items: string[] }[] = [
  {
    title: "Booking & Payment",
    items: [
      "Bookings confirmed by phone, email or in person. Payment in XAF (CFA) or by major credit/debit card.",
      "Full payment or deposit may be required at check-in.",
    ],
  },
  {
    title: "Check-in / Check-out",
    items: ["Check-in from 2:00 PM. Check-out by 11:00 AM."],
  },
  {
    title: "Identification & Occupancy",
    items: [
      "Present a valid photo ID (passport, national ID) at check-in.",
      "Only registered guests may stay overnight. Do not exceed the room's maximum occupancy.",
    ],
  },
  {
    title: "Cancellations",
    items: [
      "Notify us as soon as possible to cancel or change a booking. Cancellation terms given at booking apply.",
    ],
  },
  {
    title: "House Rules",
    items: [
      "Quiet hours: 10:00 PM — 7:00 AM. Please respect other guests.",
      "No smoking inside rooms or enclosed areas. Use designated outdoor smoking areas.",
      "Pets only by prior arrangement; fees and rules apply.",
      "No parties or large gatherings without permission.",
    ],
  },
  {
    title: "Cleanliness & Damage",
    items: [
      "Keep your room tidy. Extra cleaning charges apply for excessive mess.",
      "Guests are responsible for damage caused by them or their visitors.",
    ],
  },
  {
    title: "Facilities & Internet",
    items: [
      "Shared areas are for all guests — please leave them clean.",
      "Wi-Fi is provided free for guest use. Illegal activities are not allowed.",
    ],
  },
  {
    title: "Safety & Security",
    items: [
      "Lock doors and windows when leaving. Use provided safe for valuables.",
      "Report maintenance or safety problems immediately.",
    ],
  },
  {
    title: "Emergencies & Contacts",
    items: [
      "Emergency numbers and local contacts are posted at the reception.",
      "Contact reception for help or information.",
    ],
  },
  {
    title: "Left Items",
    items: [
      "We keep lost items for a limited time. Return shipping charges apply if items are mailed.",
    ],
  },
];

export const policyFr: { title: string; items: string[] }[] = [
  { title: "Réservation et paiement", items: ["Réservations confirmées par téléphone, e-mail ou sur place. Paiement en XAF (FCFA) ou par carte bancaire.", "Le paiement intégral ou un acompte peut être demandé à l'arrivée."] },
  { title: "Arrivée et départ", items: ["Arrivée à partir de 14 h. Départ avant 11 h."] },
  { title: "Identité et occupation", items: ["Présentez une pièce d'identité valide avec photo à l'arrivée.", "Seuls les clients enregistrés peuvent passer la nuit. Respectez la capacité maximale du logement."] },
  { title: "Annulations", items: ["Prévenez-nous dès que possible pour annuler ou modifier une réservation. Les conditions communiquées lors de la réservation s'appliquent."] },
  { title: "Règlement intérieur", items: ["Heures de calme : 22 h à 7 h. Merci de respecter les autres clients.", "Il est interdit de fumer dans les chambres et espaces fermés. Utilisez les zones extérieures prévues.", "Les animaux sont acceptés uniquement sur accord préalable ; des frais et conditions peuvent s'appliquer.", "Aucune fête ni grand rassemblement sans autorisation."] },
  { title: "Propreté et dommages", items: ["Gardez votre logement propre. Des frais supplémentaires s'appliquent en cas de saleté excessive.", "Les clients sont responsables des dommages causés par eux-mêmes ou leurs visiteurs."] },
  { title: "Équipements et internet", items: ["Les espaces communs sont partagés : merci de les laisser propres.", "Le Wi-Fi est gratuit pour les clients. Toute activité illégale est interdite."] },
  { title: "Sécurité", items: ["Fermez portes et fenêtres en partant. Utilisez le coffre prévu pour vos objets de valeur.", "Signalez immédiatement tout problème d'entretien ou de sécurité."] },
  { title: "Urgences et contacts", items: ["Les numéros d'urgence et contacts locaux sont affichés à la réception.", "Contactez la réception pour toute aide ou information."] },
  { title: "Objets oubliés", items: ["Nous conservons les objets trouvés pendant une durée limitée. Les frais d'expédition sont à la charge du client."] },
];
