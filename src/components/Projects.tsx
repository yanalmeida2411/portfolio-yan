"use client";

import Image from "next/image";
import { Corners, useLang } from "./LangProvider";
import { FEATURED_TAGS, LINKS, PROJECTS } from "@/lib/content";

export default function Projects() {
  const { lang, t } = useLang();
  const projects = PROJECTS[lang];

  return (
    <section id="projetos" className="border-b border-[var(--color-divider)]">
      <div className="container py-[var(--section-y)]">
        <div className="section-head">
          <span className="num">01</span>
          <h2>{t.projectsTitle}</h2>
          <span className="rule" />
          <span className="meta">{t.projectsCount}</span>
        </div>

        {/* — case principal — */}
        <article className="blueprint mb-[52px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex items-center justify-center border-b border-[var(--color-divider)] p-6 lg:border-b-0 lg:border-r">
            <Image
              src="/ConectandoLeitores.png"
              alt="Conectando Leitores"
              width={900}
              height={560}
              className="h-auto w-full border border-[var(--color-divider)]"
            />
          </div>

          <div className="flex flex-col p-[34px] pb-[30px]">
            <div className="mb-[18px] flex items-center gap-[10px]">
              <span className="bg-[var(--color-accent)] px-[9px] py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-bg)]">
                {t.featured}
              </span>
              <span className="label">PRJ / 01</span>
            </div>

            <h3 className="m-0 mb-[14px] font-[family-name:var(--font-heading)] text-[46px] uppercase leading-none">
              Conectando
              <br />
              Leitores
            </h3>

            <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
              {t.featuredBody}
            </p>

            <dl className="m-0 mb-[22px] border-t border-[var(--color-divider)]">
              {t.featuredSpecs.map((row) => (
                <div
                  key={row.k}
                  className="flex gap-4 border-b border-[color-mix(in_srgb,var(--color-text)_8%,transparent)] py-[10px]"
                >
                  <dt className="label w-[86px] flex-none pt-[2px]">{row.k}</dt>
                  <dd className="m-0 text-[14px] leading-[1.45]">{row.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mb-6 flex flex-wrap gap-[7px]">
              {FEATURED_TAGS.map((tag) => (
                <span key={tag} className="tag tag-outline">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-[10px]">
              <a
                href={LINKS.featuredDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm blueprint"
              >
                {t.liveDemo}
                <Corners />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                {t.code}
              </a>
            </div>
          </div>
          <Corners />
        </article>

        {/* — grade dos demais projetos — */}
        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="blueprint flex flex-col">
              <div className="border-b border-[var(--color-divider)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={640}
                  height={400}
                  className="block h-auto w-full object-cover [aspect-ratio:16/10] [object-position:top]"
                />
              </div>
              <div className="flex flex-1 flex-col p-[18px] pb-5">
                <div className="mb-[10px] flex items-center justify-between">
                  <span className="label">{p.ref}</span>
                  <span className="label !text-[#597ea3]">{p.status}</span>
                </div>
                <h3 className="m-0 mb-2 font-[family-name:var(--font-heading)] text-2xl uppercase leading-[1.05]">
                  {p.title}
                </h3>
                <p className="m-0 mb-[14px] flex-1 text-[13px] leading-[1.55] text-[#5d5d60] [text-wrap:pretty]">
                  {p.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-[6px]">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] px-[7px] py-[3px] text-[10px] uppercase tracking-[0.08em] text-[var(--color-accent-700)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between border-t border-[var(--color-divider)] pt-3 font-[family-name:var(--font-heading)] text-[13px] uppercase tracking-[0.1em]"
                >
                  <span>{t.viewProject}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <Corners />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
