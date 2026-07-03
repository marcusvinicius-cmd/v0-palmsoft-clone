import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import { PolygonBackground } from "@/components/polygon-background"

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

        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/hero-phones.png"
            alt="Aplicações mobile desenvolvidas pela PalmSoft"
            width={520}
            height={520}
            priority
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
