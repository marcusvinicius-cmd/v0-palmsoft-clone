import { ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const areas = [
  {
    title: "Fintechs",
    body: "Desenvolvimento de aplicativos móveis para sistemas de crédito empresariais e soluções financeiras. Criação de portais web para bancos digitais.",
    dark: false,
  },
  {
    title: "Desenvolvimento Sob Demanda",
    body: "Soluções modularizadas a pedido do cliente e super apps com múltiplas integrações customizáveis.",
    dark: false,
  },
  {
    title: "Energia",
    body: "Criações de portais e ambientes de monitoramento para as principais plataformas de contratos energéticos.",
    dark: true,
  },
  {
    title: "Dashboards",
    body: "Dashboards de visualização de dados, plataformas e ambientes administrativos para gestão de clientes e tomadas de decisões estratégicas.",
    dark: true,
  },
  {
    title: "Jogos e Gamificação",
    body: "Aplicativos com mecânicas de gamificação para engajamento de usuários, advergames e minijogos para apoio e treinamento de equipes.",
    dark: false,
  },
  {
    title: "Score de Crédito",
    body: "Soluções para análise de perfis de clientes com base em modelos preditivos de I.A., sistema administrativo para tomadas de decisões e recomendação de crédito.",
    dark: true,
  },
]

export function Areas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Áreas de Atuação
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nossos principais ramos de desenvolvimento
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {areas.map((a) => (
            <article
              key={a.title}
              className={cn(
                "group flex flex-col rounded-2xl p-8 transition-shadow hover:shadow-xl",
                a.dark
                  ? "bg-[#0a1628] text-white"
                  : "bg-card text-card-foreground ring-1 ring-border",
              )}
            >
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p
                className={cn(
                  "mt-3 flex-1 text-sm leading-relaxed",
                  a.dark ? "text-white/70" : "text-muted-foreground",
                )}
              >
                {a.body}
              </p>
              <a
                href="#contato"
                className={cn(
                  "mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium",
                  a.dark ? "text-[#4d9fff]" : "text-primary",
                )}
              >
                Ver mais
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
