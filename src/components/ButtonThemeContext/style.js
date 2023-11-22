import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
   
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const move = keyframes`
  0% {
    transform: translateX(0deg)
   
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(360deg);
  }
`;

export const SwitchThemeButton2 = styled.img`
  width: 80px;
`;

export const SwitchThemeButton = styled(SwitchThemeButton2)`
  &:hover {
    animation: ${move} 1s infinite;
  }

  &:active {
    animation: ${rotate} 1s infinite;
  }
`;

export const ThemeSwitchContainer = styled.div`
  --toggle-size: 30px;
  --container-width: 5.625em;
  --container-height: 2.5em;
  --container-radius: 6.25em;
  /* Adicione outras variáveis conforme necessário */

  width: var(--container-width);
  height: var(--container-height);
  background-color: var(--container-light-bg);
  border-radius: var(--container-radius);
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
  transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    border-radius: var(--container-radius);
  }

  input {
    display: none;
  }

  &:checked + & {
    background-color: var(--container-night-bg);
  }

  &:checked + & .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
  }

  &:checked + & .theme-switch__circle-container:hover {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em);
  }

  &:checked + & .theme-switch__moon {
    transform: translate(0);
  }

  &:checked + & .theme-switch__clouds {
    bottom: -4.062em;
  }

  &:checked + & .theme-switch__stars-container {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CircleContainer = styled.div`
  width: var(--circle-container-diameter);
  height: var(--circle-container-diameter);
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: var(--circle-container-offset);
  top: var(--circle-container-offset);
  border-radius: var(--container-radius);
  box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
  transition: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
  pointer-events: none;

  &:hover {
    left: calc(var(--circle-container-offset) + 0.187em);
  }
`;

export const SunMoonContainer = styled.div`
  pointer-events: auto;
  position: relative;
  z-index: 2;
  width: var(--sun-moon-diameter);
  height: var(--sun-moon-diameter);
  margin: auto;
  border-radius: var(--container-radius);
  background-color: var(--sun-bg);
  box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
  filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
  overflow: hidden;
  transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
`;

export const Moon = styled.div`
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  background-color: var(--moon-bg);
  border-radius: inherit;
  box-shadow: 0;
  `;
  export const Spot = styled.div`
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
    box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  `;