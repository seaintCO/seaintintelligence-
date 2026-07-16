"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Lang {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem("seaint-language");

  return stored === "es" ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLanguage);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("seaint-language", nextLang);
      document.documentElement.lang = nextLang;
    }
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
