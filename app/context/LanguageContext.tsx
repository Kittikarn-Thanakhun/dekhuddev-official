'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'en' | 'th'

interface LangCtx {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LangCtx>({ lang: 'en', toggleLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('dhd_lang') as Lang | null
    if (saved === 'en' || saved === 'th') setLang(saved)
  }, [])

  const toggleLang = () =>
    setLang(prev => {
      const next: Lang = prev === 'en' ? 'th' : 'en'
      localStorage.setItem('dhd_lang', next)
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
