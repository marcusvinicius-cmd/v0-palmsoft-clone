import type { Metadata } from "next"
import { pt } from "@/lib/i18n/pt"
import { SobreContent } from "./sobre-content"

export const metadata: Metadata = {
  title: pt.sobre.meta.title,
  description: pt.sobre.meta.description,
}

export default function SobrePage() {
  return <SobreContent />
}
