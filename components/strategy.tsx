"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/context"

export function Strategy() {
  const { t } = useLanguage()
  const p = t.home.strategy.pillars
  const pillars = [p.planning, p.development, p.implementation]

  return (
    <section
      id="estrategia"
      className="bg-linear-to-b from-[#0a1628] to-[#070f1c] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              {t.home.strategy.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.strategy.title}
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.phase}
              delay={i * 120}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="text-lg font-medium text-white">{p.phase}</h3>
              <p className="mt-1 text-2xl font-semibold text-[#4d9fff]">
                {p.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
