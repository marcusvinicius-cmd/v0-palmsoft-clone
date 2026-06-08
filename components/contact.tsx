"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const areas = [
  "Fintechs",
  "Desenvolvimento Sob Demanda",
  "Energia",
  "Dashboards",
  "Jogos e Gamificação",
  "Score de Crédito",
  "Inteligência Artificial",
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div className="max-w-md">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Contato
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Vamos juntos fazer história
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ficamos felizes em saber que possui interesse de entrar em contato
            conosco :)
          </p>
        </div>

        <div className="rounded-2xl bg-card p-8 ring-1 ring-border">
          {sent ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-foreground">
                Mensagem enviada!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Obrigado pelo contato. Em breve nossa equipe retornará.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="area">
                  Área de interesse <span className="text-destructive">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Selecione uma área" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((a) => (
                      <SelectItem key={a} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">
                  Nome completo <span className="text-destructive">*</span>
                </Label>
                <Input id="nome" name="nome" placeholder="Nome completo" required />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="orcamento">Orçamento previsto</Label>
                <Input
                  id="orcamento"
                  name="orcamento"
                  placeholder="Insira um número"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="telefone">
                  Telefone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(DDD) Telefone"
                  required
                />
              </div>

              <Button type="submit" className="mt-2 w-full rounded-full">
                Enviar
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
