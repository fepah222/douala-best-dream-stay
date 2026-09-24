import { policy, policyFr } from "@/lib/site-data";
import { useSitePreferences } from "@/components/site/SitePreferences";

export function PolicySection() {
  const { language } = useSitePreferences();
  const fr = language === "fr";
  const rules = fr ? policyFr : policy;
  return (
    <section id="policy" className="scroll-mt-20 border-y border-border bg-card/40 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{fr ? "Règlement de la maison" : "Guesthouse Policy"}</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {fr ? "Bienvenue et merci d'avoir choisi notre maison d'hôtes. Respectez ces règles simples pour le confort de tous." : "Welcome — thank you for choosing our guesthouse. Please follow these simple rules to help everyone have a pleasant stay."}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {rules.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-primary">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          {fr ? "En séjournant ici, vous acceptez ce règlement. La direction peut refuser le service ou demander le départ en cas de violation grave." : "By staying here you agree to follow these rules. Management may refuse service or ask guests to leave for serious rule violations."}
        </p>
      </div>
    </section>
  );
}
