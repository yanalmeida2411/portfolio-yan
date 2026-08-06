"use client";

import { Corners, useLang } from "./LangProvider";
import { LINKS } from "@/lib/content";

const ROW =
  "flex justify-between gap-3 border-b border-[color-mix(in_srgb,var(--color-text)_9%,transparent)] py-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)]";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contato">
      <div className="container py-[var(--section-y)] pb-24">
        <div className="section-head">
          <span className="num">04</span>
          <h2>{t.contactTitle}</h2>
          <span className="rule" />
        </div>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="m-0 mb-7 text-[17px] leading-[1.6] text-[var(--color-body)] [text-wrap:pretty]">
              {t.contactBody}
            </p>
            <div className="border-t border-[var(--color-divider)]">
              <a href={`mailto:${LINKS.email}`} className={ROW}>
                <span className="label">{t.labelEmail}</span>
                <span className="text-[14px]">{LINKS.email}</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={ROW}
              >
                <span className="label">LinkedIn</span>
                <span className="text-[14px]">in/yanmonteiro88</span>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className={ROW}
              >
                <span className="label">GitHub</span>
                <span className="text-[14px]">yanalmeida2411</span>
              </a>
              <a
                href={LINKS.site}
                target="_blank"
                rel="noopener noreferrer"
                className={ROW}
              >
                <span className="label">{t.labelSite}</span>
                <span className="text-[14px]">yanmonteiro.com.br</span>
              </a>
            </div>
          </div>

          <form
            action={LINKS.form}
            method="POST"
            className="blueprint p-[30px]"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="field">
                <label htmlFor="nome">{t.fName}</label>
                <input className="input" id="nome" type="text" name="nome" required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.fEmail}</label>
                <input className="input" id="email" type="email" name="email" required />
              </div>
            </div>
            <div className="field mb-[22px]">
              <label htmlFor="mensagem">{t.fMessage}</label>
              <textarea
                className="input min-h-[150px]"
                id="mensagem"
                name="mensagem"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary blueprint">
              {t.send}
              <Corners />
            </button>
            <Corners />
          </form>
        </div>
      </div>
    </section>
  );
}
