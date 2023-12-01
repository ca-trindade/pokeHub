import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
  justify-content: center;
align-items: start;
margin-top: 400px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
`;

export const ShowMoreButton = styled.button`
  height: 50px;
  width: 140px;
  border-radius: 15px;
  background: radial-gradient(#be3144, #872341);
  font-size: 1.5rem;
  color: aliceblue;
  margin: 20px 0;

  &:active {
    background: radial-gradient(#22092c, #872341);
  }

  @media (min-width: 768px) {
    &:hover {
      background: radial-gradient(#22092c, #872341);
    }
    &:active {
      background: radial-gradient(#be3144, #22092c);
    }
  }
`;