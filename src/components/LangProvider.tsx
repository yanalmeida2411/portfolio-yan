"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { COPY, type Lang } from "@/lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof COPY)["pt"] };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  // <html lang> starts as pt-BR (see layout.tsx) for correct SSR/SEO;
  // keep it in sync once the visitor toggles the language client-side.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: COPY[lang] as (typeof COPY)["pt"] }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de <LangProvider>");
  return ctx;
}

/** As quatro marcas de registro "+" de um objeto .blueprint. */
export function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}
