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
}

export type Dictionary = typeof pt
