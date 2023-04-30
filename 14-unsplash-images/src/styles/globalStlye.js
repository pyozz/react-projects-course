import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    transition: all 200ms ease-in-out;
  }

  .dark-mode {
    color: #fff;
    background-color: gray;
  }
`

export default GlobalStyle
