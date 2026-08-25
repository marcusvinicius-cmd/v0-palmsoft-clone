"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { LanguageToggle } from "@/components/language-toggle"
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { useLanguage } from "@/lib/i18n/context"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { t } = useLanguage()

  const navItems = [
    { label: t.header.nav.home, href: "/#home" },
    { label: t.header.nav.cases, href: "/cases" },
    { label: t.header.nav.sobre, href: "/sobre" },
    {
      label: t.header.nav.produtos,
      href: "/#areas",
      children: [
        { label: t.header.nav.ia, href: "/ia" },
        { label: t.header.nav.aegis, href: "/aegis" },
      ],
    },
  ]

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // na home a logo do header some enquanto o hero (que já tem a logo grande) está
  // visível, e volta suavemente assim que o usuário chega em outra seção
  const [logoVisible, setLogoVisible] = useState(!isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setLogoVisible(true)
      return
    }
    const heroEl = document.getElementById("home")
    if (!heroEl) {
      setLogoVisible(true)
      return
    }
    const onScroll = () => {
      // aparece assim que o fim do hero encosta no header fixo
      setLogoVisible(heroEl.getBoundingClientRect().bottom <= 80)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-[#0a1628]/95 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-lg",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        {/* flex-1 nos dois extremos centraliza o menu de verdade no meio da barra */}
        <div className="flex flex-1 items-center">
          <a
            href="/#home"
            aria-label={t.header.logoAriaLabel}
            tabIndex={logoVisible ? 0 : -1}
            className={cn(
              "transition-opacity duration-500 ease-out",
              logoVisible ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <Logo />
          </a>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7" aria-label={t.header.navAriaLabel}>
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

          <LanguageToggle />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#4d9fff] px-6 py-2 text-sm leading-none font-medium text-white transition-colors hover:bg-[#4d9fff]/90"
          >
            {t.header.cta}
          </a>
        </div>

        {/* espaçador invisível: equilibra o peso do logo pra centralizar o bloco acima */}
        <div className="hidden flex-1 lg:block" aria-hidden="true" />

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
          >
            {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-[#0a1628] px-6 py-4 lg:hidden"
          aria-label={t.header.mobileNavAriaLabel}
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#4d9fff] px-6 py-2 text-sm leading-none font-medium text-white transition-colors hover:bg-[#4d9fff]/90"
              >
                {t.header.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
