import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto Regular', sans-serif;
  }

  @font-face {
    font-family: 'Roboto Regular';
    font-weight: 400;
    src: url('/fonts/Roboto/Roboto-Regular.ttf');
  }

  @font-face {
    font-family: 'Roboto Thin';
    font-weight: 100;
    src: url('/fonts/Roboto/Roboto-Thin.ttf');
  }

  @font-face {
    font-family: 'Roboto Thin Italic';
    font-weight: 100;
    src: url('/fonts/Roboto/Roboto-ThinItalic.ttf');
  }

  @font-face {
    font-family: 'Roboto Bold';
    font-weight: 700;
    src: url('/fonts/Roboto/Roboto-Bold.ttf');
  }
`

export default GlobalStyles
