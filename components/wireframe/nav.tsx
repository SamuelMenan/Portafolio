"use client"

import { useEffect, useMemo, useState } from 'react'
import ThemeSwitch from '@/components/theme-switch'
import LanguageSwitch from '@/components/language-switch'

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
  onLangChange: (lang: 'es' | 'en') => void
}

export default function WireframeNav({ mobile, lang, onLangChange }: Props) {
  const labels =
    lang === 'en'
      ? ['About Me', 'Projects', 'Skills', 'Testimonials', 'Contact']
      : ['Sobre Mí', 'Proyectos', 'Habilidades', 'Testimonios', 'Contacto']
  const menuLabel = lang === 'en' ? 'MENU' : 'MENÚ'

  const sectionIds = useMemo(() => ['about', 'projects', 'skills', 'testimonials', 'contact'], [])
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const offset = 120

    const updateActiveSection = () => {
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        const top = section.getBoundingClientRect().top
        if (top - offset <= 0) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds])

  function goToSection(id: string) {
    const section = document.getElementById(id)
    if (!section) return
    setActiveSection(id)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`wireframe-nav flex items-center justify-between mt-0 ${mobile ? 'py-3 flex-wrap gap-y-2' : 'py-4'}`}>
      <div className="wireframe-nav__brand border border-black px-3 py-1 text-xs font-bold tracking-widest">
        SEMPU
      </div>
      {mobile ? (
        <div className="flex items-center gap-3">
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <div className="wireframe-nav__menu border border-black px-3 py-1 text-xs">{menuLabel}</div>
          <ThemeSwitch compact />
        </div>
      ) : (
        <div className="flex items-center gap-5 text-xs tracking-widest">
          <div className="wireframe-nav__links flex gap-4">
            {labels.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => goToSection(sectionIds[idx])}
                className={`wireframe-nav__link border-b-2 border-black pb-0.5 cursor-pointer ${activeSection === sectionIds[idx] ? 'is-active' : ''}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <ThemeSwitch />
        </div>
      )}

      {mobile && (
        <div className="wireframe-nav__mobile-links w-full pt-3 pb-1 flex items-center gap-3 overflow-x-auto">
          {labels.map((item, idx) => (
            <button
              key={item}
              type="button"
              onClick={() => goToSection(sectionIds[idx])}
              className={`wireframe-nav__link wireframe-nav__link--mobile border-b-2 border-black pb-0.5 whitespace-nowrap ${activeSection === sectionIds[idx] ? 'is-active' : ''}`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
