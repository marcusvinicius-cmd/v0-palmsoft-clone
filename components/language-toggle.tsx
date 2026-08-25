"use client"

import { useLanguage } from "@/lib/i18n/context"
import { cn } from "@/lib/utils"

/**
 * Alterna entre PT/EN. Mesmo componente é reaproveitado no header (desktop
 * e mobile) — o texto de cada página é redesenhado na hora, sem navegação.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.common.langToggleLabel}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-white/20 p-0.5 text-xs font-semibold",
        className,
      )}
    >
      <span
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          lang === "pt" ? "bg-[#4d9fff] text-white" : "text-white/60",
        )}
      >
        PT
      </span>
      <span
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          lang === "en" ? "bg-[#4d9fff] text-white" : "text-white/60",
        )}
      >
        EN
      </span>
    </button>
  )
}
