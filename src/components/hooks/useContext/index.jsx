import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: true,
  setLightTheme: () => {},
});


const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);

  

  function toggleTheme() {
    setLightTheme((prevLightTheme) => !prevLightTheme);
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
