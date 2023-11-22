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
    transform: translateX(0)
   
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
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