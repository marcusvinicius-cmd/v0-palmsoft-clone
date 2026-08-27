import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PolygonBackground } from "@/components/polygon-background"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { cn } from "@/lib/utils"
import { withBasePath } from "@/lib/base-path"

export const metadata: Metadata = {
  title: "Aegis Access Control | PalmSoft Tecnologia",
  description:
    "Toda a gestão do empreendimento de forma fácil e rápida. O Aegis Access Control torna simples e seguro o processo de gestão do acesso em empreendimentos de aluguel de temporada.",
}

const pains = [
  {
    title: "Transtornos e sobrecarga da governança",
    body: "O processo de gestão de reservas do Airbnb e outras plataformas de curta duração é muito intenso, acarretando transtornos ao condomínio e sobrecarga das equipes de vigilância.",
  },
  {
    title: "Inconsistências de auditoria",
    body: 'Não há um controle de acesso onde podemos auditar quem acessou o empreendimento — ou quem foi que estacionou na vaga errada — e às vezes as controladoras nas áreas comuns ficam "cheias", impedindo o cadastro de novas faciais.',
  },
  {
    title: "Dependência da portaria e processos manuais",
    body: "Se o hóspede chega fora do horário comercial, muitas vezes a portaria não consegue garantir a entrada.",
  },
]

const featureGroups = [
  {
    image: "/aegis_window01.avif",
    imageAlt:
      "Telas do Aegis com a gestão de reservas e o cadastro facial de hóspedes",
    features: [
      {
        title: "Gestão dos imóveis",
        paragraphs: [
          "O sistema permite controle individualizado de cada imóvel no empreendimento, possibilitando ao proprietário controlar diretamente o seu loft ou apartamento — e ainda podendo dar um acesso especial para inquilino ou gestor.",
        ],
      },
      {
        title: "Gestão do acesso a hóspedes",
        paragraphs: [
          "Gerenciamento inteligente das reservas. Depois de cadastrados os dados do hóspede (nome, período de estadia, dados do veículo), o sistema prepara um fluxo de recepção totalmente parametrizável, com mensagens de confirmação da data de chegada, cadastro de facial e processo de check-out.",
          "O processo foi feito para a melhor experiência do hóspede, mas garantindo toda a segurança de que ninguém vai acessar o empreendimento antes ou depois do período definido.",
        ],
      },
    ],
  },
  {
    image: "/aegis_window02.avif",
    imageAlt:
      "Telas do Aegis com o cadastro de prestadores de serviço e a locação de espaços",
    features: [
      {
        title: "Controle de acessos especiais",
        paragraphs: [
          "Além dos hóspedes, o proprietário ou administrador do sistema pode realizar a liberação de acessos recorrentes, como inquilinos, prestadores de serviços e visitantes.",
          'O sistema permite inclusive agenda de forma recorrente para times de limpeza. O modo "repetir reserva" aproveita dados de solicitações anteriores para facilitar ainda mais o uso.',
        ],
      },
      {
        title: "Gestão de acesso para áreas especiais",
        paragraphs: [
          "Esta funcionalidade é especialmente pensada para proprietários e inquilinos. Contudo, com o aumento de ofertas de áreas especiais, como coworking, este módulo pode ser usado para permitir reservas e até realizar cobrança.",
        ],
      },
    ],
  },
  {
    image: "/aegis_window03.avif",
    imageAlt:
      "Telas do Aegis com a gestão de unidades e o status de cada imóvel",
    features: [
      {
        title: "Identificação veicular e controle das garagens",
        paragraphs: [
          "Temos um módulo complementar, integrado ao sistema de câmeras com reconhecimento de caracteres, que pode ser usado para facilitar a entrada e saída de hóspedes, assim como a identificação de veículos no local.",
        ],
      },
      {
        title: "Módulo gestor para múltiplos imóveis",
        paragraphs: [
          "Muitos proprietários preferem terceirizar o trabalho de gestão do imóvel: neste módulo é possível alocar todos ou uma parte dos seus imóveis a um gestor. Caso o gestor atenda a mais de um cliente, ele precisará de apenas um login para gerir todos eles.",
        ],
      },
    ],
  },
  {
    image: "/aegis_window04.avif",
    imageAlt: "Telas do Aegis com o monitoramento dos equipamentos do sistema",
    features: [
      {
        title: "Monitoramento do status dos equipamentos",
        paragraphs: [
          "Não adianta ter o melhor sistema do mundo se a fechadura está offline. Este módulo permite saber o status de cada equipamento no sistema e enviar avisos à zeladoria ou ao time local.",
        ],
      },
      {
        title: "Prestadores de serviços e reservas recorrentes",
        paragraphs: [
          "Cadastre os prestadores de serviços autorizados a acessar o empreendimento (encanadores, diaristas, entregadores) e o período em que eles podem acessar.",
          "Isto é especialmente importante para agendar manutenções ou limpezas em momentos em que o imóvel esteja vago.",
        ],
      },
    ],
  },
]

export default function AegisPage() {
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
                Aegis Access Control
              </p>
              <h1 className="mt-4 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Toda a gestão do empreendimento de forma fácil e rápida
              </h1>
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-white/70">
                <p>
                  Com o Aegis Access Control, todo o processo de gestão do
                  acesso ao empreendimento de aluguel de temporada é simples e
                  seguro.
                </p>
                <p>
                  Temos compatibilidade com a maioria dos equipamentos de
                  mercado, e o acesso é via web, de qualquer lugar do Brasil. A
                  solução pode ser usada diretamente pelo proprietário, ou
                  gestor, e ainda pode ser operada pela equipe de portaria
                  virtual.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={withBasePath("/#contato")}
                  className="inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
                >
                  Entre em contato
                </a>
                <a
                  href="#funcionalidades"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
                >
                  Ver funcionalidades
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>

            <Tilt className="flex justify-center lg:justify-end">
              <Image
                src="/aegis-logo-vertical.avif"
                alt="Logo do Aegis Access Control"
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
                alt="Ilustração de uma pessoa organizando cadastros de acesso"
                width={596}
                height={556}
                className="mx-auto w-full max-w-md"
              />
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Isto é familiar para você ou seu cliente?
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
                Inovação digital para construir ou transformar negócios
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/70">
                Somos uma empresa de software focada no desenvolvimento de
                soluções que incorporam apps de alta tecnologia, impulsionando
                empresas e negócios com inovação digital, mobilidade,
                engajamento e nossa expertise em desenvolvimentos
                multiplataforma, Inteligência Artificial e Big Data.
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
                  Funcionalidades
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Tudo o que o Aegis faz pelo seu empreendimento
                </h2>
              </header>
            </Reveal>

            <div className="flex flex-col gap-20 lg:gap-24">
              {featureGroups.map((g, i) => (
                <Reveal key={g.image}>
                  <div
                    className={cn(
                      "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                      i % 2 === 1 && "lg:[&>div:first-child]:order-2",
                    )}
                  >
                    <div>
                      <Image
                        src={g.image}
                        alt={g.imageAlt}
                        width={846}
                        height={576}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-8">
                      {g.features.map((f) => (
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
                Vamos juntos fazer história
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Ficamos felizes em saber que você possui interesse em entrar em
                contato conosco. Conte para a gente o desafio do seu
                empreendimento.
              </p>
              <a
                href={withBasePath("/#contato")}
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
