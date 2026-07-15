"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  {
    label: "Áreas de Atuação",
    href: "/#areas",
    children: [
      { label: "I.A.", href: "/ia" },
      { label: "Aegis", href: "/aegis" },
    ],
  },
  { label: "Cases", href: "/cases" },
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
        <a href="/#home" aria-label="PalmSoft - Início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  <ChevronDownIcon className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                {/* pt-3 mantém o hover vivo no vão entre o botão e o painel */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="min-w-44 rounded-xl border border-white/10 bg-[#0a1628]/95 p-1.5 shadow-xl backdrop-blur-md">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/#contato"
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
                {item.children && (
                  <ul className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-2">
              <a
                href="/#contato"
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
