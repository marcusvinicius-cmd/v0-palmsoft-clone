import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { Tilt } from "@/components/tilt"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "ia",
    eyebrow: "Inteligência Artificial",
    title: "Conheça a Deepen, spin off da PalmSoft",
    body: "A Deepen é uma vertical da PalmSoft advinda do projeto chamado inicialmente de G4D (Graphics For Decision), atualmente focada nos ramos de Big Data e Inteligência Artificial.",
    cta: "Explorar",
    href: "/ia",
    logo: "/logo-deepen.avif",
    logoAlt: "Deepen",
    logoWidth: 757,
    logoHeight: 445,
  },
  {
    id: "lms",
    eyebrow: "Parceria LMS",
    title: "Conheça a Labor Analytics, nossa parceria em soluções LMS",
    body: "Nossos parceiros oficiais no ramo de Labor Management System oferecem soluções com ampla aplicabilidade em diversos setores de negócio.",
    cta: "Visitar site",
    logo: "/logo512-trimmed.png",
    logoAlt: "Labor Analytics",
    logoWidth: 488,
    logoHeight: 192,
    plainLogo: true,
  },
  {
    id: "aegis",
    eyebrow: "Serviços Complementares",
    title: "Áreas de fornecimento de know-how e tecnologias",
    body: "Torne seu negócio mais rápido, simples e com melhor custo-benefício com contratos eletrônicos.",
    cta: "Explorar",
    href: "/aegis",
    items: ["Assinatura de Documentos", "Enriquecimento de Leads", "Alocação de Squad"],
    logo: "/plurio_final_hd.png",
    logoAlt: "Plurio",
    logoWidth: 4200,
    logoHeight: 1800,
  },
]

export function Verticals() {
  return (
    <section
      id="aegis"
      className="bg-linear-to-b from-[#070f1c] to-[#102544] py-20 text-white lg:py-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        {features.map((f, i) => (
          <Reveal key={f.id}>
            <div
              id={f.id}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2",
                i % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
                {f.eyebrow}
              </p>
              <h3 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {f.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {f.body}
              </p>

              {f.items && (
                <ul className="mt-5 space-y-2">
                  {f.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="size-1.5 rounded-full bg-[#4d9fff]" />
                      {it}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={f.href ?? "#contato"}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
              >
                {f.cta}
              </a>
            </div>

            <div className="flex justify-center">
              <SpotlightCard
                className={cn(
                  "group aspect-video w-full max-w-md rounded-2xl border shadow-2xl transition-colors duration-300",
                  f.plainLogo
                    ? "border-white/10 bg-white/4 backdrop-blur-sm hover:border-[#4d9fff]/40"
                    : "border-border bg-white hover:border-[#4d9fff]/40",
                )}
              >
                <div className="flex size-full items-center justify-center p-10">
                  <Tilt>
                    <Image
                      src={f.logo}
                      alt={f.logoAlt}
                      width={f.logoWidth}
                      height={f.logoHeight}
                      className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16"
                    />
                  </Tilt>
                </div>
              </SpotlightCard>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
