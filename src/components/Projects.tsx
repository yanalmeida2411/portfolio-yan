"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import ProjectCard from "./projects/ProjectCard";
import ProjectDialog from "./projects/ProjectDialog";
import { PROJECTS, type ProjectSlug } from "@/lib/content";

/** Âncora compartilhável de um case: #projeto-cineville */
const HASH_PREFIX = "#projeto-";

function slugFromHash(slugs: readonly ProjectSlug[]): ProjectSlug | null {
  const hash = decodeURIComponent(window.location.hash);
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const slug = hash.slice(HASH_PREFIX.length);
  return slugs.find((s) => s === slug) ?? null;
}

export default function Projects() {
  const { t, lang } = useLang();
  const projects = PROJECTS[lang];
  const slugs = projects.map((p) => p.slug);
  const [openSlug, setOpenSlug] = useState<ProjectSlug | null>(null);
  /** true quando fomos nós que empurramos a âncora no histórico */
  const pushedRef = useRef(false);
  const openRef = useRef(openSlug);
  useEffect(() => {
    openRef.current = openSlug;
  }, [openSlug]);

  // âncora → estado: link direto, botão voltar, ou links #projeto-* da página
  useEffect(() => {
    const all = PROJECTS.pt.map((p) => p.slug);
    const sync = (e?: HashChangeEvent) => {
      const slug = slugFromHash(all);
      // um link #projeto-* clicado na página empilhou uma entrada no histórico;
      // na carga inicial (link compartilhado) não há o que desempilhar
      pushedRef.current = slug !== null && (e !== undefined || pushedRef.current);
      setOpenSlug(slug);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const open = useCallback((slug: ProjectSlug) => {
    if (openRef.current) {
      // trocando de projeto dentro do case: não empilha histórico
      history.replaceState(null, "", HASH_PREFIX + slug);
    } else {
      history.pushState(null, "", HASH_PREFIX + slug);
      pushedRef.current = true;
    }
    setOpenSlug(slug);
  }, []);

  const close = useCallback(() => {
    if (!openRef.current) return; // o <dialog> também dispara close ao fechar por código
    setOpenSlug(null);
    if (pushedRef.current) {
      pushedRef.current = false;
      history.back(); // o botão voltar do celular também fecha o case
    } else {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const index = openSlug ? slugs.indexOf(openSlug) : -1;
  const current = index >= 0 ? projects[index] : null;
  const i = Math.max(index, 0);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section border-b border-[var(--color-divider)]">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 id="projetos-title">{t.projectsTitle}</h2>
          <span className="rule" />
        </div>
        <p className="section-lead" data-reveal>
          {t.projectsLead}
        </p>

        {/* galeria no desktop (6 colunas): os destaques dividem a primeira
            linha (3+3) e o resto corre em cards compactos de três por linha */}
        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-6 lg:gap-7">
          {projects.map((p, n) => (
            <li
              key={p.slug}
              data-reveal="card"
              style={{ "--i": p.featured ? n : (n - 2) % 3 } as React.CSSProperties}
              className={p.featured ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <ProjectCard project={p} size={p.featured ? "large" : "small"} onOpen={open} />
            </li>
          ))}
        </ul>
      </div>

      <ProjectDialog project={current} prev={prev} next={next} onClose={close} onNavigate={open} />
    </section>
  );
}
