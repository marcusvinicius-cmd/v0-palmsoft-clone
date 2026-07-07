"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Card escuro com um brilho radial que segue o cursor e acende a
 * borda mais próxima do mouse. Pensado para fundos #0a1628/#070f1c.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn("group/spot relative overflow-hidden", className)}
    >
      {/* brilho interno seguindo o cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(77, 159, 255, 0.12), transparent 70%)",
        }}
      />
      {/* realce da borda próxima ao cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          padding: 1,
          background:
            "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(77, 159, 255, 0.45), transparent 70%)",
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}
