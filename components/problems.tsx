import { BarChart3Icon, BoxesIcon, BrainCircuitIcon, CogIcon, LayersIcon, Users2Icon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { withBasePath } from "@/lib/base-path"

const problems = [
  {
    quote: "Precisamos transformar dados em decisões.",
    icon: BarChart3Icon,
    asset: "/icon-01-dados-decisoes.svg",
  },
  {
    quote: "Temos processos manuais que precisam ser automatizados.",
    icon: CogIcon,
    asset: "/icon-02-automacao.svg",
  },
  {
    quote: "Precisamos integrar sistemas que não conversam.",
    icon: BoxesIcon,
    asset: "/icon-03-integracao.svg",
  },
  {
    quote: "Temos uma ideia de IA, mas não sabemos como colocá-la em produção.",
    icon: BrainCircuitIcon,
    asset: "/icon-04-ia.svg",
  },
  {
    quote: "Precisamos modernizar um sistema crítico.",
    icon: LayersIcon,
    asset: "/icon-05-modernizacao.svg",
  },
  {
    quote: "Precisamos aumentar nossa capacidade de desenvolvimento.",
    icon: Users2Icon,
    asset: "/icon-06-equipe-dev.svg",
  },
]

export function Problems() {
  return (
    <section id="problemas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Problemas que Ajudamos a Resolver
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Sua empresa enfrenta algum desses desafios?
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.quote} delay={(i % 3) * 100}>
              <SpotlightCard className="h-full rounded-2xl bg-card p-7 ring-1 ring-border transition-colors hover:ring-primary/40">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="size-5.5" />
                    </span>
                    <p className="mt-5 text-pretty text-base font-medium leading-relaxed text-foreground">
                      &ldquo;{p.quote}&rdquo;
                    </p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(p.asset)}
                    alt=""
                    aria-hidden="true"
                    className="size-24 shrink-0"
                  />
                </div>
                <span aria-hidden="true" className="mt-5 block h-px w-8 bg-primary/30" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-base leading-relaxed text-muted-foreground">
            Transformamos processos manuais com tecnologia, eliminando retrabalho, aumentando a produtividade e impulsionando o lucro do seu negócio.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
