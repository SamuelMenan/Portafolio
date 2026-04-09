'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Props {
  compact?: boolean
}

export default function ThemeSwitch({ compact }: Props) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = activeTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'} ${compact ? 'theme-toggle--compact' : ''}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon theme-toggle__icon--sun material-symbols-rounded" aria-hidden="true">
        light_mode
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon material-symbols-rounded" aria-hidden="true">
        dark_mode
      </span>
      <span className="theme-toggle__thumb" aria-hidden="true">
        <span className="material-symbols-rounded">
          {mounted ? (isDark ? 'dark_mode' : 'light_mode') : 'contrast'}
        </span>
      </span>
    </button>
  )
}
