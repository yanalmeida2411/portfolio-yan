"use client";

import Image from "next/image";
import { Corners, useLang } from "./LangProvider";
import { LINKS } from "@/lib/content";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="gridlines border-b border-[var(--color-divider)]"
    >
      <div className="container grid grid-cols-1 items-end gap-10 pt-16 sm:gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-8 md:pt-[88px] lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
        <div className="rise">
          <div className="mb-[26px] flex items-center gap-[10px]">
            <span className="pulse-dot" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-700)]">
              {t.available}
            </span>
          </div>

          <h1 className="m-0 mb-1 font-[family-name:var(--font-heading)] text-[clamp(64px,9vw,112px)] font-semibold uppercase leading-[0.92] tracking-[-0.02em]">
            Yan
            <br />
            Monteiro
          </h1>

          <div className="mt-[22px] flex flex-wrap items-baseline gap-[14px]">
            <span className="font-[family-name:var(--font-heading)] text-[30px] tracking-[0.01em] text-[var(--color-accent-700)]">
              {t.role}
            </span>
            <span className="h-px min-w-10 flex-1 bg-[var(--color-divider)]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {t.location}
            </span>
          </div>

          <p className="mt-[30px] max-w-[560px] text-[17px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
            {t.heroBody}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn btn-primary blueprint">
              {t.seeProjects}
              <Corners />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t.downloadCv}
            </a>
          </div>
        </div>

        <div className="rise pb-2">
          <div className="blueprint">
            <Image
              src="/Perfil.jpg"
              alt="Yan Monteiro"
              width={520}
              height={650}
              priority
              className="block h-auto w-full object-cover [aspect-ratio:4/5] [object-position:center_18%]"
            />
            <Corners />
          </div>
        </div>
      </div>
      <div className="h-12 md:h-[88px]" />
    </section>
  );
}
