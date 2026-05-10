export type Locale = "pt" | "en";

export type SiteMessages = {
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
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { k: string; v: string }[];
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
    cards: { key: string; title: string; tag: string; desc: string }[];
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
  };
  footer: {
    links: Record<"servicos" | "sobre" | "contacto", string>;
    rights: string;
  };
};

export const siteMessages: Record<Locale, SiteMessages> = {
  pt: {
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
            "Mensagem principal, proposta de valor e primeiras acções para visitantes decidirem ficar.",
        },
        servicos: {
          label: "Serviços",
          hoverTitle: "O que entregamos",
          hoverDesc:
            "Web, apps, UI/UX e automação — o mesmo nível de acabamento em cada linha de oferta.",
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
      badge: "Soluções digitais e engenharia de software",
      titleBefore: "Produtos tecnológicos com aparência e performance de",
      titleAccent: "nível mundial.",
      subtitle:
        "Websites, apps e automação pensados para causar uma primeira impressão forte — mesmo quem não percebe de código reconhece qualidade quando vê.",
      primaryCta: "Começar um projeto",
      secondaryCta: "Ver serviços",
      stats: [
        { k: "Foco", v: "UX e performance" },
        { k: "Stack", v: "Next.js, React & modern web" },
        { k: "Entrega", v: "Arquitetura escalável" },
      ],
    },
    services: {
      kicker: "Serviços",
      title: "O que construímos contigo",
      subtitle:
        "Da presença online a produtos que precisam de escala — com o mesmo padrão de detalhe.",
      items: [
        {
          key: "web",
          title: "Websites",
          desc: "Sites rápidos, responsivos e preparados para SEO e conversão.",
        },
        {
          key: "apps",
          title: "Apps",
          desc: "Interfaces fluidas para web e mobile-ready, com código sustentável.",
        },
        {
          key: "ui",
          title: "UI / UX",
          desc: "Hierarquia visual, ritmo e detalhes que transmitem confiança.",
        },
        {
          key: "auto",
          title: "Automação",
          desc: "Menos trabalho repetitivo, mais consistência nos teus fluxos.",
        },
      ],
    },
    about: {
      kicker: "Sobre",
      title: "Engenharia informática aplicada ao negócio",
      p1: "A TechNova trata tecnologia como meio para resultados claros: marca séria na internet, sistemas estáveis e experiências que as pessoas querem usar.",
      visionLead: "Visão:",
      visionRest:
        "ser referência em software e interfaces que parecem desenhadas nos melhores estúdios — com código que aguenta crescimento.",
      techLead: "Tecnologias típicas",
      techNote:
        "O stack pode adaptar-se ao projeto — o que não muda é o nível de acabamento: responsivo, acessível e pensado para manutenção.",
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
          desc: "Casos demonstrando arquitetura, UI e métricas de negócio.",
        },
        {
          key: "brand",
          title: "App & marca digital",
          tag: "Galeria",
          desc: "Site institucional, identidade consistente no produto.",
        },
        {
          key: "auto",
          title: "Automações internas",
          tag: "Backoffice",
          desc: "Integrações que reduzem erros humanos nos fluxos diários.",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Vamos dar o próximo passo",
      intro:
        "Este formulário está preparado no front-end para validares UX e estado. Mais tarde liga a e-mail ou API quando quiseres receber mensagens mesmo.",
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
            "Web, apps, UI/UX and automation — consistent execution across every offering.",
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
      badge: "Digital products & software engineering",
      titleBefore: "Technology built to look and perform at a",
      titleAccent: "world-class level.",
      subtitle:
        "Web, apps and automation designed for a striking first impression — even non‑technical viewers spot quality instantly.",
      primaryCta: "Start a project",
      secondaryCta: "View services",
      stats: [
        { k: "Focus", v: "UX & performance" },
        { k: "Stack", v: "Next.js, React & modern web" },
        { k: "Delivery", v: "Scalable architecture" },
      ],
    },
    services: {
      kicker: "Services",
      title: "What we build with you",
      subtitle:
        "From brand presence to products that must scale — the same bar for craft everywhere.",
      items: [
        {
          key: "web",
          title: "Websites",
          desc: "Fast, responsive sites tuned for SEO and conversion.",
        },
        {
          key: "apps",
          title: "Apps",
          desc: "Fluid interfaces for web and mobile-ready experiences, built to last.",
        },
        {
          key: "ui",
          title: "UI / UX",
          desc: "Visual hierarchy, rhythm and micro-detail that signal trust.",
        },
        {
          key: "auto",
          title: "Automation",
          desc: "Less repetitive work, more consistency across your flows.",
        },
      ],
    },
    about: {
      kicker: "About",
      title: "Computer engineering applied to business",
      p1: "TechNova treats technology as a lever for clear outcomes: a serious brand online, stable systems and experiences people want to use.",
      visionLead: "Vision:",
      visionRest:
        "be the reference for software and interfaces that feel studio-grade — backed by code that scales.",
      techLead: "Typical tech",
      techNote:
        "The stack flexes per project — the finish line doesn’t: responsive, accessible and maintainable by design.",
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
          desc: "Case studies spanning architecture, UI and business metrics.",
        },
        {
          key: "brand",
          title: "App & digital brand",
          tag: "Gallery",
          desc: "Corporate sites with identity carried through the product.",
        },
        {
          key: "auto",
          title: "Internal automation",
          tag: "Back office",
          desc: "Integrations that trim human error in everyday workflows.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let’s move forward",
      intro:
        "This form validates UX locally for now — wire it to email or an API whenever you’re ready.",
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
