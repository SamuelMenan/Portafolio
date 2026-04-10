"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { LanguageSwitch, ThemeSwitch } from '@/components/controls'

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
  onLangChange: (lang: 'es' | 'en') => void
}

export default function HomeNavSection({ mobile, lang, onLangChange }: Props) {
  const labels =
    lang === 'en'
      ? ['About Me', 'Projects', 'Skills', 'Testimonials', 'Contact']
      : ['Sobre Mí', 'Proyectos', 'Habilidades', 'Testimonios', 'Contacto']
  const menuLabel = lang === 'en' ? 'MENU' : 'MENÚ'

  const sectionIds = useMemo(() => ['about', 'projects', 'skills', 'testimonials', 'contact'], [])
  const [activeSection, setActiveSection] = useState<string>('about')
  const [loadingSection, setLoadingSection] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuBusy, setMenuBusy] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  function getVisibleSectionById(id: string): HTMLElement | null {
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(`section#${id}`))
    return (
      candidates.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0 && window.getComputedStyle(section).display !== 'none'
      }) ?? null
    )
  }

  useEffect(() => {
    const offset = 120

    const updateActiveSection = () => {
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const section = getVisibleSectionById(id)
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
    const section = getVisibleSectionById(id)
    if (!section) return

    setLoadingSection(id)
    setActiveSection(id)
    if (mobile) setMenuOpen(false)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      setLoadingSection((prev) => (prev === id ? null : prev))
    }, 550)
  }

  function toggleMobileMenu() {
    if (menuBusy) return
    setMenuBusy(true)
    setMenuOpen((prev) => !prev)
    window.setTimeout(() => setMenuBusy(false), 380)
  }

  useEffect(() => {
    if (!mobile) setMenuOpen(false)
  }, [mobile])

  useEffect(() => {
    if (!mobile || !menuOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null
      if (!target) return
      if (navRef.current && !navRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [mobile, menuOpen])

  return (
    <nav ref={navRef} className={`wireframe-nav flex items-center justify-between mt-0 ${mobile ? 'py-3 flex-wrap gap-y-2' : 'py-4'}`}>
      <div className="wireframe-nav__brand border border-black px-3 py-1 text-xs font-bold tracking-widest">
        SEMPU
      </div>
      {mobile ? (
        <div className="flex items-center gap-3">
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <button
            type="button"
            data-loading={menuBusy}
            aria-busy={menuBusy}
            className="portfolio-action portfolio-action--ghost wireframe-nav__menu border border-black px-3 py-1 text-xs"
            aria-label={menuOpen ? (lang === 'en' ? 'Close menu' : 'Cerrar menú') : (lang === 'en' ? 'Open menu' : 'Abrir menú')}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-links"
            onClick={toggleMobileMenu}
          >
            <span className="portfolio-action__content">
              <span className="portfolio-action__spinner" aria-hidden="true" />
              <span className="wireframe-nav__menu-label">{menuLabel}</span>
              <span className="material-symbols-rounded wireframe-nav__menu-icon" aria-hidden="true">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </span>
          </button>
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
                data-loading={loadingSection === sectionIds[idx]}
                aria-busy={loadingSection === sectionIds[idx]}
                className={`portfolio-action portfolio-action--ghost wireframe-nav__link border-b-2 border-black pb-0.5 cursor-pointer ${activeSection === sectionIds[idx] ? 'is-active' : ''}`}
              >
                <span className="portfolio-action__content">
                  <span className="portfolio-action__spinner" aria-hidden="true" />
                  <span className="portfolio-action__label">{item.toUpperCase()}</span>
                  <span className="portfolio-action__arrow" aria-hidden="true">→</span>
                </span>
              </button>
            ))}
          </div>
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <ThemeSwitch />
        </div>
      )}

      {mobile && (
        <div
          id="mobile-nav-links"
          className={`wireframe-nav__mobile-links w-full ${menuOpen ? 'is-open' : 'is-closed'}`}
        >
          {labels.map((item, idx) => (
            <button
              key={item}
              type="button"
              onClick={() => goToSection(sectionIds[idx])}
              data-loading={loadingSection === sectionIds[idx]}
              aria-busy={loadingSection === sectionIds[idx]}
              className={`portfolio-action portfolio-action--ghost wireframe-nav__link wireframe-nav__link--mobile border-b-2 border-black pb-0.5 ${activeSection === sectionIds[idx] ? 'is-active' : ''}`}
            >
              <span className="portfolio-action__content">
                <span className="portfolio-action__spinner" aria-hidden="true" />
                <span className="portfolio-action__label">{item.toUpperCase()}</span>
                <span className="portfolio-action__arrow" aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
