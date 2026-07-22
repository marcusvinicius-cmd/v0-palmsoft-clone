import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

const paragraphs = [
  "Fundada em 2002, a Palmsoft Tecnologia possui uma trajetória consolidada no desenvolvimento de soluções digitais sob demanda. Ao longo dos anos, participamos de projetos em parceria com grandes empresas, incluindo iniciativas como o MSN Mobile, além de desenvolver aplicações móveis, sistemas web, soluções em nuvem e uma tecnologia de criptografia com registro no INPI.",
  "Em 2016, a experiência acumulada no processamento e na visualização de grandes volumes de dados criamos a Deepen, empresa do grupo e nosso braço especializado em Inteligência Artificial e Big Data. Desde então, a Palmsoft ampliou sua atuação em aprendizado de máquina, modelagem preditiva, visão computacional, georreferenciamento, processamento distribuído e análise avançada de dados.",
  "Atualmente, desenvolvemos soluções com LLMs, IA generativa, automação inteligente, análise documental, detecção de anomalias e sistemas de apoio à tomada de decisão. Trabalhamos bastante também com plataformas financeiras, análise de crédito, prevenção de fraudes em tempo real, gestão de riscos e aplicações para os setores de energia, fintechs, logística, varejo e monitoramento operacional.",
  "Conduzimos vários, projetos personalizados para grandes empresas, desenvolvendo produtos próprios e também participamos em criações conjuntas de diversas soluções tecnológicas. Entre elas estão o Aegis Access Control, voltado ao controle de acesso com inteligência artificial, e o Labor Analytics, plataforma de análise e gestão operacional reconhecida pelo Prêmio BBM de Inovação, além de participações em vários outros produtos desenvolvidos em conjunto com parceiros e clientes.",
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
