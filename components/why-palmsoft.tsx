"use client"

import { LayersIcon, TrendingUpIcon, WrenchIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/context"

export function WhyPalmsoft() {
  const { t } = useLanguage()
  const r = t.home.whyPalmsoft.reasons

  const reasons = [
    { ...r.tailored, icon: WrenchIcon },
    { ...r.endToEnd, icon: LayersIcon },
    { ...r.profitability, icon: TrendingUpIcon },
  ]

  return (
    <section className="bg-linear-to-b from-[#0a1628] to-[#102544] py-14 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.whyPalmsoft.title}
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 120}
              className="border-t border-white/10 pt-5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#1d6fff]/15 text-[#4d9fff]">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {r.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
