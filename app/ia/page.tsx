import type { Metadata } from "next"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
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
            className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0ea5e9]/10 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto max-w-7xl px-6">
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
          </div>
        </section>

        {/* seja data driven */}
        <section id="sobre-ia" className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Seja data driven
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Seus concorrentes estão usando dados para mais do que gerar
                simples relatórios
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Torne-se data driven, data informed e data inspired: formas de
                  fornecer insights relevantes para equipes que precisam tomar
                  decisões e realizar seu trabalho com base em informações
                  concretas.
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
              </div>
            </div>

            <ul className="grid gap-4 rounded-2xl bg-card p-8 ring-1 ring-border">
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
          </div>
        </section>

        {/* como transformamos dados */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <header className="mb-14 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                Como funciona
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Dos dados brutos aos resultados
              </h2>
            </header>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {dataSteps.map((s, i) => (
                <div key={s.title} className="border-t border-white/10 pt-6">
                  <span className="text-sm font-semibold text-[#4d9fff]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* história e tecnologias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </section>

        {/* soluções */}
        <section
          id="solucoes"
          className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <header className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                Soluções Deepen
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Big Data, Inteligência Artificial, Machine Learning e Análises
                Preditivas
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <article
                  key={s.title}
                  className={cn(
                    "group flex flex-col rounded-2xl border p-7 transition-colors",
                    s.featured
                      ? "border-[#4d9fff]/40 bg-[#1d6fff]/10 sm:col-span-2 lg:col-span-1"
                      : "border-white/10 bg-white/[0.03] hover:border-[#4d9fff]/40 hover:bg-white/[0.06]",
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* consultorias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <header className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Consultorias
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Passo a passo do nosso processo de desenvolvimento
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {consultingSteps.map((s, i) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-card p-7 ring-1 ring-border"
                >
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
              ))}
            </div>

            <div className="mt-16 text-center">
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
            </div>
          </div>
        </section>

        {/* setores */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <header className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                Setores
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                O que podemos fazer pelo seu negócio?
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* cta final */}
        <section className="relative overflow-hidden bg-[#0a1628] py-24 text-white lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <PolygonBackground className="mask-[linear-gradient(to_top,black_55%,transparent)]" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Quem confia na Deepen
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="text-sm font-semibold uppercase tracking-wide text-white/50"
                >
                  {c}
                </span>
              ))}
            </div>

            <h2 className="mt-14 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Pronto para transformar seus dados em decisões?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
