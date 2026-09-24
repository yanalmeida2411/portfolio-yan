import type { ReactNode } from "react";

/** Moldura de navegador mínima: o print lê como produto no ar, não como imagem solta. */
export function BrowserFrame({ url, children }: { url: string | null; children: ReactNode }) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        {url && <span>{url.replace(/^https?:\/\//, "")}</span>}
      </div>
      {children}
    </div>
  );
}
