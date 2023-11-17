import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./themesStyle";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  background-repeat: no-repeat;
  background-position: 100%;
  background: linear-gradient(${lightTheme.backgroundUpColor} 0%, ${lightTheme.backgroundDownColor} 100%);
    font-family: 'Roboto', sans-serif;
  }
`;
export default GlobalStyle;
