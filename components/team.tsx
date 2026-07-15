import Image from "next/image"
import { Reveal } from "@/components/reveal"

const colLeft = [
  "Desde 2002, a PalmSoft desenvolve soluções em tecnologia, com foco em Mobile, Games, Cloud e sistemas baseados na web.",
  "Começamos criando apps comerciais para PDAs e jogos para celular, com mais de 1,6 milhão de downloads e premiações internacionais.",
  "Entre 2005 e 2009, criamos 26 jogos, tecnologias próprias e o portal Arena 41, com mais de 100 mil assinantes.",
  "Lançamos produtos inovadores como o G4Decision (Big Data) e um app de criptografia com registro no INPI.",
  "Também atuamos em projetos em parceria, como o MSN Mobile, e seguimos com uma equipe técnica premiada e experiente.",
]

const colRight = [
  "Como destaque, o G4Decision, para a visualização de grandes volumes de dados (Big Data), onde desenvolveu 100% das tecnologias utilizadas e hoje é uma empresa do grupo.",
  "A partir de 2010, iniciamos o desenvolvimento de apps e games empresariais também para redes sociais; neste período desenvolvemos ainda um app de criptografia com registro no INPI.",
  "Os empreendedores da PalmSoft também participaram do desenvolvimento de projetos em parceria com outras empresas, criando diversas inovações, tecnologias e soluções, com destaque para o MSN Mobile.",
  "Estes empreendedores hoje são alguns dos diferenciais de nossa equipe técnica, altamente qualificada e com destaques, premiações e reconhecimentos de diversas entidades.",
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

        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          <Reveal className="space-y-5">
            {colLeft.map((t, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70">
                {t}
              </p>
            ))}
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            {colRight.map((t, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70">
                {t}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
