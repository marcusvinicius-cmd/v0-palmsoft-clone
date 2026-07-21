import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

const paragraphs = [
  "Por trás de cada solução da PalmSoft está uma equipe técnica altamente qualificada: engenheiros e desenvolvedores seniores que constroem tecnologia desde 2002 e já passaram por praticamente todos os ciclos de inovação do mercado — de apps para PDAs a Inteligência Artificial.",
  "São profissionais premiados e reconhecidos por diversas entidades do setor, com experiência que vai de aplicativos móveis e jogos a plataformas de Big Data, dashboards e sistemas financeiros de missão crítica.",
  "Essa bagagem não é teórica: o time já criou mais de 26 jogos, apps que somam mais de 1,6 milhão de downloads com premiações internacionais, e tecnologias 100% próprias — como o G4Decision, plataforma de visualização de grandes volumes de dados que hoje é uma empresa do grupo, a Deepen.",
  "Nossos empreendedores também participaram de projetos ao lado de grandes empresas, como o MSN Mobile, e desenvolveram um aplicativo de criptografia com registro no INPI. É essa combinação de senioridade, curiosidade técnica e histórico comprovado que garante que cada projeto seja conduzido por quem já resolveu problemas difíceis antes.",
]

export function Team() {
  return (
    <section className="bg-linear-to-b from-[#070f1c] to-[#0a1628] text-white">
      <div className="relative w-full">
        <Image
          src="/img-time.png"
          alt="Equipe PalmSoft trabalhando no escritório"
          width={1920}
          height={962}
          className="w-full opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#070f1c]/60 via-transparent to-[#0a1628]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
        <Reveal>
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              Equipe
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Desenvolvendo tecnologias desde 2002
            </h2>
          </header>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl space-y-5 text-center">
          {paragraphs.map((t, i) => (
            <p key={i} className="text-sm leading-relaxed text-white/70">
              {t}
            </p>
          ))}
          <div className="pt-4">
            <a
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#4d9fff] hover:text-[#4d9fff]"
            >
              Conheça nossa história
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
