import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./themesStyle";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: ${(props) =>
      props.theme === "light"
        ? lightTheme.background
        : darkTheme.background} center/cover;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
