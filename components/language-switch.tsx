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
        <svg className="language-switch__flag" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <rect width="32" height="32" rx="16" fill="#f1c34a" />
          <rect y="6" width="32" height="20" fill="#c63b3b" />
          <rect y="11" width="32" height="10" fill="#ffd25a" />
        </svg>
      </button>
      <button
        type="button"
        className={`language-switch__chip ${value === 'en' ? 'is-active' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={value === 'en'}
        aria-label="Switch language to English"
      >
        <svg className="language-switch__flag" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <rect width="32" height="32" rx="16" fill="#1f3b6d" />
          <path d="M0 4L4 0L32 28V32H28L0 4Z" fill="#ffffff" />
          <path d="M28 0L32 4L4 32H0V28L28 0Z" fill="#ffffff" />
          <path d="M0 2L2 0L32 30V32H30L0 2Z" fill="#c63b3b" />
          <path d="M30 0L32 2L2 32H0V30L30 0Z" fill="#c63b3b" />
          <path d="M12 0H20V10H32V22H20V32H12V22H0V10H12V0Z" fill="#ffffff" />
          <path d="M14 0H18V12H32V20H18V32H14V20H0V12H14V0Z" fill="#c63b3b" />
        </svg>
      </button>
    </div>
  )
}
