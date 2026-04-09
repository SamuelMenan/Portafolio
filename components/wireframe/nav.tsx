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

  const sectionIds = useMemo(() => ['about', 'projects', 'skills', 'testimonials', 'contact'], [])
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [sectionIds])

  function goToSection(id: string) {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`wireframe-nav flex items-center justify-between mt-0 ${mobile ? 'py-3' : 'py-4'}`}>
      <div className="wireframe-nav__brand border border-black px-3 py-1 text-xs font-bold tracking-widest">
        SEMPU
      </div>
      {mobile ? (
        <div className="flex items-center gap-3">
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <div className="wireframe-nav__menu border border-black px-3 py-1 text-xs">MENU</div>
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
        <div className="wireframe-nav__mobile-links pt-3 pb-1 flex items-center gap-3 overflow-x-auto">
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
