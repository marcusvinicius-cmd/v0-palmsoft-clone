/**
 * Dicionário-fonte (português). A estrutura deste objeto define o formato
 * que lib/i18n/en.ts precisa seguir — o TypeScript acusa erro se faltar
 * ou sobrar alguma chave lá.
 */
export const pt = {
  common: {
    langToggleLabel: "Mudar idioma do site",
  },

  header: {
    nav: {
      home: "Home",
      cases: "Cases",
      sobre: "Sobre",
      produtos: "Produtos",
      ia: "I.A.",
      aegis: "Aegis",
    },
    cta: "Fale com Especialista",
  },

  footer: {
    siteMap: "Mapa do site",
    links: {
      home: "Home",
      areas: "Áreas de Atuação",
      ia: "I.A.",
      aegis: "Aegis",
      cases: "Cases",
      contato: "Contato",
    },
    addressTitle: "Endereço e Contato",
    addressLabel: "Endereço:",
    addressLine1: "Rod. José Carlos Daux, 5025B",
    addressLine2: "Saco Grande, Florianópolis-SC",
    emailLabel: "E-mail:",
    copyright: "© 2002-2025, PalmSoft Tecnologia. Todos os direitos reservados.",
  },

  whatsappButton: {
    ariaLabel: "Fale conosco pelo WhatsApp",
  },

  partnersMarquee: {
    ariaLabel: "Clientes e parceiros que confiam na PalmSoft",
  },

  home: {
    hero: {
      imageAlt: "Rede global de dados e inteligência artificial conectando informações em tempo real",
      titleHighlight: "Inteligência aplicada",
      titleRest: "para tranformar negócios",
      bodyHighlight1: "20 anos",
      bodyPre: "Há mais de",
      bodyMid: "transformando desafios de diferentes setores em soluções de tecnologia.",
      areas: {
        dataAnalytics: { top: "Ciência", bottom: "de Dados" },
        ai: { top: "Inteligência", bottom: "Artificial" },
        integrations: { top: "Integrações", bottom: "e Automação" },
        software: { top: "Software", bottom: "sob medida" },
      },
    },

    areasOverview: {
      title: "Expertise Palmsoft",
      areas: {
        software: {
          title: "Software Engineering",
          body: "Sistemas web, mobile e APIs sob medida, construídos com arquitetura escalável e boas práticas de engenharia.",
        },
        data: {
          title: "Data & Analytics",
          body: "Estruturação de dados, pipelines e dashboards que transformam dados brutos em decisões estratégicas.",
        },
        ai: {
          title: "AI & Machine Learning",
          body: "Modelos preditivos, IA generativa e automação inteligente aplicados a problemas reais do seu negócio.",
        },
        integrations: {
          title: "Integrações & Automação",
          body: "Conectamos sistemas, APIs e processos para eliminar retrabalho manual e acelerar a operação.",
        },
      },
    },

    problems: {
      eyebrow: "Problemas que Ajudamos a Resolver",
      title: "Sua empresa enfrenta algum desses desafios?",
      subtitle: "Transformamos processos manuais com tecnologia, eliminando retrabalho, aumentando a produtividade e impulsionando o lucro do seu negócio.",
      items: {
        data: "Precisamos transformar dados em decisões.",
        automation: "Temos processos manuais que precisam ser automatizados.",
        integration: "Precisamos integrar sistemas que não conversam.",
        ai: "Temos uma ideia de IA, mas não sabemos como colocá-la em produção.",
        modernization: "Precisamos modernizar um sistema crítico.",
        team: "Precisamos aumentar nossa capacidade de desenvolvimento.",
      },
    },

    verticalCards: {
      eyebrow: "Áreas de Atuação",
      title: "Cases por setor",
      subtitle: "Desafios diferentes. Tecnologia aplicada a cada realidade.",
      seeCases: "Ver cases",
      seeAllCases: "Ver todos os cases",
    },

    whyPalmsoft: {
      title: "Por que escolher a Palmsoft",
      reasons: {
        tailored: {
          title: "Tecnologia sob medida",
          body: "Não tentamos adaptar o seu problema a uma solução pronta. Entendemos o contexto do negócio e desenvolvemos a tecnologia adequada para cada desafio.",
        },
        endToEnd: {
          title: "Capacidade de ponta a ponta",
          body: "Reunimos software, dados, IA e integrações em um único time, reduzindo a dependência de diferentes fornecedores e facilitando a execução de projetos complexos.",
        },
        profitability: {
          title: "Diminua custos, otimize e melhore a sua lucratividade",
          body: "Transformamos modelos, dados e ideias em soluções que funcionam dentro da operação, integradas aos sistemas, processos e usuários já utilizados por sua empresa.",
        },
      },
    },

    howWeWork: {
      eyebrow: "Como Trabalhamos",
      title: "Do desafio à solução em produção",
      subtitle: "Cada projeto começa pelo entendimento do problema e dos resultados que precisam ser alcançados. A partir disso, estruturamos a solução, desenvolvemos, integramos e acompanhamos sua evolução.",
      ariaLabel: "Etapas do processo Palmsoft",
      steps: {
        understand: {
          label: "Entender",
          title: "Entendemos o desafio",
          body: "Mergulhamos no contexto do negócio, nos processos, dados e sistemas existentes para identificar o problema real e as oportunidades de melhoria.",
        },
        design: {
          label: "Desenhar",
          title: "Desenhamos a solução",
          body: "Definimos arquitetura, tecnologias, integrações, dados necessários e a melhor estratégia para transformar o desafio em uma solução viável.",
        },
        build: {
          label: "Construir",
          title: "Construímos e validamos",
          body: "Desenvolvemos de forma incremental, com validações ao longo do projeto para reduzir riscos e garantir aderência às necessidades do negócio.",
        },
        integrate: {
          label: "Integrar",
          title: "Integramos à operação",
          body: "Conectamos a solução aos sistemas, dados e processos da empresa para que a tecnologia faça parte da operação real.",
        },
        production: {
          label: "Produção",
          title: "Colocamos em produção",
          body: "Realizamos testes, homologação e implantação, garantindo que a solução esteja preparada para operar com segurança e estabilidade.",
        },
        evolve: {
          label: "Evoluir",
          title: "Evoluímos junto com o cliente",
          body: "Acompanhamos resultados, novas necessidades e oportunidades de evolução, permitindo que a solução cresça junto com o negócio.",
        },
      },
    },

    testimonials: {
      eyebrow: "EXPERIÊNCIAS REAIS",
      title: "O que dizem nossos clientes e parceiros",
      items: {
        finance: {
          quote: "A Palmsoft entendeu o problema antes de propor a solução. O resultado entrou em produção alinhado ao que a operação realmente precisava.",
          name: "Diretor de Tecnologia",
          role: "Setor Financeiro",
        },
        energy: {
          quote: "Conseguimos sair de processos manuais para uma plataforma que hoje sustenta parte importante da nossa operação diária.",
          name: "Gerente de Operações",
          role: "Setor de Energia",
        },
        industry: {
          quote: "O time reúne engenharia, dados e IA na mesma mesa. Isso reduziu o tempo entre a ideia e o projeto rodando de verdade.",
          name: "Head de Produto",
          role: "Indústria",
        },
      },
    },

    strategy: {
      eyebrow: "Estratégia A³",
      title: "Antecipatório, Ágil e Antifrágil",
      pillars: {
        planning: {
          phase: "Planejamento",
          title: "Antecipatório.",
          body: "Incorpora um processo contínuo de aprendizagem, combinando-o com a participação e o envolvimento efetivo dos membros da organização, a partir de uma visão holística. O conhecimento do negócio se combina de forma sinérgica e contínua com o conhecimento em tecnologia no processo de planejamento.",
        },
        development: {
          phase: "Desenvolvimento",
          title: "Ágil.",
          body: "As metodologias ágeis já nasceram com a finalidade de aliviar a forma de lidar com problemas complicados. Avaliando constantemente o grau de incerteza e complexidade das demandas e conhecendo o negócio, é possível lidar com a complexidade com excelentes resultados.",
        },
        implementation: {
          phase: "Implementação Contínua",
          title: "Antifrágil.",
          body: "Para inovar, evoluir e beneficiar-se com choques e mudanças, é preciso adotar uma estratégia de construção contínua de soluções, que se integram a ecossistemas inovadores e que se fortalecem sob estresse.",
        },
      },
    },

    contact: {
      eyebrow: "Contato",
      title: "Vamos juntos fazer história",
      subtitle: "Ficamos felizes em saber que possui interesse de entrar em contato conosco :)",
      sentTitle: "Mensagem enviada!",
      sentBody: "Abrimos um e-mail com seus dados para a nossa equipe. É só revisar e enviar.",
      fields: {
        area: "Área de interesse",
        areaPlaceholder: "Selecione uma área",
        nome: "Nome completo",
        email: "E-mail",
        orcamento: "Orçamento previsto",
        orcamentoPlaceholder: "Insira um número",
        telefone: "Telefone",
        telefonePlaceholder: "(DDD) Telefone",
      },
      areasOptions: {
        fintechs: "Fintechs",
        demand: "Desenvolvimento Sob Demanda",
        energy: "Energia",
        dashboards: "Dashboards",
        games: "Jogos e Gamificação",
        credit: "Score de Crédito",
        ai: "Inteligência Artificial",
        access: "Controle de acesso",
      },
      submit: "Enviar",
      emailSubject: "Novo contato pelo site",
      emailBodyLabels: {
        area: "Área de interesse",
        nome: "Nome completo",
        email: "E-mail",
        orcamento: "Orçamento previsto",
        telefone: "Telefone",
      },
    },
  },

  sobre: {
    meta: {
      title: "Sobre | PalmSoft Tecnologia",
      description: "Conheça a história da PalmSoft: mais de duas décadas desenvolvendo tecnologia, de jogos mobile premiados a plataformas de Big Data e Inteligência Artificial.",
    },
    hero: {
      eyebrow: "Sobre a PalmSoft",
      title: "Mais de duas décadas transformando ideias em tecnologia",
      body: "De jogos mobile premiados a plataformas de Big Data e Inteligência Artificial: conheça a trajetória e a equipe que constroem a PalmSoft desde 2002.",
      milestoneCards: {
        founding: { year: "2002", title: "Nasce a PalmSoft" },
        expansion: { year: "2011", title: "Expansão" },
        newOffice: { year: "2014", title: "Nova Sede" },
        aiService: { year: "2020", title: "I.A. as a Service" },
      },
    },
    timeline: {
      eyebrow: "Nossa história",
      title: "Uma trajetória de inovação",
      milestones: {
        beginning: {
          period: "2002",
          title: "O começo",
          body: "A PalmSoft nasce desenvolvendo soluções em tecnologia com foco em Mobile, Games, Cloud e sistemas baseados na web, criando apps comerciais para PDAs e jogos para celular.",
        },
        gamesEra: {
          period: "2005–2009",
          title: "A era dos jogos",
          body: "Criamos 26 jogos e tecnologias próprias, além do portal Arena 41, que alcançou mais de 100 mil assinantes. Nossos apps somaram mais de 1,6 milhão de downloads e premiações internacionais.",
        },
        enterprisePartnerships: {
          period: "2010+",
          title: "Apps empresariais e parcerias",
          body: "Iniciamos o desenvolvimento de apps e games empresariais também para redes sociais, desenvolvemos um aplicativo de criptografia com registro no INPI e participamos de projetos em parceria com grandes empresas, com destaque para o MSN Mobile.",
        },
        bigData: {
          period: "2016",
          title: "Big Data e a Deepen",
          body: "O G4Decision, plataforma de visualização de grandes volumes de dados em que 100% das tecnologias foram desenvolvidas internamente, torna-se uma startup — hoje a Deepen, empresa do grupo focada em Inteligência Artificial e Big Data.",
        },
        today: {
          period: "Hoje",
          title: "Inovação contínua",
          body: "Seguimos desenvolvendo soluções sob demanda, produtos próprios como o Aegis Access Control e aplicações de IA, com uma equipe técnica premiada e reconhecida por diversas entidades do setor.",
        },
      },
    },
    team: {
      eyebrow: "Nossa Equipe",
      title: "Gente que já resolveu problemas difíceis antes",
      imageAlt: "Equipe PalmSoft reunida no escritório",
      paragraphs: [
        "Fundada em 2002, a Palmsoft Tecnologia possui uma trajetória consolidada no desenvolvimento de soluções digitais sob demanda. Ao longo dos anos, participamos de projetos em parceria com grandes empresas, incluindo iniciativas como o MSN Mobile, além de desenvolver aplicações móveis, sistemas web, soluções em nuvem e uma tecnologia de criptografia com registro no INPI.",
        "Em 2016, a experiência acumulada no processamento e na visualização de grandes volumes de dados criamos a Deepen, empresa do grupo e nosso braço especializado em Inteligência Artificial e Big Data. Desde então, a Palmsoft ampliou sua atuação em aprendizado de máquina, modelagem preditiva, visão computacional, georreferenciamento, processamento distribuído e análise avançada de dados.",
        "Atualmente, desenvolvemos soluções com LLMs, IA generativa, automação inteligente, análise documental, detecção de anomalias e sistemas de apoio à tomada de decisão. Trabalhamos bastante também com plataformas financeiras, análise de crédito, prevenção de fraudes em tempo real, gestão de riscos e aplicações para os setores de energia, fintechs, logística, varejo e monitoramento operacional.",
        "Conduzimos vários projetos personalizados para grandes empresas, desenvolvendo produtos próprios e também participamos em criações conjuntas de diversas soluções tecnológicas. Entre elas estão o Aegis Access Control, voltado ao controle de acesso com inteligência artificial, e o Labor Analytics, plataforma de análise e gestão operacional reconhecida pelo Prêmio BBM de Inovação, além de participações em vários outros produtos desenvolvidos em conjunto com parceiros e clientes.",
        "Engenheiros e desenvolvedores seniores, premiados e reconhecidos por diversas entidades do setor, com experiência que vai de aplicativos móveis e jogos a plataformas de Big Data, dashboards e sistemas financeiros de missão crítica. É essa combinação de senioridade, curiosidade técnica e histórico comprovado que garante que cada projeto seja conduzido com excelência, do planejamento à entrega.",
      ],
    },
    cta: {
      title: "Vamos escrever o próximo capítulo juntos?",
      body: "Conte para a gente o desafio do seu negócio e descubra como mais de 20 anos de experiência podem acelerar o seu projeto.",
      button: "Entre em contato",
    },
  },

  cases: {
    meta: {
      title: "Cases | PalmSoft Tecnologia",
      description: "Conheça os cases da PalmSoft e da Deepen: plataformas de dados, score de crédito, detecção de fraude, dashboards e modelagem preditiva para grandes empresas.",
    },
    hero: {
      eyebrow: "Nossos Cases",
      title: "Histórias construídas com tecnologia de ponta",
      body: "Visualize cenários futuros no meio competitivo e tenha mais previsibilidade de resultados. Conheça alguns dos projetos que entregamos para nossos clientes e parceiros.",
      cards: {
        onDemand: {
          label: "On-Demand",
          status: "em produção",
          title: "Novo módulo do sistema",
          preview: "Protótipo em revisão",
          body: "Painel personalizado, integrado ao seu fluxo de trabalho.",
          edit: "Editar",
          export: "Exportar",
          cta: "Solicitar orçamento",
        },
        access: {
          label: "Controle de Acesso",
          statusLabel: "Status:",
          statusValue: "Seguro",
        },
        ai: {
          label: "I.A. as a Service",
        },
      },
    },
    seeCase: "Ver estudo de caso",
    cta: {
      title: "Quer construir o próximo case com a gente?",
      body: "Conte para a gente o desafio do seu negócio e descubra como podemos transformá-lo em resultados.",
      button: "Entre em contato",
    },
    detail: {
      backToAll: "Todos os cases",
      technologies: "Tecnologias",
      ourRole: "Nossa função",
      steps: {
        before: "Antes do Projeto",
        challenge: "O Desafio",
        solution: "Tecnologias & Métodos",
        impact: "Impacto",
      },
      cta: {
        title: "Quer um resultado parecido no seu negócio?",
        back: "Voltar para os cases",
        contact: "Entre em contato",
      },
    },
  },
}

export type Dictionary = typeof pt
