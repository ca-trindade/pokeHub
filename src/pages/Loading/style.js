import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0%, 49.999%, 100% {
    transform: none;
  }

  50%, 99.999% {
    transform: rotate(90deg);
  }
`;

const shiftLeftAnimation = keyframes`
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: scale(0.65) translateX(-75%);
  }
`;

const shiftRightAnimation = keyframes`
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: scale(0.65) translateX(75%);
  }
`;

export const Container = styled.div`
  --uib-size: 40px;
  --uib-color: aliceblue;
  --uib-speed: 0.9s;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--uib-size) / 2);
  width: var(--uib-size);
  filter: url("#uib-jelly-ooze");
  animation: ${rotateAnimation} calc(var(--uib-speed) * 2) linear infinite;
  will-change: transform;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 25%;
    width: 50%;
    height: 100%;
    background-color: var(--uib-color);
    border-radius: 100%;
    will-change: transform;
    transition: background-color 0.3s ease;
  }

  &::before {
    animation: ${shiftLeftAnimation} var(--uib-speed) ease infinite;
  }

  &::after {
    animation: ${shiftRightAnimation} var(--uib-speed) ease infinite;
  }
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  animation: ${rotateAnimation} 6s infinite;
`;

export { Svg };
