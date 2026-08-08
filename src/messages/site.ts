export type Locale = "pt" | "en";

export type SiteMessages = {
  brand: {
    legalName: string;
    slogan: string;
  };
  nav: {
    cta: string;
    openMenu: string;
    closeMenu: string;
    items: Record<
      "inicio" | "servicos" | "sobre" | "projetos" | "contacto",
      { label: string; hoverTitle: string; hoverDesc: string }
    >;
    langSwitcher: string;
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    badge: string;
    /** Frase por slide do hero (Ideia → Design → Dev → Resultado) */
    slides: { caption: string }[];
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { k: string; v: string }[];
    requestModal: {
      title: string;
      subtitle: string;
      close: string;
      submit: string;
      submittedTitle: string;
      submittedBody: string;
      linkToContact: string;
      name: string;
      email: string;
      phone: string;
      company: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      serviceOptions: { value: string; label: string }[];
    };
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: { key: string; title: string; desc: string }[];
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    visionLead: string;
    visionRest: string;
    techLead: string;
    techNote: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: { key: string; slug?: string; title: string; tag: string; desc: string }[];
    detailIntroBackToProjects: string;
    detailCtaContact: string;
    detailNotFound: string;
    detailPages: Record<
      string,
      {
        eyebrow: string;
        paragraphs: string[];
        bullets?: string[];
      }
    >;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    directLead: string;
    directName: string;
    directPhone: string;
    directEmail: string;
    responseLead: string;
    responseValue: string;
    name: string;
    email: string;
    message: string;
    placeholders: { name: string; email: string; message: string };
    submit: string;
    submitted: string;
    thanks: string;
    formTitle: string;
    formHint: string;
    whatsappLabel: string;
  };
  footer: {
    links: Record<"servicos" | "sobre" | "contacto", string>;
    rights: string;
  };
};

export const siteMessages: Record<Locale, SiteMessages> = {
  pt: {
    brand: {
      legalName: "Creative Tech",
      slogan: "Construído com qualidade, feito para ti.",
    },
    nav: {
      cta: "Fale connosco",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      langSwitcher: "Idioma",
      themeToLight: "Ativar modo claro",
      themeToDark: "Ativar modo escuro",
      items: {
        inicio: {
          label: "Início",
          hoverTitle: "Visão geral",
          hoverDesc:
            "",
        },
        servicos: {
          label: "Serviços",
          hoverTitle: "O que entregamos",
          hoverDesc:
            "Websites, sistemas e aplicações, design gráfico e infraestrutura — tudo falado sem complicar.",
        },
        sobre: {
          label: "Sobre",
          hoverTitle: "Quem somos",
          hoverDesc:
            "Posicionamento da marca, visão e stack típico. Transparência gera confiança.",
        },
        projetos: {
          label: "Projetos",
          hoverTitle: "Trabalhos em destaque",
          hoverDesc:
            "Secção para cases reais: aqui podes mostrar impacto, stacks e resultados.",
        },
        contacto: {
          label: "Contacto",
          hoverTitle: "Falar contigo",
          hoverDesc:
            "Formulário e expectativas de resposta. Ponto de conversão do site.",
        },
      },
    },
    hero: {
      badge: "Desenvolvimento digital, design de marca e infraestrutura",
      slides: [
        { caption: "Criamos soluções digitais sob medida" },
        { caption: "Design profissional e marca com identidade forte" },
        { caption: "Ferramentas digitais fiáveis ao serviço do negócio" },
        { caption: "Do briefing à entrega, com comunicação simples" },
      ],
      titleBefore: "Produtos tecnológicos com aparência e performance de",
      titleAccent: "nível mundial.",
      subtitle:
        "Desenvolvemos produtos digitais — sites, apps e software à medida (incluindo sistemas internos) — e damos apoio em design gráfico e redes. Explicamos com clareza para perceberes bem o alcance antes de avançares.",
      primaryCta: "Solicitar proposta",
      secondaryCta: "Ver serviços",
      requestModal: {
        title: "Solicitar proposta",
        subtitle: "Descreve o que precisas — respondemos por e-mail o mais breve possível.",
        close: "Fechar",
        submit: "Enviar pedido",
        submittedTitle: "Pedido registado",
        submittedBody:
          "Obrigado. Este formulário está pronto para ser ligado ao teu e-mail ou CRM — tratamos cada pedido como confidencial.",
        linkToContact: "Ou contactar na secção de contacto →",
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        company: "Empresa (opcional)",
        service: "Serviço pretendido",
        servicePlaceholder: "Escolher serviço…",
        message: "Mensagem / contexto",
        serviceOptions: [
          { value: "web-systems", label: "Desenvolvimento web & sistemas" },
          { value: "applications", label: "Desenvolvimento de aplicações" },
          { value: "design-branding", label: "Design gráfico & branding" },
          { value: "infrastructure", label: "Infraestrutura & redes" },
        ],
      },
      stats: [
        { k: "Produtos digitais", v: "Sites, apps e software à medida" },
        { k: "Design", v: "Marca e peças gráficas" },
        { k: "Infraestrutura", v: "Redes e suporte técnico" },
      ],
    },
    services: {
      kicker: "Serviços",
      title: "O que construímos contigo",
      subtitle:
        "Quatro frentes que se encaixam: web e sistemas relacionados, aplicações, identidade gráfica e infraestrutura de rede — cada uma com uma descrição objetiva.",
      items: [
        {
          key: "web",
          title: "Desenvolvimento Web & Sistemas",
          desc: "Websites, plataformas e sistemas modernos desenvolvidos para empresas e negócios.",
        },
        {
          key: "apps",
          title: "Desenvolvimento de Aplicações",
          desc: "Aplicações web e mobile rápidas, modernas e intuitivas.",
        },
        {
          key: "design",
          title: "Design Gráfico & Branding",
          desc: "Identidade visual e materiais gráficos criados para fortalecer marcas.",
        },
        {
          key: "infra",
          title: "Infraestrutura & Redes",
          desc: "Soluções de conectividade, redes e suporte tecnológico para empresas.",
        },
      ],
    },
    about: {
      kicker: "Sobre",
      title: "Engenharia informática aplicada ao negócio",
      p1: "Na Creative Tech acompanhamos o teu negócio no digital de ponta a ponta: produtos feitos à medida (sites, apps e software — por vezes chamados “sistemas” quando servem equipas internas), design gráfico para a marca e infraestrutura de redes. O que nos importa é o resultado visível e útil no dia a dia.",
      visionLead: "Visão:",
      visionRest:
        "ser a equipa que as empresas procuram quando querem tecnologia bem feita, explicações simples e entregas em que podem confiar.",
      techLead: "Tecnologias típicas",
      techNote:
        "Escolhemos ferramentas adequadas a cada projeto — o que não muda é o compromisso com qualidade, clareza e soluções fáceis de manter.",
    },
    projects: {
      kicker: "Projetos",
      title: "Destaques a mostrar ao mundo",
      subtitle:
        "Secção preparada para portfolios reais — por agora são placeholders elegantes até adicionares os teus trabalhos.",
      cards: [
        {
          key: "saas",
          title: "Plataforma SaaS",
          tag: "Em breve",
          desc: "Casos com produtos digitais, sistemas e impacto no dia a dia do negócio.",
        },
        {
          key: "brand",
          slug: "app-marca-digital",
          title: "App & marca digital",
          tag: "Galeria",
          desc: "Site institucional, identidade consistente no produto.",
        },
        {
          key: "infra",
          slug: "infraestrutura-redes",
          title: "Infraestrutura & redes",
          tag: "Empresas",
          desc: "Conectividade, redes e suporte tecnológico para operações do dia a dia.",
        },
      ],
      detailIntroBackToProjects: "Voltar aos projetos",
      detailCtaContact: "Falar sobre este projeto",
      detailNotFound: "Esta página de projeto não existe.",
      detailPages: {
        "app-marca-digital": {
          eyebrow: "App & marca digital",
          paragraphs: [
            "Unimos presença online e produto: sites institucionais, landing pages e superfícies na aplicação que falam a mesma língua visual e de tom.",
            "Trabalhamos com identidade aplicada (tipografia, cores, espaçamentos) para que cada ecrã reforce confiança e pareça pensado nos detalhes — como marcas tecnológicas de referência costumam fazer.",
            "Queres evoluir o site, alinhar o aspeto do produto à marca ou preparar materiais consistentes para lançamentos? Esta linha cobre esse tipo de projeto.",
          ],
          bullets: [
            "Sites e áreas institucionais responsivas e rápidas",
            "Aspeto visual alinhado com guidelines de marca ou guia inicial de identidade",
            "Handoff claro entre design e código (estrutura, componentes)",
          ],
        },
        "infraestrutura-redes": {
          eyebrow: "Infraestrutura & redes",
          paragraphs: [
            "Muitas empresas precisam mais do que um site ou uma app: precisam de rede estável, boa ligação à internet, equipamentos bem configurados e alguém que resolva quando algo falha.",
            "Apoiamos em projectos de conectividade, estrutura de rede interna, Wi‑Fi para escritórios ou lojas e boas práticas de segurança básica — sempre alinhado ao tamanho e à realidade do negócio.",
            "Se o teu desafio é garantir a operação do dia a dia (comunicações, acesso remoto, suporte pontual a equipas), esta linha de trabalho cobre esse tipo de necessidade.",
          ],
          bullets: [
            "Planeamento e melhoria de redes internas e Wi‑Fi",
            "Conectividade e continuidade para equipas e instalações",
            "Suporte tecnológico orientado a negócios, sem jargão desnecessário",
          ],
        },
      },
    },
    contact: {
      kicker: "Contacto",
      title: "Vamos dar o próximo passo",
      intro:
        "Orçamento, parceria ou dúvidas sobre o teu produto digital — responde por aqui, por telefone ou e-mail. Tratamos os dados com cuidado.",
      directLead: "Contacto direto",
      directName: "Dinis Filimone Júnior",
      directPhone: "+258 84 680 4381",
      directEmail: "Dinisfilimonejunior@gmail.com",
      responseLead: "Tempo de resposta",
      responseValue: "Habitualmente em até 48 horas úteis",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      placeholders: {
        name: "O teu nome ou empresa",
        email: "teuemail@email.com",
        message: "Conta um pouco do objetivo ou do que precisas…",
      },
      submit: "Enviar mensagem",
      submitted: "Mensagem registada",
      thanks:
        "Obrigado — modelo pronto para ligar ao teu backend ou serviço de e-mail.",
      formTitle: "Enviar mensagem",
      formHint:
        "Descreve o projeto ou dúvida — respondemos por e-mail o mais breve possível.",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      links: {
        servicos: "Serviços",
        sobre: "Sobre",
        contacto: "Contacto",
      },
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    brand: {
      legalName: "Creative Tech",
      slogan: "Built with quality, made for you.",
    },
    nav: {
      cta: "Talk to us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langSwitcher: "Language",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      items: {
        inicio: {
          label: "Home",
          hoverTitle: "Overview",
          hoverDesc:
            "Main message, value proposition and first actions to help visitors engage immediately.",
        },
        servicos: {
          label: "Services",
          hoverTitle: "What we ship",
          hoverDesc:
            "Websites, systems, apps, graphic design and infrastructure — explained in plain language.",
        },
        sobre: {
          label: "About",
          hoverTitle: "Who we are",
          hoverDesc:
            "Brand positioning, vision and typical stack. Clarity earns trust.",
        },
        projetos: {
          label: "Work",
          hoverTitle: "Highlighted projects",
          hoverDesc:
            "Room for real case studies — impact, stack and outcomes in one glance.",
        },
        contacto: {
          label: "Contact",
          hoverTitle: "Start a conversation",
          hoverDesc:
            "Lead form plus response expectations. The site’s conversion point.",
        },
      },
    },
    hero: {
      badge: "Digital development, brand design & infrastructure",
      slides: [
        { caption: "We build tailored digital solutions" },
        { caption: "Professional design and a strong brand look" },
        { caption: "Dependable digital tools for real-world operations" },
        { caption: "From brief to delivery — clear, simple communication" },
      ],
      titleBefore: "Technology built to look and perform at a",
      titleAccent: "world-class level.",
      subtitle:
        "We ship digital products — websites, apps and custom software (including internal systems) — plus brand design and networking support. We explain scope clearly before you commit.",
      primaryCta: "Request proposal",
      secondaryCta: "View services",
      requestModal: {
        title: "Request proposal",
        subtitle: "Tell us what you need — we'll reply by email as soon as we can.",
        close: "Close",
        submit: "Send request",
        submittedTitle: "Request received",
        submittedBody:
          "Thank you — this form is ready to wire to email or CRM. We treat each request confidentially.",
        linkToContact: "Or go to contact section →",
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company (optional)",
        service: "Service interested in",
        servicePlaceholder: "Select a service…",
        message: "Message / context",
        serviceOptions: [
          { value: "web-systems", label: "Web & systems development" },
          { value: "applications", label: "Application development" },
          { value: "design-branding", label: "Graphic design & branding" },
          { value: "infrastructure", label: "Infrastructure & networks" },
        ],
      },
      stats: [
        { k: "Digital products", v: "Sites, apps & custom software" },
        { k: "Design", v: "Brand & graphic work" },
        { k: "Infrastructure", v: "Networks & IT support" },
      ],
    },
    services: {
      kicker: "Services",
      title: "What we build with you",
      subtitle:
        "Four complementary tracks: web and related platforms, apps, graphic identity and network infrastructure — each summed up in plain language.",
      items: [
        {
          key: "web",
          title: "Web & systems development",
          desc: "Websites, platforms and modern systems built for companies and growing businesses.",
        },
        {
          key: "apps",
          title: "Application development",
          desc: "Fast, modern and intuitive web and mobile applications.",
        },
        {
          key: "design",
          title: "Graphic design & branding",
          desc: "Visual identity and graphic materials that strengthen brands.",
        },
        {
          key: "infra",
          title: "Infrastructure & networks",
          desc: "Connectivity, networking and technology support for organizations.",
        },
      ],
    },
    about: {
      kicker: "About",
      title: "Computer engineering applied to business",
      p1: "At Creative Tech we guide businesses end to end digitally: bespoke products (websites, apps and software — people often say “systems” when those tools support internal teams), brand graphic design and network infrastructure. We care about outcomes you can actually see teams use day to day.",
      visionLead: "Vision:",
      visionRest:
        "be the team businesses turn to for well-built technology, jargon-free explanations and deliveries they can rely on.",
      techLead: "Typical tech",
      techNote:
        "We pick tools that fit each project — what stays constant is craft, clarity and solutions that are practical to operate.",
    },
    projects: {
      kicker: "Projects",
      title: "Work worth showing",
      subtitle:
        "Ready for real portfolio pieces — for now these elegant placeholders await your shipments.",
      cards: [
        {
          key: "saas",
          title: "SaaS platform",
          tag: "Soon",
          desc: "Case studies with digital products, systems and day-to-day business impact.",
        },
        {
          key: "brand",
          slug: "app-marca-digital",
          title: "App & digital brand",
          tag: "Gallery",
          desc: "Corporate sites with identity carried through the product.",
        },
        {
          key: "infra",
          slug: "infraestrutura-redes",
          title: "Infrastructure & networks",
          tag: "Business",
          desc: "Connectivity, networks and technology support for daily operations.",
        },
      ],
      detailIntroBackToProjects: "Back to projects",
      detailCtaContact: "Talk about this project",
      detailNotFound: "This project page does not exist.",
      detailPages: {
        "app-marca-digital": {
          eyebrow: "App & digital brand",
          paragraphs: [
            "We tie together your web presence and product: institutional sites, landing pages, and in-app surfaces that share the same visual language and tone.",
            "We translate brand cues (typography, color, spacing) into layouts that feel cohesive and deliberate — closer to how best-in-class tech companies present themselves.",
            "Whether you’re refreshing a marketing site, aligning product UI with brand, or preparing consistent launch surfaces, this track covers that work.",
          ],
          bullets: [
            "Fast, responsive institutional and marketing pages",
            "Visual design aligned with brand guidelines or an early identity guide",
            "Clear handoff between design and engineering (structure, components)",
          ],
        },
        "infraestrutura-redes": {
          eyebrow: "Infrastructure & networks",
          paragraphs: [
            "Many companies need more than a website or an app: they need stable networking, solid internet access, properly set up hardware, and someone who shows up when things break.",
            "We help with connectivity projects, internal network structure, office or retail Wi‑Fi, and sensible baseline security — always matched to the size and reality of the business.",
            "If your challenge is keeping day-to-day operations running (communications, remote access, occasional team support), this track covers that kind of work.",
          ],
          bullets: [
            "Planning and improving internal networks and Wi‑Fi",
            "Connectivity and continuity for teams and facilities",
            "Business-oriented technology support without unnecessary jargon",
          ],
        },
      },
    },
    contact: {
      kicker: "Contact",
      title: "Let’s move forward",
      intro:
        "Quotes, partnerships, or questions about your product — use the form, phone, or email. We handle your details responsibly.",
      directLead: "Direct contact",
      directName: "Dinis Filimone Júnior",
      directPhone: "+258 84 680 4381",
      directEmail: "Dinisfilimonejunior@gmail.com",
      responseLead: "Response time",
      responseValue: "Usually within two business days",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholders: {
        name: "Your name or company",
        email: "you@company.com",
        message: "Share the goal or what you need…",
      },
      submit: "Send message",
      submitted: "Message saved",
      thanks:
        "Thanks — ready to connect to your backend or transactional email.",
      formTitle: "Send a message",
      formHint: "Describe your project or question — we’ll reply by email as soon as we can.",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      links: {
        servicos: "Services",
        sobre: "About",
        contacto: "Contact",
      },
      rights: "All rights reserved.",
    },
  },
};

export const STORAGE_KEY = "technova-locale";
