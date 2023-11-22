import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: none;
  padding: 20px;
  border-radius: 5px;
`;

export const ModalButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
`;

export const ModalCard = styled.div`
  width: 590px;
  height: 754px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
`;

export const CardTitle = styled.h2`
  z-index: 1;
  color: white;
  font-size: 2em;
`;

export const CardAnimation = styled.div`
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;

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
  background: #07182E;
  inset: 5px;
  border-radius: 15px;
`;

export const ImageContainer = styled.div`

`;
