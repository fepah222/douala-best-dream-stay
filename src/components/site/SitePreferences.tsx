import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Languages, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type Language = "en" | "fr";
type Theme = "dark" | "light";

type PreferencesContextValue = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined);

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("guesthouse-language");
    const savedTheme = window.localStorage.getItem("guesthouse-theme");
    if (savedLanguage === "en" || savedLanguage === "fr") setLanguageState(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("guesthouse-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("guesthouse-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      theme,
      setLanguage: (next: Language) => setLanguageState(next),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [language, theme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("useSitePreferences must be used within SitePreferencesProvider");
  return context;
}

export function PreferenceControls() {
  const { language, setLanguage, theme, toggleTheme } = useSitePreferences();
  const isFrench = language === "fr";
  const themeLabel = theme === "dark" ? (isFrench ? "Mode clair" : "Light mode") : isFrench ? "Mode sombre" : "Dark mode";

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex h-9 items-center rounded-md border border-border bg-background/70 p-0.5 shadow-sm backdrop-blur" aria-label={isFrench ? "Préférences du site" : "Site preferences"}>
        <Languages className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        {(["en", "fr"] as const).map((option) => (
          <Button
            key={option}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={language === option}
            onClick={() => setLanguage(option)}
            className={`h-7 min-w-8 px-1.5 ${language === option ? "bg-secondary text-foreground" : "text-muted-foreground"}`}
          >
            {option.toUpperCase()}
          </Button>
        ))}
        <span className="mx-0.5 h-4 w-px bg-border" aria-hidden="true" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button type="button" variant="ghost" size="icon" onClick={toggleTheme} aria-label={themeLabel} className="h-7 w-7">
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{themeLabel}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}