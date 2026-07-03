"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const SPACING = 96
const JITTER = 0.42
const MOUSE_RADIUS = 220
const MOUSE_FORCE = 46
const EASE = 0.085
const DRIFT = 7
const PULSE_SPEED = 0.55 // px per ms
const PULSE_LIFE = 1600 // ms
const PULSE_WIDTH = 110

type Point = {
  bx: number
  by: number
  x: number
  y: number
  phase: number
  speed: number
  glow: number
}

type Pulse = { x: number; y: number; born: number }

export function PolygonBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let points: Point[] = []
    let cellShades: Float32Array = new Float32Array(0)
    let cellFlips: Uint8Array = new Uint8Array(0)
    const mouse = { x: -9999, y: -9999 }
    let pulses: Pulse[] = []
    let raf = 0
    let running = false
    let inView = true

    function build() {
      const rect = canvas!.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      // one extra ring of points beyond every edge so the mesh has no border
      cols = Math.ceil(width / SPACING) + 3
      rows = Math.ceil(height / SPACING) + 3

      points = []
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const bx = (i - 1) * SPACING + (Math.random() - 0.5) * SPACING * JITTER
          const by = (j - 1) * SPACING + (Math.random() - 0.5) * SPACING * JITTER
          points.push({
            bx,
            by,
            x: bx,
            y: by,
            phase: Math.random() * Math.PI * 2,
            speed: 0.00025 + Math.random() * 0.00035,
            glow: 0,
          })
        }
      }

      const cells = (cols - 1) * (rows - 1)
      cellShades = new Float32Array(cells * 2)
      cellFlips = new Uint8Array(cells)
      for (let c = 0; c < cells; c++) {
        cellShades[c * 2] = Math.random()
        cellShades[c * 2 + 1] = Math.random()
        cellFlips[c] = Math.random() > 0.5 ? 1 : 0
      }
    }

    function update(t: number) {
      for (const p of points) {
        // slow ambient drift so the mesh feels alive even without a cursor
        const driftX = Math.cos(t * p.speed + p.phase) * DRIFT
        const driftY = Math.sin(t * p.speed * 1.3 + p.phase) * DRIFT
        let tx = p.bx + driftX
        let ty = p.by + driftY
        let glow = 0

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_RADIUS && dist > 0.001) {
          const falloff = 1 - dist / MOUSE_RADIUS
          const push = falloff * falloff * MOUSE_FORCE
          tx += (dx / dist) * push
          ty += (dy / dist) * push
          glow = falloff
        }

        for (const pulse of pulses) {
          const age = t - pulse.born
          const ring = age * PULSE_SPEED
          const pd = Math.hypot(p.bx - pulse.x, p.by - pulse.y)
          const band = Math.abs(pd - ring)
          if (band < PULSE_WIDTH) {
            const life = 1 - age / PULSE_LIFE
            const wave = (1 - band / PULSE_WIDTH) * life
            const away = pd > 0.001 ? 1 / pd : 0
            tx += (p.bx - pulse.x) * away * wave * 34
            ty += (p.by - pulse.y) * away * wave * 34
            glow = Math.max(glow, wave)
          }
        }

        p.x += (tx - p.x) * EASE
        p.y += (ty - p.y) * EASE
        p.glow += (glow - p.glow) * 0.12
      }
      pulses = pulses.filter((pulse) => t - pulse.born < PULSE_LIFE)
    }

    function drawTriangle(a: Point, b: Point, c: Point, shade: number) {
      const glow = (a.glow + b.glow + c.glow) / 3
      ctx!.beginPath()
      ctx!.moveTo(a.x, a.y)
      ctx!.lineTo(b.x, b.y)
      ctx!.lineTo(c.x, c.y)
      ctx!.closePath()
      ctx!.fillStyle = `hsla(${218 - glow * 22}, 90%, ${58 + glow * 10}%, ${
        shade * 0.045 + glow * 0.16
      })`
      ctx!.fill()
      ctx!.strokeStyle = `hsla(${216 - glow * 24}, 85%, 70%, ${
        0.05 + glow * 0.38
      })`
      ctx!.stroke()
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      ctx!.lineWidth = 1
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const c = j * (cols - 1) + i
          const p00 = points[j * cols + i]
          const p10 = points[j * cols + i + 1]
          const p01 = points[(j + 1) * cols + i]
          const p11 = points[(j + 1) * cols + i + 1]
          if (cellFlips[c]) {
            drawTriangle(p00, p10, p11, cellShades[c * 2])
            drawTriangle(p00, p11, p01, cellShades[c * 2 + 1])
          } else {
            drawTriangle(p00, p10, p01, cellShades[c * 2])
            drawTriangle(p10, p11, p01, cellShades[c * 2 + 1])
          }
        }
      }

      // vertices near the cursor light up as small nodes
      for (const p of points) {
        if (p.glow < 0.03) continue
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.1 + p.glow * 1.6, 0, Math.PI * 2)
        ctx!.fillStyle = `hsla(200, 95%, 78%, ${p.glow * 0.85})`
        ctx!.fill()
      }
    }

    function frame(t: number) {
      update(t)
      draw()
      raf = running ? requestAnimationFrame(frame) : 0
    }

    function start() {
      if (running || reduceMotion || !inView || document.hidden) return
      running = true
      raf = requestAnimationFrame(frame)
    }

    function stop() {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    function toLocal(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      return { x: e.clientX - rect.left, y: e.clientY - rect.top, rect }
    }

    function onPointerMove(e: PointerEvent) {
      const { x, y } = toLocal(e)
      mouse.x = x
      mouse.y = y
    }

    function onPointerDown(e: PointerEvent) {
      const { x, y, rect } = toLocal(e)
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return
      pulses.push({ x, y, born: performance.now() })
    }

    function onPointerLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function onVisibility() {
      document.hidden ? stop() : start()
    }

    build()
    if (reduceMotion) {
      update(0)
      draw()
    } else {
      start()
    }

    const resizeObserver = new ResizeObserver(() => {
      build()
      if (reduceMotion) {
        update(0)
        draw()
      }
    })
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      inView ? start() : stop()
    })
    intersectionObserver.observe(canvas)

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerdown", onPointerDown, { passive: true })
    document.documentElement.addEventListener("pointerleave", onPointerLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      )
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full mask-[linear-gradient(to_bottom,black_55%,transparent)]",
        className,
      )}
    />
  )
}
