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
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "JWT",
];

export const LINKS = {
  email: "yanalmeida2411@gmail.com",
  linkedin: "https://www.linkedin.com/in/yanmonteiro88/",
  github: "https://github.com/yanalmeida2411",
  site: "https://yanmonteiro.com.br",
  featuredDemo: "https://smallville.qacoders.dev.br/",
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
    projectsCount: "04 em produção",
    featured: "Destaque",
    featuredBody:
      "Plataforma completa de venda de ingressos de cinema: administradores cadastram cinemas, filmes e sessões; usuários compram ingressos filtrando por localidade e cinema.",
    featuredSpecs: [
      {
        k: "Problema",
        v: "Cinemas sem um sistema próprio de venda de ingressos online, dependendo de processos manuais ou de terceiros.",
      },
      {
        k: "Solução",
        v: "Plataforma com painel admin para cadastro de cinemas, filmes e sessões, e fluxo de compra por localidade e cinema.",
      },
      {
        k: "Meu papel",
        v: "Desenvolvimento fullstack com NestJS e Next.js, e participação na criação do fluxograma do sistema.",
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
    projectsCount: "04 shipped",
    featured: "Featured",
    featuredBody:
      "A full movie ticketing platform: admins register cinemas, movies and showtimes; users buy tickets filtering by location and cinema.",
    featuredSpecs: [
      {
        k: "Problem",
        v: "Cinemas with no online ticket sales system of their own, relying on manual processes or third parties.",
      },
      {
        k: "Solution",
        v: "Platform with an admin panel to register cinemas, movies and showtimes, plus a purchase flow by location and cinema.",
      },
      {
        k: "My role",
        v: "Full stack development with NestJS and Next.js, and part of the system's flowchart design.",
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
      title: "Ecommerce",
      ref: "PRJ / 02",
      status: "Em produção",
      image: "/ecommerce.png",
      link: "https://ecommerceonprod.netlify.app",
      tags: ["Java", "Next.js", "Pagamentos"],
      description:
        "E-commerce completo com back-end em Java e front-end em Next.js; painéis de admin e usuário controlam vendas, pagamentos e catálogo.",
    },
    {
      title: "Conectando Leitores",
      ref: "PRJ / 03",
      status: "Concluído",
      image: "/ConectandoLeitores.png",
      link: "https://conectandoleitores.netlify.app",
      tags: ["Next.js", "Auth", "Favoritos"],
      description:
        "Biblioteca online: leitores favoritam, leem e cadastram obras; administradores gerenciam acervo e usuários por um painel próprio.",
    },
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
      title: "Ecommerce",
      ref: "PRJ / 02",
      status: "In production",
      image: "/ecommerce.png",
      link: "https://ecommerceonprod.netlify.app",
      tags: ["Java", "Next.js", "Payments"],
      description:
        "Full e-commerce platform with a Java backend and Next.js frontend; admin and user dashboards manage sales, payments and catalog.",
    },
    {
      title: "Conectando Leitores",
      ref: "PRJ / 03",
      status: "Completed",
      image: "/ConectandoLeitores.png",
      link: "https://conectandoleitores.netlify.app",
      tags: ["Next.js", "Auth", "Favorites"],
      description:
        "Online library: readers favorite, read and submit titles; admins manage the collection and users through a dedicated panel.",
    },
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
