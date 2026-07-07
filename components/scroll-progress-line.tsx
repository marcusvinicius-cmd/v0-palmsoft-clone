"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Linha horizontal que se preenche conforme a seção pai avança pela
 * viewport, ligando visualmente os passos de um processo.
 */
export function ScrollProgressLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const bar = el.firstElementChild as HTMLElement | null
    if (!bar) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bar.style.transform = "scaleX(1)"
      return
    }

    const section = el.closest("section") ?? el.parentElement!

    function update() {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      // começa quando o topo da seção passa de 85% da tela e completa
      // quando a seção foi percorrida
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.1)
      bar!.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("h-px w-full overflow-hidden bg-white/10", className)}
    >
      <div
        className="h-full w-full origin-left bg-linear-to-r from-[#1d6fff] via-[#4d9fff] to-[#7dd3fc] transition-transform duration-150 ease-out"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
