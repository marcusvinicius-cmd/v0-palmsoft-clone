"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    label: "Entender",
    title: "Entendemos o desafio",
    body: "Mergulhamos no contexto do negócio, nos processos, dados e sistemas existentes para identificar o problema real e as oportunidades de melhoria.",
  },
  {
    number: "02",
    label: "Desenhar",
    title: "Desenhamos a solução",
    body: "Definimos arquitetura, tecnologias, integrações, dados necessários e a melhor estratégia para transformar o desafio em uma solução viável.",
  },
  {
    number: "03",
    label: "Construir",
    title: "Construímos e validamos",
    body: "Desenvolvemos de forma incremental, com validações ao longo do projeto para reduzir riscos e garantir aderência às necessidades do negócio.",
  },
  {
    number: "04",
    label: "Integrar",
    title: "Integramos à operação",
    body: "Conectamos a solução aos sistemas, dados e processos da empresa para que a tecnologia faça parte da operação real.",
  },
  {
    number: "05",
    label: "Produção",
    title: "Colocamos em produção",
    body: "Realizamos testes, homologação e implantação, garantindo que a solução esteja preparada para operar com segurança e estabilidade.",
  },
  {
    number: "06",
    label: "Evoluir",
    title: "Evoluímos junto com o cliente",
    body: "Acompanhamos resultados, novas necessidades e oportunidades de evolução, permitindo que a solução cresça junto com o negócio.",
  },
]

export function HowWeWork() {
  const [active, setActive] = useState(0)

  return (
    <section id="como-trabalhamos" className="bg-[#070f1c] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Como Trabalhamos
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Do desafio à solução em produção
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              Cada projeto começa pelo entendimento do problema e dos
              resultados que precisam ser alcançados. A partir disso,
              estruturamos a solução, desenvolvemos, integramos e
              acompanhamos sua evolução.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div
            role="tablist"
            aria-label="Etapas do processo Palmsoft"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-white/10"
          >
            {steps.map((s, i) => (
              <button
                key={s.number}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group flex flex-col items-center gap-2 rounded-xl px-3 py-6 text-center transition-colors lg:rounded-none",
                  active === i ? "bg-white/5" : "hover:bg-white/3",
                )}
              >
                <span
                  className={cn(
                    "text-3xl font-bold tabular-nums transition-colors sm:text-4xl",
                    active === i ? "text-[#4d9fff]" : "text-white/30 group-hover:text-white/50",
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active === i ? "text-white" : "text-white/60",
                  )}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/3 p-8 text-center sm:p-10">
            <h3 className="text-xl font-semibold text-white">
              {steps[active].title}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/70">
              {steps[active].body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
