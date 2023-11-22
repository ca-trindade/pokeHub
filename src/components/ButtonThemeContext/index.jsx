import {useContext} from "react"
import { ThemeContext } from "../hooks/useContext";
import {
  SwitchThemeButton, ThemeSwitchContainer, 
  CircleContainer,
  SunMoonContainer,
  Moon,
  Spot,
} from "./style";
import pokeballTheme from "../../assets/pokeballTheme.png";

const ThemeButton = () => {
  const {setLightTheme} = useContext(ThemeContext);

  return (
    <>
      <SwitchThemeButton src={pokeballTheme} onClick={setLightTheme} />
      <ThemeSwitchContainer>
        <input type="checkbox" className="theme-switch__checkbox" />
        <CircleContainer className="theme-switch__circle-container">
          <SunMoonContainer className="theme-switch__sun-moon-container">
            <Moon className="theme-switch__moon">
              <Spot className="theme-switch__spot"></Spot>
              <Spot className="theme-switch__spot"></Spot>
              <Spot className="theme-switch__spot"></Spot>
            </Moon>
          </SunMoonContainer>
        </CircleContainer>
      </ThemeSwitchContainer>
    </>
  );
};

export default ThemeButton;
