import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./themesStyle";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  background-repeat: no-repeat;
  background-position: 100%;
    background: ${(props) =>
      props.theme === "light" ? lightTheme.background : darkTheme.background};
    font-family: 'Roboto', sans-serif;
  }
`;
export default GlobalStyle;
