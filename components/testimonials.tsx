"use client"

import { QuoteIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { useLanguage } from "@/lib/i18n/context"

// TODO: substituir pelos depoimentos reais dos clientes (citação, nome, cargo e empresa).
export function Testimonials() {
  const { t } = useLanguage()
  const items = t.home.testimonials.items
  const testimonials = [items.finance, items.energy, items.industry]

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {t.home.testimonials.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.home.testimonials.title}
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <SpotlightCard className="h-full rounded-2xl bg-card p-7 ring-1 ring-border">
                <QuoteIcon className="size-6 text-primary" />
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.quote}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
