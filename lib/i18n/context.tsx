"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { pt, type Dictionary } from "./pt"
import { en } from "./en"

export type Lang = "pt" | "en"

const dictionaries: Record<Lang, Dictionary> = { pt, en }

const STORAGE_KEY = "palmsoft-lang"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt")

  // lê a preferência salva assim que monta no navegador (evita mismatch de SSR)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === "pt" || saved === "en") setLangState(saved)
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue no padrão pt
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR"
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignora se não conseguir persistir
    }
  }

  function toggleLang() {
    setLang(lang === "pt" ? "en" : "pt")
  }

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage precisa ser usado dentro de um LanguageProvider")
  }
  return ctx
}
