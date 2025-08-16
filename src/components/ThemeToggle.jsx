import { useState, useEffect } from 'react'
import {
  getStoredTheme,
  setStoredTheme,
  getEffectiveTheme,
  THEMES,
  cn,
} from '@/lib'

/**
 * ThemeToggle Component
 *
 * Simple theme toggle using existing utilities from @/lib
 * - Uses getStoredTheme/setStoredTheme for persistence
 * - Uses getEffectiveTheme for system theme resolution
 * - Uses cn() for conditional class names
 * - Uses global CSS classes for styling
 */
export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.SYSTEM)

  useEffect(() => {
    // Initialize from storage and apply theme
    const storedTheme = getStoredTheme()
    setCurrentTheme(storedTheme)

    const applyTheme = () => {
      const effectiveTheme = getEffectiveTheme()
      document.documentElement.classList.toggle(
        'dark',
        effectiveTheme === THEMES.DARK
      )
    }

    applyTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (getStoredTheme() === THEMES.SYSTEM) {
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleTheme = () => {
    // Cycle through themes: Light → Dark → System → Light...
    const newTheme =
      currentTheme === THEMES.LIGHT
        ? THEMES.DARK
        : currentTheme === THEMES.DARK
          ? THEMES.SYSTEM
          : THEMES.LIGHT

    setCurrentTheme(newTheme)
    setStoredTheme(newTheme)

    // Apply theme immediately - resolve the new theme, not the stored one
    const effectiveTheme =
      newTheme === THEMES.SYSTEM
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? THEMES.DARK
          : THEMES.LIGHT
        : newTheme

    document.documentElement.classList.toggle(
      'dark',
      effectiveTheme === THEMES.DARK
    )
  }

  const getThemeIcon = () => {
    switch (currentTheme) {
      case THEMES.LIGHT:
        return '☀️'
      case THEMES.DARK:
        return '🌙'
      case THEMES.SYSTEM:
        return '💻'
      default:
        return '🌙'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn('btn btn-secondary')}
      title={`Current theme: ${currentTheme}`}
    >
      <span className="text-lg">{getThemeIcon()}</span>
    </button>
  )
}
