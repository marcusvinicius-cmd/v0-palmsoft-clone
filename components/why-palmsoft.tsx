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
    <section className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.whyPalmsoft.title}
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
