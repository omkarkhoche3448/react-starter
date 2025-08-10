import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}
