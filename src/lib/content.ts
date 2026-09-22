import type { ProjectImageKey } from "./images";

export type Lang = "pt" | "en";

export type ProjectCategory = "fullstack" | "frontend" | "platform";

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  /** identificador estável — usado em âncoras, filtros e chaves de lista */
  slug: string;
  title: string;
  /** posicionamento em uma linha, lido antes da descrição */
  subtitle: string;
  ref: string;
  status: string;
  year: string;
  category: ProjectCategory;
  image: ProjectImageKey;
  /** `null` enquanto o deploy não está publicado — a UI esconde o botão */
  link: string | null;
  repo: string | null;
  tags: string[];
  description: string;
  /** o que eu fiz, não o que o time fez */
  role: string;
  /** decisões técnicas defensáveis numa entrevista */
  highlights: string[];
  metrics: Metric[];
  featured?: boolean;
};

export const LINKS = {
  email: "yanalmeida2411@gmail.com",
  linkedin: "https://www.linkedin.com/in/yanmonteiro88/",
  github: "https://github.com/yanalmeida2411",
  site: "https://yanmonteiro.com.br",
  form: "https://formsubmit.co/yanalmeida2411@gmail.com",
};

export const CATEGORY_LABELS: Record<Lang, Record<ProjectCategory | "all", string>> = {
  pt: {
    all: "Todos",
    fullstack: "Full stack",
    platform: "Plataforma",
    frontend: "Front-end",
  },
  en: {
    all: "All",
    fullstack: "Full stack",
    platform: "Platform",
    frontend: "Front-end",
  },
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
      "Construo produtos web de ponta a ponta: interfaces em React e Next.js sobre APIs em Go, Java e Node. Foco em performance, acessibilidade e código que outra pessoa consegue manter.",
    seeProjects: "Ver projetos",
    downloadCv: "Currículo no LinkedIn",

    projectsTitle: "Projetos",
    projectsCount: "07 projetos",
    projectsLead:
      "Sistemas completos, do banco de dados à interface. Cada um com as decisões técnicas que eu defendo.",
    featured: "Destaque",
    filterLabel: "Filtrar por",
    roleLabel: "Meu papel",
    decisionsLabel: "Decisões técnicas",
    liveDemo: "Ver ao vivo",
    soon: "Em breve",
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
        items: ["Go", "Java · Spring Boot", "NestJS", "Node.js", "API REST · JWT"],
      },
      {
        name: "Dados",
        ref: "C",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma · GORM"],
      },
      {
        name: "Infra & Qualidade",
        ref: "D",
        items: [
          "Docker",
          "Git · GitHub",
          "CI/CD",
          "Testes automatizados",
          "Vercel · Railway · Render",
        ],
      },
    ],

    aboutTitle: "Sobre",
    aboutLead:
      "Desenvolvedor full stack. Trabalho do banco de dados à interface, e escrevo o código pensando em quem vai mantê-lo depois.",
    aboutP1:
      "Nos últimos projetos escrevi APIs em Go, Java e NestJS, e interfaces em Next.js e React. Isso inclui um PDV rodando em um bar real, um marketplace com checkout transacional e uma plataforma de estudos com RAG sobre pgvector.",
    aboutP2:
      "O que me interessa não é acumular frameworks: é entender por que cada decisão foi tomada. Por isso documento arquitetura antes de codar, cubro o que importa com teste e prefiro uma fronteira explícita a uma abstração esperta.",
    aboutP3:
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
    themeToggle: "Alternar tema",
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
      "I build web products end to end: React and Next.js interfaces on top of Go, Java and Node APIs. Focused on performance, accessibility and code someone else can maintain.",
    seeProjects: "See work",
    downloadCv: "Résumé on LinkedIn",

    projectsTitle: "Selected work",
    projectsCount: "07 projects",
    projectsLead:
      "Complete systems, from the database to the interface. Each one with the technical decisions I stand behind.",
    featured: "Featured",
    filterLabel: "Filter by",
    roleLabel: "My role",
    decisionsLabel: "Technical decisions",
    liveDemo: "Live demo",
    soon: "Coming soon",
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
        items: ["Go", "Java · Spring Boot", "NestJS", "Node.js", "REST API · JWT"],
      },
      {
        name: "Data",
        ref: "C",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma · GORM"],
      },
      {
        name: "Infra & Quality",
        ref: "D",
        items: [
          "Docker",
          "Git · GitHub",
          "CI/CD",
          "Automated testing",
          "Vercel · Railway · Render",
        ],
      },
    ],

    aboutTitle: "About",
    aboutLead:
      "Full stack developer. I work from the database up to the interface, and write code with the next maintainer in mind.",
    aboutP1:
      "Across recent projects I've written APIs in Go, Java and NestJS, and interfaces in Next.js and React. That includes a POS running in a real bar, a marketplace with a transactional checkout, and an AI study platform with RAG on pgvector.",
    aboutP2:
      "What interests me isn't collecting frameworks — it's understanding why each decision was made. So I document architecture before writing code, test what matters, and prefer an explicit boundary over a clever abstraction.",
    aboutP3:
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
    themeToggle: "Toggle theme",
  },
} as const;

/* ==========================================================================
   Projetos
   Conteúdo extraído da documentação técnica de cada repositório em
   `ProjetosPublicados/`. `link: null` = deploy ainda não publicado.
   ========================================================================== */

export const PROJECTS: Record<Lang, Project[]> = {
  pt: [
    {
      slug: "cineville",
      title: "Cineville",
      subtitle: "Venda de ingressos de cinema, ponta a ponta",
      ref: "PRJ / 01",
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "cineville",
      link: null,
      repo: null,
      featured: true,
      tags: ["NestJS", "MongoDB", "Next.js 16", "React 19", "JWT"],
      description:
        "Não uma tela de listagem de filmes: o fluxo inteiro, do “quero ver esse filme” até o QR Code validado na portaria. Área pública, área do cliente e dashboard administrativo para cinemas, filmes e sessões.",
      role: "Desenvolvimento full stack (NestJS + Next.js) e desenho do fluxograma do sistema.",
      highlights: [
        "O ingresso se valida sozinho: o QR carrega número + assinatura HMAC-SHA256, então a portaria confere a autenticidade sem depender de consulta ao banco.",
        "O token JWT nunca chega ao browser — toda conversa com a API passa por Server Actions, com o token guardado em cookie httpOnly.",
        "17 módulos de domínio com a mesma estrutura interna (controllers, services, DTOs, schemas, enums), o que torna cada módulo novo previsível de escrever e de revisar.",
      ],
      metrics: [
        { value: "17", label: "módulos de domínio" },
        { value: "30", label: "rotas" },
        { value: "33", label: "suítes de teste" },
      ],
    },
    {
      slug: "muquiranas",
      title: "Muquiranas",
      subtitle: "PDV e gestão comercial para um bar real",
      ref: "PRJ / 02",
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "muquiranas",
      link: null,
      repo: null,
      featured: true,
      tags: ["Go", "Fiber", "PostgreSQL", "Next.js", "Zustand"],
      description:
        "Sistema de controle interno para um bar em operação: registra vendas, controla estoque e validade, gerencia caixa, comandas, fidelidade, fornecedores, metas e gera relatórios.",
      role: "Desenvolvimento full stack: API em Go e aplicação web em Next.js.",
      highlights: [
        "O PDV continua vendendo sem rede: uma fila offline em Zustand acumula as operações e sincroniza quando a conexão volta — num bar cheio, cair a internet não pode parar o caixa.",
        "27 migrations SQL versionadas e embutidas no próprio binário Go, então subir uma versão nova não tem passo manual de schema.",
        "TypeScript em modo strict, zero `any` no frontend, e a API devolve o rótulo traduzido ao lado de cada código de enum — o contrato fica estável e a interface, em português.",
      ],
      metrics: [
        { value: "~140", label: "endpoints" },
        { value: "356", label: "testes em Go" },
        { value: "87k", label: "linhas" },
      ],
    },
    {
      slug: "vitrine",
      title: "Vitrine",
      subtitle: "Marketplace multi-loja com checkout transacional",
      ref: "PRJ / 03",
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "vitrine",
      link: null,
      repo: null,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Next.js"],
      description:
        "Marketplace em que várias lojas vendem produtos por categoria. Cobre o ciclo completo da compra: vitrine pública, carrinho com validação de estoque, checkout em etapas, pagamento, acompanhamento do pedido, avaliação e operação administrativa.",
      role: "Desenvolvimento full stack: API REST em Java/Spring Boot e aplicação web em Next.js.",
      highlights: [
        "Checkout transacional: calcula o total, baixa o estoque item a item, congela o preço de compra e cria o pagamento — estoque insuficiente em qualquer item faz rollback da operação inteira.",
        "Autorização em dois níveis, por rota e por dado: um cliente só enxerga os próprios pedidos e a decisão vive no service, onde a query é montada — não em um filtro depois.",
        "Cascata pagamento → pedido: aprovado, o pedido avança; recusado ou cancelado, o pedido falha e o estoque volta para a prateleira.",
      ],
      metrics: [
        { value: "2", label: "perfis de acesso" },
        { value: "100%", label: "schema versionado" },
        { value: "4", label: "meios de pagamento" },
      ],
    },
    {
      slug: "studio",
      title: "Stud.io",
      subtitle: "Plataforma de estudos assistidos por IA",
      ref: "PRJ / 04",
      status: "Em construção",
      year: "2026",
      category: "platform",
      image: "studio",
      link: null,
      repo: null,
      tags: ["NestJS", "pgvector", "Redis · BullMQ", "Next.js", "Monorepo"],
      description:
        "Não “IA que cria questões”: um ambiente de treinamento intelectual com professores de IA reutilizáveis, salas de estudo persistentes, motor de debates com evidências e arena gamificada.",
      role: "Arquitetura e desenvolvimento full stack, do contrato de API à interface.",
      highlights: [
        "RAG próprio: o PDF entra e vira texto, páginas, chunks e embeddings em pgvector — o material fica pesquisável e, mais importante, citável na resposta.",
        "Monolito modular com fronteiras verificadas no CI: permite extrair serviços no futuro sem pagar hoje o custo operacional de microsserviços.",
        "A arquitetura foi definida antes do código — 32 ADRs e contratos de API e WebSocket versionados como fonte de verdade entre backend e frontend.",
      ],
      metrics: [
        { value: "32", label: "ADRs" },
        { value: "3", label: "pacotes compartilhados" },
        { value: "v1", label: "contratos versionados" },
      ],
    },
    {
      slug: "conectando-leitores",
      title: "Conectando Leitores",
      subtitle: "Biblioteca digital com leitor de EPUB no browser",
      ref: "PRJ / 05",
      status: "Concluído",
      year: "2026",
      category: "fullstack",
      image: "conectando-leitores",
      link: "https://conectandoleitores.netlify.app",
      repo: null,
      tags: ["NestJS", "MongoDB", "Next.js 16", "EPUB", "Firebase"],
      description:
        "Biblioteca online onde leitores favoritam, leem e cadastram obras, e administradores gerenciam acervo e usuários por um painel próprio.",
      role: "Desenvolvimento full stack: API em NestJS e aplicação de leitura em Next.js.",
      highlights: [
        "Leitor de EPUB rodando no próprio browser via epub.js, com o progresso de leitura preservado por usuário.",
        "Pipeline de publicação no backend: extração de texto de PDF e geração de EPUB, para que uma obra entre em qualquer um dos dois formatos.",
        "JWT com Passport, rate limit global por Throttler e documentação Swagger publicada pela própria API.",
      ],
      metrics: [
        { value: "2", label: "perfis de acesso" },
        { value: "2", label: "formatos de obra" },
        { value: "100%", label: "API documentada" },
      ],
    },
    {
      slug: "educagil",
      title: "Educagil",
      subtitle: "Plataforma de ensino online",
      ref: "PRJ / 06",
      status: "Em construção",
      year: "2026",
      category: "fullstack",
      image: "educagil",
      link: "https://testeducaagil.netlify.app",
      repo: null,
      tags: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript"],
      description:
        "Plataforma de ensino com áreas separadas para alunos e professores: cursos, matrículas, progresso, avaliações e certificados, com controle de acesso por papel.",
      role: "API em Go e interface em Next.js, alinhada com as squads “Visão do Professor” e “Visão do Aluno”.",
      highlights: [
        "Autenticação JWT HS256 com refresh token rotacionado — a sessão renova sem reexpor as credenciais.",
        "Migrations com goose embutidas no binário e identificadores em UUID v4, o que mantém o deploy reproduzível.",
        "Componentes reutilizáveis e modularizados, desenhados a partir das necessidades mapeadas por cada squad.",
      ],
      metrics: [
        { value: "2", label: "perfis de acesso" },
        { value: "5", label: "domínios" },
        { value: "Go 1.26", label: "runtime" },
      ],
    },
    {
      slug: "belle-rose-maison",
      title: "Belle Rose Maison",
      subtitle: "Catálogo de floricultura com pedido por WhatsApp",
      ref: "PRJ / 07",
      status: "Concluído",
      year: "2026",
      category: "frontend",
      image: "belle-rose",
      link: null,
      repo: null,
      tags: ["Next.js", "TypeScript", "Tailwind", "SOLID"],
      description:
        "Landing page e catálogo responsivos com favoritos e carrinho, onde o pedido fechado vira uma mensagem pronta no WhatsApp — sem gateway de pagamento e sem fricção para o cliente final.",
      role: "Desenvolvimento front-end completo, do design recebido à entrega.",
      highlights: [
        "Carrinho e favoritos não falam com o localStorage direto: dependem de uma interface `KeyValueStorage`, então trocar o backend de persistência não toca nos contexts.",
        "As mensagens de WhatsApp saem de formatters (`SingleProductInquiryFormatter`, `CartOrderFormatter`) que ganham variações novas sem alterar quem os chama.",
        "Componentes com responsabilidade única e tipos pequenos e específicos, em vez de props genéricas acumulando responsabilidade.",
      ],
      metrics: [
        { value: "100%", label: "responsivo" },
        { value: "0", label: "dependências de estado" },
        { value: "SOLID", label: "aplicado a componentes" },
      ],
    },
  ],

  en: [
    {
      slug: "cineville",
      title: "Cineville",
      subtitle: "End-to-end cinema ticketing",
      ref: "PRJ / 01",
      status: "In production",
      year: "2026",
      category: "fullstack",
      image: "cineville",
      link: null,
      repo: null,
      featured: true,
      tags: ["NestJS", "MongoDB", "Next.js 16", "React 19", "JWT"],
      description:
        "Not a movie listing screen: the entire flow, from “I want to watch this” to the QR code validated at the door. Public area, customer area and an admin dashboard for cinemas, movies and showtimes.",
      role: "Full stack development (NestJS + Next.js) and system flowchart design.",
      highlights: [
        "The ticket validates itself: the QR carries a number plus an HMAC-SHA256 signature, so the door staff can verify authenticity without a database lookup.",
        "The JWT never reaches the browser — all API communication goes through Server Actions, with the token held in an httpOnly cookie.",
        "17 domain modules sharing the same internal structure (controllers, services, DTOs, schemas, enums), which makes every new module predictable to write and to review.",
      ],
      metrics: [
        { value: "17", label: "domain modules" },
        { value: "30", label: "routes" },
        { value: "33", label: "test suites" },
      ],
    },
    {
      slug: "muquiranas",
      title: "Muquiranas",
      subtitle: "POS and management for a real bar",
      ref: "PRJ / 02",
      status: "In production",
      year: "2026",
      category: "fullstack",
      image: "muquiranas",
      link: null,
      repo: null,
      featured: true,
      tags: ["Go", "Fiber", "PostgreSQL", "Next.js", "Zustand"],
      description:
        "Internal control system for a bar in operation: records sales, tracks stock and expiry, manages the register, tabs, loyalty, suppliers and targets, and generates reports.",
      role: "Full stack development: Go API and Next.js web application.",
      highlights: [
        "The POS keeps selling with no network: an offline queue in Zustand accumulates operations and syncs when the connection returns — in a busy bar, losing internet can't stop the register.",
        "27 versioned SQL migrations embedded in the Go binary itself, so shipping a new version has no manual schema step.",
        "TypeScript in strict mode, zero `any` on the frontend, and the API returns a translated label next to each enum code — the contract stays stable and the UI stays in Portuguese.",
      ],
      metrics: [
        { value: "~140", label: "endpoints" },
        { value: "356", label: "Go tests" },
        { value: "87k", label: "lines" },
      ],
    },
    {
      slug: "vitrine",
      title: "Vitrine",
      subtitle: "Multi-store marketplace with transactional checkout",
      ref: "PRJ / 03",
      status: "In production",
      year: "2026",
      category: "fullstack",
      image: "vitrine",
      link: null,
      repo: null,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Next.js"],
      description:
        "A marketplace where multiple stores sell products by category. It covers the full purchase cycle: public storefront, cart with stock validation, staged checkout, payment, order tracking, reviews and admin operations.",
      role: "Full stack development: Java/Spring Boot REST API and Next.js web application.",
      highlights: [
        "Transactional checkout: computes the total, decrements stock item by item, freezes the purchase price and creates the payment — insufficient stock on any item rolls the whole operation back.",
        "Two-level authorization, by route and by data: a customer only ever sees their own orders, and that decision lives in the service where the query is built, not in a filter afterwards.",
        "Payment → order cascade: approved, the order advances; refused or cancelled, the order fails and the stock goes back on the shelf.",
      ],
      metrics: [
        { value: "2", label: "access profiles" },
        { value: "100%", label: "versioned schema" },
        { value: "4", label: "payment methods" },
      ],
    },
    {
      slug: "studio",
      title: "Stud.io",
      subtitle: "AI-assisted study platform",
      ref: "PRJ / 04",
      status: "In progress",
      year: "2026",
      category: "platform",
      image: "studio",
      link: null,
      repo: null,
      tags: ["NestJS", "pgvector", "Redis · BullMQ", "Next.js", "Monorepo"],
      description:
        "Not “AI that writes quiz questions”: an intellectual training environment with reusable AI teachers, persistent study rooms, an evidence-backed debate engine and a gamified arena.",
      role: "Architecture and full stack development, from the API contract to the interface.",
      highlights: [
        "A RAG pipeline of its own: a PDF comes in and becomes text, pages, chunks and embeddings in pgvector — the material becomes searchable and, more importantly, citable in the answer.",
        "A modular monolith with boundaries verified in CI: it allows extracting services later without paying the operational cost of microservices today.",
        "The architecture was defined before the code — 32 ADRs plus versioned API and WebSocket contracts as the source of truth between backend and frontend.",
      ],
      metrics: [
        { value: "32", label: "ADRs" },
        { value: "3", label: "shared packages" },
        { value: "v1", label: "versioned contracts" },
      ],
    },
    {
      slug: "conectando-leitores",
      title: "Conectando Leitores",
      subtitle: "Digital library with an in-browser EPUB reader",
      ref: "PRJ / 05",
      status: "Completed",
      year: "2026",
      category: "fullstack",
      image: "conectando-leitores",
      link: "https://conectandoleitores.netlify.app",
      repo: null,
      tags: ["NestJS", "MongoDB", "Next.js 16", "EPUB", "Firebase"],
      description:
        "An online library where readers favorite, read and submit titles, and admins manage the collection and users through a dedicated panel.",
      role: "Full stack development: NestJS API and Next.js reading application.",
      highlights: [
        "An EPUB reader running in the browser via epub.js, with reading progress preserved per user.",
        "A publishing pipeline on the backend: text extraction from PDF and EPUB generation, so a title can arrive in either format.",
        "JWT with Passport, global rate limiting via Throttler, and Swagger documentation served by the API itself.",
      ],
      metrics: [
        { value: "2", label: "access profiles" },
        { value: "2", label: "title formats" },
        { value: "100%", label: "documented API" },
      ],
    },
    {
      slug: "educagil",
      title: "Educagil",
      subtitle: "Online teaching platform",
      ref: "PRJ / 06",
      status: "In progress",
      year: "2026",
      category: "fullstack",
      image: "educagil",
      link: "https://testeducaagil.netlify.app",
      repo: null,
      tags: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript"],
      description:
        "A teaching platform with separate areas for students and teachers: courses, enrollments, progress, assessments and certificates, with role-based access control.",
      role: "Go API and Next.js interface, aligned with the “Teacher View” and “Student View” squads.",
      highlights: [
        "JWT HS256 authentication with a rotated refresh token — the session renews without re-exposing credentials.",
        "Migrations with goose embedded in the binary and UUID v4 identifiers, keeping deploys reproducible.",
        "Reusable, modular components designed from the needs each squad mapped out.",
      ],
      metrics: [
        { value: "2", label: "access profiles" },
        { value: "5", label: "domains" },
        { value: "Go 1.26", label: "runtime" },
      ],
    },
    {
      slug: "belle-rose-maison",
      title: "Belle Rose Maison",
      subtitle: "Florist catalog with WhatsApp ordering",
      ref: "PRJ / 07",
      status: "Completed",
      year: "2026",
      category: "frontend",
      image: "belle-rose",
      link: null,
      repo: null,
      tags: ["Next.js", "TypeScript", "Tailwind", "SOLID"],
      description:
        "A responsive landing page and catalog with favorites and a cart, where the finished order becomes a ready-to-send WhatsApp message — no payment gateway, no friction for the end customer.",
      role: "Complete front-end development, from the supplied design to delivery.",
      highlights: [
        "Cart and favorites never talk to localStorage directly: they depend on a `KeyValueStorage` interface, so swapping the persistence backend doesn't touch the contexts.",
        "WhatsApp messages come from formatters (`SingleProductInquiryFormatter`, `CartOrderFormatter`) that gain new variations without changing their callers.",
        "Single-responsibility components and small, specific types instead of generic props accumulating responsibility.",
      ],
      metrics: [
        { value: "100%", label: "responsive" },
        { value: "0", label: "state dependencies" },
        { value: "SOLID", label: "applied to components" },
      ],
    },
  ],
};
