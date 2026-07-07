import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { caseStudies } from "@/lib/cases-data"

export const metadata: Metadata = {
  title: "Cases | PalmSoft Tecnologia",
  description:
    "Conheça os cases da PalmSoft e da Deepen: plataformas de dados, score de crédito, detecção de fraude, dashboards e modelagem preditiva para grandes empresas.",
}

export default function CasesPage() {
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
                Nossos Cases
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Histórias construídas com tecnologia de ponta
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                Visualize cenários futuros no meio competitivo e tenha mais
                previsibilidade de resultados. Conheça alguns dos projetos que
                entregamos para nossos clientes e parceiros.
              </p>
            </div>

            <div className="relative hidden justify-end lg:flex">
              <Image
                src="/main-image.avif"
                alt="Ilustração isométrica de pilhas de dados sendo exploradas"
                width={836}
                height={375}
                priority
                className="w-full max-w-lg drop-shadow-2xl [--float-rotate:0deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </section>

        {/* grid de cases */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-primary/40"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      width={1099}
                      height={635}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    {c.logo ? (
                      <Image
                        src={c.logo}
                        alt={c.client}
                        width={100}
                        height={28}
                        className="h-5 w-auto self-start object-contain"
                      />
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {c.client}
                      </span>
                    )}
                    <h2 className="mt-3 text-xl font-semibold text-foreground">
                      {c.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.tagline}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary">
                      Ver case
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#0a1628] to-[#070f1c] py-20 text-white lg:py-28">
          <PolygonBackground className="mask-[linear-gradient(to_top,transparent,black_18%,black_60%,transparent)]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Quer construir o próximo case com a gente?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70">
              Conte para a gente o desafio do seu negócio e descubra como
              podemos transformá-lo em resultados.
            </p>
            <a
              href="/#contato"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6fff] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
            >
              Entre em contato
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
