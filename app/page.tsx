"use client"

import { useEffect, useState } from 'react'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  HomeNavSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections/home"

export default function Page() {
  const [lang, setLang] = useState<'es' | 'en'>('es')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang')
    const nextLang = saved === 'en' ? 'en' : 'es'
    setLang(nextLang)
    document.documentElement.lang = nextLang
  }, [])

  function handleLanguageChange(nextLang: 'es' | 'en') {
    setLang(nextLang)
    localStorage.setItem('portfolio-lang', nextLang)
    document.documentElement.lang = nextLang
  }

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.portfolio-shell > section'))
    if (sections.length === 0) return

    const revealModes = ['fade-up', 'slide-left', 'slide-right'] as const
    const shouldRevealImmediately =
      window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const markAsVisible = (section: HTMLElement) => {
      section.classList.add('section-loaded', 'section-revealed')
    }

    sections.forEach((section, index) => {
      section.classList.add('section-scroll-fx', 'section-scroll-lazy')
      section.dataset.revealMode = revealModes[index % revealModes.length]

      if (index % 2 === 0) {
        section.classList.add('section-scroll-parallax')
      }
    })

    if (shouldRevealImmediately) {
      sections.forEach((section) => {
        markAsVisible(section)
        section.style.setProperty('--section-parallax-y', '0px')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const section = entry.target as HTMLElement
          markAsVisible(section)
          observer.unobserve(section)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    )

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const isVisibleLayout =
        rect.width > 0 && rect.height > 0 && window.getComputedStyle(section).display !== 'none'
      const initiallyVisible = isVisibleLayout && rect.top <= window.innerHeight * 0.88

      if (initiallyVisible) {
        markAsVisible(section)
        return
      }

      observer.observe(section)
    })

    let rafId = 0

    const updateParallax = () => {
      rafId = 0

      const parallaxEnabled =
        window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

      sections.forEach((section) => {
        if (!section.classList.contains('section-scroll-parallax')) return

        if (!parallaxEnabled) {
          section.style.setProperty('--section-parallax-y', '0px')
          return
        }

        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight || 1
        const sectionCenter = rect.top + rect.height / 2
        const normalizedDistance = (sectionCenter - viewportHeight / 2) / viewportHeight
        const clampedDistance = Math.max(-1, Math.min(1, normalizedDistance))
        const parallaxShift = Math.round(clampedDistance * -18)

        section.style.setProperty('--section-parallax-y', `${parallaxShift}px`)
      })
    }

    const queueParallaxUpdate = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()

    window.addEventListener('scroll', queueParallaxUpdate, { passive: true })
    window.addEventListener('resize', queueParallaxUpdate)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', queueParallaxUpdate)
      window.removeEventListener('resize', queueParallaxUpdate)

      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="portfolio-theme min-h-screen">
      {/* DESKTOP VIEW */}
      <section className="hidden lg:block">
        <div className="portfolio-shell max-w-[1180px] mx-auto px-8 xl:px-10 pb-16">
          <HomeNavSection lang={lang} onLangChange={handleLanguageChange} />
          <HeroSection lang={lang} />
          <AboutSection lang={lang} />
          <ProjectsSection lang={lang} />
          <SkillsSection lang={lang} />
          <TestimonialsSection lang={lang} />
          <ContactSection lang={lang} />
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="lg:hidden">
        <div className="portfolio-shell portfolio-shell-mobile max-w-[430px] mx-auto px-4 pb-16">
          <HomeNavSection mobile lang={lang} onLangChange={handleLanguageChange} />
          <HeroSection mobile lang={lang} />
          <AboutSection mobile lang={lang} />
          <ProjectsSection mobile lang={lang} />
          <SkillsSection mobile lang={lang} />
          <TestimonialsSection mobile lang={lang} />
          <ContactSection mobile lang={lang} />
        </div>
      </section>
    </div>
  )
}
