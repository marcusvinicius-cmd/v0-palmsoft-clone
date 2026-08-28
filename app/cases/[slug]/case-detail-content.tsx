"use client"

import Image from "@/components/app-image"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { localizeCaseStudy, type CaseStudy } from "@/lib/cases-data"
import { useLanguage } from "@/lib/i18n/context"
import { withBasePath } from "@/lib/base-path"

export function CaseDetailContent({ case: rawCase }: { case: CaseStudy }) {
  const { t, lang } = useLanguage()
  const c = localizeCaseStudy(rawCase, lang)
  const d = t.cases.detail

  return (
    <>
      <SiteHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-16 text-white lg:pt-44 lg:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeftIcon className="size-4" />
              {d.backToAll}
            </Link>

            <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
              <div>
                {c.logo ? (
                  <span className="inline-flex items-center rounded-full bg-white px-4 py-2">
                    <Image
                      src={c.logo}
                      alt={c.client}
                      width={120}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </span>
                ) : (
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                    {c.client}
                  </p>
                )}
                <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {c.title}
                </h1>
                <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-white/70">
                  {c.tagline}
                </p>
              </div>

              <div className="space-y-7">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                    {d.technologies}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                    {d.ourRole}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.roles.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-[#4d9fff]/30 bg-[#1d6fff]/10 px-4 py-1.5 text-sm text-[#9cc4ff]"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. antes do projeto */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-start gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                1
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {d.steps.before}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {c.before}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. o desafio */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-start gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                2
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {d.steps.challenge}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {c.challenge}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* imagem do projeto */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <Image
              src={c.image}
              alt={c.imageAlt}
              width={1099}
              height={635}
              className="w-full rounded-2xl shadow-2xl ring-1 ring-border"
            />
          </div>
        </section>

        {/* 3. tecnologias & métodos */}
        <section className="bg-card pb-20 lg:pb-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-start gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                3
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {d.steps.solution}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {c.solution}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. impacto */}
        <section className="bg-[#070f1c] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="mx-auto flex size-9 items-center justify-center rounded-full bg-[#1d6fff]/15 text-sm font-semibold text-[#4d9fff]">
              4
            </span>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              {d.steps.impact}
            </p>
            <p className="mt-6 text-pretty text-base leading-relaxed text-white/80">
              {c.results}
            </p>
          </div>
        </section>

        {/* 5. chamada para ação */}
        <section className="bg-linear-to-b from-[#070f1c] to-[#0a1628] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {d.cta.title}
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
              >
                <ArrowLeftIcon className="size-4" />
                {d.cta.back}
              </Link>
              <a
                href={withBasePath("/#contato")}
                className="inline-flex items-center gap-2 rounded-full bg-[#1d6fff] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
              >
                {d.cta.contact}
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
