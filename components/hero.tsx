import { ChevronDownIcon } from "lucide-react"
import { CountUp } from "@/components/count-up"
import { PolygonBackground } from "@/components/polygon-background"
import { Tilt } from "@/components/tilt"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a1628] pt-32 pb-20 text-white lg:pt-40 lg:pb-28"
    >
      {/* decorative gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#1d4ed8]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0ea5e9]/10 blur-[120px]"
      />

      {/* interactive low-poly mesh */}
      <PolygonBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Inovação digital para construir ou transformar negócios
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-white/70">
            Somos uma empresa de software focada no desenvolvimento de soluções
            que incorporam apps de alta tecnologia.
          </p>
          <div className="mt-8">
            <a
              href="#estrategia"
              className="group inline-flex h-auto items-center gap-2 px-0 text-white transition-colors hover:text-white/80"
            >
              Continue lendo
              <ChevronDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* composição de cards de vidro sobre a malha */}
        <Tilt className="relative mx-auto h-105 w-full max-w-md select-none sm:h-117.5">
          <div aria-hidden="true" className="relative size-full">
          {/* card: modelo preditivo (IA) */}
          <div className="absolute left-0 top-2 w-70 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md [--float-rotate:-4deg] motion-safe:animate-[hero-float_8s_ease-in-out_infinite] motion-reduce:-rotate-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                Modelo preditivo
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                ativo
              </span>
            </div>
            <svg
              viewBox="0 0 240 80"
              className="mt-4 w-full"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hero-spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4d9fff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4d9fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 62 L30 55 L60 58 L90 40 L120 45 L150 26 L180 30 L210 14 L240 18 L240 80 L0 80 Z"
                fill="url(#hero-spark)"
              />
              <path
                d="M0 62 L30 55 L60 58 L90 40 L120 45 L150 26 L180 30 L210 14 L240 18"
                stroke="#4d9fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-2xl font-semibold text-white">94%</p>
                <p className="text-xs text-white/50">acurácia do modelo</p>
              </div>
              <p className="text-xs font-medium text-[#4d9fff]">
                IA &amp; Big Data
              </p>
            </div>
          </div>

          {/* card: código */}
          <div className="absolute right-0 top-36 w-62.5 rounded-2xl border border-white/10 bg-[#0a1628]/80 p-5 font-mono text-[13px] leading-6 shadow-2xl backdrop-blur-md [--float-rotate:3deg] motion-safe:animate-[hero-float_9s_ease-in-out_1.2s_infinite] motion-reduce:rotate-3 sm:top-40">
            <div className="mb-3 flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <p>
              <span className="text-[#c792ea]">const</span>{" "}
              <span className="text-[#82aaff]">produto</span>{" "}
              <span className="text-white/60">=</span>{" "}
              <span className="text-[#c792ea]">await</span>
            </p>
            <p className="pl-4">
              <span className="text-[#82aaff]">palmsoft</span>
              <span className="text-white/60">.</span>
              <span className="text-[#ffcb6b]">desenvolver</span>
              <span className="text-white/60">({"{"}</span>
            </p>
            <p className="pl-8">
              <span className="text-[#f07178]">ideia</span>
              <span className="text-white/60">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;sua&quot;</span>
              <span className="text-white/60">,</span>
            </p>
            <p className="pl-8">
              <span className="text-[#f07178]">prazo</span>
              <span className="text-white/60">:</span>{" "}
              <span className="text-[#c3e88d]">&quot;curto&quot;</span>
            </p>
            <p className="pl-4">
              <span className="text-white/60">{"})"}</span>
            </p>
          </div>

          {/* card: app mobile */}
          <div className="absolute bottom-0 left-6 w-37.5 rounded-[1.4rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md [--float-rotate:-2deg] motion-safe:animate-[hero-float_7s_ease-in-out_0.6s_infinite] motion-reduce:-rotate-2">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
            <div className="space-y-2">
              <div className="h-14 rounded-lg bg-linear-to-br from-[#1d6fff]/60 to-[#0ea5e9]/30" />
              <div className="h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-9 rounded-lg bg-white/8" />
                <div className="h-9 rounded-lg bg-white/8" />
              </div>
              <div className="mt-2 h-7 rounded-full bg-[#1d6fff]/70" />
            </div>
          </div>

          {/* badge: desde 2002 */}
          <div className="absolute bottom-14 right-2 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-4 shadow-xl backdrop-blur-md [--float-rotate:2deg] motion-safe:animate-[hero-float_6s_ease-in-out_2s_infinite] motion-reduce:rotate-2 sm:bottom-16">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#1d6fff]/25 text-sm font-semibold text-[#4d9fff]">
              <CountUp value={20} prefix="+" duration={1800} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">anos</p>
              <p className="text-[11px] text-white/55">inovando desde 2002</p>
            </div>
          </div>
          </div>
        </Tilt>
      </div>
    </section>
  )
}
