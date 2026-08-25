import type { Lang } from "@/lib/i18n/context"

export type VerticalSlug =
  | "financial-services"
  | "energy"
  | "industry-logistics"
  | "enterprise"

export type Vertical = {
  slug: VerticalSlug
  label: string
  description: string
  en: { description: string }
}

export const verticals: Vertical[] = [
  {
    slug: "financial-services",
    label: "Financial Services",
    description:
      "Crédito, score, prevenção a fraudes e plataformas digitais para bancos, fintechs e instituições financeiras.",
    en: {
      description:
        "Credit, scoring, fraud prevention, and digital platforms for banks, fintechs, and financial institutions.",
    },
  },
  {
    slug: "energy",
    label: "Energy",
    description:
      "Portais comerciais, gestão de contratos e ambientes de monitoramento para o setor de energia.",
    en: {
      description:
        "Sales portals, contract management, and monitoring environments for the energy sector.",
    },
  },
  {
    slug: "industry-logistics",
    label: "Industry & Logistics",
    description:
      "Sistemas de gestão, análise de produtos e otimização de operações para indústria e distribuição.",
    en: {
      description:
        "Management systems, product analysis, and operations optimization for industry and distribution.",
    },
  },
  {
    slug: "enterprise",
    label: "Enterprise",
    description:
      "Dashboards, inteligência de mercado e plataformas corporativas sob medida para grandes empresas.",
    en: {
      description:
        "Dashboards, market intelligence, and tailor-made corporate platforms for large companies.",
    },
  },
]

/** Retorna a vertical com a descrição traduzida, se o idioma for "en". */
export function localizeVertical(v: Vertical, lang: Lang): Vertical {
  return lang === "en" ? { ...v, ...v.en } : v
}

export function getVertical(slug: string) {
  return verticals.find((v) => v.slug === slug)
}
