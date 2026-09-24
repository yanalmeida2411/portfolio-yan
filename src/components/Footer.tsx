"use client";

import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-[var(--color-divider)]">
      <div className="container flex flex-wrap items-center justify-center gap-2 py-6 text-center text-[13px] text-[var(--color-muted)] sm:justify-between sm:gap-6 sm:text-left">
        <span>
          © {new Date().getFullYear()} Yan Monteiro. {t.rights}.
        </span>
        <span>{t.builtWith}</span>
      </div>
    </footer>
  );
}
