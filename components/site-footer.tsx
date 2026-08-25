"use client"

import { Logo } from "@/components/logo"
import { PolygonBackground } from "@/components/polygon-background"
import { useLanguage } from "@/lib/i18n/context"

function scrollToSection(href: string) {
  if (!href.startsWith("#")) {
    window.location.assign(href)
    return
  }
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (!el) {
    // anchor belongs to the home page; navigate there
    window.location.assign(`/${href}`)
    return
  }
  const header = document.querySelector("header")
  const offset = header ? header.offsetHeight : 0
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: "smooth" })
  history.pushState(null, "", href)
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.93 1.38-.49.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.65.49.24.57.82 1.99.89 2.13.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.18 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.61-.14.25.09 1.6.75 1.87.89.27.14.46.21.53.32.07.12.07.66-.17 1.34z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.69v7.94h2.65zM7.01 9.24a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zM18.34 18.34v-4.36c0-2.33-.5-4.12-3.22-4.12-1.31 0-2.19.72-2.55 1.4h-.04v-1.18h-2.54v8.26h2.65v-4.09c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.23 1.34 2.19v4.02h2.62z" />
    </svg>
  )
}

const socials = [
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/palmsoft_/" },
  { label: "WhatsApp", icon: WhatsappIcon, href: "https://wa.me/5548991158147?text=Gostaria%20de%20saber%20mais%20sobre%20a%20Palmsoft." },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/palmsoft-tecnologia" },
]

export function SiteFooter() {
  const { t } = useLanguage()

  const siteLinks = [
    { label: t.footer.links.home, href: "#home" },
    { label: t.footer.links.areas, href: "#areas" },
    { label: t.footer.links.ia, href: "/ia" },
    { label: t.footer.links.aegis, href: "/aegis" },
    { label: t.footer.links.cases, href: "/cases" },
    { label: t.footer.links.contato, href: "#contato" },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#070f1c] text-white">
      {/* malha rala fechando o site com a mesma assinatura do hero */}
      <PolygonBackground
        spacing={140}
        intensity={0.55}
        className="mask-[linear-gradient(to_top,black_35%,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#4d9fff] hover:text-[#4d9fff]"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            {t.footer.siteMap}
          </h3>
          <ul className="mt-5 space-y-3">
            {siteLinks.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => scrollToSection(l.href)}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            {t.footer.addressTitle}
          </h3>
          <div className="mt-5 space-y-1 text-sm text-white/60">
            <p className="font-medium text-white/80">{t.footer.addressLabel}</p>
            <p>{t.footer.addressLine1}</p>
            <p>{t.footer.addressLine2}</p>
            <p className="mt-4 font-medium text-white/80">{t.footer.emailLabel}</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@palmsoft.com.br&su=Contato%20via%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4d9fff] hover:underline"
            >
              contato@palmsoft.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-xs text-white/40">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
