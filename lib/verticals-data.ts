export type VerticalSlug =
  | "financial-services"
  | "energy"
  | "industry-logistics"
  | "enterprise"

export type Vertical = {
  slug: VerticalSlug
  label: string
  description: string
}

export const verticals: Vertical[] = [
  {
    slug: "financial-services",
    label: "Financial Services",
    description:
      "Crédito, score, prevenção a fraudes e plataformas digitais para bancos, fintechs e instituições financeiras.",
  },
  {
    slug: "energy",
    label: "Energy",
    description:
      "Portais comerciais, gestão de contratos e ambientes de monitoramento para o setor de energia.",
  },
  {
    slug: "industry-logistics",
    label: "Industry & Logistics",
    description:
      "Sistemas de gestão, análise de produtos e otimização de operações para indústria e distribuição.",
  },
  {
    slug: "enterprise",
    label: "Enterprise",
    description:
      "Dashboards, inteligência de mercado e plataformas corporativas sob medida para grandes empresas.",
  },
]

export function getVertical(slug: string) {
  return verticals.find((v) => v.slug === slug)
}
