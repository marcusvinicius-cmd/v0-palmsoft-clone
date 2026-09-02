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
    logoAriaLabel: "PalmSoft - Início",
    navAriaLabel: "Navegação principal",
    mobileNavAriaLabel: "Navegação móvel",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
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
      bodyHighlight1: "20 anos de experiência",
      bodyPre: "Mais de",
      bodyMid: "transformados em tecnologia de ponta para impulsionar grandes empresas com Inteligência Artificial e Analytics.",
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
        },
        endToEnd: {
          title: "Capacidade de ponta a ponta",
        },
        profitability: {
          title: "Diminua custos, otimize e melhore a sua lucratividade",
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
      eyebrow: "Metodologia",
      titleAccent: "A³",
      title: "Palmsoft",
      subline: "Antecipar, Agilizar e Adaptar",
      intro: {
        highlight: "Não começamos pela tecnologia. Começamos pelo negócio.",
        lead: "A forma exclusiva Palmsoft de transformar desafios de negócio em tecnologia que gera resultado real e evolui junto com a sua empresa.",
      },

      principlesLabel: "Como pensamos",
      pillars: {
        planning: {
          title: "ANTECIPAR",
          tagline: "Entender antes de construir.",
          body: "Compreendemos profundamente o negócio para identificar problemas reais, oportunidades e priorizar onde a tecnologia pode gerar maior impacto.",
          items: [
            "Imersão no negócio",
            "Diagnóstico e análise de causas",
            "Mapeamento de oportunidades",
            "Priorização de iniciativas",
          ],
        },
        development: {
          title: "AGILIZAR",
          tagline: "Construir para aprender.",
          body: "Desenvolvemos de forma incremental e colaborativa, testando hipóteses, validando rapidamente e aprendendo a cada ciclo para reduzir incertezas.",
          items: [
            "Desenho da solução e arquitetura",
            "Desenvolvimento incremental",
            "Testes e validação",
            "Aprendizado e ajustes contínuos",
          ],
        },
        implementation: {
          title: "ADAPTAR",
          tagline: "Evoluir junto com o negócio.",
          body: "Integramos a solução ao ecossistema do cliente, monitoramos resultados e evoluímos continuamente para sustentar e ampliar o valor entregue.",
          items: [
            "Integração com sistemas e processos",
            "Monitoramento e indicadores",
            "Análise de resultados e insights",
            "Evolução contínua da solução",
          ],
        },
      },

      formatsLabel: "Como transformamos isso em projetos",
      formatsIntro: {
        title: "Do diagnóstico à solução completa.",
        body: "Cada desafio possui um nível diferente de maturidade, risco e complexidade. Por isso, a Palmsoft pode atuar em diferentes etapas da jornada.",
      },
      resultLabel: "Resultado",
      formats: {
        diagnostic: {
          title: "A³ Diagnóstico",
          badge: "Consultoria",
          tagline: "Entender antes de investir.",
          body: "Realizamos uma imersão no negócio para analisar processos, dados, sistemas e desafios, identificando onde tecnologia, dados e IA podem gerar maior impacto.",
          itemsLabel: "Entregáveis",
          items: [
            "Diagnóstico do cenário atual",
            "Identificação de gargalos e oportunidades",
            "Avaliação de dados e maturidade tecnológica",
            "Mapa de oportunidades e recomendações priorizadas",
          ],
          result: "Direcionamento claro sobre onde faz sentido investir e quais iniciativas devem ser priorizadas.",
        },
        poc: {
          title: "A³ POC",
          badge: "Prova de Conceito",
          tagline: "Validar antes de escalar.",
          body: "Desenvolvemos uma POC com escopo e volume de dados controlados para testar a hipótese antes de avançar para um projeto completo.",
          itemsLabel: "Avaliamos",
          items: [
            "Viabilidade técnica",
            "Qualidade e disponibilidade dos dados",
            "Desempenho da solução",
            "Potencial de automação",
            "Resultados obtidos e possibilidade de escala",
          ],
          result: "Evidências para decidir se a solução deve avançar, ser ajustada ou não ser escalada.",
        },
        solution: {
          title: "A³ Solução",
          badge: "Desenvolvimento Completo",
          tagline: "Transformar a oportunidade em operação.",
          body: "Desenvolvemos a solução completa, personalizada para a realidade do negócio, desde arquitetura e engenharia até implantação e integração.",
          itemsLabel: "Pode envolver",
          items: [
            "Software e plataformas personalizadas",
            "Dados, IA e Machine Learning",
            "Analytics e Business Intelligence",
            "Visão computacional e automações",
            "Integrações com sistemas e processos",
          ],
          result: "Uma solução pronta para operar, gerar valor e evoluir junto com o negócio.",
        },
      },

      flexNote: {
        title: "Entramos no estágio em que o seu desafio está.",
        body: "Você pode começar pelo diagnóstico, validar com uma POC ou ir direto para o desenvolvimento completo. A jornada é flexível. O compromisso é o mesmo: gerar valor real para o seu negócio.",
      },

      journey: {
        diagnose: {
          title: "Diagnosticar",
          body: "Entender o desafio e identificar oportunidades.",
        },
        validate: {
          title: "Validar",
          body: "Testar hipóteses e comprovar a viabilidade.",
        },
        implement: {
          title: "Implementar",
          body: "Desenvolver e integrar a solução ao negócio.",
        },
        evolve: {
          title: "Evoluir",
          body: "Acompanhar resultados e evoluir continuamente.",
        },
      },

      closing: {
        title: "Negócio + Dados + Engenharia + Inteligência.",
        body: "Essa é a forma Palmsoft de gerar valor real e sustentável.",
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
      columns: [
        {
          entries: [
            {
              year: "2002",
              title: "Nasce a PalmSoft",
              body: "Desenvolvendo tecnologias e soluções em Mobile, Internet Based e Cloud.",
            },
            {
              year: "2005",
              title: "1.6 Mi Downloads",
              body: "Em 2 anos atingimos o marco de 26 jogos mobile publicados.",
            },
            {
              year: "2007",
              title: "Premiações",
              body: "Entre 2005 e 2007 recebemos vários prêmios Nacionais e Internacionais.",
            },
          ],
        },
        {
          entries: [
            {
              year: "2009",
              title: "Arena 41",
              body: "Lançamento do portal de jogos Arena 41 atingindo mais de 100 mil assinantes pagos.",
            },
            {
              year: "2009",
              title: "G4D",
              body: "Nascimento do projeto Graphics for Decision para análises e interpretações em Big Data.",
            },
            {
              year: "2011",
              title: "Expansão",
              body: "Desenvolvimento de Apps e Games também para redes sociais. Neste período desenvolvemos um App de criptografia com registro no INPI.",
            },
          ],
        },
        {
          entries: [
            {
              year: "2012",
              title: "Consultoria",
              body: "Consultoria especializada em Programação 3D, com aplicações na área de Visualização, Impressão 3D, entre outros.",
            },
            {
              year: "2014",
              title: "Nova Sede",
              body: "Mudança de sede para o Centro Comercial Business Decor, na SC 401 - Florianópolis.",
            },
            {
              year: "2016",
              title: "Deepen",
              body: "Transformação da G4D em Deepen, especializada em Big Data, I.A. e Análises Preditivas.",
            },
            {
              year: "2018",
              title: "Fintechs",
              body: "Desenvolvimento de soluções para conexão em ambiente móveis e de operações financeiras.",
            },
          ],
        },
        {
          entries: [
            {
              year: "2020",
              title: "I.A. as a Service",
              body: "Empresa inicia seus processos de I.A. as a Service.",
            },
            {
              year: "2021",
              title: "Labor Analytics",
              body: "Lançamento do LMS Labor Analytics, vencedor do prêmio BBM 2022 na categoria de inovação.",
            },
            {
              year: "2022",
              title: "Credit Score",
              body: "Lançamento do Credit Score.",
            },
            {
              year: "2023",
              title: "Aegis Access Control",
              body: "Criação do ambiente Aegis Access Control, tecnologia própria para gestão, controle e monitoramento de acessos.",
            },
          ],
        },
      ],
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

  areas: {
    eyebrow: "Áreas de Atuação",
    emptyCases: "Em breve, novos cases deste setor por aqui.",
    seeAllCases: "Ver todos os cases",
    cta: {
      titlePrefix: "Quer construir o próximo case de",
      titleSuffix: "com a gente?",
      body: "Conte para a gente o desafio do seu negócio e descubra como podemos transformá-lo em resultados.",
      button: "Entre em contato",
    },
  },

  ia: {
    meta: {
      title: "Inteligência Artificial & Big Data | Deepen | PalmSoft Tecnologia",
      description: "Conheça a Deepen, a área de Inteligência Artificial da PalmSoft. Machine Learning, Big Data e Business Intelligence para transformar seus dados em decisões.",
    },
    hero: {
      eyebrow: "Deepen — Inteligência Artificial & Big Data",
      title: "Dados estão por toda parte",
      body: "Extraia o máximo possível de insights a partir de nossas análises e consultorias. Machine Learning, Big Data e Inteligência Artificial para transformar seus dados em decisões.",
      contactCta: "Entre em contato",
      solutionsCta: "Ver soluções",
      cards: {
        deepLearning: {
          label: "Deep Learning",
          status: "treinando",
          epoch: "época 12/20",
          loss: "loss 0.081 e caindo",
        },
        query: {
          label: "Consulta",
          question: "Qual a previsão de demanda para o próximo trimestre?",
          resultPrefix: "+18%",
          resultSuffix: "projetados para julho",
        },
        pipeline: {
          label: "Pipeline",
          steps: {
            collection: "Coleta de dados",
            processing: "Tratamento",
            model: "Modelo preditivo",
            insights: "Insights",
          },
        },
        badge: {
          label: "consultas",
          sublabel: "processadas em produção",
        },
      },
    },
    dataDriven: {
      eyebrow: "Seja data driven",
      title: "Seus concorrentes estão usando dados para mais do que gerar simples relatórios",
      paragraphs: [
        "Torne-se data driven, data informed e data inspired: formas de fornecer insights relevantes para equipes que precisam tomar decisões e realizar seu trabalho com base em informações concretas.",
        "Somos experts em Machine Learning, Big Data, Inteligência Artificial e Business Intelligence. Te ajudamos a encontrar insights, melhores predições de mercado e recomendações que possibilitam tomar as melhores decisões para o seu negócio.",
        "Aplicamos técnicas de Machine Learning, Deep Learning, Inteligência Artificial e Big Data para criar soluções exclusivas que transformam seus dados em informações que aceleram e otimizam a tomada de decisões e a eficiência operacional.",
      ],
      highlight: "Como um iceberg, a maior parte do valor dos seus dados está abaixo da superfície — nós mergulhamos para encontrá-lo.",
      icebergAlt: "Iceberg com a maior parte submersa, representando o valor oculto nos dados",
      benefits: {
        decisions: "Tome melhores decisões, mais rápido",
        insights: "Obtenha insights reais dos seus dados",
        forecast: "Preveja cenários futuros e reduza custos",
        resources: "Aproveite ao máximo o seu tempo e recursos",
        anticipate: "Antecipe necessidades dos seus consumidores",
        management: "Melhore a gestão do seu negócio como um todo",
      },
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Dos dados brutos aos resultados",
      steps: {
        stored: {
          title: "Dados armazenados",
          body: "Analisamos os dados internos e externos que você armazena.",
        },
        market: {
          title: "Dados de mercado",
          body: "Correlacionamos com bases públicas e privadas de mercado.",
        },
        intelligence: {
          title: "Inteligência",
          body: "Aplicamos algoritmos de Inteligência Artificial sobre os dados.",
        },
        analysis: {
          title: "Análise",
          body: "Entendemos e analisamos perfis e padrões de comportamento.",
        },
        solution: {
          title: "Solução",
          body: "Construímos modelos e soluções sob medida para o seu negócio.",
        },
        results: {
          title: "Resultados",
          body: "Você toma as melhores decisões com base nos seus dados.",
        },
      },
    },
    history: {
      eyebrow: "Nossa história",
      title: "Uma spin-off da PalmSoft",
      earthAlt: "A Terra vista do espaço com um satélite em órbita",
      paragraphs: [
        "A Deepen surgiu como fruto de um projeto de desenvolvimento de software a partir da aplicação de estratégias e tecnologias de visualização interativa de dados desenvolvidas pela PalmSoft, empresa de desenvolvimento mobile de Santa Catarina.",
        "Em outubro de 2016 o projeto se tornou uma startup, passando por processos de seleção e capacitação como Startup Acelerada Inovativa, Sinapse da Inovação (3ª fase), Startup SC e o programa Link Lab da ACATE.",
      ],
    },
    tech: {
      eyebrow: "Nossas tecnologias",
      title: "P&D e expertise própria",
      paragraphs: [
        "Todas as tecnologias e algoritmos que compõem nossas soluções e consultorias foram desenvolvidos por nossa equipe de P&D, fazendo uso de APIs de uso livre ou criadas a partir de expertise própria.",
        "Nossas soluções rodam algoritmos de inteligência artificial, machine learning e deep learning sobre o Big Data dos clientes e bases de mercado. Com processamento multithread e dados in memory, permitem a visualização interativa de dados históricos associados a mapas geográficos e conceituais, gerando análises baseadas em algoritmos.",
      ],
    },
    solutions: {
      eyebrow: "Soluções Deepen",
      title: "Big Data, Inteligência Artificial, Machine Learning e Análises Preditivas",
      contactCta: "Entre em contato",
      items: {
        maps: {
          title: "Deepen Maps",
          body: "Explore livremente o mapa de todo o Brasil, analise dados demográficos e informações empresariais — concentração de colaboradores, potenciais de consumo, clientes e pontos de interesse — e defina estratégias.",
        },
        productMix: {
          title: "Mix de Produtos",
          body: "Analisamos seus tickets de vendas para entender as forças de atração entre produtos, aumentando o seu potencial de vendas e markup.",
        },
        inventory: {
          title: "Predição de Estoques",
          body: "Projete sua demanda futura com base nos dados históricos da sua empresa e preveja escassez ou excessos nos níveis de estoque.",
        },
        creditScore: {
          title: "Score Financeiro",
          body: "Algoritmos avançados geram pontuações precisas e confiáveis para uma avaliação objetiva do risco de crédito de indivíduos ou empresas.",
        },
        orderRecommendation: {
          title: "Recomendação de Pedidos",
          body: "Sugestão de produtos personalizados com base no histórico de compras, preferências e comportamento do cliente, melhorando conversão e engajamento.",
        },
        absencePrediction: {
          title: "Predição de Faltas",
          body: "Reduza o número de clientes faltantes e melhore o desempenho da sua equipe, com taxa de precisão de 80% na previsão de faltas.",
        },
        serviceOptimization: {
          title: "Otimização de Serviços",
          body: "Algoritmos que otimizam recursos, agendamento de tarefas e alocação de pessoal, maximizando a eficiência operacional e reduzindo custos.",
        },
        energy: {
          title: "Deepen Energy",
          body: "Controle interativo de operações técnicas e comerciais em uma única plataforma, com informações decisivas ao alcance de quem precisa.",
        },
        consulting: {
          title: "Consultorias",
          body: "Transformamos dados em informações conclusivas: planejamos e executamos PoCs (proof of concept) para validação dos projetos.",
        },
      },
    },
    consulting: {
      eyebrow: "Consultorias",
      title: "Passo a passo do nosso processo de desenvolvimento",
      modelsTitle: "Modelos de consultoria disponíveis",
      steps: {
        assessment: {
          title: "Avaliação",
          body: "Reunimos requisitos e avaliamos os dados que você armazena e quais informações externas são necessárias, determinando a abordagem específica para o seu problema.",
        },
        dataPrep: {
          title: "Preparação dos dados",
          body: "Nossa equipe de cientistas de dados transforma e prepara os dados para exploração e modelagem, codificando-os para fornecer o máximo de informações ao modelo.",
        },
        modelDev: {
          title: "Desenvolvimento do modelo",
          body: "Criamos e testamos diferentes algoritmos de IA e machine learning, escolhendo os que fornecem a melhor precisão e o menor erro para a solução final.",
        },
        poc: {
          title: "POC",
          body: "Elaboramos um protótipo que demonstra o poder da IA aplicada ao seu caso, com avaliação de resultados e levantamento dos ajustes para a entrega final.",
        },
        integration: {
          title: "Integração e implantação",
          body: "Refinamos a eficácia do sistema junto com sua equipe e criamos aplicativos e serviços completos, com visualização amigável ou integrações de back-end via APIs.",
        },
        optimization: {
          title: "Avaliação e otimização",
          body: "Mesmo após a entrega continuamos acompanhando os resultados, com testes de segurança, desempenho e precisão, implantando melhorias na acurácia do modelo.",
        },
      },
      models: {
        customerProfile: "Perfil de Clientes",
        predictive: "Análise Preditiva",
        bi: "Business Intelligence (B.I.)",
        productMix: "Mix de Produtos",
        expansion: "Expansão de Negócios",
        marketing: "Otimização do Marketing",
        dataCapture: "Captação e Armazenamento de Dados",
        custom: "Soluções Customizadas",
      },
    },
    sectors: {
      eyebrow: "Setores",
      title: "O que podemos fazer pelo seu negócio?",
      items: {
        retail: {
          title: "Varejo",
          items: [
            "Análise do perfil e comportamento do consumidor",
            "Previsão de demanda e estoques",
            "Planejamento e previsão de vendas futuras",
            "Recomendação e composição de mix de produtos",
          ],
        },
        health: {
          title: "Saúde",
          items: [
            "Mapeamento da ocorrência de doenças por região e carteira",
            "Avaliação de risco de novas doenças e custos atrelados",
            "Probabilidade de evolução de doentes crônicos",
            "Projeção de custos",
          ],
        },
        publicSector: {
          title: "Setor Público",
          items: [
            "Identificação das parcelas da população com necessidades mais urgentes",
            "Avaliação de políticas públicas de desenvolvimento",
            "Análise do feedback dos cidadãos sobre serviços prestados",
          ],
        },
        education: {
          title: "Educação",
          items: [
            "Controle e redução da evasão escolar",
            "Captação de novos alunos",
            "Melhores locais para abertura de novas unidades",
            "Níveis de desempenho de alunos",
          ],
        },
        industry: {
          title: "Indústria",
          items: [
            "Manutenção preditiva",
            "People Analytics",
            "Sortimento de produtos",
            "Previsão de estoques e demanda",
          ],
        },
        realEstate: {
          title: "Imobiliário e Construção",
          items: [
            "Rentabilidade dos imóveis da carteira",
            "Identificação da valorização e desvalorização de regiões",
            "Avaliação do potencial de vendas de um empreendimento",
            "Tendências de compra e locação",
          ],
        },
      },
    },
  },

  aegis: {
    meta: {
      title: "Aegis Access Control | PalmSoft Tecnologia",
      description: "Toda a gestão do empreendimento de forma fácil e rápida. O Aegis Access Control torna simples e seguro o processo de gestão do acesso em empreendimentos de aluguel de temporada.",
    },
    hero: {
      eyebrow: "Aegis Access Control",
      title: "Toda a gestão do empreendimento de forma fácil e rápida",
      paragraphs: [
        "Com o Aegis Access Control, todo o processo de gestão do acesso ao empreendimento de aluguel de temporada é simples e seguro.",
        "Temos compatibilidade com a maioria dos equipamentos de mercado, e o acesso é via web, de qualquer lugar do Brasil. A solução pode ser usada diretamente pelo proprietário, ou gestor, e ainda pode ser operada pela equipe de portaria virtual.",
      ],
      contactCta: "Entre em contato",
      featuresCta: "Ver funcionalidades",
      logoAlt: "Logo do Aegis Access Control",
    },
    pains: {
      title: "Isto é familiar para você ou seu cliente?",
      illustrationAlt: "Ilustração de uma pessoa organizando cadastros de acesso",
      items: {
        governance: {
          title: "Transtornos e sobrecarga da governança",
          body: "O processo de gestão de reservas do Airbnb e outras plataformas de curta duração é muito intenso, acarretando transtornos ao condomínio e sobrecarga das equipes de vigilância.",
        },
        audit: {
          title: "Inconsistências de auditoria",
          body: 'Não há um controle de acesso onde podemos auditar quem acessou o empreendimento — ou quem foi que estacionou na vaga errada — e às vezes as controladoras nas áreas comuns ficam "cheias", impedindo o cadastro de novas faciais.',
        },
        manual: {
          title: "Dependência da portaria e processos manuais",
          body: "Se o hóspede chega fora do horário comercial, muitas vezes a portaria não consegue garantir a entrada.",
        },
      },
    },
    institutional: {
      title: "Inovação digital para construir ou transformar negócios",
      body: "Somos uma empresa de software focada no desenvolvimento de soluções que incorporam apps de alta tecnologia, impulsionando empresas e negócios com inovação digital, mobilidade, engajamento e nossa expertise em desenvolvimentos multiplataforma, Inteligência Artificial e Big Data.",
    },
    features: {
      eyebrow: "Funcionalidades",
      title: "Tudo o que o Aegis faz pelo seu empreendimento",
      groups: {
        g1: {
          imageAlt: "Telas do Aegis com a gestão de reservas e o cadastro facial de hóspedes",
          f1: {
            title: "Gestão dos imóveis",
            paragraphs: [
              "O sistema permite controle individualizado de cada imóvel no empreendimento, possibilitando ao proprietário controlar diretamente o seu loft ou apartamento — e ainda podendo dar um acesso especial para inquilino ou gestor.",
            ],
          },
          f2: {
            title: "Gestão do acesso a hóspedes",
            paragraphs: [
              "Gerenciamento inteligente das reservas. Depois de cadastrados os dados do hóspede (nome, período de estadia, dados do veículo), o sistema prepara um fluxo de recepção totalmente parametrizável, com mensagens de confirmação da data de chegada, cadastro de facial e processo de check-out.",
              "O processo foi feito para a melhor experiência do hóspede, mas garantindo toda a segurança de que ninguém vai acessar o empreendimento antes ou depois do período definido.",
            ],
          },
        },
        g2: {
          imageAlt: "Telas do Aegis com o cadastro de prestadores de serviço e a locação de espaços",
          f1: {
            title: "Controle de acessos especiais",
            paragraphs: [
              "Além dos hóspedes, o proprietário ou administrador do sistema pode realizar a liberação de acessos recorrentes, como inquilinos, prestadores de serviços e visitantes.",
              'O sistema permite inclusive agenda de forma recorrente para times de limpeza. O modo "repetir reserva" aproveita dados de solicitações anteriores para facilitar ainda mais o uso.',
            ],
          },
          f2: {
            title: "Gestão de acesso para áreas especiais",
            paragraphs: [
              "Esta funcionalidade é especialmente pensada para proprietários e inquilinos. Contudo, com o aumento de ofertas de áreas especiais, como coworking, este módulo pode ser usado para permitir reservas e até realizar cobrança.",
            ],
          },
        },
        g3: {
          imageAlt: "Telas do Aegis com a gestão de unidades e o status de cada imóvel",
          f1: {
            title: "Identificação veicular e controle das garagens",
            paragraphs: [
              "Temos um módulo complementar, integrado ao sistema de câmeras com reconhecimento de caracteres, que pode ser usado para facilitar a entrada e saída de hóspedes, assim como a identificação de veículos no local.",
            ],
          },
          f2: {
            title: "Módulo gestor para múltiplos imóveis",
            paragraphs: [
              "Muitos proprietários preferem terceirizar o trabalho de gestão do imóvel: neste módulo é possível alocar todos ou uma parte dos seus imóveis a um gestor. Caso o gestor atenda a mais de um cliente, ele precisará de apenas um login para gerir todos eles.",
            ],
          },
        },
        g4: {
          imageAlt: "Telas do Aegis com o monitoramento dos equipamentos do sistema",
          f1: {
            title: "Monitoramento do status dos equipamentos",
            paragraphs: [
              "Não adianta ter o melhor sistema do mundo se a fechadura está offline. Este módulo permite saber o status de cada equipamento no sistema e enviar avisos à zeladoria ou ao time local.",
            ],
          },
          f2: {
            title: "Prestadores de serviços e reservas recorrentes",
            paragraphs: [
              "Cadastre os prestadores de serviços autorizados a acessar o empreendimento (encanadores, diaristas, entregadores) e o período em que eles podem acessar.",
              "Isto é especialmente importante para agendar manutenções ou limpezas em momentos em que o imóvel esteja vago.",
            ],
          },
        },
      },
    },
    cta: {
      title: "Vamos juntos fazer história",
      body: "Ficamos felizes em saber que você possui interesse em entrar em contato conosco. Conte para a gente o desafio do seu empreendimento.",
      button: "Entre em contato",
    },
  },
}

export type Dictionary = typeof pt
