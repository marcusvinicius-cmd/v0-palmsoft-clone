"use client"

import Image from "next/image"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"
import { ScrollProgressLine } from "@/components/scroll-progress-line"
import { SpotlightCard } from "@/components/spotlight-card"
import { Tilt } from "@/components/tilt"
import { cn } from "@/lib/utils"
import { PartnersMarquee } from "@/components/partners-marquee"
import { useLanguage } from "@/lib/i18n/context"

export function IaContent() {
  const { t } = useLanguage()
  const ia = t.ia

  const benefits = Object.values(ia.dataDriven.benefits)

  const dataSteps = Object.values(ia.howItWorks.steps)

  const solutionsList = [
    { ...ia.solutions.items.maps, featured: true },
    { ...ia.solutions.items.productMix, featured: false },
    { ...ia.solutions.items.inventory, featured: false },
    { ...ia.solutions.items.creditScore, featured: false },
    { ...ia.solutions.items.orderRecommendation, featured: false },
    { ...ia.solutions.items.absencePrediction, featured: false },
    { ...ia.solutions.items.serviceOptimization, featured: false },
    { ...ia.solutions.items.energy, featured: false },
    { ...ia.solutions.items.consulting, featured: false },
  ]

  const consultingSteps = Object.values(ia.consulting.steps)
  const consultingModels = Object.values(ia.consulting.models)
  const sectors = Object.values(ia.sectors.items)

  return (
    <>
      <SiteHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-10 text-white lg:pt-44 lg:pb-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 h-125 w-125 rounded-full bg-[#0ea5e9]/10 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                {ia.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {ia.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                {ia.hero.body}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
                >
                  {ia.hero.contactCta}
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
                >
                  {ia.hero.solutionsCta}
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>

            {/* composição de cards de vidro sobre a malha */}
            <Tilt className="relative mx-auto h-107.5 w-full max-w-md select-none sm:h-120">
              <div aria-hidden="true" className="relative size-full">
                {/* card: rede neural */}
                <div className="absolute left-0 top-0 w-66.25 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                      {ia.hero.cards.deepLearning.label}
                    </p>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                      {ia.hero.cards.deepLearning.status}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 220 110"
                    className="mt-4 w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g stroke="#4d9fff" strokeOpacity="0.25">
                      {[20, 55, 90].map((y1) =>
                        [12, 41, 69, 98].map((y2) => (
                          <path
                            key={`a-${y1}-${y2}`}
                            d={`M30 ${y1} L110 ${y2}`}
                          />
                        )),
                      )}
                      {[12, 41, 69, 98].map((y1) =>
                        [35, 75].map((y2) => (
                          <path
                            key={`b-${y1}-${y2}`}
                            d={`M110 ${y1} L190 ${y2}`}
                          />
                        )),
                      )}
                    </g>
                    {[20, 55, 90].map((y) => (
                      <circle key={`i-${y}`} cx="30" cy={y} r="6" fill="#1d6fff" fillOpacity="0.55" />
                    ))}
                    {[12, 41, 69, 98].map((y) => (
                      <circle key={`h-${y}`} cx="110" cy={y} r="6" fill="#4d9fff" fillOpacity="0.75" />
                    ))}
                    {[35, 75].map((y) => (
                      <circle key={`o-${y}`} cx="190" cy={y} r="6" fill="#7dd3fc" />
                    ))}
                  </svg>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-semibold text-white">{ia.hero.cards.deepLearning.epoch}</p>
                      <p className="text-xs text-white/50">{ia.hero.cards.deepLearning.loss}</p>
                    </div>
                  </div>
                </div>

                {/* card: consulta com insight */}
                <div className="absolute right-0 top-40 w-62.5 rounded-2xl border border-white/10 bg-[#0a1628]/80 p-5 shadow-2xl backdrop-blur-md [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1.2s_infinite] motion-reduce:rotate-3 sm:top-44">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    {ia.hero.cards.query.label}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/85">
                    {ia.hero.cards.query.question}
                  </p>
                  <div className="mt-4 flex h-16 items-end gap-1.5">
                    {[38, 52, 44, 60, 48, 72, 64].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className={
                          i === 5
                            ? "flex-1 rounded-t bg-[#4d9fff]"
                            : "flex-1 rounded-t bg-white/15"
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#4d9fff]">
                    {ia.hero.cards.query.resultPrefix}{" "}
                    <span className="font-normal text-white/50">
                      {ia.hero.cards.query.resultSuffix}
                    </span>
                  </p>
                </div>

                {/* card: pipeline de dados */}
                <div className="absolute bottom-0 left-4 w-47.5 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    {ia.hero.cards.pipeline.label}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-[13px]">
                    <li className="flex items-center gap-2 text-white/80">
                      <CheckIcon className="size-3.5 text-emerald-300" />
                      {ia.hero.cards.pipeline.steps.collection}
                    </li>
                    <li className="flex items-center gap-2 text-white/80">
                      <CheckIcon className="size-3.5 text-emerald-300" />
                      {ia.hero.cards.pipeline.steps.processing}
                    </li>
                    <li className="flex items-center gap-2 text-white">
                      <span className="size-3.5 animate-pulse rounded-full border-2 border-[#4d9fff]" />
                      {ia.hero.cards.pipeline.steps.model}
                    </li>
                    <li className="flex items-center gap-2 text-white/40">
                      <span className="size-3.5 rounded-full border-2 border-white/20" />
                      {ia.hero.cards.pipeline.steps.insights}
                    </li>
                  </ul>
                </div>

                {/* badge: consultas processadas */}
                <div className="absolute bottom-10 right-2 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-4 shadow-xl backdrop-blur-md [--float-rotate:2deg] motion-safe:animate-[hero-float_6s_ease-in-out_2s_infinite] motion-reduce:rotate-2 sm:bottom-12">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#1d6fff]/25 text-sm font-semibold text-[#4d9fff]">
                    <CountUp value={40} suffix="M" duration={1800} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">{ia.hero.cards.badge.label}</p>
                    <p className="text-[11px] text-white/55">
                      {ia.hero.cards.badge.sublabel}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="relative mt-8 lg:mt-8">
            <PartnersMarquee />
          </div>
        </section>
        {/* seja data driven */}
        <section id="sobre-ia" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {ia.dataDriven.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {ia.dataDriven.title}
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {ia.dataDriven.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <p className="font-medium text-foreground">
                    {ia.dataDriven.highlight}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150} className="flex justify-center">
                <Image
                  src="/deepen-iceberg.avif"
                  alt={ia.dataDriven.icebergAlt}
                  width={600}
                  height={763}
                  className="w-full max-w-sm"
                />
              </Reveal>
            </div>

            <Reveal>
              <ul className="mt-16 grid gap-4 rounded-2xl bg-card p-8 ring-1 ring-border sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* como transformamos dados */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mb-10 max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  {ia.howItWorks.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {ia.howItWorks.title}
                </h2>
              </header>
            </Reveal>

            {/* linha que se preenche conforme o scroll percorre os passos */}
            <ScrollProgressLine className="mb-10" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {dataSteps.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 100}
                  className="border-t border-white/10 pt-6"
                >
                  <span className="text-sm font-semibold text-[#4d9fff]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* história e tecnologias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <Reveal
              delay={200}
              className="relative order-last hidden overflow-hidden rounded-2xl ring-1 ring-border lg:block"
            >
              <Image
                src="/deepen-earth.avif"
                alt={ia.history.earthAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {ia.history.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {ia.history.title}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {ia.history.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {ia.tech.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {ia.tech.title}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {ia.tech.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* soluções */}
        <section
          id="solucoes"
          className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  {ia.solutions.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {ia.solutions.title}
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutionsList.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 100}
                  className={cn(s.featured && "sm:col-span-2 lg:col-span-1")}
                >
                  <SpotlightCard
                    className={cn(
                      "group h-full rounded-2xl border p-7 transition-colors",
                      s.featured
                        ? "border-[#4d9fff]/40 bg-[#1d6fff]/10"
                        : "border-white/10 bg-white/3 hover:border-[#4d9fff]/40 hover:bg-white/6",
                    )}
                  >
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                      {s.body}
                    </p>
                    <a
                      href="/#contato"
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#4d9fff]"
                    >
                      {ia.solutions.contactCta}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* consultorias */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {ia.consulting.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {ia.consulting.title}
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {consultingSteps.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 100}>
                  <article className="h-full rounded-2xl bg-card p-7 ring-1 ring-border">
                    <span className="text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-foreground">
                {ia.consulting.modelsTitle}
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {consultingModels.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* setores */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                  {ia.sectors.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {ia.sectors.title}
                </h2>
              </header>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 100}>
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/3 p-7">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4d9fff]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
