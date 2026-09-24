"use client";

import { Corners, useLang } from "./LangProvider";
import HeroScene from "./hero/HeroScene";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-x-clip border-b border-[var(--color-divider)]"
    >
      <div className="container grid min-h-[calc(100svh-var(--header-h))] grid-cols-1 items-center gap-6 pb-14 pt-12 md:grid-cols-[1.05fr_0.95fr] md:gap-4 md:pb-16 md:pt-10">
        <div className="relative z-10 max-w-[640px]">
          <p className="m-0 mb-7 flex items-center gap-[10px] text-[14px] text-[var(--color-body)]">
            <span className="pulse-dot" aria-hidden="true" />
            {t.available}
          </p>

          <h1
            id="hero-title"
            className="m-0 font-[family-name:var(--font-heading)] text-[clamp(64px,10vw,128px)] font-semibold uppercase leading-[0.88] tracking-[-0.02em]"
          >
            Yan
            <br />
            Monteiro
          </h1>

          <p className="m-0 mt-5 font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,32px)] font-medium leading-tight text-[var(--color-accent-700)]">
            {t.role}
            <span className="ml-3 align-middle text-[14px] font-normal text-[var(--color-muted)] [font-family:var(--font-body)]">
              {t.location}
            </span>
          </p>

          <p className="m-0 mt-7 max-w-[34ch] font-[family-name:var(--font-heading)] text-[clamp(22px,2.4vw,27px)] font-medium leading-[1.2]">
            {t.heroLead}
          </p>
          <p className="m-0 mt-3 max-w-[54ch] text-[17px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
            {t.heroBody}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn btn-primary blueprint">
              {t.seeProjects}
              <Corners />
            </a>
            <a href="#contato" className="btn btn-secondary">
              {t.contactCta}
            </a>
          </div>
        </div>

        <div className="relative -mx-[var(--gutter)] md:mx-0">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
