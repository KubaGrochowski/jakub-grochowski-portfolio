"use client";

import { createContext, useContext } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext({
  lang: "pl",
  t: translations.pl,
});

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ lang: "pl", t: translations.pl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
