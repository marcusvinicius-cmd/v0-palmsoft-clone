"use client"

import {
  CompassIcon,
  FlaskConicalIcon,
  GaugeIcon,
  RefreshCwIcon,
  RocketIcon,
  RouteIcon,
  SearchCheckIcon,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/context"

// ícones ficam no componente (e não no dicionário) porque são iguais nos dois idiomas
const pillarIcons = [CompassIcon, GaugeIcon, RefreshCwIcon]
const formatIcons = [SearchCheckIcon, FlaskConicalIcon, RocketIcon]

// cada formato tem uma cor própria na borda superior, para diferenciá-los de relance
const formatAccents = ["bg-[#1e9e67]", "bg-primary", "bg-[#7156d9]"]
const formatResultTones = ["bg-[#1e9e67]/8", "bg-primary/8", "bg-[#7156d9]/8"]

/** Título de divisão, com uma linha fina de cada lado. */
function SplitTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-8 flex items-center gap-4 lg:mt-20">
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
      <h3 className="text-center text-sm font-bold uppercase tracking-[0.16em] text-primary">
        {children}
      </h3>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 size-2 shrink-0 rounded-full bg-primary"
    />
  )
}

export function Strategy() {
  const { t } = useLanguage()
  const s = t.home.strategy
  const p = s.pillars
  const f = s.formats
  const j = s.journey

  const pillars = [p.planning, p.development, p.implementation]
  const formats = [f.diagnostic, f.poc, f.solution]
  const journey = [j.diagnose, j.validate, j.implement, j.evolve]

  return (
    <section id="estrategia" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* cabeçalho da metodologia */}
        <Reveal>
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">
              {s.eyebrow}
            </p>
            <h2 className="mt-3 text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-primary">{s.titleAccent}</span> {s.title}
            </h2>
            <p className="mt-6 text-base font-bold uppercase tracking-[0.22em] text-primary sm:text-lg">
              {s.subline}
            </p>
            <p className="mt-6 text-pretty text-lg font-semibold leading-relaxed text-foreground">
              {s.intro.highlight}
            </p>
            <p className="mt-2 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {s.intro.lead}
            </p>
          </header>
        </Reveal>

        {/* os três princípios */}
        <Reveal>
          <SplitTitle>{s.principlesLabel}</SplitTitle>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const PillarIcon = pillarIcons[i]
            return (
              <Reveal key={pillar.title} delay={i * 120}>
                <article className="h-full rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <PillarIcon className="size-6.5" />
                  </span>
                  <p className="mt-4 text-sm font-bold tracking-wide text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Bullet />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* os três formatos de projeto */}
        <Reveal>
          <SplitTitle>{s.formatsLabel}</SplitTitle>
        </Reveal>

        <Reveal>
          <header className="mx-auto mb-8 max-w-3xl text-center">
            <h4 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.formatsIntro.title}
            </h4>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.formatsIntro.body}
            </p>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {formats.map((format, i) => {
            const FormatIcon = formatIcons[i]
            return (
              <Reveal key={format.title} delay={i * 120}>
                <article className="h-full overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
                  <span
                    aria-hidden="true"
                    className={`block h-1 w-full ${formatAccents[i]}`}
                  />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold tracking-wide text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h5 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                          {format.title}
                        </h5>
                      </div>
                      <span className="flex shrink-0 items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-foreground">
                        <FormatIcon
                          aria-hidden="true"
                          className="size-3.5 text-primary"
                        />
                        {format.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {format.tagline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {format.body}
                    </p>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {format.itemsLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {format.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <Bullet />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-6 rounded-2xl p-4 ${formatResultTones[i]}`}>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                        {s.resultLabel}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {format.result}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* nota sobre a flexibilidade da jornada */}
        <Reveal delay={120}>
          <div className="mt-8 flex items-start gap-4 rounded-3xl bg-primary/6 p-6 ring-1 ring-border sm:p-7">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <RouteIcon className="size-6" />
            </span>
            <div>
              <p className="text-base font-semibold text-foreground">
                {s.flexNote.title}
              </p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.flexNote.body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* a jornada em quatro etapas */}
        <Reveal delay={120}>
          <div className="mt-6 grid gap-6 rounded-3xl bg-linear-to-r from-[#061b3a] to-[#0b2a58] p-7 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {journey.map((step) => (
              <div key={step.title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* fecho */}
        <Reveal delay={120}>
          <div className="mt-14 text-center lg:mt-16">
            <p className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {s.closing.title}
            </p>
            <p className="mt-2 text-balance text-xl font-bold text-primary sm:text-2xl">
              {s.closing.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
