"use client"

import Image from "@/components/app-image"
import { ArrowRightIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { withBasePath } from "@/lib/base-path"

export function AegisContent() {
  const { t } = useLanguage()
  const a = t.aegis
  const g = a.features.groups

  const pains = Object.values(a.pains.items)

  const featureGroups = [
    { image: "/aegis_window01.avif", imageAlt: g.g1.imageAlt, features: [g.g1.f1, g.g1.f2] },
    { image: "/aegis_window02.avif", imageAlt: g.g2.imageAlt, features: [g.g2.f1, g.g2.f2] },
    { image: "/aegis_window03.avif", imageAlt: g.g3.imageAlt, features: [g.g3.f1, g.g3.f2] },
    { image: "/aegis_window04.avif", imageAlt: g.g4.imageAlt, features: [g.g4.f1, g.g4.f2] },
  ]

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
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                {a.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {a.hero.title}
              </h1>
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-white/70">
                {a.hero.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={withBasePath("/#contato")}
                  className="inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
                >
                  {a.hero.contactCta}
                </a>
                <a
                  href="#funcionalidades"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
                >
                  {a.hero.featuresCta}
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>

            <Tilt className="flex justify-center lg:justify-end">
              <Image
                src="/aegis-logo-vertical.avif"
                alt={a.hero.logoAlt}
                width={333}
                height={526}
                priority
                className="w-full max-w-55 drop-shadow-2xl [--float-rotate:0deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] sm:max-w-65 lg:mr-10"
              />
            </Tilt>
          </div>
        </section>

        {/* dores */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <Reveal className="order-last lg:order-first">
              <Image
                src="/aegis-illustration.avif"
                alt={a.pains.illustrationAlt}
                width={596}
                height={556}
                className="mx-auto w-full max-w-md"
              />
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {a.pains.title}
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                {pains.map((p, i) => (
                  <Reveal key={p.title} delay={i * 120}>
                    <h3 className="text-lg font-semibold text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* faixa institucional */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <Image
                src="/aegis-logo-small.avif"
                alt=""
                aria-hidden="true"
                width={93}
                height={110}
                className="mx-auto mb-8 h-14 w-auto opacity-80"
              />
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {a.institutional.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/70">
                {a.institutional.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* funcionalidades */}
        <section id="funcionalidades" className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <header className="mx-auto mb-16 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {a.features.eyebrow}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {a.features.title}
                </h2>
              </header>
            </Reveal>

            <div className="flex flex-col gap-20 lg:gap-24">
              {featureGroups.map((fg, i) => (
                <Reveal key={fg.image}>
                  <div
                    className={cn(
                      "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                      i % 2 === 1 && "lg:[&>div:first-child]:order-2",
                    )}
                  >
                    <div>
                      <Image
                        src={fg.image}
                        alt={fg.imageAlt}
                        width={846}
                        height={576}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-8">
                      {fg.features.map((f) => (
                        <div key={f.title}>
                          <h3 className="text-xl font-semibold text-foreground">
                            {f.title}
                          </h3>
                          {f.paragraphs.map((p) => (
                            <p
                              key={p.slice(0, 24)}
                              className="mt-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* cta final */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-32">
          <Image
            src="/aegis-shapes.avif"
            alt=""
            aria-hidden="true"
            width={665}
            height={590}
            className="pointer-events-none absolute -right-20 top-1/2 hidden w-80 -translate-y-1/2 opacity-60 lg:block"
          />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {a.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {a.cta.body}
              </p>
              <a
                href={withBasePath("/#contato")}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6fff] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
              >
                {a.cta.button}
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
