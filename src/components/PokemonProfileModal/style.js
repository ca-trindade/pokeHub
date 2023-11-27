import styled from "styled-components";

export const ModalOverlay = styled.dialog`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ModalButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 20px;
  display: flex;
  justify-content: center;
  background: none;
  color: #f05941;
  border: 3px solid #f05941;
  border-radius: 30px;
  font-size: medium;
  margin-left: 500px;
  margin-bottom: 20px;
  &:hover {
    background: #872341;
  }
  cursor: pointer;
`;

export const ModalCard = styled.div`
  width: 395px;
  height: 80%;
  background: linear-gradient(#f05941, #22092c);
  position: relative;
  display: flex;

  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 590px;
    height: 754px;
  }
  @media (min-width: 1440px) {
    width: 590px;
    height: 754px;
  }
`;

export const ContainerOrder = styled.div`
  margin-left: 70%;
  width: 100px;
  margin-top: 30px;
`;

export const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 0;
  font-size: 3.5em;
`;

export const ContainerUList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  width: 50%;
  font-size: 1.3rem;
  color: aliceblue;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: white solid 1px;
  border-radius: 10px;
  padding: 6px 8px 6px 0;
`;

export const UList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const List = styled.li`
  display: flex;
  color: aliceblue;
  font-size: 20px;
  border: 1px aliceblue solid;
  border-radius: 10px;
  padding: 5px;
`;

export const CardAnimation = styled.div`
  position: absolute;
  width: 100px;
  background-image: linear-gradient(
    180deg,
    rgb(0, 183, 255),
    rgb(255, 48, 255)
  );
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.5s linear;

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const CardContent = styled.div`
  position: absolute;
  justify-content: center;
  background: linear-gradient(#f05941, #22092c);
  inset: 5px;
  border-radius: 15px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 350px;
  margin: 0 auto;
`;
