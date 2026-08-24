import { MessageSquareQuoteIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"

const problems = [
  "Precisamos transformar dados em decisões.",
  "Temos processos manuais que precisam ser automatizados.",
  "Precisamos integrar sistemas que não conversam.",
  "Temos uma ideia de IA, mas não sabemos como colocá-la em produção.",
  "Precisamos modernizar um sistema crítico.",
  "Precisamos aumentar nossa capacidade de desenvolvimento.",
]

export function Problems() {
  return (
    <section id="problemas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Problemas que Ajudamos a Resolver
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Se o seu negócio esbarra em algum desses desafios, a gente já
              resolveu parecido
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Software, dados e IA aplicados para tirar sua operação do papel
              e colocá-la para rodar, com resultado medível na ponta.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 100}>
              <SpotlightCard className="h-full rounded-2xl bg-card p-7 ring-1 ring-border transition-colors hover:ring-primary/40">
                <MessageSquareQuoteIcon className="size-6 text-primary" />
                <p className="mt-4 flex-1 text-pretty text-base font-medium leading-relaxed text-foreground">
                  &ldquo;{p}&rdquo;
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
