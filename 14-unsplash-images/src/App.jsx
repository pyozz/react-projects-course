import React from 'react'
import ToggleTheme from './components/ToggleTheme'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import AppProvider from './context'
import GlobalStyle from './styles/globalStlye'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ToggleTheme />
        <SearchForm />
        <Gallery />
      </QueryClientProvider>
    </AppProvider>
  )
}

export default App
