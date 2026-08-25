"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"

export function HowWeWork() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const s = t.home.howWeWork.steps

  const steps = [
    { number: "01", ...s.understand },
    { number: "02", ...s.design },
    { number: "03", ...s.build },
    { number: "04", ...s.integrate },
    { number: "05", ...s.production },
    { number: "06", ...s.evolve },
  ]

  return (
    <section id="como-trabalhamos" className="bg-[#070f1c] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
              {t.home.howWeWork.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.howWeWork.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              {t.home.howWeWork.subtitle}
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div
            role="tablist"
            aria-label={t.home.howWeWork.ariaLabel}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-white/10"
          >
            {steps.map((s, i) => (
              <button
                key={s.number}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group flex flex-col items-center gap-2 rounded-xl px-3 py-6 text-center transition-colors lg:rounded-none",
                  active === i ? "bg-white/5" : "hover:bg-white/3",
                )}
              >
                <span
                  className={cn(
                    "text-3xl font-bold tabular-nums transition-colors sm:text-4xl",
                    active === i ? "text-[#4d9fff]" : "text-white/30 group-hover:text-white/50",
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active === i ? "text-white" : "text-white/60",
                  )}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/3 p-8 text-center sm:p-10">
            <h3 className="text-xl font-semibold text-white">
              {steps[active].title}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/70">
              {steps[active].body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
