import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, LockIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
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

            {/* composição de cards representando os tipos de projeto */}
            <Tilt className="relative mx-auto hidden h-105 w-full max-w-md select-none lg:block">
              <div aria-hidden="true" className="relative size-full">
                {/* card: on-demand */}
                <div className="absolute left-0 top-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                      On-Demand
                    </p>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                      em produção
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    Novo módulo do sistema
                  </p>
                  <div className="mt-3 flex h-20 items-center justify-center rounded-lg bg-linear-to-br from-[#1d6fff]/70 to-[#0ea5e9]/30">
                    <span className="text-xs font-medium text-white/80">
                      Protótipo em revisão
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    Painel personalizado, integrado ao seu fluxo de trabalho.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="flex h-8 items-center justify-center rounded-lg bg-white/8 text-[11px] font-medium text-white/70">
                      Editar
                    </div>
                    <div className="flex h-8 items-center justify-center rounded-lg bg-white/8 text-[11px] font-medium text-white/70">
                      Exportar
                    </div>
                  </div>
                  <div className="mt-3 flex h-8 items-center justify-center rounded-full bg-[#1d6fff]/80 text-xs font-semibold text-white">
                    Solicitar orçamento
                  </div>
                </div>

                {/* card: controle de acesso (Aegis) */}
                <div className="absolute right-0 top-24 w-58 rounded-2xl border border-white/10 bg-[#0a1628]/80 p-5 shadow-2xl backdrop-blur-md [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1.2s_infinite] motion-reduce:rotate-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    Controle de Acesso
                  </p>
                  <div className="relative mx-auto mt-5 flex size-20 items-center justify-center">
                    <span className="absolute size-20 rounded-full bg-[#1d6fff]/25" />
                    <span className="absolute size-13 rounded-full bg-[#1d6fff]/50" />
                    <LockIcon className="relative size-7 text-white" />
                  </div>
                  <p className="mt-5 text-center text-sm font-medium text-white/60">
                    Status:{" "}
                    <span className="font-semibold text-emerald-300">
                      Seguro
                    </span>
                  </p>
                </div>

                {/* card: I.A. as a Service */}
                <div className="absolute bottom-0 left-8 w-58 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                    I.A. as a Service
                  </p>
                  <svg
                    viewBox="0 0 200 100"
                    className="mt-4 w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g stroke="#4d9fff" strokeOpacity="0.3">
                      {[15, 50, 85].map((y1) =>
                        [10, 36, 64, 90].map((y2) => (
                          <path key={`a-${y1}-${y2}`} d={`M25 ${y1} L100 ${y2}`} />
                        )),
                      )}
                      {[10, 36, 64, 90].map((y1) =>
                        [30, 70].map((y2) => (
                          <path key={`b-${y1}-${y2}`} d={`M100 ${y1} L175 ${y2}`} />
                        )),
                      )}
                    </g>
                    {[15, 50, 85].map((y) => (
                      <circle key={`i-${y}`} cx="25" cy={y} r="6" fill="#1d6fff" fillOpacity="0.6" />
                    ))}
                    {[10, 36, 64, 90].map((y) => (
                      <circle key={`h-${y}`} cx="100" cy={y} r="6" fill="#4d9fff" fillOpacity="0.8" />
                    ))}
                    {[30, 70].map((y) => (
                      <circle key={`o-${y}`} cx="175" cy={y} r="6" fill="#7dd3fc" />
                    ))}
                  </svg>
                </div>
              </div>
            </Tilt>
          </div>
        </section>

        {/* lista de cases */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-6 px-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group grid overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-colors duration-500 hover:bg-[#0a1628] hover:ring-[#0a1628] md:grid-cols-2"
                >
                  <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
                    {c.logo ? (
                      <span className="inline-flex w-fit items-center rounded-xl bg-white px-4 py-2.5 shadow-sm">
                        <Image
                          src={c.logo}
                          alt={c.client}
                          width={120}
                          height={32}
                          className="h-6 w-auto object-contain"
                        />
                      </span>
                    ) : (
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-colors duration-500 group-hover:text-[#4d9fff]">
                        {c.client}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {c.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#0a1628] shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-balance text-2xl font-semibold leading-snug text-foreground transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {c.tagline}
                    </h2>

                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors duration-500 group-hover:border-white/30 group-hover:text-white">
                      Ver estudo de caso
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>

                  <div className="relative min-h-70 overflow-hidden md:min-h-0">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
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
