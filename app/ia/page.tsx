import type { Metadata } from "next"
import { pt } from "@/lib/i18n/pt"
import { IaContent } from "./ia-content"

export const metadata: Metadata = {
  title: pt.ia.meta.title,
  description: pt.ia.meta.description,
}

export default function IAPage() {
  return <IaContent />
}
