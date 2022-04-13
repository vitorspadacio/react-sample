import { createGlobalStyle } from 'styled-components'
import colors from './assets/styles/colors'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    box-sizing: border-box;
    height: 100%;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  #content {
    flex: 1 0 auto;
    padding: 2em;
  }

  footer {
    background-color: black;
    flex-shrink: 0;
  }

  h1 {
    color: ${colors.darkBlue};
    font-size: 32px;
    margin: 0.4em 0;
  }
  
  p {
    margin: 1em 0;
  }
  
  ul {
    list-style: square;
  
    li {
      margin-left: 1em;
    }
  }
` as any
