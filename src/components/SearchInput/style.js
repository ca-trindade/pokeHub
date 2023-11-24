import styled from "styled-components";

export const ContainerInput = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
  height: 40px;
   gap: 10px;
`;


export const InputGo = styled.input`
  height: 85%;
  width: 50%;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;

export const ButtonGo = styled.button`
  height: 100%;
  width: 50px;
  border-radius: 10px;
`;

export const ErrorContainer = styled.p`
  display: flex;
  justify-content: center;
color: red;
margin-top: 10px;

`;
