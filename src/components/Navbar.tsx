"use client";

import { useState } from "react";
import Image from "next/image";
import { Corners, useLang } from "./LangProvider";

const NAV_LINK =
  "font-[family-name:var(--font-heading)] text-[15px] tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-accent)]";

const NAV_ITEMS = [
  { href: "#projetos", key: "navProjects" } as const,
  { href: "#stack", key: "navStack" } as const,
  { href: "#sobre", key: "navAbout" } as const,
  { href: "#contato", key: "navContact" } as const,
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const langBtn = (active: boolean) =>
    [
      "font-[family-name:var(--font-heading)] text-[12px] tracking-[0.1em] px-[10px] py-[5px] cursor-pointer border-0",
      active
        ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
        : "bg-transparent text-[#5d5d60] hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-[60] border-b border-[var(--color-divider)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="container flex h-[58px] items-center gap-3 sm:h-[62px] sm:gap-4 md:gap-8">
        <a href="#top" className="mr-auto flex min-w-0 items-center gap-2 text-inherit sm:gap-[10px]">
          <Image src="/logo_ic.svg" alt="" width={22} height={22} className="flex-none" />
          <span className="truncate font-[family-name:var(--font-heading)] text-[16px] font-semibold tracking-[0.01em] sm:text-[19px]">
            YAN MONTEIRO
          </span>
          <span className="hidden whitespace-nowrap border-l border-[var(--color-divider)] pl-[10px] text-[10px] uppercase tracking-[0.14em] text-[#597ea3] sm:inline">
            Full Stack
          </span>
        </a>

        <nav className="hidden items-center gap-[26px] md:flex">
          <a href="#projetos" className={NAV_LINK}>{t.navProjects}</a>
          <a href="#stack" className={NAV_LINK}>{t.navStack}</a>
          <a href="#sobre" className={NAV_LINK}>{t.navAbout}</a>
          <a href="#contato" className={NAV_LINK}>{t.navContact}</a>
        </nav>

        <div className="flex flex-none items-center gap-2 sm:gap-3">
          <div className="flex border border-[var(--color-divider)]">
            <button
              type="button"
              aria-pressed={lang === "pt"}
              onClick={() => setLang("pt")}
              className={langBtn(lang === "pt")}
            >
              PT
            </button>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={langBtn(lang === "en")}
            >
              EN
            </button>
          </div>
          <a href="#contato" className="btn btn-primary btn-xs blueprint hidden md:inline-flex">
            {t.navCta}
            <Corners />
          </a>

          {/* — mobile menu toggle — */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-none flex-col items-center justify-center gap-[5px] border border-[var(--color-divider)] md:hidden"
          >
            <span
              className={`block h-px w-4 bg-[var(--color-text)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-[var(--color-text)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* — mobile menu panel — */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--color-divider)] bg-[var(--color-bg)] md:hidden"
        >
          <div className="container flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[color-mix(in_srgb,var(--color-text)_9%,transparent)] py-3 font-[family-name:var(--font-heading)] text-[15px] uppercase tracking-[0.06em] last:border-b-0"
              >
                {t[item.key]}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-sm blueprint mt-4 mb-2 w-full justify-center"
            >
              {t.navCta}
              <Corners />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
