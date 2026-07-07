import { ArrowRightIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"

const cases = [
  {
    client: "CTG",
    body: "Como ajudamos a CTG a criar uma plataforma de predição de cenários, com mapeamento e coleta de dados, cálculo de risco e criação de modelos preditivos.",
    href: "/cases/ctg-riscos",
  },
  {
    client: "ACCredito",
    body: "Desenvolvimento de aplicativo móvel no setor financeiro, web banking e concessão de crédito empresarial.",
    href: "/cases",
  },
  {
    client: "GAM",
    body: "Desenvolvimento de algoritmos genéticos e de clusterização para criação de um sistema de recomendação de crédito para a distribuidora GAM.",
    href: "/cases/gam",
  },
  {
    client: "ACATE",
    body: "Construímos um ambiente para gestão de associados, empresas e incubadoras, com gráficos e indicadores de áreas de atuação para relevância de mercado.",
    href: "/cases/data-tech",
  },
  {
    client: "Score de Crédito",
    body: "Desenvolvemos algoritmos de score de crédito para análises de clientes com base em seus históricos de inadimplência, saúde de CNAEs e cadeias produtivas.",
    href: "/cases/amcred",
  },
  {
    client: "SEBRAE",
    body: "Realizamos a análise de competidores e ferramentas de predição de tendências através de Inteligência Artificial.",
    href: "/cases/sebrae",
  },
]

export function Cases() {
  return (
    <section id="cases" className="bg-[#070f1c] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Parceiros PalmSoft
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              Construindo histórias e experiências com tecnologia de ponta desde
              2003, esses são alguns de nossos clientes e parceiros que confiam
              na PalmSoft
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={(i % 3) * 100}>
              <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/3 p-7 transition-colors hover:border-[#4d9fff]/40 hover:bg-white/6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4d9fff]">
                  {c.client}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                  {c.body}
                </p>
                <a
                  href={c.href}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white"
                >
                  Ver mais
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/cases"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
          >
            Ver todos os cases
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
