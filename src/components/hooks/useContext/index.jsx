import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setLightTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState("light");

  function toggleTheme() {
    setLightTheme((prevLightTheme) => prevLightTheme === "light" ? "dark" : "light");
  }

const value = {theme: lightTheme, setLightTheme: toggleTheme}
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeContextProvider;
