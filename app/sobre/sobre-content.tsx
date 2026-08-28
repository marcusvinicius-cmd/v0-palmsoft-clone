"use client"

import Image from "@/components/app-image"
import {
  ArrowRightIcon,
  BrainCircuitIcon,
  GlobeIcon,
  MapPinIcon,
  SmartphoneIcon,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { useLanguage } from "@/lib/i18n/context"
import { withBasePath } from "@/lib/base-path"

export function SobreContent() {
  const { t } = useLanguage()
  const s = t.sobre
  const mc = s.hero.milestoneCards
  const m = s.timeline.milestones

  const milestoneCards = [
    {
      ...mc.founding,
      icon: SmartphoneIcon,
      position:
        "left-0 top-0 w-52 [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4",
    },
    {
      ...mc.expansion,
      icon: GlobeIcon,
      position:
        "right-0 top-8 w-52 [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1s_infinite] motion-reduce:rotate-3 sm:top-10",
    },
    {
      ...mc.newOffice,
      icon: MapPinIcon,
      position:
        "bottom-20 left-6 w-52 [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2 sm:bottom-24",
    },
    {
      ...mc.aiService,
      icon: BrainCircuitIcon,
      position:
        "right-2 bottom-0 w-56 [--float-rotate:2deg] motion-safe:animate-[hero-float_6s_ease-in-out_1.6s_infinite] motion-reduce:rotate-2",
    },
  ]

  const milestones = [m.beginning, m.gamesEra, m.enterprisePartnerships, m.bigData, m.today]

  return (
    <>
      <SiteHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-20 text-white lg:pt-44 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                {s.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {s.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                {s.hero.body}
              </p>
            </div>

            {/* composição de cards com os marcos da história */}
            <Tilt className="relative mx-auto h-110 w-full max-w-md select-none sm:h-120">
              <div aria-hidden="true" className="relative size-full">
                {milestoneCards.map((m) => (
                  <div
                    key={m.year}
                    className={`absolute rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md ${m.position}`}
                  >
                    <p className="text-2xl font-bold text-[#4d9fff]">
                      {m.year}:
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-snug text-white">
                      {m.title}
                    </p>
                    <span className="mt-4 flex size-11 items-center justify-center rounded-xl bg-[#1d6fff]/15 text-[#4d9fff]">
                      <m.icon className="size-5.5" />
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        </section>

        {/* linha do tempo */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <header className="mb-14 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {s.timeline.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.timeline.title}
                </h2>
              </header>
            </Reveal>

            <ol className="relative space-y-12 border-l border-border pl-8">
              {milestones.map((m, i) => (
                <Reveal key={m.period} delay={i * 80}>
                  <li className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.44rem] top-1 flex size-3 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {m.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* equipe */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  {s.team.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {s.team.title}
                </h2>
              </header>
            </Reveal>

            {/*
              TODO: substituir por foto real e atualizada da equipe.
              Basta sobrescrever public/img-time.png com o novo arquivo (mesmo nome)
              que a troca é refletida automaticamente aqui e no restante do site.
            */}
            <Reveal delay={80}>
              <Image
                src="/img-time.png"
                alt={s.team.imageAlt}
                width={1920}
                height={962}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </Reveal>

            <Reveal delay={160} className="mx-auto mt-10 max-w-3xl space-y-5 text-center">
              {s.team.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-white/70">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* cta */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.cta.body}
              </p>
              <a
                href={withBasePath("/#contato")}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6fff] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
              >
                {s.cta.button}
                <ArrowRightIcon className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
