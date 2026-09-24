"use client";

import { useRef } from "react";
import { Corners, useLang } from "./LangProvider";
import HeroScene from "./hero/HeroScene";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/hooks";

/** Atraso de entrada de cada peça do hero (ver .hero-in em globals.css). */
const delay = (n: number) => ({ "--d": n } as React.CSSProperties);

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  // --p: 0 → 1 enquanto o hero sai da tela; move grade, brilho e texto
  useScrollProgress(ref, !reducedMotion);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="hero relative overflow-x-clip border-b border-[var(--color-divider)]"
    >
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container relative grid min-h-[calc(100svh-var(--header-h))] grid-cols-1 items-center gap-6 pb-14 pt-12 md:grid-cols-[1.05fr_0.95fr] md:gap-4 md:pb-20 md:pt-10">
        <div className="hero-copy relative z-10 max-w-[640px]">
          <p className="hero-in m-0 mb-7 flex items-center gap-[10px] text-[14px] text-[var(--color-body)]" style={delay(0)}>
            <span className="pulse-dot" aria-hidden="true" />
            {t.available}
          </p>

          <h1
            id="hero-title"
            className="m-0 font-[family-name:var(--font-heading)] text-[clamp(64px,10vw,128px)] font-semibold uppercase leading-[0.88] tracking-[-0.02em]"
          >
            <span className="hero-line">
              <span style={delay(1)}>Yan</span>
            </span>{" "}
            <span className="hero-line">
              <span style={delay(2)}>Monteiro</span>
            </span>
          </h1>

          <p
            className="hero-in m-0 mt-5 font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,32px)] font-medium leading-tight text-[var(--color-accent-700)]"
            style={delay(3)}
          >
            {t.role}
            <span className="ml-3 align-middle text-[14px] font-normal text-[var(--color-muted)] [font-family:var(--font-body)]">
              {t.location}
            </span>
          </p>

          <p
            className="hero-in m-0 mt-7 max-w-[34ch] font-[family-name:var(--font-heading)] text-[clamp(22px,2.4vw,27px)] font-medium leading-[1.2]"
            style={delay(4)}
          >
            {t.heroLead}
          </p>
          <p
            className="hero-in m-0 mt-3 max-w-[54ch] text-[17px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]"
            style={delay(5)}
          >
            {t.heroBody}
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-3" style={delay(6)}>
            <a href="#projetos" className="btn btn-primary blueprint" data-magnetic>
              {t.seeProjects}
              <Corners />
            </a>
            <a href="#contato" className="btn btn-secondary" data-magnetic>
              {t.contactCta}
            </a>
          </div>
        </div>

        <div className="hero-visual relative -mx-[var(--gutter)] md:mx-0">
          <HeroScene />
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>{t.scrollHint}</span>
        <i />
      </div>
    </section>
  );
}
