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
