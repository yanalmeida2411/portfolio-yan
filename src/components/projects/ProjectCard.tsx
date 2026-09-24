"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLang } from "../LangProvider";
import { ExternalIcon } from "../icons";
import { PROJECT_IMAGES } from "@/lib/images";
import { CATEGORY_LABELS, type Project } from "@/lib/content";
import { useFinePointer, usePrefersReducedMotion, useTilt } from "@/lib/hooks";
import { BrowserFrame } from "./BrowserFrame";

type Props = {
  project: Project;
  size: "large" | "small";
  onOpen: (slug: Project["slug"]) => void;
};

export default function ProjectCard({ project, size, onOpen }: Props) {
  const { lang, t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  useTilt(ref, finePointer && !reducedMotion);

  const img = PROJECT_IMAGES[project.image];
  const large = size === "large";
  const titleId = `card-${project.slug}`;

  return (
    <article ref={ref} className="depth-card" aria-labelledby={titleId}>
      <div className="depth-media">
        <BrowserFrame url={project.link}>
          <Image
            src={img.src}
            alt={`${project.title}: ${project.subtitle}`}
            width={img.width}
            height={img.height}
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            sizes={
              large
                ? "(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 600px"
                : "(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 400px"
            }
          />
        </BrowserFrame>
        <ul className="depth-chips m-0 list-none p-0" aria-label={t.stackLabel}>
          {project.tags.slice(0, large ? 5 : 3).map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="depth-body">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="label">{CATEGORY_LABELS[lang][project.category]}</span>
          <span className="label !text-[var(--color-accent-700)]">{project.status}</span>
        </div>

        <h3
          id={titleId}
          className={`m-0 uppercase leading-[0.98] ${large ? "text-[clamp(32px,4vw,44px)]" : "text-[30px]"}`}
        >
          {/* o título também abre o case: alvo maior que só o botão */}
          <button
            type="button"
            onClick={() => onOpen(project.slug)}
            className="cursor-pointer border-0 bg-transparent p-0 text-left uppercase text-inherit [font:inherit] hover:text-[var(--color-accent-700)]"
          >
            {project.title}
          </button>
        </h3>
        <p className="m-0 mt-2 font-[family-name:var(--font-heading)] text-[18px] leading-snug text-[var(--color-muted)]">
          {project.subtitle}
        </p>

        <p
          className={`m-0 mt-4 text-[15px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty] ${large ? "" : "line-clamp-3"}`}
        >
          {large ? project.problem : project.description}
        </p>

        <dl className="m-0 mt-5 grid grid-cols-3 gap-4 border-t border-[var(--color-divider)] pt-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse gap-1">
              <dt className="text-[12px] leading-tight text-[var(--color-muted)]">{m.label}</dt>
              <dd className="m-0 font-[family-name:var(--font-heading)] text-[22px] leading-none text-[var(--color-accent-700)]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              {t.visit}
              <ExternalIcon />
              <span className="sr-only">
                {project.title} {t.opensNewTab}
              </span>
            </a>
          )}
          <button
            type="button"
            onClick={() => onOpen(project.slug)}
            className="btn btn-secondary btn-sm"
            aria-haspopup="dialog"
          >
            {t.caseStudy}
            <span className="sr-only">: {project.title}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
