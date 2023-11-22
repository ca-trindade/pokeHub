import { useContext } from "react";
import { ThemeContext } from "../hooks/useContext";
import { SwitchThemeButton } from "./style";
import pokeballTheme from "../../assets/pokeballTheme.png";

const ThemeButton = () => {
  const { setLightTheme } = useContext(ThemeContext);

  return (
    <>
      <SwitchThemeButton src={pokeballTheme} onClick={setLightTheme} />
    </>
  );
};

export default ThemeButton;
