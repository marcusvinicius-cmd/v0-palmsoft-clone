"use client"

import {
  ActivityIcon,
  CheckCircle2Icon,
  Code2Icon,
  CompassIcon,
  GaugeIcon,
  LayoutTemplateIcon,
  LightbulbIcon,
  LineChartIcon,
  PuzzleIcon,
  RefreshCwIcon,
  SearchIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react"
import Image from "@/components/app-image"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/context"

// ícones ficam no componente (e não no dicionário) porque são iguais nos dois idiomas
const pillarIcons = [CompassIcon, GaugeIcon, RefreshCwIcon]
const itemIcons = [
  [UsersIcon, SearchIcon, LightbulbIcon, TargetIcon],
  [LayoutTemplateIcon, Code2Icon, CheckCircle2Icon, TrendingUpIcon],
  [PuzzleIcon, ActivityIcon, LineChartIcon, RefreshCwIcon],
]

export function Strategy() {
  const { t } = useLanguage()
  const s = t.home.strategy
  const p = s.pillars
  const pillars = [p.planning, p.development, p.implementation]

  return (
    <section
      id="estrategia"
      className="bg-linear-to-b from-[#0a1628] to-[#070f1c] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* coluna esquerda: título e explicação, centralizados na altura dos cards */}
          <Reveal>
            <header className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                {s.eyebrow}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.title}
              </h2>
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-white/70">
                {s.intro.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className={i === 2 ? "font-semibold text-white" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>
          </Reveal>

          {/* coluna direita: os três princípios, um embaixo do outro */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => {
              const PillarIcon = pillarIcons[i]
              return (
                <Reveal key={pillar.title} delay={i * 120}>
                  <article className="rounded-2xl border border-white/10 bg-white/4 p-6 transition-colors hover:border-[#4d9fff]/40">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1d6fff]/15 text-sm font-bold tabular-nums text-[#4d9fff]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold tracking-tight text-[#4d9fff]">
                          {pillar.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-white/80">
                          {pillar.tagline}
                        </p>
                      </div>
                      <PillarIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-[#4d9fff]/70"
                      />
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-5 block h-px w-full bg-white/10"
                    />

                    <p className="mt-5 text-sm leading-relaxed text-white/60">
                      {pillar.body}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {pillar.items.map((item, j) => {
                        const ItemIcon = itemIcons[i][j]
                        return (
                          <li key={item.label} className="flex items-start gap-3">
                            <ItemIcon
                              aria-hidden="true"
                              className="mt-0.5 size-4 shrink-0 text-[#4d9fff]"
                            />
                            <div>
                              <p className="text-sm leading-snug text-white/85">
                                {item.label}
                              </p>
                              {item.note && (
                                <p className="mt-0.5 text-xs leading-snug text-white/45">
                                  {item.note}
                                </p>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* faixa de fechamento com a síntese dos três princípios */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-[#1d6fff] px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
              <div className="flex shrink-0 items-center gap-2.5">
                <Image
                  src="/icon-dark-32x32.png"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="size-6 shrink-0"
                />
                <p className="whitespace-nowrap text-sm font-semibold text-white lg:text-xs xl:text-[13px]">
                  {s.summary.label}
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
                {s.summary.items.map((item) => (
                  <p
                    key={item.highlight}
                    className="text-sm leading-relaxed text-white/85 lg:shrink-0 lg:whitespace-nowrap lg:border-l lg:border-white/25 lg:pl-5 lg:text-xs xl:text-[13px]"
                  >
                    <span className="font-semibold text-white">
                      {item.highlight}
                    </span>{" "}
                    {item.rest}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
