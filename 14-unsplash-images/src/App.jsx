import React from 'react'
import ToggleTheme from './components/ToggleTheme'
import AppProvider from './context'
import GlobalStyle from './styles/globalStlye'

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <ToggleTheme />
    </AppProvider>
  )
}

export default App
