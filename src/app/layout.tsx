import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const TITLE = "Yan Monteiro — Desenvolvedor Full Stack";
const DESCRIPTION =
  "Portfólio de Yan Monteiro, desenvolvedor full stack. Sete aplicações em produção, do banco de dados à interface, em Go, Java, NestJS, Next.js e PostgreSQL. Disponível para oportunidades.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanmonteiro.com.br"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "desenvolvedor full stack",
    "full stack developer",
    "Next.js",
    "React",
    "Go",
    "Java",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "TypeScript",
    "portfólio",
  ],
  authors: [{ name: "Yan Monteiro", url: "https://yanmonteiro.com.br" }],
  creator: "Yan Monteiro",
  // a imagem de compartilhamento vem de app/opengraph-image.tsx
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Yan Monteiro",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2f3" },
    { media: "(prefers-color-scheme: dark)", color: "#121415" },
  ],
};

/**
 * Roda antes da primeira pintura:
 * - fixa o tema salvo, para não piscar branco no modo escuro;
 * - liga as entradas animadas (data-motion) só sem prefers-reduced-motion;
 * - se o JS da página não assumir em 3s, desliga as entradas e mostra tudo.
 */
const HEAD_SCRIPT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.dataset.theme=t}catch(e){}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.motion="on";setTimeout(function(){if(!d.dataset.revealReady)delete d.dataset.motion},3000)}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang começa em pt-BR (idioma inicial do toggle) e é atualizado no
    // client, em LangProvider, quando o visitante troca para EN.
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
      </head>
      {/* as variáveis do next/font sobrescrevem --font-body / --font-heading
          declaradas em globals.css */}
      <body
        className={`${barlow.variable} ${barlowCondensed.variable}`}
        style={
          {
            "--font-body": "var(--font-barlow)",
            "--font-heading": "var(--font-barlow-condensed)",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
