import {useContext} from "react"
import { ThemeContext } from "../hooks/useContext";

const ThemeButton = () => {
  const {setLightTheme } = useContext(ThemeContext);


  return (
    <>

        <button onClick={setLightTheme}>Toggle Theme</button>

    </>
  );
};

export default ThemeButton;
