import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AppContext = createContext(null)

const getInitialMode = () => {
  return window.matchMedia('(prefers-color-scheme:dark)').matches
}

function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode())
  const [searchValue, setSearchValue] = useState('cat')

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
