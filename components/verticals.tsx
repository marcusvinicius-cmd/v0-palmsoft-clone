import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "ia",
    eyebrow: "Inteligência Artificial",
    title: "Conheça a Deepen, spin off da PalmSoft",
    body: "A Deepen é uma vertical da PalmSoft advinda do projeto chamado inicialmente de G4D (Graphics For Decision), atualmente focada nos ramos de Big Data e Inteligência Artificial.",
    cta: "Explorar",
  },
  {
    id: "lms",
    eyebrow: "Parceria LMS",
    title: "Conheça a Labor Analytics, nossa parceria em soluções LMS",
    body: "Nossos parceiros oficiais no ramo de Labor Management System oferecem soluções com ampla aplicabilidade em diversos setores de negócio.",
    cta: "Visitar site",
  },
  {
    id: "aegis",
    eyebrow: "Serviços Complementares",
    title: "Áreas de fornecimento de know-how e tecnologias",
    body: "Torne seu negócio mais rápido, simples e com melhor custo-benefício com contratos eletrônicos.",
    cta: "Explorar",
    items: ["Assinatura de Documentos", "Enriquecimento de Leads", "Alocação de Squad"],
  },
]

export function Verticals() {
  return (
    <section
      id="aegis"
      className="bg-linear-to-b from-[#0a1628] to-[#102544] py-20 text-white lg:py-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        {features.map((f, i) => (
          <div
            id={f.id}
            key={f.id}
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
                href="#contato"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1d6fff] px-7 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1860e0]"
              >
                {f.cta}
              </a>
            </div>

            <div className="flex justify-center">
              <div className="flex aspect-video w-full max-w-md items-center justify-center rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm">
                <span className="text-4xl font-semibold tracking-tight text-white/30">
                  {f.eyebrow.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
