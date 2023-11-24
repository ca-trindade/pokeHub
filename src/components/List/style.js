import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 5%;
    margin: 0 12%;
  }

  @media (min-width: 1440px) {
    gap: 8%;
    margin: 0 15%;
  }
`;

export const OrderList = styled.ol`
  display: flex;
  justify-content: center;
  list-style: none;
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

  @media (min-width: 768px) {
    width: 330px;
    height: 427px;
  }
`;

export const ImagePokemon = styled.img`
  width: 90%;
  margin-top: -150px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: aliceblue;
  margin: 5px 0;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: aliceblue;
  display: flex;
  align-items: center;
  border: white solid 1px;
  border-radius: 10px;
  padding: 6px 8px 6px 0;
`;

export const ListButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 10px;
  background: radial-gradient(#be3144, #872341);
  font-size: 1.2rem;
  color: aliceblue;
  margin-top: 50px;

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

export const FavoriteButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 10px;
  background: radial-gradient(#be3144, #872341);
  font-size: 1.2rem;
  color: aliceblue;
  margin-top: 5px;
  justify-content: right;

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

