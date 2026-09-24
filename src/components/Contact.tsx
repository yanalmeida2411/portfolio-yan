"use client";

import { Corners, useLang } from "./LangProvider";
import { ExternalIcon } from "./icons";
import { LINKS } from "@/lib/content";

const ROW =
  "contact-row flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-[var(--color-divider)] py-4 text-[var(--color-text)] hover:text-[var(--color-accent-700)]";

export default function Contact() {
  const { t } = useLang();

  const external = [
    { label: "LinkedIn", value: "in/yanmonteiro88", href: LINKS.linkedin },
    { label: "GitHub", value: "yanalmeida2411", href: LINKS.github },
  ];

  return (
    <section id="contato" aria-labelledby="contato-title" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 id="contato-title">{t.contactTitle}</h2>
          <span className="rule" />
        </div>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal>
            <p className="m-0 mb-8 max-w-[40ch] font-[family-name:var(--font-heading)] text-[clamp(24px,3vw,30px)] font-medium leading-[1.25] [text-wrap:pretty]">
              {t.contactBody}
            </p>
            <div className="border-t border-[var(--color-divider)]">
              <a href={`mailto:${LINKS.email}`} className={ROW}>
                <span className="label">{t.labelEmail}</span>
                <span className="break-all text-[16px]">{LINKS.email}</span>
              </a>
              {external.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ROW}
                >
                  <span className="label">{item.label}</span>
                  <span className="flex items-center gap-2 text-[16px]">
                    {item.value}
                    <ExternalIcon size={12} />
                  </span>
                  <span className="sr-only">{t.opensNewTab}</span>
                </a>
              ))}
            </div>
          </div>

          <form action={LINKS.form} method="POST" className="blueprint p-6 sm:p-8" data-reveal>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Contato pelo portfólio" />
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="field">
                <label htmlFor="nome">{t.fName}</label>
                <input className="input" id="nome" type="text" name="nome" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.fEmail}</label>
                <input className="input" id="email" type="email" name="email" autoComplete="email" required />
              </div>
            </div>
            <div className="field mb-6">
              <label htmlFor="mensagem">{t.fMessage}</label>
              <textarea className="input min-h-[160px]" id="mensagem" name="mensagem" required />
            </div>
            <button type="submit" className="btn btn-primary blueprint" data-magnetic>
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
