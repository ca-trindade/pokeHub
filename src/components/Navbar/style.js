import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 10px;

  @media (min-width: 768px) {
    height: 140px;
  }

  @media (min-width: 1440px) {
    height: 150px;
    margin: 20px 0;
  }
`;

export const ImageLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 130px;
  }

  @media (min-width: 1440px) {
  }
`;
