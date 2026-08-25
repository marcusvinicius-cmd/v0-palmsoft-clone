import type { Metadata } from "next"
import { pt } from "@/lib/i18n/pt"
import { AegisContent } from "./aegis-content"

export const metadata: Metadata = {
  title: pt.aegis.meta.title,
  description: pt.aegis.meta.description,
}

export default function AegisPage() {
  return <AegisContent />
}
