"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Corners, useLang } from "../LangProvider";
import { ChevronIcon, CloseIcon, CodeIcon, ExternalIcon } from "../icons";
import { PROJECT_IMAGES } from "@/lib/images";
import { CATEGORY_LABELS, type Project } from "@/lib/content";
import { BrowserFrame } from "./BrowserFrame";

/** Trechos entre crases no conteúdo (`KeyValueStorage`) viram <code>. */
function InlineCode({ text }: { text: string }) {
  return text.split("`").map((part, i) => (i % 2 === 1 ? <code key={i}>{part}</code> : part));
}

type Props = {
  project: Project | null;
  prev: Project;
  next: Project;
  onClose: () => void;
  onNavigate: (slug: Project["slug"]) => void;
};

export default function ProjectDialog({ project, prev, next, onClose, onNavigate }: Props) {
  const { lang, t } = useLang();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isOpen = project !== null;

  // o estado do React manda; o <dialog> nativo só acompanha
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // ao abrir ou trocar de projeto: volta ao topo e leva o foco ao título
  useEffect(() => {
    if (!project) return;
    scrollRef.current?.scrollTo({ top: 0 });
    titleRef.current?.focus({ preventScroll: true });
  }, [project]);

  const img = project ? PROJECT_IMAGES[project.image] : null;

  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      aria-labelledby="case-title"
      // Esc fecha o dialog nativo; avisa o estado
      onClose={onClose}
      // clique fora do painel (no backdrop) fecha
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && img && (
        <>
          <header className="flex flex-none items-center gap-4 border-b border-[var(--color-divider)] px-5 py-3 sm:px-8">
            <span className="label">
              {CATEGORY_LABELS[lang][project.category]}, {project.year}
            </span>
            <span className="label !text-[var(--color-accent-700)]">{project.status}</span>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary btn-sm ml-auto !min-h-10 !w-10 !p-0"
              aria-label={t.close}
            >
              <CloseIcon />
            </button>
          </header>

          <div ref={scrollRef} className="case-scroll flex-1">
            <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
              <h2
                id="case-title"
                ref={titleRef}
                tabIndex={-1}
                className="m-0 text-[clamp(38px,6vw,64px)] uppercase leading-[0.95] outline-none"
              >
                {project.title}
              </h2>
              <p className="m-0 mt-3 max-w-[48ch] font-[family-name:var(--font-heading)] text-[21px] leading-snug text-[var(--color-muted)]">
                {project.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary blueprint"
                  >
                    {t.visit}
                    <ExternalIcon />
                    <span className="sr-only">{t.opensNewTab}</span>
                    <Corners />
                  </a>
                )}
                {project.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <CodeIcon />
                    {t.codeLabel}: {repo.label}
                    <span className="sr-only">{t.opensNewTab}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <BrowserFrame url={project.link}>
                  <Image
                    src={img.src}
                    alt={`${project.title}: ${project.subtitle}`}
                    width={img.width}
                    height={img.height}
                    placeholder="blur"
                    blurDataURL={img.blurDataURL}
                    sizes="(max-width: 1100px) 100vw, 1000px"
                    className="!aspect-auto"
                  />
                </BrowserFrame>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
                <div className="flex flex-col gap-10">
                  <section>
                    <h3 className="case-section-title">{t.problemLabel}</h3>
                    <p className="m-0 max-w-[60ch] font-[family-name:var(--font-heading)] text-[23px] font-medium leading-[1.3] [text-wrap:pretty]">
                      {project.problem}
                    </p>
                    <p className="m-0 mt-4 max-w-[65ch] text-[16px] leading-[1.65] text-[var(--color-body)] [text-wrap:pretty]">
                      {project.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="case-section-title">{t.featuresLabel}</h3>
                    <ul className="bullet-list">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="case-section-title">{t.decisionsLabel}</h3>
                    <ul className="bullet-list">
                      {project.highlights.map((h) => (
                        <li key={h}>
                          <InlineCode text={h} />
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <aside className="flex flex-col gap-8 lg:border-l lg:border-[var(--color-divider)] lg:pl-10">
                  <section>
                    <h3 className="case-section-title">{t.roleLabel}</h3>
                    <p className="m-0 text-[16px] leading-[1.6]">{project.role}</p>
                    {project.context && (
                      <p className="m-0 mt-2 text-[14px] leading-[1.5] text-[var(--color-muted)]">
                        {project.context}
                      </p>
                    )}
                  </section>

                  <dl className="m-0 grid grid-cols-3 gap-4 border-y border-[var(--color-divider)] py-5">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col-reverse gap-1">
                        <dt className="text-[13px] leading-tight text-[var(--color-muted)]">{m.label}</dt>
                        <dd className="m-0 font-[family-name:var(--font-heading)] text-[30px] leading-none text-[var(--color-accent-700)]">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <section>
                    <h3 className="case-section-title">{t.stackLabel}</h3>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                      {project.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="case-section-title">{t.codeLabel}</h3>
                    {project.repos.length > 0 ? (
                      <ul className="m-0 list-none p-0">
                        {project.repos.map((repo) => (
                          <li key={repo.url}>
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-3 border-b border-[var(--color-divider)] py-3 text-[15px]"
                            >
                              <span>{repo.label}</span>
                              <span className="flex items-center gap-2 text-[13px] text-[var(--color-muted)]">
                                {repo.url.replace("https://github.com/", "")}
                                <ExternalIcon size={12} />
                              </span>
                              <span className="sr-only">{t.opensNewTab}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="m-0 text-[15px] text-[var(--color-muted)]">{t.privateRepo}</p>
                    )}
                  </section>
                </aside>
              </div>
            </div>
          </div>

          <footer className="flex flex-none items-stretch justify-between gap-3 border-t border-[var(--color-divider)]">
            <button
              type="button"
              onClick={() => onNavigate(prev.slug)}
              className="flex min-h-14 min-w-0 items-center gap-3 px-5 text-left hover:bg-[color-mix(in_srgb,var(--color-text)_5%,transparent)] sm:px-8"
            >
              <ChevronIcon dir="left" />
              <span className="flex min-w-0 flex-col">
                <span className="label">{t.prevProject}</span>
                <span className="truncate font-[family-name:var(--font-heading)] text-[17px]">{prev.title}</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.slug)}
              className="flex min-h-14 min-w-0 items-center gap-3 px-5 text-right hover:bg-[color-mix(in_srgb,var(--color-text)_5%,transparent)] sm:px-8"
            >
              <span className="flex min-w-0 flex-col">
                <span className="label">{t.nextProject}</span>
                <span className="truncate font-[family-name:var(--font-heading)] text-[17px]">{next.title}</span>
              </span>
              <ChevronIcon dir="right" />
            </button>
          </footer>
        </>
      )}
    </dialog>
  );
}
