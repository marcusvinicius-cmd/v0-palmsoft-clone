"use client"

import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/i18n/context"
import type { Dictionary } from "@/lib/i18n/pt"

// Integração com Calendly em stand by, aguardando aprovação de custo.
// function buildCalendlyUrl(data: FormData) {
//   const area = (data.get("area") as string) ?? ""
//   const baseUrl =
//     area === "Controle de acesso"
//       ? process.env.NEXT_PUBLIC_CALENDLY_URL_ACESSO!
//       : process.env.NEXT_PUBLIC_CALENDLY_URL_GERAL!
//
//   const params = new URLSearchParams({
//     name: (data.get("nome") as string) ?? "",
//     email: (data.get("email") as string) ?? "",
//     a1: area,
//     a2: (data.get("orcamento") as string) ?? "",
//     a3: (data.get("telefone") as string) ?? "",
//   })
//
//   return `${baseUrl}?${params.toString()}`
// }

function buildContactEmailUrl(data: FormData, t: Dictionary["home"]["contact"]) {
  const area = (data.get("area") as string) ?? ""
  const nome = (data.get("nome") as string) ?? ""
  const email = (data.get("email") as string) ?? ""
  const orcamento = (data.get("orcamento") as string) ?? ""
  const telefone = (data.get("telefone") as string) ?? ""

  const l = t.emailBodyLabels
  const body = [
    `${l.area}: ${area}`,
    `${l.nome}: ${nome}`,
    `${l.email}: ${email}`,
    `${l.orcamento}: ${orcamento}`,
    `${l.telefone}: ${telefone}`,
  ].join("\n")

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: "contato@palmsoft.com.br",
    su: t.emailSubject,
    body,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

export function Contact() {
  const { t } = useLanguage()
  const c = t.home.contact
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const areas = Object.values(c.areasOptions)

  function handleSend() {
    const form = formRef.current
    if (!form) return

    const valid = form.checkValidity()
    if (!valid) {
      form.reportValidity()
      return
    }

    const url = buildContactEmailUrl(new FormData(form), c)

    window.open(url, "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <section id="contato" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div className="max-w-md">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {c.subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-card p-8 ring-1 ring-border min-h-[480px]">
          {sent ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-foreground">
                {c.sentTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.sentBody}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="area">
                  {c.fields.area} <span className="text-destructive">*</span>
                </Label>
                <select
                  id="area"
                  name="area"
                  required
                  defaultValue=""
                  className="h-9 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <option value="" disabled className="text-muted-foreground">
                    {c.fields.areaPlaceholder}
                  </option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">
                  {c.fields.nome} <span className="text-destructive">*</span>
                </Label>
                <Input id="nome" name="nome" placeholder={c.fields.nome} required />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                  {c.fields.email} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={c.fields.email}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="orcamento">{c.fields.orcamento}</Label>
                <Input
                  id="orcamento"
                  name="orcamento"
                  placeholder={c.fields.orcamentoPlaceholder}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="telefone">
                  {c.fields.telefone} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder={c.fields.telefonePlaceholder}
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleSend}
                className="mt-2 w-full rounded-full bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {c.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
