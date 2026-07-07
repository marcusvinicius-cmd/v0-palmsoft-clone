"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const MAX_TILT = 5 // graus

/**
 * Inclina suavemente o conteúdo em direção ao cursor (parallax 3D).
 * O transform fica no wrapper, então animações internas (hero-float)
 * continuam funcionando nos filhos.
 */
export function Tilt({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let running = false

    function loop() {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el!.style.transform = `perspective(1100px) rotateX(${currentY.toFixed(2)}deg) rotateY(${currentX.toFixed(2)}deg)`
      if (
        Math.abs(targetX - currentX) < 0.01 &&
        Math.abs(targetY - currentY) < 0.01 &&
        targetX === 0 &&
        targetY === 0
      ) {
        running = false
        return
      }
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (!running) {
        running = true
        raf = requestAnimationFrame(loop)
      }
    }

    function onPointerMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect()
      // fora de um raio de conforto ao redor do elemento, volta ao neutro
      const margin = 160
      if (
        e.clientX < rect.left - margin ||
        e.clientX > rect.right + margin ||
        e.clientY < rect.top - margin ||
        e.clientY > rect.bottom + margin
      ) {
        targetX = 0
        targetY = 0
        start()
        return
      }
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      targetX = nx * MAX_TILT * 2
      targetY = -ny * MAX_TILT * 2
      start()
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}
