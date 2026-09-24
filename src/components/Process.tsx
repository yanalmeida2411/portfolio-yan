"use client";

import { useLang } from "./LangProvider";

/** Um processo em quatro passos — aqui a numeração é sequência de verdade. */
export default function Process() {
  const { t } = useLang();

  return (
    <section id="processo" aria-labelledby="processo-title" className="section border-b border-[var(--color-divider)]">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 id="processo-title">{t.processTitle}</h2>
          <span className="rule" />
        </div>
        <p className="section-lead" data-reveal>
          {t.processLead}
        </p>

        <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.process.map((step, n) => (
            <li
              key={step.title}
              className="flex flex-col border-t-2 border-[var(--color-accent)] pt-5"
              data-reveal
              style={{ "--i": n } as React.CSSProperties}
            >
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-heading)] text-[44px] font-semibold leading-none text-[var(--color-accent-700)]"
              >
                {n + 1}
              </span>
              <h3 className="m-0 mt-4 text-[24px] uppercase leading-[1.05]">{step.title}</h3>
              <p className="m-0 mt-3 flex-1 text-[15px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
                {step.body}
              </p>
              <p className="m-0 mt-5 border-l border-[var(--color-accent)] pl-3 text-[14px] leading-[1.5] text-[var(--color-muted)] [text-wrap:pretty]">
                {step.proof}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
