'use client'

interface Props {
  value: 'es' | 'en'
  onChange: (lang: 'es' | 'en') => void
}

export default function LanguageSwitch({ value, onChange }: Props) {
  return (
    <div className="language-switch" role="group" aria-label="Selector de idioma">
      <button
        type="button"
        className={`language-switch__chip ${value === 'es' ? 'is-active' : ''}`}
        onClick={() => onChange('es')}
        aria-pressed={value === 'es'}
        aria-label="Cambiar idioma a español"
      >
        <span aria-hidden="true">🇪🇸</span>
      </button>
      <button
        type="button"
        className={`language-switch__chip ${value === 'en' ? 'is-active' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={value === 'en'}
        aria-label="Switch language to English"
      >
        <span aria-hidden="true">🇬🇧</span>
      </button>
    </div>
  )
}
