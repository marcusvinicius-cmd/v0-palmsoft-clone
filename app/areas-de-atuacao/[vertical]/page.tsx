import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { getCaseStudiesByVertical } from "@/lib/cases-data"
import { getVertical, verticals } from "@/lib/verticals-data"

export const dynamicParams = false

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>
}): Promise<Metadata> {
  const { vertical } = await params
  const v = getVertical(vertical)
  if (!v) return {}
  return {
    title: `${v.label} | Áreas de Atuação | PalmSoft Tecnologia`,
    description: v.description,
  }
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>
}) {
  const { vertical } = await params
  const v = getVertical(vertical)
  if (!v) notFound()

  const cases = getCaseStudiesByVertical(v.slug)

  return (
    <>
      <SiteHeader />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-16 text-white lg:pt-44 lg:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#1d4ed8]/20 blur-[120px]"
          />
          <PolygonBackground />

          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              href="/#areas"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeftIcon className="size-4" />
              Áreas de Atuação
            </Link>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Áreas de Atuação
            </p>
            <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {v.label}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
              {v.description}
            </p>
          </div>
        </section>

        {/* lista de cases do setor */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            {cases.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Em breve, novos cases deste setor por aqui.
              </p>
            ) : (
              <div className="space-y-6">
                {cases.map((c, i) => (
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
            )}

            <div className="mt-12 text-center">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                Ver todos os cases
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#0a1628] to-[#070f1c] py-20 text-white lg:py-28">
          <PolygonBackground className="mask-[linear-gradient(to_top,transparent,black_18%,black_60%,transparent)]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Quer construir o próximo case de {v.label} com a gente?
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
