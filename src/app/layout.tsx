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

export const metadata: Metadata = {
  metadataBase: new URL("https://yanmonteiro.com.br"),
  title: "Yan Monteiro — Desenvolvedor Full Stack",
  description:
    "Portfólio de Yan Monteiro, desenvolvedor full stack. React, Next.js, Node.js, NestJS, Spring, PostgreSQL. Disponível para oportunidades.",
  openGraph: {
    title: "Yan Monteiro — Desenvolvedor Full Stack",
    description:
      "Cinco produtos em produção, do banco de dados à interface. React, Next.js, Node.js, PostgreSQL.",
    images: ["/Perfil.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang começa em pt-BR (idioma inicial do toggle) e é atualizado no
    // client, em LangProvider, quando o visitante troca para EN.
    <html lang="pt-BR">
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
