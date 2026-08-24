import type { VerticalSlug } from "@/lib/verticals-data"

export type CaseStudy = {
  slug: string
  client: string
  title: string
  tagline: string
  vertical: VerticalSlug
  technologies: string[]
  roles: string[]
  before: string
  challenge: string
  solution: string
  results: string
  image: string
  imageAlt: string
  logo?: string
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
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudiesByVertical(vertical: string) {
  return caseStudies.filter((c) => c.vertical === vertical)
}
