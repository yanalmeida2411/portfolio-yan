import { LangProvider } from "@/components/LangProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LINKS, PROJECTS } from "@/lib/content";

/** Dados estruturados: quem é, o que domina e o que construiu. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yan Monteiro",
  url: LINKS.site,
  email: `mailto:${LINKS.email}`,
  jobTitle: "Desenvolvedor Full Stack",
  sameAs: [LINKS.linkedin, LINKS.github],
  knowsAbout: [
    "Go",
    "Java",
    "Spring Boot",
    "NestJS",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
  // a lista em português é a canônica do site (lang="pt-BR")
  subjectOf: PROJECTS.pt.map((p) => ({
    "@type": "SoftwareApplication",
    name: p.title,
    description: p.subtitle,
    applicationCategory: "WebApplication",
    ...(p.link ? { url: p.link } : {}),
  })),
};

export default function Home() {
  return (
    <LangProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
