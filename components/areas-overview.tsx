"use client"

import { BrainCircuitIcon, CodeIcon, BarChart3Icon, WorkflowIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/context"

/**
 * Faixa não clicável logo após o hero, respondendo à pergunta "o que fazemos".
 */
export function AreasOverview() {
  const { t } = useLanguage()
  const a = t.home.areasOverview.areas

  const areas = [
    { ...a.data, icon: BarChart3Icon },
    { ...a.ai, icon: BrainCircuitIcon },
    { ...a.integrations, icon: WorkflowIcon },
    { ...a.software, icon: CodeIcon },
  ]

  return (
    <section className="bg-[#0a1628] pb-20 pt-4 text-white lg:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mb-14 max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.home.areasOverview.title}
            </h2>
          </header>
        </Reveal>
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#1d6fff]/15 text-[#4d9fff]">
                  <a.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
