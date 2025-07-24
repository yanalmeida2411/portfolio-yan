import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yan Monteiro",
  description: "Desenvolvedor Web Full Stack, venha conhecer meu portfólio!",
  icons: {
    icon: "/logo_ic.svg",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
