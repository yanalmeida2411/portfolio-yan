"use client";

import Image from "next/image";
import { Corners, useLang } from "./LangProvider";
import { ExternalIcon } from "./icons";
import { LINKS } from "@/lib/content";

export default function About() {
  const { t } = useLang();

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section border-b border-[var(--color-divider)]">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 id="sobre-title">{t.aboutTitle}</h2>
          <span className="rule" />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          <div className="max-w-[68ch]" data-reveal>
            <p className="m-0 mb-7 font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,32px)] font-medium leading-[1.2] [text-wrap:pretty]">
              {t.aboutLead}
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-[var(--color-body)] [text-wrap:pretty]">
              {t.aboutP1}
            </p>
            <p className="m-0 mb-4 text-[17px] leading-[1.7] text-[var(--color-body)] [text-wrap:pretty]">
              {t.aboutP2}
            </p>
            <p className="m-0 mb-8 text-[17px] leading-[1.7] text-[var(--color-body)] [text-wrap:pretty]">
              {t.aboutP3}
            </p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t.downloadCv}
              <ExternalIcon />
              <span className="sr-only">{t.opensNewTab}</span>
            </a>
          </div>

          <div className="blueprint order-first max-w-[300px] md:order-none md:max-w-none" data-reveal data-parallax="0.05">
            <Image
              src="/Perfil.jpg"
              alt={t.photoAlt}
              width={520}
              height={650}
              sizes="(max-width: 768px) 300px, 340px"
              className="block h-auto w-full object-cover [aspect-ratio:4/5] [object-position:center_18%]"
            />
            <Corners />
          </div>
        </div>

        <h3 className="m-0 mb-6 mt-24 text-[28px] uppercase" data-reveal>
          {t.trajectoryTitle}
        </h3>
        <ol className="m-0 grid list-none grid-cols-1 gap-px border border-[var(--color-divider)] bg-[var(--color-divider)] p-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.trajectory.map((item, n) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 bg-[var(--color-bg)] p-6"
              data-reveal
              style={{ "--i": n } as React.CSSProperties}
            >
              <span className="label">{item.kind}</span>
              <span className="font-[family-name:var(--font-heading)] text-[21px] font-semibold leading-tight">
                {item.org}
              </span>
              <span className="text-[15px] leading-snug">{item.title}</span>
              <span className="text-[14px] leading-[1.5] text-[var(--color-muted)]">{item.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
