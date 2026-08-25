"use client"

import Image from "next/image"
import { Brain, Code2, Database, Share2 } from "lucide-react"
import { Logo } from "@/components/logo"
import { PartnersMarquee } from "@/components/partners-marquee"
import { PolygonBackground } from "@/components/polygon-background"
import { useLanguage } from "@/lib/i18n/context"

export function Hero() {
  const { t } = useLanguage()
  const areas = t.home.hero.areas

  const heroAreas = [
    { icon: Database, ...areas.dataAnalytics },
    { icon: Brain, ...areas.ai },
    { icon: Share2, ...areas.integrations },
    { icon: Code2, ...areas.software },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a1628] text-white"
    >
      <div className="relative flex min-h-140 items-center pt-28 pb-12 lg:min-h-190 lg:pt-36 lg:pb-14">
        {/* foto de fundo, sangrando por toda a seção */}
        <Image
          src="/hero-network2.jpg"
          alt={t.home.hero.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* overlay escuro por cima da foto inteira, para dar legibilidade ao texto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/55 to-[#0a1628]/20"
        />

        {/* malha interativa por cima de tudo, sutil o bastante pra não esconder a foto */}
        <PolygonBackground className="opacity-40" intensity={0.7} />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="max-w-xl">
            <Logo className="h-16 w-auto sm:h-20 lg:h-24" />

            <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              <span className="text-[#4d9fff]">{t.home.hero.titleHighlight}</span>{" "}
              {t.home.hero.titleRest}
            </h1>
            <p className="mt-6 text-pretty text-base leading-relaxed text-white/90">
              {t.home.hero.bodyPre}{" "}
              <span className="font-semibold text-[#4d9fff]">{t.home.hero.bodyHighlight1}</span>{" "}
              {t.home.hero.bodyMid}
            </p>
          </div>

          {/* faixa de áreas: fora do max-w-xl do texto, pra caber numa linha só */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5 lg:flex-nowrap sm:gap-x-8">
            {heroAreas.map((area, i) => (
              <div key={area.top} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-9 w-px bg-white/15 sm:block"
                  />
                )}
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/25 text-white/90">
                  <area.icon className="size-4.5" />
                </span>
                <span className="whitespace-nowrap text-sm font-medium leading-tight text-white/85">
                  {area.top}
                  <br />
                  {area.bottom}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-10 lg:pb-14">
        <PartnersMarquee />
      </div>
    </section>
  )
}
