import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [theme, setTheme] = useState(() =>
    localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}
