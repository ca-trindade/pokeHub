import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setDataApiSelector } from "../../store/dataAPI/selectores";
import {
  CardContainer,
  Container,
  CardOrder,
  CardImg,
  CardName,
} from "./style";



export const Card = () => {
  const pokemonDataFromStore = useSelector(setDataApiSelector);
  const convertToEntries = Object.values(
    pokemonDataFromStore.pokemonDataFromApi
  );
  let randomNumber =
    convertToEntries[Math.floor(Math.random() * convertToEntries.length)];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === convertToEntries.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [convertToEntries.length, currentIndex]);

  return (
    <>
      <CardContainer>
        <Container>
          <CardName>
            {randomNumber.name.charAt(0).toUpperCase() +
              randomNumber.name.slice(1)}
          </CardName>
          <CardOrder>#{randomNumber.order}</CardOrder>
        </Container>
        <CardImg src={randomNumber.sprites} />
      </CardContainer>
    </>
  );
};
