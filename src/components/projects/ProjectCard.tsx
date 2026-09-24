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

/**
 * Card compacto de galeria. Em repouso mostra só o essencial (print, nome,
 * categoria, tecnologias, uma linha de posicionamento); a descrição e as
 * ações sobem num painel sobre o print no hover ou no foco do teclado.
 * Em toque, o mesmo painel fica fixo embaixo do card — nada depende de hover.
 */
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
    <article
      ref={ref}
      className="pcard"
      data-size={size}
      data-cursor={t.viewCase}
      aria-labelledby={titleId}
      // clique em qualquer ponto do card abre o case (atalho de mouse; no
      // teclado o alvo é o botão do título, logo abaixo)
      onClick={(e) => {
        if ((e.target as Element).closest("a, button")) return;
        onOpen(project.slug);
      }}
    >
      <div className="pcard-media">
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
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            }
          />
        </BrowserFrame>
        <span className="pcard-status" aria-hidden="true">
          <i />
          {project.status}
        </span>
      </div>

      <div className="pcard-body">
        <span className="label">
          {CATEGORY_LABELS[lang][project.category]} · {project.year}
          <span className="sr-only">, {project.status}</span>
        </span>
        <h3 id={titleId} className="pcard-title">
          <button type="button" onClick={() => onOpen(project.slug)} aria-haspopup="dialog">
            {project.title}
          </button>
        </h3>
        <p className="pcard-subtitle">{project.subtitle}</p>
        <ul className="pcard-tags" aria-label={t.stackLabel}>
          {project.tags.slice(0, large ? 5 : 3).map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="pcard-reveal" data-cursor-off>
        <p className="pcard-desc">{project.description}</p>
        <div className="pcard-actions">
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
