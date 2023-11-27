import styled, { keyframes } from "styled-components";
import Img from "../../assets/blob-scene-haikei.png";

export const CardContainer = styled.div`
  background: url(${Img}) no-repeat center center/cover;
  border-radius: 200px;
  margin: 0 6%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin: 0 17%;
    height: 458px;
    flex-direction: row-reverse;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    height: 600px;
    margin: 0 18%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    height: 100%;
    margin-left: 100px;
  }
`;

const CardImg2 = styled.img`
  height: 20vh;


  @media (min-width: 768px) {
    height: 30vh;
  }
  @media (min-width: 1440px) {
    height: 40vh;
  }
`;

const opacityPokemon = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const CardImg = styled(CardImg2)`
  animation: ${opacityPokemon} 6s infinite;
`;

export const CardName = styled.h4`
  color: aliceblue;
  font-size: 30px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 45px;
  }

  @media (min-width: 1440px) {
    font-size: 90px;
  }
`;

export const CardOrder = styled.p`
  font-size: 25px;
  margin: 10px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;


