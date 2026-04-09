"use client"

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
            {labels.map((item) => (
              <div key={item} className="wireframe-nav__link border-b-2 border-black pb-0.5 cursor-pointer">
                {item.toUpperCase()}
              </div>
            ))}
          </div>
          <LanguageSwitch value={lang} onChange={onLangChange} />
          <ThemeSwitch />
        </div>
      )}
    </nav>
  )
}
