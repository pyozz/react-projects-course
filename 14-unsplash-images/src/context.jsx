import React from 'react'
import { createContext, useState } from 'react'

export const AppContext = createContext(null)

function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchValue, setSearchValue] = useState('cat')

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
