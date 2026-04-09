"use client"

import { useEffect, useState } from 'react'
import WireframeNav from "@/components/wireframe/nav"
import WireframeHero from "@/components/wireframe/hero"
import WireframeAbout from "@/components/wireframe/about"
import WireframeProjects from "@/components/wireframe/projects"
import WireframeSkills from "@/components/wireframe/skills"
import WireframeTestimonials from "@/components/wireframe/testimonials"
import WireframeContact from "@/components/wireframe/contact"

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
          <WireframeNav lang={lang} onLangChange={handleLanguageChange} />
          <WireframeHero lang={lang} />
          <WireframeAbout lang={lang} />
          <WireframeProjects lang={lang} />
          <WireframeSkills lang={lang} />
          <WireframeTestimonials lang={lang} />
          <WireframeContact lang={lang} />
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="lg:hidden">
        <div className="portfolio-shell portfolio-shell-mobile max-w-[430px] mx-auto px-4 pb-16">
          <WireframeNav mobile lang={lang} onLangChange={handleLanguageChange} />
          <WireframeHero mobile lang={lang} />
          <WireframeAbout mobile lang={lang} />
          <WireframeProjects mobile lang={lang} />
          <WireframeSkills mobile lang={lang} />
          <WireframeTestimonials mobile lang={lang} />
          <WireframeContact mobile lang={lang} />
        </div>
      </section>
    </div>
  )
}
