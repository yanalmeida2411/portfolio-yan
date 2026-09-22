"use client";

import { useLang } from "./LangProvider";

export default function Stack() {
  const { t } = useLang();

  return (
    <section
      id="stack"
      className="bg-[var(--color-field)] text-[var(--color-field-fg)]"
    >
      <div className="container py-[var(--section-y)]">
        <div className="section-head">
          <span className="num !text-[var(--color-accent-400)]">02</span>
          <h2 className="!text-[var(--color-field-fg)]">{t.stackTitle}</h2>
          <span className="rule !bg-[color-mix(in_srgb,var(--color-field-fg)_22%,transparent)]" />
          <span className="meta !text-[color-mix(in_srgb,var(--color-field-fg)_55%,transparent)]">
            {t.stackNote}
          </span>
        </div>

        {/* grade de 1px: o fundo da grade desenha os filetes entre as células */}
        <div className="grid grid-cols-1 gap-px bg-[color-mix(in_srgb,var(--color-field-fg)_18%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
          {t.stack.map((g) => (
            <div
              key={g.name}
              className="bg-[var(--color-field)] px-[22px] pb-7 pt-[26px]"
            >
              <div className="mb-[18px] flex items-baseline justify-between">
                <h3 className="m-0 font-[family-name:var(--font-heading)] text-xl uppercase tracking-[0.08em] text-[var(--color-accent-400)]">
                  {g.name}
                </h3>
                <span className="text-[10px] text-[color-mix(in_srgb,var(--color-field-fg)_45%,transparent)]">
                  {g.ref}
                </span>
              </div>
              <ul className="m-0 flex list-none flex-col p-0">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[color-mix(in_srgb,var(--color-field-fg)_12%,transparent)] py-2 text-[14px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
