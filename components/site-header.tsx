"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "I.A.", href: "#aegis" },
  { label: "Aegis", href: "#aegis" },
  { label: "Cases", href: "#cases" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-[#0a1628]/95 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-lg",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" aria-label="PalmSoft - Início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-1.5 text-sm font-medium text-[#0a1628] transition-colors hover:bg-white/90"
          >
            Contato
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-[#0a1628] px-6 py-4 lg:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-1.5 text-sm font-medium text-[#0a1628] transition-colors hover:bg-white/90"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
