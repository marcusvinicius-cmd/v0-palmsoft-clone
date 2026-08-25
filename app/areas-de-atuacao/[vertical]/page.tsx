import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCaseStudiesByVertical } from "@/lib/cases-data"
import { getVertical, verticals } from "@/lib/verticals-data"
import { VerticalContent } from "./vertical-content"

export const dynamicParams = false

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>
}): Promise<Metadata> {
  const { vertical } = await params
  const v = getVertical(vertical)
  if (!v) return {}
  return {
    title: `${v.label} | Áreas de Atuação | PalmSoft Tecnologia`,
    description: v.description,
  }
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>
}) {
  const { vertical } = await params
  const v = getVertical(vertical)
  if (!v) notFound()

  const cases = getCaseStudiesByVertical(v.slug)

  return <VerticalContent vertical={v} cases={cases} />
}
