"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

type Theme = "light" | "dark";

/** Tema efetivo: a escolha fixada no <html>, ou a preferência do sistema. */
function readTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const { t } = useLang();
  // null até montar: o servidor não sabe a preferência do visitante, então o
  // ícone só aparece no client e a marcação inicial não diverge.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readTheme());

    // acompanha a troca no sistema operacional enquanto não houver escolha fixada
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setTheme(readTheme());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = (theme ?? readTheme()) === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // modo privado ou storage bloqueado: o tema vale só para esta sessão
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.themeToggle}
      title={t.themeToggle}
      className="flex h-8 w-8 flex-none items-center justify-center border border-[var(--color-divider)] text-[var(--color-text)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      <span className={theme === null ? "opacity-0" : "opacity-100"}>
        {theme === "dark" ? (
          // sol
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 2.4v2.4M12 19.2v2.4M2.4 12h2.4M19.2 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
            />
          </svg>
        ) : (
          // lua
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
