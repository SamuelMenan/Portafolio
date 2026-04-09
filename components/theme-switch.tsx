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
      className={`border border-black px-3 py-1 text-xs tracking-widest uppercase transition-colors duration-200 hover:bg-black/10 ${compact ? '' : 'font-bold'}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {mounted ? (isDark ? 'MODO CLARO' : 'MODO OSCURO') : 'TEMA'}
    </button>
  )
}
