import type { Metadata } from "next"
import { pt } from "@/lib/i18n/pt"
import { CasesContent } from "./cases-content"

export const metadata: Metadata = {
  title: pt.cases.meta.title,
  description: pt.cases.meta.description,
}

export default function CasesPage() {
  return <CasesContent />
}
