"use client";

import { useLang } from "./LangProvider";
import { LINKS } from "@/lib/content";

export default function About() {
  const { t } = useLang();

  return (
    <section id="sobre" className="border-b border-[var(--color-divider)]">
      <div className="container py-[var(--section-y)]">
        <div className="section-head">
          <span className="num">03</span>
          <h2>{t.aboutTitle}</h2>
          <span className="rule" />
        </div>

        <div className="max-w-[760px]">
          <p className="m-0 mb-[22px] font-[family-name:var(--font-heading)] text-[clamp(22px,5.5vw,30px)] leading-[1.25] [text-wrap:pretty]">
            {t.aboutLead}
          </p>
          <p className="m-0 mb-4 text-[16px] leading-[1.65] text-[var(--color-body)] [text-wrap:pretty]">
            {t.aboutP1}
          </p>
          <p className="m-0 mb-[26px] text-[16px] leading-[1.65] text-[#5d5d60] [text-wrap:pretty]">
            {t.aboutP2}
          </p>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            {t.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}
