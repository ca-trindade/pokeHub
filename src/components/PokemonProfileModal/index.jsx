import {
  ModalOverlay,
  ModalCard,
  CardTitle,
  ContainerOrder,
  ContainerUList,
  UList,
  List,
  ContainerParagraph,
  Span,
  Paragraph,
  CardAnimation,
  CardContent,
  ModalButton,
  ImageContainer,
} from "./style";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDataApiSelector } from "../../store/dataAPI/selectores";
import { setName } from "../../store/searchAPI/searchSlice";
import { getPokemonNameSelector } from "../../store/searchAPI/selectores";

const PokemonProfileModal = () => {
  const dispatch = useDispatch();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const searchBox = useSelector(getPokemonNameSelector);

  const pokemonDataFromStore = useSelector(setDataApiSelector);
  const convertToEntries = Object.values(
    pokemonDataFromStore.pokemonDataFromApi
  );

  useEffect(() => {
    const listLenght = convertToEntries.length;
    for (let i = 0; i < listLenght; i++) {
      if (convertToEntries[i].name === searchBox) {
        setPokemonDetails(convertToEntries[i]);
      }
    }
  }, [searchBox, pokemonDetails, convertToEntries]);

  const handleCloseModal = () => {
    setPokemonDetails(null);
    dispatch(setName({ searchBox: "" }));
  };

  const KG_TO_GRAMS = 10;
  const PRECISION = 1;

  return (
    <>
      {pokemonDetails && (
        <ModalOverlay id="modal" onClick={handleCloseModal}>
          <ModalButton onClick={handleCloseModal}>X</ModalButton>
          <ModalCard>
            <CardAnimation />
            <CardContent>
              <ContainerOrder>
                <Paragraph>#{pokemonDetails.order}</Paragraph>
              </ContainerOrder>
              <ImageContainer>
                <img src={pokemonDetails.sprites} alt={pokemonDetails.name} />
              </ImageContainer>
              <CardTitle>
                {searchBox.charAt(0).toUpperCase() + searchBox.slice(1)}
              </CardTitle>

              <ContainerUList>
                <UList>
                  {pokemonDetails.abilities &&
                    pokemonDetails.abilities.map((ability, index) => (
                      <List key={index}>{ability.name.toUpperCase()}</List>
                    ))}
                </UList>
              </ContainerUList>
              <ContainerParagraph>
                <Paragraph>
                  <Span className="material-symbols-outlined">weight</Span>
                  {pokemonDetails.weight.toFixed(PRECISION) / KG_TO_GRAMS} kg
                </Paragraph>
                <Paragraph>
                  <Span className="material-symbols-outlined">height</Span>
                  {pokemonDetails.height.toFixed(PRECISION) / KG_TO_GRAMS}{" "}
                  meters
                </Paragraph>
              </ContainerParagraph>
              <div>
                <ul>
                  {pokemonDetails.types &&
                    pokemonDetails.types.map((type, index) => {
                      return <li key={index}>{type.type.name}</li>;
                    })}
                </ul>
              </div>
            </CardContent>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
};

export default PokemonProfileModal;
