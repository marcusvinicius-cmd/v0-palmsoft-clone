import { LayersIcon, TrendingUpIcon, WrenchIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    title: "Tecnologia sob medida",
    body: "Não tentamos adaptar o seu problema a uma solução pronta. Entendemos o contexto do negócio e desenvolvemos a tecnologia adequada para cada desafio.",
    icon: WrenchIcon,
  },
  {
    title: "Capacidade de ponta a ponta",
    body: "Reunimos software, dados, IA e integrações em um único time, reduzindo a dependência de diferentes fornecedores e facilitando a execução de projetos complexos.",
    icon: LayersIcon,
  },
  {
    title: "Diminua custos, otimize e melhore a sua lucratividade",
    body: "Transformamos modelos, dados e ideias em soluções que funcionam dentro da operação, integradas aos sistemas, processos e usuários já utilizados por sua empresa.",
    icon: TrendingUpIcon,
  },
]

export function WhyPalmsoft() {
  return (
    <section className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Por que Contratar a Palmsoft
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Por que escolher a Palmsoft
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 120}
              className="border-t border-white/10 pt-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#1d6fff]/15 text-[#4d9fff]">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
