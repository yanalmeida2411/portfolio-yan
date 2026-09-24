import type { ProjectImageKey } from "./images";

export type Lang = "pt" | "en";

export type ProjectCategory = "fullstack" | "frontend" | "website";

export type ProjectSlug =
  | "cineville"
  | "muquiranas"
  | "vitrine"
  | "studio"
  | "conectando-leitores"
  | "educagil"
  | "auraweb"
  | "belle-rose-maison";

export type Metric = {
  value: string;
  label: string;
};

export type RepoLink = {
  label: string;
  url: string;
};

export type Project = {
  /** identificador estável — usado em âncoras (#projeto-slug) e chaves de lista */
  slug: ProjectSlug;
  title: string;
  /** posicionamento em uma linha, lido antes da descrição */
  subtitle: string;
  status: string;
  year: string;
  category: ProjectCategory;
  image: ProjectImageKey;
  /** deploy em produção; `null` esconde o botão */
  link: string | null;
  /** repositórios públicos; vazio quando o código é privado */
  repos: RepoLink[];
  tags: string[];
  description: string;
  /** o problema, dito do ponto de vista de quem usa */
  problem: string;
  features: string[];
  /** o que eu fiz, não o que o time fez */
  role: string;
  /** time, empresa ou programa em que o projeto foi feito, quando houver */
  context?: string;
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

const gh = (repo: string) => `${LINKS.github}/${repo}`;

export const CATEGORY_LABELS: Record<Lang, Record<ProjectCategory, string>> = {
  pt: { fullstack: "Full stack", frontend: "Front-end", website: "Desenvolvimento web" },
  en: { fullstack: "Full stack", frontend: "Front-end", website: "Web development" },
};

export const COPY = {
  pt: {
    skipToContent: "Pular para o conteúdo",
    navProjects: "Projetos",
    navStack: "Stack",
    navAbout: "Sobre",
    navProcess: "Processo",
    navContact: "Contato",
    navCta: "Fale comigo",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    available: "Disponível para vagas CLT ou PJ",
    role: "Desenvolvedor Full Stack",
    location: "Brasil, remoto",
    heroLead: "Construo aplicações web do banco de dados à interface.",
    heroBody:
      "Interfaces em React e Next.js sobre APIs em Go, Java e NestJS. Oito projetos estão no ar agora, a maioria com código aberto para você avaliar.",
    seeProjects: "Ver projetos",
    contactCta: "Entrar em contato",
    downloadCv: "Currículo no LinkedIn",
    sceneLabel:
      "Ilustração 3D: três camadas empilhadas — interface, API e dados — ligadas por requisições que sobem e descem entre elas.",
    layerUi: "Interface",
    layerApi: "API",
    layerData: "Dados",

    projectsTitle: "Projetos em produção",
    projectsLead:
      "Oito projetos publicados. Abra qualquer uma no navegador, ou leia o case para ver o problema, as decisões técnicas e o meu papel.",
    featured: "Destaque",
    visit: "Visitar aplicação",
    caseStudy: "Ler o case",
    close: "Fechar",
    prevProject: "Projeto anterior",
    nextProject: "Próximo projeto",
    problemLabel: "O problema",
    featuresLabel: "O que faz",
    roleLabel: "Meu papel",
    contextLabel: "Contexto",
    decisionsLabel: "Decisões técnicas",
    stackLabel: "Tecnologias",
    codeLabel: "Código",
    privateRepo: "Repositório privado",
    opensNewTab: "(abre em nova aba)",
    viewCase: "Ver case",
    scrollHint: "Role para explorar",
    stackHint: "Passe o mouse sobre uma tecnologia para ver em quais projetos ela está.",
    stackIn: "Usado em",

    stackTitle: "Stack",
    stackLead:
      "Só entra aqui o que está em pelo menos um projeto publicado. Cada marca mostra onde a tecnologia foi usada.",
    stackUsed: "usado",
    stackTableLabel: "Tabela de tecnologias por projeto",
    stackNotUsed: "não usado",
    stackCount: (n: number) => (n === 1 ? "1 projeto" : `${n} projetos`),
    stackAlso: "Fora desses projetos, usei MySQL, Redux e Python na graduação.",

    aboutTitle: "Sobre",
    aboutLead:
      "Desenvolvedor full stack. Trabalho do banco de dados à interface, e escrevo o código pensando em quem vai mantê-lo depois.",
    aboutP1:
      "Nos últimos projetos escrevi APIs em Go, Java e NestJS, e interfaces em Next.js e React. Isso inclui um PDV rodando em um bar real, um marketplace com checkout transacional e uma plataforma de estudos com RAG sobre pgvector.",
    aboutP2:
      "O que me interessa não é acumular frameworks: é entender por que cada decisão foi tomada. Por isso documento arquitetura antes de codar, cubro o que importa com teste e prefiro uma fronteira explícita a uma abstração esperta.",
    aboutP3:
      "Procuro um time onde eu possa entregar features de ponta a ponta, revisar código com gente mais experiente e evoluir rápido.",
    photoAlt: "Retrato de Yan Monteiro",
    trajectoryTitle: "Trajetória",
    trajectory: [
      {
        kind: "Experiência",
        title: "Desenvolvedor Full Stack, estágio",
        org: "QA Coders",
        detail: "API em NestJS e MongoDB e interface em Next.js no Conectando Leitores.",
      },
      {
        kind: "Experiência",
        title: "Desenvolvedor Full Stack, voluntário",
        org: "Metis",
        detail: "Entrei no front-end do Educagil e depois assumi o full stack: API em Go e interface em Next.js.",
      },
      {
        kind: "Formação",
        title: "Análise e Desenvolvimento de Sistemas",
        org: "Estácio",
        detail: "Graduação.",
      },
      {
        kind: "Formação",
        title: "Inglês, formação completa",
        org: "CCAA",
        detail: "Leitura, escrita e conversação.",
      },
    ],

    processTitle: "Como eu trabalho",
    processLead: "O mesmo caminho em todo projeto, com o exemplo de onde ele aparece.",
    process: [
      {
        title: "Desenhar antes de codar",
        body: "Fluxos, contratos de API e decisões de arquitetura ficam registrados antes da primeira linha.",
        proof: "Stud.io: 32 ADRs e contratos de API e WebSocket versionados.",
      },
      {
        title: "Fronteiras explícitas",
        body: "Cada módulo com a mesma estrutura e uma responsabilidade clara, para o próximo ser previsível.",
        proof: "Cineville: 17 módulos de domínio com a mesma anatomia.",
      },
      {
        title: "Testar o que quebra caro",
        body: "Teste onde o erro custa dinheiro ou confiança: checkout, caixa, autenticação.",
        proof: "Muquiranas: 356 testes em Go cobrindo o PDV.",
      },
      {
        title: "Entregar sem passo manual",
        body: "Docker, migrations embutidas e CI rodando lint, tipos, testes e build a cada push.",
        proof: "Cineville: deploy automático depois do merge em main.",
      },
    ],

    contactTitle: "Contato",
    contactBody:
      "Aberto a vagas de desenvolvedor full stack, júnior ou pleno. Respondo em até 24 horas.",
    fName: "Nome",
    fEmail: "E-mail",
    fMessage: "Mensagem",
    send: "Enviar mensagem",
    rights: "Todos os direitos reservados",
    builtWith: "Feito com Next.js, TypeScript, Tailwind e Three.js",
    labelEmail: "E-mail",
    labelSite: "Site",
    themeToggle: "Alternar tema",
    langLabel: "Idioma",
  },
  en: {
    skipToContent: "Skip to content",
    navProjects: "Work",
    navStack: "Stack",
    navAbout: "About",
    navProcess: "Process",
    navContact: "Contact",
    navCta: "Get in touch",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    available: "Open to full-time or contract roles",
    role: "Full Stack Developer",
    location: "Brazil, remote",
    heroLead: "I build web applications from the database up to the interface.",
    heroBody:
      "React and Next.js interfaces on top of Go, Java and NestJS APIs. Eight projects are live right now, most with the code open for you to review.",
    seeProjects: "See the work",
    contactCta: "Get in touch",
    downloadCv: "Résumé on LinkedIn",
    sceneLabel:
      "3D illustration: three stacked layers — interface, API and data — connected by requests travelling up and down between them.",
    layerUi: "Interface",
    layerApi: "API",
    layerData: "Data",

    projectsTitle: "Live projects",
    projectsLead:
      "Eight deployed projects. Open any of them in your browser, or read the case study for the problem, the technical decisions and my role.",
    featured: "Featured",
    visit: "Visit the app",
    caseStudy: "Read the case study",
    close: "Close",
    prevProject: "Previous project",
    nextProject: "Next project",
    problemLabel: "The problem",
    featuresLabel: "What it does",
    roleLabel: "My role",
    contextLabel: "Context",
    decisionsLabel: "Technical decisions",
    stackLabel: "Technologies",
    codeLabel: "Code",
    privateRepo: "Private repository",
    opensNewTab: "(opens in a new tab)",
    viewCase: "View case",
    scrollHint: "Scroll to explore",
    stackHint: "Hover a technology to see which projects use it.",
    stackIn: "Used in",

    stackTitle: "Stack",
    stackLead:
      "Only what ships in at least one deployed project makes this list. Each mark shows where the technology was used.",
    stackUsed: "used",
    stackTableLabel: "Technologies by project table",
    stackNotUsed: "not used",
    stackCount: (n: number) => (n === 1 ? "1 project" : `${n} projects`),
    stackAlso: "Outside these projects, I've used MySQL, Redux and Python during my degree.",

    aboutTitle: "About",
    aboutLead:
      "Full stack developer. I work from the database up to the interface, and write code with the next maintainer in mind.",
    aboutP1:
      "Across recent projects I've written APIs in Go, Java and NestJS, and interfaces in Next.js and React. That includes a POS running in a real bar, a marketplace with a transactional checkout, and an AI study platform with RAG on pgvector.",
    aboutP2:
      "What interests me isn't collecting frameworks — it's understanding why each decision was made. So I document architecture before writing code, test what matters, and prefer an explicit boundary over a clever abstraction.",
    aboutP3:
      "Looking for a team where I can ship features end to end, review code with more experienced engineers and grow fast.",
    photoAlt: "Portrait of Yan Monteiro",
    trajectoryTitle: "Background",
    trajectory: [
      {
        kind: "Experience",
        title: "Full Stack Developer, internship",
        org: "QA Coders",
        detail: "NestJS and MongoDB API plus Next.js interface on Conectando Leitores.",
      },
      {
        kind: "Experience",
        title: "Full Stack Developer, volunteer",
        org: "Metis",
        detail: "Joined Educagil on the front end, then took over full stack: Go API and Next.js interface.",
      },
      {
        kind: "Education",
        title: "Systems Analysis and Development",
        org: "Estácio",
        detail: "Associate degree.",
      },
      {
        kind: "Education",
        title: "English, full program",
        org: "CCAA",
        detail: "Reading, writing and conversation.",
      },
    ],

    processTitle: "How I work",
    processLead: "The same path on every project, with an example of where it shows.",
    process: [
      {
        title: "Design before code",
        body: "Flows, API contracts and architecture decisions are written down before the first line.",
        proof: "Stud.io: 32 ADRs plus versioned API and WebSocket contracts.",
      },
      {
        title: "Explicit boundaries",
        body: "Every module shares one structure and one clear job, so the next one is predictable.",
        proof: "Cineville: 17 domain modules with the same anatomy.",
      },
      {
        title: "Test what breaks expensively",
        body: "Tests go where a bug costs money or trust: checkout, the register, authentication.",
        proof: "Muquiranas: 356 Go tests covering the POS.",
      },
      {
        title: "Ship with no manual step",
        body: "Docker, embedded migrations and CI running lint, types, tests and build on every push.",
        proof: "Cineville: automatic deploy after merging to main.",
      },
    ],

    contactTitle: "Contact",
    contactBody:
      "Open to full stack developer roles, junior or mid-level. I reply within 24 hours.",
    fName: "Name",
    fEmail: "Email",
    fMessage: "Message",
    send: "Send message",
    rights: "All rights reserved",
    builtWith: "Built with Next.js, TypeScript, Tailwind and Three.js",
    labelEmail: "Email",
    labelSite: "Website",
    themeToggle: "Toggle theme",
    langLabel: "Language",
  },
};

export type Copy = (typeof COPY)["pt"];

/* ==========================================================================
   Stack
   Cada tecnologia aponta para os projetos que a usam — conferido nos
   package.json / go.mod / build.gradle e nos workflows de CI de cada repositório.
   ========================================================================== */

export type StackItem = { name: string; usedIn: ProjectSlug[] };
export type StackGroup = { key: "ui" | "server" | "data" | "delivery"; items: StackItem[] };

const ALL: ProjectSlug[] = [
  "cineville",
  "muquiranas",
  "vitrine",
  "studio",
  "conectando-leitores",
  "educagil",
  "auraweb",
  "belle-rose-maison",
];

export const STACK: StackGroup[] = [
  {
    key: "ui",
    items: [
      { name: "React", usedIn: ALL },
      { name: "Next.js", usedIn: ALL },
      { name: "TypeScript", usedIn: ALL },
      {
        name: "Tailwind CSS",
        usedIn: ALL,
      },
      { name: "Zod + React Hook Form", usedIn: ["muquiranas", "vitrine", "studio", "conectando-leitores"] },
      { name: "Zustand", usedIn: ["muquiranas", "vitrine", "educagil"] },
    ],
  },
  {
    key: "server",
    items: [
      { name: "NestJS (Node.js)", usedIn: ["cineville", "studio", "conectando-leitores"] },
      { name: "Go", usedIn: ["muquiranas", "educagil"] },
      { name: "Java + Spring Boot", usedIn: ["vitrine"] },
      { name: "WebSocket", usedIn: ["studio"] },
    ],
  },
  {
    key: "data",
    items: [
      { name: "PostgreSQL", usedIn: ["muquiranas", "vitrine", "studio", "educagil"] },
      { name: "MongoDB", usedIn: ["cineville", "conectando-leitores"] },
      { name: "Redis + BullMQ", usedIn: ["studio"] },
      { name: "Prisma / GORM", usedIn: ["muquiranas", "studio", "educagil"] },
    ],
  },
  {
    key: "delivery",
    items: [
      {
        name: "Docker",
        usedIn: ["cineville", "muquiranas", "studio", "conectando-leitores", "educagil"],
      },
      { name: "CI com GitHub Actions", usedIn: ["cineville", "studio", "conectando-leitores"] },
      {
        name: "Testes automatizados",
        usedIn: ["cineville", "muquiranas", "conectando-leitores", "educagil"],
      },
    ],
  },
];

export const STACK_GROUP_LABELS: Record<Lang, Record<StackGroup["key"], string>> = {
  pt: { ui: "Interface", server: "Servidor", data: "Dados", delivery: "Entrega" },
  en: { ui: "Interface", server: "Server", data: "Data", delivery: "Delivery" },
};

/** Nomes de tecnologia que mudam com o idioma. */
export const STACK_ITEM_LABELS: Record<Lang, Record<string, string>> = {
  pt: {},
  en: {
    "CI com GitHub Actions": "CI with GitHub Actions",
    "Testes automatizados": "Automated testing",
  },
};

/* ==========================================================================
   Projetos
   Conteúdo extraído da documentação técnica de cada repositório em
   `ProjetosPublicados/` e das próprias aplicações em produção.
   ========================================================================== */

const REPOS: Record<ProjectSlug, RepoLink[]> = {
  cineville: [
    { label: "Front-end", url: gh("smallville-front") },
    { label: "API", url: gh("smallville-back") },
  ],
  muquiranas: [
    { label: "Front-end", url: gh("muquiranas-front") },
    { label: "API", url: gh("muquiranas-back") },
  ],
  vitrine: [
    { label: "Front-end", url: gh("ecommerce-front") },
    { label: "API", url: gh("ecommerce-api") },
  ],
  studio: [
    { label: "Front-end", url: gh("studio-front") },
    { label: "API", url: gh("studio-back") },
  ],
  "conectando-leitores": [
    { label: "Front-end", url: gh("oraculo") },
    { label: "API", url: gh("oraculo-back") },
  ],
  educagil: [
    { label: "Front-end", url: gh("educagil-front") },
    { label: "API", url: gh("educagil-back") },
  ],
  auraweb: [],
  "belle-rose-maison": [],
};

const LIVE: Record<ProjectSlug, string> = {
  cineville: "https://cineville.netlify.app",
  muquiranas: "https://muquiranasbar.netlify.app",
  vitrine: "https://ecommerceonprod.netlify.app",
  studio: "https://learningstudiowithai.netlify.app",
  "conectando-leitores": "https://conectandoleitores.netlify.app",
  educagil: "https://educagil.netlify.app",
  auraweb: "https://theauraweb.netlify.app",
  "belle-rose-maison": "https://bellerosemaison.netlify.app",
};

export const PROJECTS: Record<Lang, Project[]> = {
  pt: [
    {
      slug: "cineville",
      title: "Cineville",
      subtitle: "Venda de ingressos de cinema, ponta a ponta",
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "cineville",
      link: LIVE.cineville,
      repos: REPOS.cineville,
      featured: true,
      tags: ["NestJS", "MongoDB", "Next.js 16", "React 19", "JWT", "Docker"],
      description:
        "Não uma tela de listagem de filmes: o fluxo inteiro, do “quero ver esse filme” até o QR Code validado na portaria. Área pública, área do cliente e dashboard administrativo para cinemas, filmes e sessões.",
      problem:
        "Vender ingresso online só funciona se a portaria consegue confirmar, na hora, que aquele ingresso é legítimo — e se o cliente consegue comprar filme e bomboniere num único fluxo.",
      features: [
        "Filmes em cartaz e lançamentos, com sessões, duração e classificação",
        "Compra de ingresso com bomboniere integrada e PIX com expiração de 15 minutos",
        "Ingresso em PDF com QR Code assinado",
        "Programa de fidelidade com crédito e estorno de pontos",
        "Dashboard administrativo de cinemas, filmes, sessões e relatórios",
      ],
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
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "muquiranas",
      link: LIVE.muquiranas,
      repos: REPOS.muquiranas,
      featured: true,
      tags: ["Go", "Fiber", "PostgreSQL", "Next.js", "Zustand"],
      description:
        "Sistema de controle interno para um bar em operação: registra vendas, controla estoque e validade, gerencia caixa, comandas, fidelidade, fornecedores, metas e gera relatórios.",
      problem:
        "Um bar em operação precisa de vendas, estoque e caixa no mesmo lugar — e o caixa não pode parar quando a internet cai no meio da noite.",
      features: [
        "PDV que continua vendendo sem conexão",
        "Estoque com controle de validade",
        "Caixa e comandas",
        "Fidelidade, fornecedores e metas",
        "Relatórios de vendas",
      ],
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
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "vitrine",
      link: LIVE.vitrine,
      repos: REPOS.vitrine,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Next.js"],
      description:
        "Marketplace em que várias lojas vendem produtos por categoria. Cobre o ciclo completo da compra: vitrine pública, carrinho com validação de estoque, checkout em etapas, pagamento, acompanhamento do pedido, avaliação e operação administrativa.",
      problem:
        "Com várias lojas vendendo no mesmo lugar, o checkout não pode vender o que já acabou nem deixar um pedido pela metade quando algo falha.",
      features: [
        "Vitrine pública com lojas e categorias",
        "Carrinho com validação de estoque",
        "Checkout em etapas com pagamento simulado",
        "Acompanhamento de pedido e avaliações",
        "Painel administrativo",
      ],
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
      status: "No ar, em evolução",
      year: "2026",
      category: "fullstack",
      image: "studio",
      link: LIVE.studio,
      repos: REPOS.studio,
      tags: ["NestJS", "pgvector", "Redis + BullMQ", "Next.js", "Monorepo"],
      description:
        "Não “IA que cria questões”: um ambiente de treinamento intelectual com professores de IA reutilizáveis, salas de estudo persistentes, motor de debates com evidências e arena gamificada.",
      problem:
        "Estudar com IA só é confiável quando a resposta vem do seu próprio material e diz de onde veio.",
      features: [
        "Upload de PDF indexado, com citação de página em cada resposta",
        "Professores de IA que ensinam a partir do seu material",
        "Quizzes e flashcards gerados do conteúdo",
        "Debates avaliados em nove dimensões, com detecção de falácias",
        "Acompanhamento de domínio por tópico",
      ],
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
      status: "Em produção",
      year: "2026",
      category: "fullstack",
      image: "conectando-leitores",
      link: LIVE["conectando-leitores"],
      repos: REPOS["conectando-leitores"],
      tags: ["NestJS", "MongoDB", "Next.js 16", "EPUB", "Firebase"],
      description:
        "Biblioteca online onde leitores favoritam, leem e cadastram obras, e administradores gerenciam acervo e usuários por um painel próprio.",
      problem:
        "Leitores querem descobrir e ler um livro no mesmo lugar, sem baixar arquivo; quem mantém o acervo precisa aceitar obras em mais de um formato.",
      features: [
        "Leitor de EPUB no navegador, com progresso salvo por usuário",
        "Ranking semanal e descoberta por categoria",
        "Favoritos e cadastro de obras em PDF ou EPUB",
        "Painel administrativo de acervo e usuários",
      ],
      role: "Desenvolvimento full stack: API em NestJS e aplicação de leitura em Next.js.",
      context: "Projeto de squad no estágio da QA Coders.",
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
      status: "Em evolução",
      year: "2026",
      category: "fullstack",
      image: "educagil",
      link: LIVE.educagil,
      repos: REPOS.educagil,
      tags: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript"],
      description:
        "Plataforma de ensino com áreas separadas para alunos e professores: cursos, matrículas, progresso, avaliações e certificados, com controle de acesso por papel.",
      problem:
        "Aluno e professor olham para o mesmo curso com necessidades diferentes — e cada um só pode ver e fazer o que o seu papel permite.",
      features: [
        "Áreas separadas para aluno e professor",
        "Cursos e matrículas",
        "Progresso e avaliações",
        "Emissão de certificados",
        "Controle de acesso por papel",
      ],
      role: "API em Go e interface em Next.js, alinhada com as squads “Visão do Professor” e “Visão do Aluno”.",
      context: "Projeto voluntário na Metis.",
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
      slug: "auraweb",
      title: "Auraweb",
      subtitle: "Sites e sistemas sob medida para pequenos negócios",
      status: "Em produção",
      year: "2026",
      category: "website",
      image: "auraweb",
      link: LIVE.auraweb,
      repos: REPOS.auraweb,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO"],
      description:
        "Site da Auraweb, que cria sites, landing pages, lojas virtuais e sistemas sob medida para pequenos e médios negócios e profissionais autônomos. A proposta cabe numa linha: fazer cada negócio ser encontrado, lembrado e procurado.",
      problem:
        "Pequeno negócio não compra tecnologia, compra ser encontrado. O site precisava explicar cinco serviços sem linguagem técnica e levar a pessoa direto para uma conversa.",
      features: [
        "Cinco serviços em painéis: site institucional, landing page, loja virtual, sistema sob medida e manutenção",
        "Processo em quatro etapas, da primeira conversa ao site no ar",
        "Contato direto pelo WhatsApp a partir de qualquer seção",
        "Vitrine de clientes, começando pela Belle Rose Maison",
        "Layout pensado primeiro para o celular",
      ],
      role: "Design de interface e desenvolvimento front-end, do conceito visual à publicação.",
      highlights: [
        "Uma metáfora conduz o site inteiro: a aura (halo, espaço, ponto de luz e encontro) vira a identidade visual, o anel 3D do hero e a narrativa da seção “Sobre”.",
        "Entradas por rolagem com IntersectionObserver e CSS, sem nenhuma biblioteca de animação no bundle.",
        "Metadados completos para busca e compartilhamento: title, description, Open Graph e Twitter Card com imagem gerada pelo próprio Next.js.",
      ],
      metrics: [
        { value: "5", label: "serviços" },
        { value: "4", label: "etapas de processo" },
        { value: "0", label: "libs de animação" },
      ],
    },
    {
      slug: "belle-rose-maison",
      title: "Belle Rose Maison",
      subtitle: "Catálogo de floricultura com pedido por WhatsApp",
      status: "Em produção",
      year: "2026",
      category: "frontend",
      image: "belle-rose",
      link: LIVE["belle-rose-maison"],
      repos: REPOS["belle-rose-maison"],
      tags: ["Next.js", "TypeScript", "Tailwind", "SOLID"],
      description:
        "Landing page e catálogo responsivos com favoritos e carrinho, onde o pedido fechado vira uma mensagem pronta no WhatsApp — sem gateway de pagamento e sem fricção para o cliente final.",
      problem:
        "Um ateliê de rosas precisava vender online sem a complexidade de um e-commerce: o cliente escolhe o buquê e o pedido chega pronto no WhatsApp.",
      features: [
        "Coleção de buquês em três tamanhos, com preço de partida",
        "Favoritos e carrinho",
        "Pedido enviado como mensagem pronta no WhatsApp",
        "Seções de encomendas e experiência de presente",
      ],
      role: "Desenvolvimento front-end completo, do design recebido à entrega.",
      highlights: [
        "Carrinho e favoritos não falam com o localStorage direto: dependem de uma interface `KeyValueStorage`, então trocar o backend de persistência não toca nos contexts.",
        "As mensagens de WhatsApp saem de formatters (`SingleProductInquiryFormatter`, `CartOrderFormatter`) que ganham variações novas sem alterar quem os chama.",
        "Componentes com responsabilidade única e tipos pequenos e específicos, em vez de props genéricas acumulando responsabilidade.",
      ],
      metrics: [
        { value: "100%", label: "responsivo" },
        { value: "3", label: "tamanhos de buquê" },
        { value: "0", label: "gateways de pagamento" },
      ],
    },
  ],

  en: [
    {
      slug: "cineville",
      title: "Cineville",
      subtitle: "End-to-end cinema ticketing",
      status: "Live",
      year: "2026",
      category: "fullstack",
      image: "cineville",
      link: LIVE.cineville,
      repos: REPOS.cineville,
      featured: true,
      tags: ["NestJS", "MongoDB", "Next.js 16", "React 19", "JWT", "Docker"],
      description:
        "Not a movie listing screen: the entire flow, from “I want to watch this” to the QR code validated at the door. Public area, customer area and an admin dashboard for cinemas, movies and showtimes.",
      problem:
        "Selling tickets online only works if the door staff can confirm on the spot that a ticket is genuine — and if customers can buy the movie and the snacks in one flow.",
      features: [
        "Now showing and upcoming releases, with showtimes, runtime and rating",
        "Ticket purchase with built-in concessions and PIX payments that expire in 15 minutes",
        "PDF ticket with a signed QR code",
        "Loyalty program with point credit and reversal",
        "Admin dashboard for cinemas, movies, showtimes and reports",
      ],
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
      status: "Live",
      year: "2026",
      category: "fullstack",
      image: "muquiranas",
      link: LIVE.muquiranas,
      repos: REPOS.muquiranas,
      featured: true,
      tags: ["Go", "Fiber", "PostgreSQL", "Next.js", "Zustand"],
      description:
        "Internal control system for a bar in operation: records sales, tracks stock and expiry, manages the register, tabs, loyalty, suppliers and targets, and generates reports.",
      problem:
        "A working bar needs sales, stock and the register in one place — and the register can't stop when the internet drops in the middle of the night.",
      features: [
        "POS that keeps selling with no connection",
        "Stock with expiry tracking",
        "Register and tabs",
        "Loyalty, suppliers and targets",
        "Sales reports",
      ],
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
      status: "Live",
      year: "2026",
      category: "fullstack",
      image: "vitrine",
      link: LIVE.vitrine,
      repos: REPOS.vitrine,
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Next.js"],
      description:
        "A marketplace where multiple stores sell products by category. It covers the full purchase cycle: public storefront, cart with stock validation, staged checkout, payment, order tracking, reviews and admin operations.",
      problem:
        "With many stores selling in one place, checkout can't sell what's already gone or leave an order half-done when something fails.",
      features: [
        "Public storefront with stores and categories",
        "Cart with stock validation",
        "Staged checkout with simulated payment",
        "Order tracking and reviews",
        "Admin panel",
      ],
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
      status: "Live, evolving",
      year: "2026",
      category: "fullstack",
      image: "studio",
      link: LIVE.studio,
      repos: REPOS.studio,
      tags: ["NestJS", "pgvector", "Redis + BullMQ", "Next.js", "Monorepo"],
      description:
        "Not “AI that writes quiz questions”: an intellectual training environment with reusable AI teachers, persistent study rooms, an evidence-backed debate engine and a gamified arena.",
      problem:
        "Studying with AI is only trustworthy when the answer comes from your own material and says where it came from.",
      features: [
        "PDF upload indexed so every answer cites its page",
        "AI teachers that teach from your material",
        "Quizzes and flashcards generated from the content",
        "Debates scored on nine dimensions, with fallacy detection",
        "Mastery tracking per topic",
      ],
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
      status: "Live",
      year: "2026",
      category: "fullstack",
      image: "conectando-leitores",
      link: LIVE["conectando-leitores"],
      repos: REPOS["conectando-leitores"],
      tags: ["NestJS", "MongoDB", "Next.js 16", "EPUB", "Firebase"],
      description:
        "An online library where readers favorite, read and submit titles, and admins manage the collection and users through a dedicated panel.",
      problem:
        "Readers want to discover and read a book in the same place without downloading files; whoever runs the collection needs to accept titles in more than one format.",
      features: [
        "In-browser EPUB reader with progress saved per user",
        "Weekly ranking and discovery by category",
        "Favorites and title submission as PDF or EPUB",
        "Admin panel for the collection and users",
      ],
      role: "Full stack development: NestJS API and Next.js reading application.",
      context: "Squad project during my internship at QA Coders.",
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
      status: "Evolving",
      year: "2026",
      category: "fullstack",
      image: "educagil",
      link: LIVE.educagil,
      repos: REPOS.educagil,
      tags: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript"],
      description:
        "A teaching platform with separate areas for students and teachers: courses, enrollments, progress, assessments and certificates, with role-based access control.",
      problem:
        "Students and teachers look at the same course with different needs — and each one can only see and do what their role allows.",
      features: [
        "Separate areas for students and teachers",
        "Courses and enrollments",
        "Progress and assessments",
        "Certificates",
        "Role-based access control",
      ],
      role: "Go API and Next.js interface, aligned with the “Teacher View” and “Student View” squads.",
      context: "Volunteer project at Metis.",
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
      slug: "auraweb",
      title: "Auraweb",
      subtitle: "Custom websites and systems for small businesses",
      status: "Live",
      year: "2026",
      category: "website",
      image: "auraweb",
      link: LIVE.auraweb,
      repos: REPOS.auraweb,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO"],
      description:
        "The website for Auraweb, which builds websites, landing pages, online stores and custom systems for small and mid-sized businesses and independent professionals. The pitch fits in one line: help every business be found, remembered and sought out.",
      problem:
        "A small business doesn't buy technology, it buys being found. The site had to explain five services without jargon and take the visitor straight to a conversation.",
      features: [
        "Five services in panels: institutional site, landing page, online store, custom system and maintenance",
        "A four-step process, from the first conversation to the site going live",
        "Direct WhatsApp contact from any section",
        "Client showcase, starting with Belle Rose Maison",
        "Mobile-first layout",
      ],
      role: "Interface design and front-end development, from visual concept to launch.",
      highlights: [
        "One metaphor drives the whole site: the aura (halo, space, point of light and encounter) becomes the visual identity, the 3D ring in the hero and the story of the “About” section.",
        "Scroll-in animations built with IntersectionObserver and CSS, with no animation library in the bundle.",
        "Complete metadata for search and sharing: title, description, Open Graph and Twitter Card with an image generated by Next.js itself.",
      ],
      metrics: [
        { value: "5", label: "services" },
        { value: "4", label: "process steps" },
        { value: "0", label: "animation libs" },
      ],
    },
    {
      slug: "belle-rose-maison",
      title: "Belle Rose Maison",
      subtitle: "Florist catalog with WhatsApp ordering",
      status: "Live",
      year: "2026",
      category: "frontend",
      image: "belle-rose",
      link: LIVE["belle-rose-maison"],
      repos: REPOS["belle-rose-maison"],
      tags: ["Next.js", "TypeScript", "Tailwind", "SOLID"],
      description:
        "A responsive landing page and catalog with favorites and a cart, where the finished order becomes a ready-to-send WhatsApp message — no payment gateway, no friction for the end customer.",
      problem:
        "A rose atelier needed to sell online without the weight of a full e-commerce: the customer picks a bouquet and the order arrives ready on WhatsApp.",
      features: [
        "Bouquet collection in three sizes, with starting prices",
        "Favorites and cart",
        "Order sent as a ready-made WhatsApp message",
        "Ordering and gift-experience sections",
      ],
      role: "Complete front-end development, from the supplied design to delivery.",
      highlights: [
        "Cart and favorites never talk to localStorage directly: they depend on a `KeyValueStorage` interface, so swapping the persistence backend doesn't touch the contexts.",
        "WhatsApp messages come from formatters (`SingleProductInquiryFormatter`, `CartOrderFormatter`) that gain new variations without changing their callers.",
        "Single-responsibility components and small, specific types instead of generic props accumulating responsibility.",
      ],
      metrics: [
        { value: "100%", label: "responsive" },
        { value: "3", label: "bouquet sizes" },
        { value: "0", label: "payment gateways" },
      ],
    },
  ],
};
