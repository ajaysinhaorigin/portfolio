import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export const ThemeContext = createContext({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (theme: string) => {},
})
export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light'
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
