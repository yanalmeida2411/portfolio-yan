"use client";

import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-[var(--color-divider)]">
      <div className="container flex flex-wrap items-center justify-between gap-6 py-[26px]">
        <span className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          © {new Date().getFullYear()} Yan Monteiro — {t.rights}
        </span>
        <span className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          {t.builtWith}
        </span>
      </div>
    </footer>
  );
}
