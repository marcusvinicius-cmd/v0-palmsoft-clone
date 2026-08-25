import type { VerticalSlug } from "@/lib/verticals-data"
import type { Lang } from "@/lib/i18n/context"

type CaseStudyTranslatable = {
  tagline: string
  roles: string[]
  before: string
  challenge: string
  solution: string
  results: string
  imageAlt: string
}

export type CaseStudy = CaseStudyTranslatable & {
  slug: string
  client: string
  title: string
  vertical: VerticalSlug
  technologies: string[]
  image: string
  logo?: string
  en: CaseStudyTranslatable
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ctg-conecta",
    client: "CTG Brasil",
    title: "CTG Conecta",
    tagline: "Hub de informações comerciais e estruturação de dados.",
    vertical: "energy",
    technologies: ["Java", "Docker", "React", "Azure"],
    roles: [
      "Criação de Hub de Informações",
      "Estruturação de Dados",
      "Implementação de IA",
    ],
    before:
      "As informações de contratos e prospects comerciais estavam espalhadas entre diferentes sistemas e planilhas, exigindo que a equipe comercial dependesse de processos manuais e demorados para consolidar dados de clientes.",
    challenge:
      "Desenvolver uma plataforma para agilizar a comercialização e o gerenciamento de contratos de energia, com foco no relacionamento entre os clientes e prospects, centralizando as informações necessárias para os agentes da área comercial, visando promover maior agilidade à equipe comercial e autogestão dos contratos para os clientes.",
    solution:
      "Implementado um data lake com planejamento da estrutura dos diretórios, periodicidade de coleta dos dados, mapeamento das fontes e dos tipos de dados e documentação das rotinas dos ETLs. Desenvolvida em Java no back-end e JavaScript no front-end, com banco de dados PostgreSQL e integrações com bancos de dados do cliente, SAP e sistema de contratos do cliente.",
    results:
      "Desenvolvida uma ferramenta de integração de informações internas e externas da companhia, com dashboards analíticos e workflows que facilitam a navegação de informações de contratos energéticos. O maior benefício da ferramenta implementada é a autogestão dos contratos firmados com a companhia, em um ambiente que é notório pelos seus rigorosos critérios de segurança de informação.",
    image: "/ctg-conecta-image.avif",
    imageAlt:
      "Campanha do CTG Conecta: pessoa usando o aplicativo para contratar e gerenciar energia 100% limpa",
    logo: "/logo-ctg-brasil.avif",
    en: {
      tagline: "Commercial information hub and data structuring.",
      roles: [
        "Information Hub Creation",
        "Data Structuring",
        "AI Implementation",
      ],
      before:
        "Contract and commercial prospect information was scattered across different systems and spreadsheets, forcing the sales team to rely on manual, time-consuming processes to consolidate customer data.",
      challenge:
        "Build a platform to speed up energy contract sales and management, focused on the relationship between customers and prospects, centralizing the information sales agents need — to make the sales team faster and give customers self-service over their contracts.",
      solution:
        "Implemented a data lake with a planned directory structure, data collection frequency, source and data-type mapping, and documented ETL routines. Built in Java on the backend and JavaScript on the frontend, with a PostgreSQL database and integrations with the client's databases, SAP, and contract system.",
      results:
        "Built a tool that integrates the company's internal and external information, with analytical dashboards and workflows that make it easier to navigate energy contract data. The biggest benefit of the tool is customer self-service over their contracts with the company, in an environment known for its strict information-security standards.",
      imageAlt:
        "CTG Conecta campaign: a person using the app to contract and manage 100% clean energy",
    },
  },
  {
    slug: "amcred",
    client: "AMCRED-SUL",
    title: "AMCRED",
    tagline: "Avaliação de score de crédito.",
    vertical: "financial-services",
    technologies: ["Java", "Docker", "React", "Azure", "Python"],
    roles: ["Avaliação de Score de Crédito", "Ferramentas de IA"],
    before:
      "Os agentes de crédito dos bancos de microcrédito associados avaliavam solicitações de forma manual, sem um critério padronizado e sem apoio de modelos preditivos para embasar a decisão.",
    challenge:
      "Auxiliar a tomada de decisão de agentes de crédito de bancos de microcrédito utilizando ferramentas de IA para a geração de scores.",
    solution:
      "Utilização de um ensemble de modelos de IA com modelos tradicionais de machine learning, redes neurais profundas e modelos geolocalizados autorais para geração de scores de crédito, disponibilizando os scores em uma plataforma web que consolida diversos aspectos do processo de análise de crédito.",
    results:
      "Desenvolvida uma plataforma com a API de inteligência artificial integrada que disponibiliza o score de crédito e uma sala de situação para os gerentes dos diferentes bancos associados.",
    image: "/amcred-image.avif",
    imageAlt:
      "Tela da plataforma de análise de crédito da AMCRED com formulário de preenchimento e resultado de score de 93%",
    logo: "/logo-amcred.avif",
    en: {
      tagline: "Credit score assessment.",
      roles: ["Credit Score Assessment", "AI Tools"],
      before:
        "Credit agents at the associated microcredit banks assessed applications manually, with no standardized criteria and no support from predictive models to back their decisions.",
      challenge:
        "Support credit agents at microcredit banks in their decision-making using AI tools to generate credit scores.",
      solution:
        "Used an ensemble of AI models — traditional machine learning models, deep neural networks, and proprietary geolocation-based models — to generate credit scores, made available on a web platform that consolidates multiple aspects of the credit analysis process.",
      results:
        "Built a platform with an integrated AI API that provides the credit score and a situation room for managers at the different associated banks.",
      imageAlt:
        "AMCRED credit analysis platform screen with an application form and a 93% score result",
    },
  },
  {
    slug: "data-tech",
    client: "ACATE",
    title: "Data Tech",
    tagline: "Data analytics e dashboards.",
    vertical: "enterprise",
    technologies: ["Java", "React", "Azure"],
    roles: ["Data Analytics", "Dashboards"],
    before:
      "A ACATE não possuía uma visão consolidada do ecossistema de empresas de tecnologia de Florianópolis, o que dificultava a geração de relatórios de inteligência de mercado para associados e interessados.",
    challenge:
      'Criação de um "censo tecnológico" apresentado em uma plataforma compreensível e com dashboards analíticos.',
    solution:
      "Criação de um portal para consolidação das informações de empresas de tecnologia emergentes de Florianópolis, gerando relatórios de inteligência de mercado para serem utilizados pela ACATE e interessados.",
    results:
      "Integradas as informações das empresas de tecnologia e emergentes em uma única plataforma, com todas as informações empresariais de empresas de tecnologia de fácil acesso, seguindo todas as normas de segurança.",
    image: "/data-tech-image.avif",
    imageAlt:
      "Dashboard do Data Tech da ACATE com indicadores financeiros, faturamento e margem EBITDA das empresas",
    logo: "/logo-acate.avif",
    en: {
      tagline: "Data analytics and dashboards.",
      roles: ["Data Analytics", "Dashboards"],
      before:
        "ACATE had no consolidated view of Florianópolis's tech company ecosystem, which made it hard to produce market-intelligence reports for members and other interested parties.",
      challenge:
        'Build a "tech census" presented on an easy-to-understand platform with analytical dashboards.',
      solution:
        "Built a portal that consolidates information about emerging tech companies in Florianópolis, generating market-intelligence reports for ACATE and interested parties to use.",
      results:
        "Integrated information from tech and emerging companies into a single platform, with all business information for tech companies easily accessible, following every security standard.",
      imageAlt:
        "ACATE's Data Tech dashboard showing financial indicators, revenue, and EBITDA margin for companies",
    },
  },
  {
    slug: "flow-de-dados",
    client: "Deepen",
    title: "Flow de Dados",
    tagline: "Análise e predição em real time.",
    vertical: "financial-services",
    technologies: ["Java", "Azure"],
    roles: ["Criação de Ferramenta para Big Data", "Detecção de Fraude"],
    before:
      "A companhia não tinha uma forma escalável de identificar fraudes em tempo real dentro de um volume de dados que ultrapassa 11 bilhões de registros por mês, dependendo de verificações pontuais e reativas.",
    challenge:
      "Criar uma ferramenta para detecção de fraude em tempo real para big data em aplicativos de celular utilizando o streaming de dados.",
    solution:
      "Desenvolvido um modelo de IA que detecta inconsistências na utilização da ferramenta para prevenir fraudes, com volumes de dados de treino que ultrapassam 3 terabytes.",
    results:
      "Identificação de modelo de fraude cuja aplicação deve resultar em uma economia de 10% dos gastos da companhia. Os modelos foram desenvolvidos para avaliar acima de 11 bilhões de registros por mês, ou 5 mil registros por segundo.",
    image: "/flow-de-dados-image.avif",
    imageAlt: "Lupa ampliando uma moeda, representando a detecção de fraudes",
    logo: "/logo-deepen.avif",
    en: {
      tagline: "Real-time analysis and prediction.",
      roles: ["Big Data Tool Development", "Fraud Detection"],
      before:
        "The company had no scalable way to detect fraud in real time within a data volume exceeding 11 billion records a month, relying instead on ad hoc, reactive checks.",
      challenge:
        "Build a tool for real-time fraud detection at big-data scale in mobile apps, using data streaming.",
      solution:
        "Built an AI model that detects inconsistencies in tool usage to prevent fraud, trained on data volumes exceeding 3 terabytes.",
      results:
        "Identified a fraud model expected to save the company 10% in costs. The models were built to evaluate over 11 billion records a month, or 5,000 records per second.",
      imageAlt: "A magnifying glass enlarging a coin, representing fraud detection",
    },
  },
  {
    slug: "ctg-riscos",
    client: "CTG Brasil",
    title: "CTG Riscos",
    tagline: "Modelagem preditiva avançada para compliance.",
    vertical: "energy",
    technologies: ["Java", "Docker", "React", "Azure", "Python"],
    roles: [
      "Cálculo de Riscos Padronizados",
      "Criação de Modelo Preditivo",
      "Algoritmo de Simulação de Cenários",
    ],
    before:
      "A área de risco da companhia avaliava cenários de mercado sem uma metodologia padronizada de cálculo de risco nem modelos preditivos, o que tornava a apresentação de cenários ao board pouco intuitiva.",
    challenge:
      "Identificar novas tecnologias visando desenvolver um produto para atender a área de risco da companhia, considerando diferentes cenários de mercado e posicionamentos da empresa, com o auxílio de modelos preditivos e algoritmos de simulação de cenários, apresentando-os de forma intuitiva em uma aplicação web.",
    solution:
      "Implementação de diversos modelos de séries temporais multivariadas para cada variável. Com auxílio de algoritmos de simulação é possível calcular uma matriz de Risco x Probabilidade para cada cenário e utilizar as saídas dos algoritmos para alimentar um cockpit de riscos para o board da companhia.",
    results:
      "Integração com o data lake da companhia e desenvolvimento de uma metodologia padronizada para cálculo de risco de diferentes áreas, bem como criação de modelos preditivos para as variáveis de interesse e de um algoritmo de simulação de cenários para cada um dos riscos. Implementada uma interface que apresenta os resultados dos cálculos de forma visual e agradável em uma aplicação web, com crawlers para captura de dados de mercado atualizados utilizados no processo de modelagem.",
    image: "/ctg-riscos-image.avif",
    imageAlt:
      "Tela de login da aplicação web de riscos da CTG Brasil sobre mesa de trabalho com relatórios e gráficos",
    logo: "/logo-ctg-brasil.avif",
    en: {
      tagline: "Advanced predictive modeling for compliance.",
      roles: [
        "Standardized Risk Calculation",
        "Predictive Model Development",
        "Scenario Simulation Algorithm",
      ],
      before:
        "The company's risk department assessed market scenarios without a standardized risk-calculation methodology or predictive models, which made presenting scenarios to the board far from intuitive.",
      challenge:
        "Identify new technologies to build a product for the company's risk department, considering different market scenarios and company positioning, supported by predictive models and scenario-simulation algorithms, presented intuitively in a web application.",
      solution:
        "Implemented several multivariate time-series models, one per variable. With the help of simulation algorithms, it's possible to calculate a Risk x Probability matrix for each scenario and feed the algorithm outputs into a risk cockpit for the company's board.",
      results:
        "Integrated with the company's data lake and developed a standardized risk-calculation methodology across different departments, along with predictive models for the variables of interest and a scenario-simulation algorithm for each risk. Built an interface that presents calculation results visually in a web application, with crawlers to capture up-to-date market data used in the modeling process.",
      imageAlt:
        "Login screen of CTG Brasil's risk web application over a desk with reports and charts",
    },
  },
  {
    slug: "gam",
    client: "GAM",
    title: "GAM",
    tagline: "Score de crédito para farmácias.",
    vertical: "industry-logistics",
    technologies: ["Java", "Spring Boot"],
    roles: ["Avaliação de Score de Crédito", "API para Integrar Sistemas"],
    before:
      "A distribuidora liberava crédito para farmácias parceiras com base em avaliações pontuais, sem um sistema de recomendação integrado aos processos comerciais já usados pela companhia.",
    challenge:
      "Desenvolver uma metodologia de análise e pontuação de crédito para farmácias, disponibilizando os resultados de forma rápida para consulta pela GAM com um sistema de recomendações de crédito.",
    solution:
      "Utilização de técnicas de algoritmos genéticos e de clusterização, cruzando dados geolocalizados com dados de mercado e dados internos, a fim de criar um sistema de score e de recomendação de crédito, atrelando os algoritmos a uma API facilmente integrável com os sistemas da companhia.",
    results:
      "Foi desenvolvido um algoritmo de análise de score de crédito cruzando dados geográficos, dados de censo, dados de transações e dados internos da GAM, assim como uma API integrada a todos os sistemas comerciais da companhia — hoje indispensável para o funcionamento da área de liberação de crédito da empresa, com 25 mil clientes e mais de 40 milhões de consultas.",
    image: "/gam-image.avif",
    imageAlt:
      "Pote de vidro com cápsulas azuis e brancas, representando o setor farmacêutico",
    logo: "/logo-gam.avif",
    en: {
      tagline: "Credit score for pharmacies.",
      roles: ["Credit Score Assessment", "System Integration API"],
      before:
        "The distributor extended credit to partner pharmacies based on one-off assessments, with no recommendation system integrated into the company's existing sales processes.",
      challenge:
        "Build a credit analysis and scoring methodology for pharmacies, making results available for quick lookup by GAM through a credit-recommendation system.",
      solution:
        "Used genetic algorithm and clustering techniques, cross-referencing geolocation data with market and internal data, to build a credit scoring and recommendation system, tying the algorithms to an API that's easy to integrate with the company's systems.",
      results:
        "Built a credit-scoring algorithm that cross-references geographic data, census data, transaction data, and GAM's internal data, along with an API integrated with all of the company's sales systems — now essential to running the company's credit-approval department, with 25,000 clients and over 40 million lookups.",
      imageAlt:
        "A glass jar with blue and white capsules, representing the pharmaceutical sector",
    },
  },
  {
    slug: "sebrae",
    client: "SEBRAE",
    title: "SEBRAE",
    tagline: "Clusterização de competidores e predição de tendências.",
    vertical: "enterprise",
    technologies: ["Java", "React", "Python"],
    roles: ["Desenvolvimento de Relatórios", "Análises de Tendências"],
    before:
      "A análise de concorrência e de tendências de mercado era feita de forma majoritariamente qualitativa, sem o apoio de Inteligência Artificial para identificar padrões em grandes volumes de dados públicos.",
    challenge:
      "Criar relatórios de inteligência de mercado utilizando novas tecnologias, como Inteligência Artificial, para o auxílio à tomada de decisão e análise de tendências do mercado.",
    solution:
      "Utilização de redes neurais competitivas (Mapas de Kohonen) para realizar gráficos de alta complexidade de análise de concorrência, e crawlers de redes sociais para analisar palavras-chave e detectar tendências de mercado, agregando-as a relatórios estratégicos.",
    results:
      "Os relatórios desenvolvidos são utilizados na tomada de decisão e na avaliação de abertura de novos cursos, com base nas análises de tendências e de concorrência do mercado.",
    image: "/sebrae-image.avif",
    imageAlt:
      "Mãos sovando massa de pão, representando o empreendedorismo apoiado pelo SEBRAE",
    en: {
      tagline: "Competitor clustering and trend prediction.",
      roles: ["Report Development", "Trend Analysis"],
      before:
        "Competitor and market-trend analysis was done in a mostly qualitative way, with no Artificial Intelligence support to identify patterns in large volumes of public data.",
      challenge:
        "Create market-intelligence reports using new technologies, such as Artificial Intelligence, to support decision-making and market trend analysis.",
      solution:
        "Used competitive neural networks (Kohonen maps) to generate highly complex competitor-analysis charts, plus social-media crawlers to analyze keywords and detect market trends, feeding them into strategic reports.",
      results:
        "The reports built are used in decision-making and in evaluating whether to launch new courses, based on market trend and competitor analysis.",
      imageAlt:
        "Hands kneading bread dough, representing the entrepreneurship SEBRAE supports",
    },
  },
  {
    slug: "marisol",
    client: "Marisol",
    title: "Marisol",
    tagline: "Mix de produtos e recomendações.",
    vertical: "industry-logistics",
    technologies: ["Java"],
    roles: ["Algoritmos de Análises de Produtos"],
    before:
      "As decisões sobre disposição e mix de produtos eram tomadas com base em experiência da equipe comercial, sem uma análise sistemática das relações entre vendas, características e lucratividade dos produtos.",
    challenge:
      "Identificar possibilidades de melhoria e disposição dos produtos da Marisol, analisando as relações, vendas e características de todos os produtos.",
    solution:
      "Algoritmos de seleção e de análise de relações de produtos, agregados a algoritmos de análise de cesta de produtos, para gerar relatórios de melhorias de disposição dos produtos, com recomendações de novos produtos e melhorias de markup.",
    results:
      "Os relatórios foram amplamente utilizados pela Marisol, juntamente com grafos com todos os produtos e suas comparações e relações. Os relatórios também geravam recomendações de novos produtos, unindo características de produtos que fizeram sucesso e possuíam alta lucratividade.",
    image: "/mixxx.avif",
    imageAlt:
      "Notebook exibindo o grafo de relações entre produtos gerado pelo algoritmo de mix de produtos",
    logo: "/logo-marisol.avif",
    en: {
      tagline: "Product mix and recommendations.",
      roles: ["Product Analysis Algorithms"],
      before:
        "Decisions about product placement and mix were made based on the sales team's experience, with no systematic analysis of the relationships between sales, features, and product profitability.",
      challenge:
        "Identify opportunities to improve Marisol's product placement and mix, analyzing the relationships, sales, and features of every product.",
      solution:
        "Product-relationship selection and analysis algorithms, combined with market-basket analysis algorithms, to generate reports on product-placement improvements, with recommendations for new products and markup improvements.",
      results:
        "The reports were widely used by Marisol, along with graphs mapping every product and its comparisons and relationships. The reports also generated recommendations for new products, combining features from products that were successful and highly profitable.",
      imageAlt:
        "Laptop displaying the product-relationship graph generated by the product-mix algorithm",
    },
  },
]

/** Retorna o case com os campos traduzidos, se o idioma for "en". */
export function localizeCaseStudy(c: CaseStudy, lang: Lang): CaseStudy {
  return lang === "en" ? { ...c, ...c.en } : c
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudiesByVertical(vertical: string) {
  return caseStudies.filter((c) => c.vertical === vertical)
}
