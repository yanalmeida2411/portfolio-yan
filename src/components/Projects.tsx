"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Corners, useLang } from "./LangProvider";
import { PROJECT_IMAGES } from "@/lib/images";
import {
  CATEGORY_LABELS,
  LINKS,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/lib/content";

type Filter = ProjectCategory | "all";

const FILTERS: Filter[] = ["all", "fullstack", "platform", "frontend"];

/** Ordem das ações de um card: demo quando publicada, código quando público. */
function ProjectActions({
  project,
  labels,
  size = "sm",
}: {
  project: Project;
  labels: { liveDemo: string; soon: string; code: string };
  size?: "sm" | "md";
}) {
  const btn = size === "sm" ? "btn-sm" : "";

  return (
    <div className="flex flex-wrap gap-[10px]">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${btn} blueprint`}
        >
          {labels.liveDemo}
          <Corners />
        </a>
      ) : (
        <span
          className={`btn btn-primary ${btn} cursor-default opacity-45`}
          aria-disabled="true"
          title={labels.soon}
        >
          {labels.soon}
        </span>
      )}

      <a
        href={project.repo ?? LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-secondary ${btn}`}
      >
        {labels.code}
      </a>
    </div>
  );
}

function Metrics({ project }: { project: Project }) {
  return (
    <dl className="m-0 flex flex-wrap gap-x-8 gap-y-3 border-y border-[var(--color-divider)] py-[14px]">
      {project.metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-[2px]">
          <dt className="sr-only">{m.label}</dt>
          <dd className="m-0 font-[family-name:var(--font-heading)] text-[22px] leading-none text-[var(--color-accent-700)]">
            {m.value}
          </dd>
          <span className="label !text-[11px]">{m.label}</span>
        </div>
      ))}
    </dl>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const { t } = useLang();
  const img = PROJECT_IMAGES[project.image];

  return (
    <article className="blueprint grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="flex items-center justify-center border-b border-[var(--color-divider)] p-5 sm:p-6 lg:border-b-0 lg:border-r">
        <Image
          src={img.src}
          alt={`${project.title} — ${project.subtitle}`}
          width={img.width}
          height={img.height}
          placeholder="blur"
          blurDataURL={img.blurDataURL}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="h-auto w-full border border-[var(--color-divider)]"
        />
      </div>

      <div className="flex flex-col p-6 sm:p-[34px]">
        <div className="mb-[18px] flex flex-wrap items-center gap-[10px]">
          <span className="bg-[var(--color-accent)] px-[9px] py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-bg)]">
            {t.featured}
          </span>
          <span className="label">{project.ref}</span>
          <span className="label ml-auto !text-[var(--color-accent-700)]">
            {project.status}
          </span>
        </div>

        <h3 className="m-0 mb-2 font-[family-name:var(--font-heading)] text-[clamp(30px,7vw,42px)] uppercase leading-none">
          {project.title}
        </h3>
        <p className="m-0 mb-4 font-[family-name:var(--font-heading)] text-[17px] leading-tight text-[var(--color-muted)]">
          {project.subtitle}
        </p>

        <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
          {project.description}
        </p>

        <Metrics project={project} />

        <div className="mt-5">
          <span className="label">{t.decisionsLabel}</span>
          <ul className="m-0 mt-[10px] list-none space-y-[10px] p-0">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="relative pl-[18px] text-[13.5px] leading-[1.55] text-[var(--color-body)] [text-wrap:pretty] before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:bg-[var(--color-accent)]"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 border-t border-[var(--color-divider)] pt-4">
          <span className="label">{t.roleLabel}</span>
          <p className="m-0 mt-[6px] text-[13.5px] leading-[1.5]">{project.role}</p>
        </div>

        <div className="my-5 flex flex-wrap gap-[7px]">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag-outline">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <ProjectActions
            project={project}
            labels={{ liveDemo: t.liveDemo, soon: t.soon, code: t.code }}
            size="md"
          />
        </div>
      </div>
      <Corners />
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  const img = PROJECT_IMAGES[project.image];
  const href = project.link ?? project.repo ?? LINKS.github;

  return (
    <article className="blueprint group flex flex-col transition-colors duration-200 hover:border-[var(--color-accent)]">
      <div className="overflow-hidden border-b border-[var(--color-divider)]">
        <Image
          src={img.src}
          alt={`${project.title} — ${project.subtitle}`}
          width={img.width}
          height={img.height}
          placeholder="blur"
          blurDataURL={img.blurDataURL}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="block h-auto w-full object-cover [aspect-ratio:16/10] [object-position:top] transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-[18px] pb-5">
        <div className="mb-[10px] flex items-center justify-between">
          <span className="label">{project.ref}</span>
          <span className="label !text-[var(--color-accent-700)]">{project.status}</span>
        </div>

        <h3 className="m-0 mb-1 font-[family-name:var(--font-heading)] text-2xl uppercase leading-[1.05]">
          {project.title}
        </h3>
        <p className="m-0 mb-[10px] font-[family-name:var(--font-heading)] text-[13.5px] leading-tight text-[var(--color-muted)]">
          {project.subtitle}
        </p>

        <p className="m-0 mb-[14px] flex-1 text-[13px] leading-[1.55] text-[var(--color-body)] [text-wrap:pretty]">
          {project.description}
        </p>

        <dl className="m-0 mb-[14px] flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-divider)] pt-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-[5px]">
              <dt className="sr-only">{m.label}</dt>
              <dd className="m-0 font-[family-name:var(--font-heading)] text-[15px] leading-none text-[var(--color-accent-700)]">
                {m.value}
              </dd>
              <span className="label !text-[10px]">{m.label}</span>
            </div>
          ))}
        </dl>

        <div className="mb-4 flex flex-wrap gap-[6px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] px-[7px] py-[3px] text-[10px] uppercase tracking-[0.08em] text-[var(--color-accent-700)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex justify-between border-t border-[var(--color-divider)] pt-3 font-[family-name:var(--font-heading)] text-[13px] uppercase tracking-[0.1em]"
        >
          <span>{project.link ? t.viewProject : t.code}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </a>
      </div>
      <Corners />
    </article>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const all = PROJECTS[lang];
  const labels = CATEGORY_LABELS[lang];

  const visible = useMemo(
    () => (filter === "all" ? all : all.filter((p) => p.category === filter)),
    [all, filter]
  );

  // um filtro só aparece se houver projeto nele
  const available = useMemo(
    () => FILTERS.filter((f) => f === "all" || all.some((p) => p.category === f)),
    [all]
  );

  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="projetos" className="border-b border-[var(--color-divider)]">
      <div className="container py-[var(--section-y)]">
        <div className="section-head">
          <span className="num">01</span>
          <h2>{t.projectsTitle}</h2>
          <span className="rule" />
          <span className="meta">{t.projectsCount}</span>
        </div>

        <p className="m-0 mb-8 max-w-[620px] text-[15px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
          {t.projectsLead}
        </p>

        {/* — filtros por categoria — */}
        <div className="mb-9 flex flex-wrap items-center gap-2">
          <span className="label mr-1">{t.filterLabel}</span>
          {available.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`border px-[11px] py-[5px] font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-[0.1em] transition-colors duration-150 ${
                  active
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]"
                    : "border-[var(--color-divider)] text-[var(--color-body)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-700)]"
                }`}
              >
                {labels[f]}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={filter}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {featured.length > 0 && (
              <div className="mb-[52px] flex flex-col gap-[26px]">
                {featured.map((p) => (
                  <FeaturedCard key={p.slug} project={p} />
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
