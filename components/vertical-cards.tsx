"use client"

import { ArrowRightIcon, Building2Icon, LandmarkIcon, TruckIcon, ZapIcon } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { verticals, localizeVertical } from "@/lib/verticals-data"
import { useLanguage } from "@/lib/i18n/context"

const icons = {
  "financial-services": LandmarkIcon,
  energy: ZapIcon,
  "industry-logistics": TruckIcon,
  enterprise: Building2Icon,
} as const

export function VerticalCards() {
  const { t, lang } = useLanguage()

  return (
    <section id="areas" className="bg-[#070f1c] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              {t.home.verticalCards.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.verticalCards.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              {t.home.verticalCards.subtitle}
            </p>
          </header>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((raw, i) => {
            const v = localizeVertical(raw, lang)
            const Icon = icons[v.slug]
            return (
              <Reveal key={v.slug} delay={(i % 4) * 100}>
                <Link href={`/areas-de-atuacao/${v.slug}`} className="block h-full">
                  <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-white/3 p-7 transition-colors hover:border-[#4d9fff]/40 hover:bg-white/6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1d6fff]/15 text-[#4d9fff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d6fff] group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{v.label}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                      {v.description}
                    </p>
                    <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#4d9fff]">
                      {t.home.verticalCards.seeCases}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </SpotlightCard>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
          >
            {t.home.verticalCards.seeAllCases}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
