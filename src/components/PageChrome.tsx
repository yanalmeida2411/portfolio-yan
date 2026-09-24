"use client";

import { useLang } from "./LangProvider";
import { useRevealOnScroll } from "@/lib/hooks";

export function SkipLink() {
  const { t } = useLang();
  return (
    <a href="#conteudo" className="skip-link">
      {t.skipToContent}
    </a>
  );
}

/** Liga as entradas por rolagem da página inteira; não renderiza nada. */
export function RevealRoot() {
  useRevealOnScroll();
  return null;
}
