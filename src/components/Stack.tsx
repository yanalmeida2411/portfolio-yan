"use client";

import { Fragment, useState } from "react";
import { useLang } from "./LangProvider";
import {
  PROJECTS,
  STACK,
  STACK_GROUP_LABELS,
  STACK_ITEM_LABELS,
  type ProjectSlug,
} from "@/lib/content";

/**
 * Matriz tecnologia × projeto: cada afirmação de "sei usar X" aponta para
 * onde X foi usado. Passar o mouse numa linha ou coluna isola o cruzamento;
 * sem hover (toque, teclado) a tabela continua completa e legível.
 */
export default function Stack() {
  const { lang, t } = useLang();
  const projects = PROJECTS[lang];
  const itemLabels = STACK_ITEM_LABELS[lang];
  const [hotRow, setHotRow] = useState<string | null>(null);
  const [hotCol, setHotCol] = useState<ProjectSlug | null>(null);

  const dimCol = (slug: ProjectSlug) => hotCol !== null && hotCol !== slug;

  // o que o inspetor mostra: a tecnologia sob o ponteiro, ou o projeto
  const allItems = STACK.flatMap((g) => g.items.map((item) => ({ ...item, group: g.key })));
  const rowItem = hotRow ? allItems.find((item) => item.name === hotRow) : undefined;
  const colProject = hotCol ? projects.find((p) => p.slug === hotCol) : undefined;
  const inspector = rowItem
    ? {
        kicker: STACK_GROUP_LABELS[lang][rowItem.group],
        title: itemLabels[rowItem.name] ?? rowItem.name,
        meta: `${t.stackIn} ${t.stackCount(rowItem.usedIn.length)}`,
        list: projects.filter((p) => rowItem.usedIn.includes(p.slug)).map((p) => p.title),
      }
    : colProject
      ? {
          kicker: colProject.subtitle,
          title: colProject.title,
          meta: t.stackLabel,
          list: allItems
            .filter((item) => item.usedIn.includes(colProject.slug))
            .map((item) => itemLabels[item.name] ?? item.name),
        }
      : null;

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="section section-field relative overflow-hidden bg-[var(--color-field)] text-[var(--color-field-fg)]"
    >
      <div className="field-glow" data-parallax="0.12" aria-hidden="true" />
      <div className="container relative">
        <div className="section-head" data-reveal>
          <h2 id="stack-title">{t.stackTitle}</h2>
          <span className="rule !bg-[color-mix(in_srgb,var(--color-field-fg)_22%,transparent)]" />
        </div>
        <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start" data-reveal>
            <p className="section-lead !text-[color-mix(in_srgb,var(--color-field-fg)_78%,transparent)] lg:!mb-6">
              {t.stackLead}
            </p>
            <p className="m-0 mb-10 text-[14px] leading-[1.6] text-[color-mix(in_srgb,var(--color-field-fg)_65%,transparent)]">
              {t.stackAlso}
            </p>

            {/* repete em texto o cruzamento destacado na matriz; a própria
                tabela já carrega essa informação para leitores de tela */}
            <div className="stack-inspector" data-active={inspector !== null} aria-hidden="true">
              {inspector ? (
                <div key={inspector.title} className="stack-inspector-in">
                  <span className="stack-inspector-kicker">{inspector.kicker}</span>
                  <strong>{inspector.title}</strong>
                  <span className="stack-inspector-meta">{inspector.meta}</span>
                  <ul>
                    {inspector.list.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="m-0">{t.stackHint}</p>
              )}
            </div>
          </div>

          <div
            className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] pb-2 lg:mx-0 lg:px-0"
            data-reveal
            // rolagem horizontal no celular: precisa ser alcançável pelo teclado
            tabIndex={0}
            role="region"
            aria-label={t.stackTableLabel}
          >
            <table
              className="matrix"
              onMouseLeave={() => {
                setHotRow(null);
                setHotCol(null);
              }}
            >
              <caption className="sr-only">{t.stackLead}</caption>
              <thead>
                <tr>
                  <td />
                  {projects.map((p) => (
                    <th key={p.slug} scope="col" className="cell" data-dim={dimCol(p.slug)}>
                      <a
                        href={`#projeto-${p.slug}`}
                        className="col-head"
                        data-active={hotCol === p.slug}
                        onMouseEnter={() => {
                          setHotCol(p.slug);
                          setHotRow(null);
                        }}
                        onFocus={() => setHotCol(p.slug)}
                        onBlur={() => setHotCol(null)}
                      >
                        {p.title}
                      </a>
                    </th>
                  ))}
                  <td />
                </tr>
              </thead>
              <tbody>
                {STACK.map((group) => (
                  <Fragment key={group.key}>
                    <tr className="group">
                      <th scope="colgroup" colSpan={projects.length + 2}>
                        {STACK_GROUP_LABELS[lang][group.key]}
                      </th>
                    </tr>
                    {group.items.map((item) => {
                      const dimRow = hotRow !== null && hotRow !== item.name;
                      const inCol = hotCol !== null && item.usedIn.includes(hotCol);
                      return (
                        <tr
                          key={item.name}
                          className="row"
                          data-dim={dimRow || (hotCol !== null && !inCol)}
                          data-hot={hotRow === item.name}
                          onMouseEnter={() => {
                            setHotRow(item.name);
                            setHotCol(null);
                          }}
                        >
                          <th scope="row">{itemLabels[item.name] ?? item.name}</th>
                          {projects.map((p) => {
                            const on = item.usedIn.includes(p.slug);
                            return (
                              <td key={p.slug} className="cell" data-dim={dimCol(p.slug)}>
                                <span
                                  className="mark"
                                  data-on={on}
                                  data-hot={hotCol === p.slug}
                                  aria-hidden="true"
                                />
                                <span className="sr-only">{on ? t.stackUsed : t.stackNotUsed}</span>
                              </td>
                            );
                          })}
                          <td className="count">{t.stackCount(item.usedIn.length)}</td>
                        </tr>
                      );
                    })}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
