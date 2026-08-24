import { QuoteIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"

// TODO: substituir pelos depoimentos reais dos clientes (citação, nome, cargo e empresa).
const testimonials = [
  {
    quote:
      "A Palmsoft entendeu o problema antes de propor a solução. O resultado entrou em produção alinhado ao que a operação realmente precisava.",
    name: "Diretor de Tecnologia",
    role: "Setor Financeiro",
  },
  {
    quote:
      "Conseguimos sair de processos manuais para uma plataforma que hoje sustenta parte importante da nossa operação diária.",
    name: "Gerente de Operações",
    role: "Setor de Energia",
  },
  {
    quote:
      "O time reúne engenharia, dados e IA na mesma mesa. Isso reduziu o tempo entre a ideia e o projeto rodando de verdade.",
    name: "Head de Produto",
    role: "Indústria",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              EXPERIÊNCIAS REAIS
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              O que dizem nossos clientes e parceiros
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <SpotlightCard className="h-full rounded-2xl bg-card p-7 ring-1 ring-border">
                <QuoteIcon className="size-6 text-primary" />
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
