import colors from '@assets/styles/colors'
import mediaQueries from '@assets/styles/media-queries'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    background-color: ${colors.white};
    box-sizing: border-box;
    color: ${colors.dark};
    font-weight: 400;
    height: 100%;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  #content {
    flex: 1 0 auto;
    margin: auto 15%;
    padding: 2em;

    @media (max-width: ${mediaQueries.medium}) {
      margin: 0;
    }
  }

  footer {
    background-color: black;
    flex-shrink: 0;
  }

  h1 {
    color: ${colors.dark};
    font-size: 2em;
    font-weight: 600;
    margin: 0.4em 0;
  }

  h2 {
    color: ${colors.light};
    font-size: 1.75em;
    margin: 0.4em 0;
  }

  h3 {
    color: ${colors.soft};
    font-size: 1.5em;
    font-weight: 400;
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
