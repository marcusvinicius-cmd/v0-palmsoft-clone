import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"
import { ScrollProgressLine } from "@/components/scroll-progress-line"
import { SpotlightCard } from "@/components/spotlight-card"
import { Tilt } from "@/components/tilt"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Inteligência Artificial & Big Data | Deepen | PalmSoft Tecnologia",
  description:
    "Conheça a Deepen, a área de Inteligência Artificial da PalmSoft. Machine Learning, Big Data e Business Intelligence para transformar seus dados em decisões.",
}

const benefits = [
  "Tome melhores decisões, mais rápido",
  "Obtenha insights reais dos seus dados",
  "Preveja cenários futuros e reduza custos",
  "Aproveite ao máximo o seu tempo e recursos",
  "Antecipe necessidades dos seus consumidores",
  "Melhore a gestão do seu negócio como um todo",
]

const dataSteps = [
  {
    title: "Dados armazenados",
    body: "Analisamos os dados internos e externos que você armazena.",
  },
  {
    title: "Dados de mercado",
    body: "Correlacionamos com bases públicas e privadas de mercado.",
  },
  {
    title: "Inteligência",
    body: "Aplicamos algoritmos de Inteligência Artificial sobre os dados.",
  },
  {
    title: "Análise",
    body: "Entendemos e analisamos perfis e padrões de comportamento.",
  },
  {
    title: "Solução",
    body: "Construímos modelos e soluções sob medida para o seu negócio.",
  },
  {
    title: "Resultados",
    body: "Você toma as melhores decisões com base nos seus dados.",
  },
]

const solutions = [
  {
    title: "Deepen Maps",
    body: "Explore livremente o mapa de todo o Brasil, analise dados demográficos e informações empresariais — concentração de colaboradores, potenciais de consumo, clientes e pontos de interesse — e defina estratégias.",
    featured: true,
  },
  {
    title: "Mix de Produtos",
    body: "Analisamos seus tickets de vendas para entender as forças de atração entre produtos, aumentando o seu potencial de vendas e markup.",
    featured: false,
  },
  {
    title: "Predição de Estoques",
    body: "Projete sua demanda futura com base nos dados históricos da sua empresa e preveja escassez ou excessos nos níveis de estoque.",
    featured: false,
  },
  {
    title: "Score Financeiro",
    body: "Algoritmos avançados geram pontuações precisas e confiáveis para uma avaliação objetiva do risco de crédito de indivíduos ou empresas.",
    featured: false,
  },
  {
    title: "Recomendação de Pedidos",
    body: "Sugestão de produtos personalizados com base no histórico de compras, preferências e comportamento do cliente, melhorando conversão e engajamento.",
    featured: false,
  },
  {
    title: "Predição de Faltas",
    body: "Reduza o número de clientes faltantes e melhore o desempenho da sua equipe, com taxa de precisão de 80% na previsão de faltas.",
    featured: false,
  },
  {
    title: "Otimização de Serviços",
    body: "Algoritmos que otimizam recursos, agendamento de tarefas e alocação de pessoal, maximizando a eficiência operacional e reduzindo custos.",
    featured: false,
  },
  {
    title: "Deepen Energy",
    body: "Controle interativo de operações técnicas e comerciais em uma única plataforma, com informações decisivas ao alcance de quem precisa.",
    featured: false,
  },
  {
    title: "Consultorias",
    body: "Transformamos dados em informações conclusivas: planejamos e executamos PoCs (proof of concept) para validação dos projetos.",
    featured: false,
  },
]

const consultingSteps = [
  {
    title: "Avaliação",
    body: "Reunimos requisitos e avaliamos os dados que você armazena e quais informações externas são necessárias, determinando a abordagem específica para o seu problema.",
  },
  {
    title: "Preparação dos dados",
    body: "Nossa equipe de cientistas de dados transforma e prepara os dados para exploração e modelagem, codificando-os para fornecer o máximo de informações ao modelo.",
  },
  {
    title: "Desenvolvimento do modelo",
    body: "Criamos e testamos diferentes algoritmos de IA e machine learning, escolhendo os que fornecem a melhor precisão e o menor erro para a solução final.",
  },
  {
    title: "POC",
    body: "Elaboramos um protótipo que demonstra o poder da IA aplicada ao seu caso, com avaliação de resultados e levantamento dos ajustes para a entrega final.",
  },
  {
    title: "Integração e implantação",
    body: "Refinamos a eficácia do sistema junto com sua equipe e criamos aplicativos e serviços completos, com visualização amigável ou integrações de back-end via APIs.",
  },
  {
    title: "Avaliação e otimização",
    body: "Mesmo após a entrega continuamos acompanhando os resultados, com testes de segurança, desempenho e precisão, implantando melhorias na acurácia do modelo.",
  },
]

const consultingModels = [
  "Perfil de Clientes",
  "Análise Preditiva",
  "Business Intelligence (B.I.)",
  "Mix de Produtos",
  "Expansão de Negócios",
  "Otimização do Marketing",
  "Captação e Armazenamento de Dados",
  "Soluções Customizadas",
]

const sectors = [
  {
    title: "Varejo",
    items: [
      "Análise do perfil e comportamento do consumidor",
      "Previsão de demanda e estoques",
      "Planejamento e previsão de vendas futuras",
      "Recomendação e composição de mix de produtos",
    ],
  },
  {
    title: "Saúde",
    items: [
      "Mapeamento da ocorrência de doenças por região e carteira",
      "Avaliação de risco de novas doenças e custos atrelados",
      "Probabilidade de evolução de doentes crônicos",
      "Projeção de custos",
    ],
  },
  {
    title: "Setor Público",
    items: [
      "Identificação das parcelas da população com necessidades mais urgentes",
      "Avaliação de políticas públicas de desenvolvimento",
      "Análise do feedback dos cidadãos sobre serviços prestados",
    ],
  },
  {
    title: "Educação",
    items: [
      "Controle e redução da evasão escolar",
      "Captação de novos alunos",
      "Melhores locais para abertura de novas unidades",
      "Níveis de desempenho de alunos",
    ],
  },
  {
    title: "Indústria",
    items: [
      "Manutenção preditiva",
      "People Analytics",
      "Sortimento de produtos",
      "Previsão de estoques e demanda",
    ],
  },
  {
    title: "Imobiliário e Construção",
    items: [
      "Rentabilidade dos imóveis da carteira",
      "Identificação da valorização e desvalorização de regiões",
      "Avaliação do potencial de vendas de um empreendimento",
      "Tendências de compra e locação",
    ],
  },
]

const clients = [
  "CTG Brasil",
  "Vialaser",
  "ACATE",
  "AltoQi",
  "SEBRAE",
  "Resultados Digitais",
  "GAM",
  "Brognoli",
  "Marisol",
]

export default function IAPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 text-white lg:pt-44 lg:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 h-125 w-125 rounded-full bg-[#0ea5e9]/10 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                Deepen — Inteligência Artificial & Big Data
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Dados estão por toda parte
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                Extraia o máximo possível de insights a partir de nossas
                análises e consultorias. Machine Learning, Big Data e
                Inteligência Artificial para transformar seus dados em decisões.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
                >
                  Entre em contato
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
                >
                  Ver soluções
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>

            {/* composição de cards de vidro sobre a malha */}
            <Tilt className="relative mx-auto h-107.5 w-full max-w-md select-none sm:h-120">
              <div aria-hidden="true" className="relative size-full">
              {/* card: rede neural */}
              <div className="absolute left-0 top-0 w-66.25 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    Deep Learning
                  </p>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    treinando
                  </span>
                </div>
                <svg
                  viewBox="0 0 220 110"
                  className="mt-4 w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <g stroke="#4d9fff" strokeOpacity="0.25">
                    {[20, 55, 90].map((y1) =>
                      [12, 41, 69, 98].map((y2) => (
                        <path
                          key={`a-${y1}-${y2}`}
                          d={`M30 ${y1} L110 ${y2}`}
                        />
                      )),
                    )}
                    {[12, 41, 69, 98].map((y1) =>
                      [35, 75].map((y2) => (
                        <path
                          key={`b-${y1}-${y2}`}
                          d={`M110 ${y1} L190 ${y2}`}
                        />
                      )),
                    )}
                  </g>
                  {[20, 55, 90].map((y) => (
                    <circle key={`i-${y}`} cx="30" cy={y} r="6" fill="#1d6fff" fillOpacity="0.55" />
                  ))}
                  {[12, 41, 69, 98].map((y) => (
                    <circle key={`h-${y}`} cx="110" cy={y} r="6" fill="#4d9fff" fillOpacity="0.75" />
                  ))}
                  {[35, 75].map((y) => (
                    <circle key={`o-${y}`} cx="190" cy={y} r="6" fill="#7dd3fc" />
                  ))}
                </svg>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">época 12/20</p>
                    <p className="text-xs text-white/50">loss 0.081 e caindo</p>
                  </div>
                </div>
              </div>

              {/* card: consulta com insight */}
              <div className="absolute right-0 top-40 w-62.5 rounded-2xl border border-white/10 bg-[#0a1628]/80 p-5 shadow-2xl backdrop-blur-md [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1.2s_infinite] motion-reduce:rotate-3 sm:top-44">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                  Consulta
                </p>
                <p className="mt-2 text-sm leading-snug text-white/85">
                  Qual a previsão de demanda para o próximo trimestre?
                </p>
                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {[38, 52, 44, 60, 48, 72, 64].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={
                        i === 5
                          ? "flex-1 rounded-t bg-[#4d9fff]"
                          : "flex-1 rounded-t bg-white/15"
                      }
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-[#4d9fff]">
                  +18%{" "}
                  <span className="font-normal text-white/50">
                    projetados para julho
                  </span>
                </p>
              </div>

              {/* card: pipeline de dados */}
              <div className="absolute bottom-0 left-4 w-47.5 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                  Pipeline
                </p>
                <ul className="mt-3 space-y-2.5 text-[13px]">
                  <li className="flex items-center gap-2 text-white/80">
                    <CheckIcon className="size-3.5 text-emerald-300" />
                    Coleta de dados
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <CheckIcon className="size-3.5 text-emerald-300" />
                    Tratamento
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <span className="size-3.5 animate-pulse rounded-full border-2 border-[#4d9fff]" />
                    Modelo preditivo
                  </li>
                  <li className="flex items-center gap-2 text-white/40">
                    <span className="size-3.5 rounded-full border-2 border-white/20" />
                    Insights
                  </li>
                </ul>
              </div>

              {/* badge: consultas processadas */}
              <div className="absolute bottom-10 right-2 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-4 shadow-xl backdrop-blur-md [--float-rotate:2deg] motion-safe:animate-[hero-float_6s_ease-in-out_2s_infinite] motion-reduce:rotate-2 sm:bottom-12">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#1d6fff]/25 text-sm font-semibold text-[#4d9fff]">
                  <CountUp value={40} suffix="M" duration={1800} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">consultas</p>
                  <p className="text-[11px] text-white/55">
                    processadas em produção
                  </p>
                </div>
              </div>
              </div>
            </Tilt>
          </div>
        </section>

        {/* seja data driven */}
        <section id="sobre-ia" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Seja data driven
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Seus concorrentes estão usando dados para mais do que gerar
                  simples relatórios
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Torne-se data driven, data informed e data inspired: formas
                    de fornecer insights relevantes para equipes que precisam
                    tomar decisões e realizar seu trabalho com base em
                    informações concretas.
                  </p>
                  <p>
                    Somos experts em Machine Learning, Big Data, Inteligência
                    Artificial e Business Intelligence. Te ajudamos a encontrar
                    insights, melhores predições de mercado e recomendações que
                    possibilitam tomar as melhores decisões para o seu negócio.
                  </p>
                  <p>
                    Aplicamos técnicas de Machine Learning, Deep Learning,
                    Inteligência Artificial e Big Data para criar soluções
                    exclusivas que transformam seus dados em informações que
                    aceleram e otimizam a tomada de decisões e a eficiência
                    operacional.
                  </p>
                  <p className="font-medium text-foreground">
                    Como um iceberg, a maior parte do valor dos seus dados está
                    abaixo da superfície — nós mergulhamos para encontrá-lo.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150} className="flex justify-center">
                <Image
                  src="/deepen-iceberg.avif"
                  alt="Iceberg com a maior parte submersa, representando o valor oculto nos dados"
                  width={600}
                  height={763}
                  className="w-full max-w-sm"
                />
              </Reveal>
            </div>

            <Reveal>
            <ul className="mt-16 grid gap-4 rounded-2xl bg-card p-8 ring-1 ring-border sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            </Reveal>
          </div>
        </section>

        {/* como transformamos dados */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mb-10 max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  Como funciona
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Dos dados brutos aos resultados
                </h2>
              </header>
            </Reveal>

            {/* linha que se preenche conforme o scroll percorre os passos */}
            <ScrollProgressLine className="mb-10" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {dataSteps.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 100}
                  className="border-t border-white/10 pt-6"
                >
                  <span className="text-sm font-semibold text-[#4d9fff]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* história e tecnologias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <Reveal
              delay={200}
              className="relative order-last hidden overflow-hidden rounded-2xl ring-1 ring-border lg:block"
            >
              <Image
                src="/deepen-earth.avif"
                alt="A Terra vista do espaço com um satélite em órbita"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Nossa história
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Uma spin-off da PalmSoft
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  A Deepen surgiu como fruto de um projeto de desenvolvimento de
                  software a partir da aplicação de estratégias e tecnologias de
                  visualização interativa de dados desenvolvidas pela PalmSoft,
                  empresa de desenvolvimento mobile de Santa Catarina.
                </p>
                <p>
                  Em outubro de 2016 o projeto se tornou uma startup, passando
                  por processos de seleção e capacitação como Startup Acelerada
                  Inovativa, Sinapse da Inovação (3ª fase), Startup SC e o
                  programa Link Lab da ACATE.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Nossas tecnologias
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                P&D e expertise própria
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Todas as tecnologias e algoritmos que compõem nossas soluções
                  e consultorias foram desenvolvidos por nossa equipe de P&D,
                  fazendo uso de APIs de uso livre ou criadas a partir de
                  expertise própria.
                </p>
                <p>
                  Nossas soluções rodam algoritmos de inteligência artificial,
                  machine learning e deep learning sobre o Big Data dos clientes
                  e bases de mercado. Com processamento multithread e dados in
                  memory, permitem a visualização interativa de dados históricos
                  associados a mapas geográficos e conceituais, gerando análises
                  baseadas em algoritmos.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* soluções */}
        <section
          id="solucoes"
          className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  Soluções Deepen
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Big Data, Inteligência Artificial, Machine Learning e Análises
                  Preditivas
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 100}
                  className={cn(s.featured && "sm:col-span-2 lg:col-span-1")}
                >
                  <SpotlightCard
                    className={cn(
                      "group h-full rounded-2xl border p-7 transition-colors",
                      s.featured
                        ? "border-[#4d9fff]/40 bg-[#1d6fff]/10"
                        : "border-white/10 bg-white/3 hover:border-[#4d9fff]/40 hover:bg-white/6",
                    )}
                  >
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                      {s.body}
                    </p>
                    <a
                      href="/#contato"
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#4d9fff]"
                    >
                      Entre em contato
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* consultorias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Consultorias
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Passo a passo do nosso processo de desenvolvimento
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {consultingSteps.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 100}>
                  <article className="h-full rounded-2xl bg-card p-7 ring-1 ring-border">
                  <span className="text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-foreground">
                Modelos de consultoria disponíveis
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {consultingModels.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* setores */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  Setores
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  O que podemos fazer pelo seu negócio?
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 100}>
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/3 p-7">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4d9fff]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* cta final */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Quem confia na Deepen
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/70"
                >
                  {c}
                </span>
              ))}
            </div>

            <h2 className="mt-14 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Pronto para transformar seus dados em decisões?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Planejamos e executamos PoCs (proof of concept) para validação
              dos projetos. Fale com a gente e descubra o que a Inteligência
              Artificial pode fazer pelo seu negócio.
            </p>
            <a
              href="/#contato"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6fff] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
            >
              Entre em contato
              <ArrowRightIcon className="size-4" />
            </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
