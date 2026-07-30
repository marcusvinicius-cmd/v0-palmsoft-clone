import type { Metadata } from "next"
import Image from "next/image"
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

const milestoneCards = [
  {
    year: "2002",
    title: "Nasce a PalmSoft",
    icon: SmartphoneIcon,
    position:
      "left-0 top-0 w-52 [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4",
  },
  {
    year: "2011",
    title: "Expansão",
    icon: GlobeIcon,
    position:
      "right-0 top-8 w-52 [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1s_infinite] motion-reduce:rotate-3 sm:top-10",
  },
  {
    year: "2014",
    title: "Nova Sede",
    icon: MapPinIcon,
    position:
      "bottom-20 left-6 w-52 [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2 sm:bottom-24",
  },
  {
    year: "2020",
    title: "I.A. as a Service",
    icon: BrainCircuitIcon,
    position:
      "right-2 bottom-0 w-56 [--float-rotate:2deg] motion-safe:animate-[hero-float_6s_ease-in-out_1.6s_infinite] motion-reduce:rotate-2",
  },
]

export const metadata: Metadata = {
  title: "Sobre | PalmSoft Tecnologia",
  description:
    "Conheça a história da PalmSoft: mais de duas décadas desenvolvendo tecnologia, de jogos mobile premiados a plataformas de Big Data e Inteligência Artificial.",
}

const milestones = [
  {
    period: "2002",
    title: "O começo",
    body: "A PalmSoft nasce desenvolvendo soluções em tecnologia com foco em Mobile, Games, Cloud e sistemas baseados na web, criando apps comerciais para PDAs e jogos para celular.",
  },
  {
    period: "2005–2009",
    title: "A era dos jogos",
    body: "Criamos 26 jogos e tecnologias próprias, além do portal Arena 41, que alcançou mais de 100 mil assinantes. Nossos apps somaram mais de 1,6 milhão de downloads e premiações internacionais.",
  },
  {
    period: "2010+",
    title: "Apps empresariais e parcerias",
    body: "Iniciamos o desenvolvimento de apps e games empresariais também para redes sociais, desenvolvemos um aplicativo de criptografia com registro no INPI e participamos de projetos em parceria com grandes empresas, com destaque para o MSN Mobile.",
  },
  {
    period: "2016",
    title: "Big Data e a Deepen",
    body: "O G4Decision, plataforma de visualização de grandes volumes de dados em que 100% das tecnologias foram desenvolvidas internamente, torna-se uma startup — hoje a Deepen, empresa do grupo focada em Inteligência Artificial e Big Data.",
  },
  {
    period: "Hoje",
    title: "Inovação contínua",
    body: "Seguimos desenvolvendo soluções sob demanda, produtos próprios como o Aegis Access Control e aplicações de IA, com uma equipe técnica premiada e reconhecida por diversas entidades do setor.",
  },
]

export default function SobrePage() {
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
                Sobre a PalmSoft
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Mais de duas décadas transformando ideias em tecnologia
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                De jogos mobile premiados a plataformas de Big Data e
                Inteligência Artificial: conheça a trajetória e a equipe que
                constroem a PalmSoft desde 2002.
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
                  Nossa história
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Uma trajetória de inovação
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
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <Reveal>
              <Image
                src="/img-time.png"
                alt="Equipe PalmSoft reunida no escritório"
                width={1920}
                height={962}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                Nossa equipe
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Gente que já resolveu problemas difíceis antes
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70">
                <p>
                  Engenheiros e desenvolvedores seniores, premiados e
                  reconhecidos por diversas entidades do setor, com experiência
                  que vai de aplicativos móveis e jogos a plataformas de Big
                  Data, dashboards e sistemas financeiros de missão crítica.
                </p>
                <p>
                  É essa combinação de senioridade, curiosidade técnica e
                  histórico comprovado que garante que cada projeto seja
                  conduzido com excelência, do planejamento à entrega.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* cta */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Vamos escrever o próximo capítulo juntos?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Conte para a gente o desafio do seu negócio e descubra como
                mais de 20 anos de experiência podem acelerar o seu projeto.
              </p>
              <a
                href="/#contato"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6fff] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
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
