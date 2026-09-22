import type { Metadata } from "next";
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
  "Portfólio de Yan Monteiro, desenvolvedor full stack. Sete projetos do banco de dados à interface, em Go, Java, NestJS, Next.js e PostgreSQL. Disponível para oportunidades.";

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
  ],
  authors: [{ name: "Yan Monteiro", url: "https://yanmonteiro.com.br" }],
  creator: "Yan Monteiro",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Yan Monteiro",
    locale: "pt_BR",
    images: [{ url: "/Perfil.jpg", width: 1200, height: 630, alt: "Yan Monteiro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/Perfil.jpg"],
  },
  robots: { index: true, follow: true },
};

/** Fixa o tema antes da primeira pintura, para não piscar branco no modo escuro. */
const THEME_SCRIPT = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

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
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
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
