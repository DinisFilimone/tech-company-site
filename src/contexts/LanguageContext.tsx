"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { siteMessages, STORAGE_KEY, type Locale, type SiteMessages } from "@/messages/site";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteMessages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "pt" || stored === "en") {
        queueMicrotask(() => setLocaleState(stored));
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: siteMessages[locale],
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useSiteLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useSiteLanguage must be used inside LanguageProvider");
  return ctx;
}
