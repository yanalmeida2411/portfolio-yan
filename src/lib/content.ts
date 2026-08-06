export type Lang = "pt" | "en";

export type Project = {
  title: string;
  ref: string;
  status: string;
  image: string;
  link: string;
  tags: string[];
  description: string;
};

export const FEATURED_TAGS = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "JWT",
];

export const LINKS = {
  email: "yanalmeida2411@gmail.com",
  linkedin: "https://www.linkedin.com/in/yanmonteiro88/",
  github: "https://github.com/yanalmeida2411",
  site: "https://yanmonteiro.com.br",
  featuredDemo: "https://conectandoleitores.netlify.app/",
  // troque por um endpoint próprio (API route) se preferir não usar formsubmit
  form: "https://formsubmit.co/yanalmeida2411@gmail.com",
};

export const COPY = {
  pt: {
    navProjects: "Projetos",
    navStack: "Stack",
    navAbout: "Sobre",
    navContact: "Contato",
    navCta: "Contratar",
    available: "Disponível para oportunidades — CLT ou PJ",
    role: "Desenvolvedor Full Stack",
    location: "Brasil · Remoto",
    heroBody:
      "Construo produtos web de ponta a ponta: interfaces em React e Next.js sobre APIs em Node, NestJS e Spring. Foco em performance, acessibilidade e código que outra pessoa consegue manter.",
    seeProjects: "Ver projetos",
    downloadCv: "Currículo no LinkedIn",
    projectsTitle: "Projetos",
    projectsCount: "05 em produção",
    featured: "Destaque",
    featuredBody:
      "Biblioteca online completa: leitores favoritam, leem e cadastram obras; administradores gerenciam acervo e usuários por um painel próprio.",
    featuredSpecs: [
      {
        k: "Problema",
        v: "Acervos de leitura comunitários sem catálogo digital nem controle de acesso.",
      },
      {
        k: "Solução",
        v: "Catálogo com autenticação, favoritos e painel administrativo com dois níveis de permissão.",
      },
      {
        k: "Meu papel",
        v: "Projeto do schema, API, autenticação e toda a interface.",
      },
    ],
    liveDemo: "Ver ao vivo",
    code: "Código",
    viewProject: "Abrir projeto",
    stackTitle: "Stack técnica",
    stackNote: "Por categoria",
    stack: [
      {
        name: "Frontend",
        ref: "A",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
      },
      {
        name: "Backend",
        ref: "B",
        items: ["Node.js", "NestJS", "Spring", "Express", "API REST · JWT"],
      },
      {
        name: "Dados",
        ref: "C",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
      },
      {
        name: "Linguagens & Infra",
        ref: "D",
        items: [
          "JavaScript",
          "Java",
          "Golang",
          "Git · GitHub",
          "Docker",
          "Vercel · Railway · Render",
        ],
      },
    ],
    aboutTitle: "Sobre",
    aboutLead:
      "Desenvolvedor full stack com foco em experiência do usuário e boas práticas de código.",
    aboutP1:
      "Trabalho do banco de dados à interface. No frontend, React, Next.js, React Native e Tailwind CSS, sempre medindo performance e usabilidade. No backend, Node.js, NestJS e Spring com PostgreSQL, MySQL e MongoDB.",
    aboutP2:
      "Procuro um time onde eu possa entregar features de ponta a ponta, revisar código com gente mais experiente e evoluir rápido.",
    contactTitle: "Contato",
    contactBody:
      "Aberto a vagas de desenvolvedor full stack, júnior ou pleno. Respondo em até 24 horas.",
    fName: "Nome",
    fEmail: "E-mail",
    fMessage: "Mensagem",
    send: "Enviar mensagem",
    rights: "Todos os direitos reservados",
    builtWith: "Next.js · TypeScript · Tailwind",
    labelEmail: "E-mail",
    labelSite: "Site",
  },
  en: {
    navProjects: "Work",
    navStack: "Stack",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Hire me",
    available: "Open to opportunities — full-time or contract",
    role: "Full Stack Developer",
    location: "Brazil · Remote",
    heroBody:
      "I build web products end to end: React and Next.js interfaces on top of Node, NestJS and Spring APIs. Focused on performance, accessibility and code someone else can maintain.",
    seeProjects: "See work",
    downloadCv: "Résumé on LinkedIn",
    projectsTitle: "Selected work",
    projectsCount: "05 shipped",
    featured: "Featured",
    featuredBody:
      "A full online library: readers favorite, read and submit titles; admins manage the collection and users through a dedicated panel.",
    featuredSpecs: [
      {
        k: "Problem",
        v: "Community reading collections with no digital catalog and no access control.",
      },
      {
        k: "Solution",
        v: "Catalog with authentication, favorites and an admin panel with two permission levels.",
      },
      {
        k: "My role",
        v: "Schema design, API, authentication and the entire interface.",
      },
    ],
    liveDemo: "Live demo",
    code: "Code",
    viewProject: "Open project",
    stackTitle: "Technical stack",
    stackNote: "By category",
    stack: [
      {
        name: "Frontend",
        ref: "A",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
      },
      {
        name: "Backend",
        ref: "B",
        items: ["Node.js", "NestJS", "Spring", "Express", "REST API · JWT"],
      },
      {
        name: "Data",
        ref: "C",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
      },
      {
        name: "Languages & Infra",
        ref: "D",
        items: [
          "JavaScript",
          "Java",
          "Golang",
          "Git · GitHub",
          "Docker",
          "Vercel · Railway · Render",
        ],
      },
    ],
    aboutTitle: "About",
    aboutLead:
      "Full stack developer focused on user experience and code quality.",
    aboutP1:
      "I work from the database up to the interface. On the frontend: React, Next.js, React Native and Tailwind CSS, always measuring performance and usability. On the backend: Node.js, NestJS and Spring with PostgreSQL, MySQL and MongoDB.",
    aboutP2:
      "Looking for a team where I can ship features end to end, review code with more experienced engineers and grow fast.",
    contactTitle: "Contact",
    contactBody:
      "Open to full stack developer roles, junior or mid-level. I reply within 24 hours.",
    fName: "Name",
    fEmail: "Email",
    fMessage: "Message",
    send: "Send message",
    rights: "All rights reserved",
    builtWith: "Next.js · TypeScript · Tailwind",
    labelEmail: "Email",
    labelSite: "Website",
  },
} as const;

export const PROJECTS: Record<Lang, Project[]> = {
  pt: [
    {
      title: "Educagil",
      ref: "PRJ / 04",
      status: "Em construção",
      image: "/educagil.png",
      link: "https://testeducaagil.netlify.app",
      tags: ["Next.js", "Auth", "Painéis"],
      description:
        "Plataforma de ensino online com áreas separadas para alunos e professores.",
    },
  ],
  en: [
    {
      title: "Educagil",
      ref: "PRJ / 04",
      status: "In progress",
      image: "/educagil.png",
      link: "https://testeducaagil.netlify.app",
      tags: ["Next.js", "Auth", "Dashboards"],
      description:
        "Online teaching platform with separate areas for students and teachers.",
    },
  ],
};
