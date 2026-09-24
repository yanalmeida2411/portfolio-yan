"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Corners, useLang } from "./LangProvider";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/lib/hooks";

const NAV_ITEMS = [
  { id: "projetos", key: "navProjects" },
  { id: "stack", key: "navStack" },
  { id: "sobre", key: "navAbout" },
  { id: "processo", key: "navProcess" },
  { id: "contato", key: "navContact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/** Fio de 1px sob o cabeçalho que mostra quanto da página já foi lido. */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-[var(--color-accent)]"
    />
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  // Esc fecha o menu móvel; voltar ao desktop também
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onWide = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const langBtn = (isActive: boolean) =>
    [
      "font-[family-name:var(--font-heading)] text-[13px] tracking-[0.06em] min-w-9 h-8 px-2 cursor-pointer border-0",
      isActive
        ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
        : "bg-transparent text-[var(--color-muted)] hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-[60] border-b border-[var(--color-divider)] bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] backdrop-blur-[10px]">
      <div className="container flex h-[var(--header-h)] items-center gap-3 sm:gap-4 lg:gap-8">
        <a href="#top" className="mr-auto flex min-w-0 items-center gap-2 text-inherit hover:text-inherit sm:gap-[10px]">
          <Image src="/logo_ic.svg" alt="" width={22} height={22} className="h-[22px] w-[22px] flex-none" />
          <span className="truncate font-[family-name:var(--font-heading)] text-[17px] font-semibold tracking-[0.01em] sm:text-[19px]">
            YAN MONTEIRO
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 font-[family-name:var(--font-heading)] text-[16px] tracking-[0.03em] transition-colors ${
                  isActive
                    ? "text-[var(--color-accent-700)] after:absolute after:inset-x-0 after:-bottom-[3px] after:h-px after:bg-[var(--color-accent)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-accent-700)]"
                }`}
              >
                {t[item.key]}
              </a>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div role="group" aria-label={t.langLabel} className="flex border border-[var(--color-divider)]">
            <button
              type="button"
              aria-pressed={lang === "pt"}
              onClick={() => setLang("pt")}
              className={langBtn(lang === "pt")}
              lang="pt-BR"
            >
              PT
            </button>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={langBtn(lang === "en")}
              lang="en"
            >
              EN
            </button>
          </div>
          <a href="#contato" className="btn btn-primary btn-sm blueprint hidden lg:inline-flex">
            {t.navCta}
            <Corners />
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-[5px] border border-[var(--color-divider)] md:hidden"
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

      <ScrollProgress />

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Principal"
          className="border-t border-[var(--color-divider)] bg-[var(--color-bg)] md:hidden"
        >
          <div className="container flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "location" : undefined}
                className="border-b border-[var(--color-divider)] py-4 font-[family-name:var(--font-heading)] text-[18px] text-[var(--color-text)] last:border-b-0"
              >
                {t[item.key]}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn btn-primary blueprint mb-3 mt-4 w-full"
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
