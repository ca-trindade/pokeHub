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
import {getPokemonName } from "../../api/GetAxios"
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
    if (!pokemonDetails){ 
    const listLenght = convertToEntries.length;
    for (let i = 0; i < listLenght; i++) {
      if (convertToEntries[i].name === searchBox) {
        setPokemonDetails(convertToEntries[i]);
      } else {
          const getPokemon = async () => {
            try {
              const data = await getPokemonName(searchBox);
              setPokemonDetails(data[0]);
              console.log(data);
            } catch (error) {
              console.error("Error:", error);
            }
          };
          getPokemon();
      }
    }}
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
                {pokemonDetails.name.charAt(0).toUpperCase() +
                  pokemonDetails.name.slice(1)}
              </CardTitle>
              <ContainerUList>
                <UList>
                  {pokemonDetails.types &&
                    pokemonDetails.types.map((type, index) => {
                      return (
                        <List key={index}>{type.type.name.toUpperCase()}</List>
                      );
                    })}
                </UList>
              </ContainerUList>
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
            </CardContent>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
};

export default PokemonProfileModal;
