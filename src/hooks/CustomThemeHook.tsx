import { useEffect, useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
function useCustomTheme() {
  const { theme, setTheme } = useContext(ThemeContext)
  const element = document.documentElement
  const darkQuery = window.matchMedia('preders-color-scheme:dark')

  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }
  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  return { theme, setTheme }
}

export default useCustomTheme
