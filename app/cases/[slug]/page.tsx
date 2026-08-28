import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy } from "@/lib/cases-data"
import { CaseDetailContent } from "./case-detail-content"

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) return {}
  return {
    title: `${c.title} | Cases | PalmSoft Tecnologia`,
    description: `${c.client} — ${c.tagline} ${c.challenge}`,
  }
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCaseStudy(slug)
  if (!c) notFound()

  return <CaseDetailContent case={c} />
}
