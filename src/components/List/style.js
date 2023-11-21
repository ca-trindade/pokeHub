import styled from "styled-components";

export const OrderList = styled.ol`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100vw;
  margin-top: 200px;
  padding: 0;
`;

export const ListPokemon = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: column;
align-items: center;
  margin: 0;
  border: solid black 1px;
  border-radius: 20px;
  width: 300px;
  background: linear-gradient(#f05941 0%, #be3144 100%);
  height: 407px;
`;

export const ImagePokemon = styled.img`
  width: 90%;
  margin-top: -150px;
`;

export const Title = styled.h1`
font-size: 3.5rem;
color: aliceblue;
`;

export const Pattttt = styled.p`
  font-size: 1.3rem;
  color: aliceblue;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: aliceblue;
`;

export const ListButton = styled.button`
  height: 40px;
  width: 120px;
  border: solid black 1px;
  border-radius: 10px;
  cursor: pointer;
`;

