import {
  ModalOverlay,
  ModalCard,
  CardTitle,
  CardAnimation,
  CardContent,
  ModalButton,
  ImageContainer,
} from "./style";
import { useEffect, useState } from "react";
import { getPokemonName } from "../../api/GetAxios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";
import { getPokemonNameSelector } from "../../store/searchAPI/selectores";

const PokemonProfileModal = () => {
  const dispatch = useDispatch();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const searchBox = useSelector(getPokemonNameSelector);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await getPokemonName(searchBox);
        if (data && data.length > 0) {
          setPokemonDetails(data[0]);
          console.log(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (searchBox && !pokemonDetails) {
      getPokemon();
    }
  }, [searchBox, pokemonDetails]);

  const handleCloseModal = () => {
    setPokemonDetails(null);
    dispatch(setName({ searchBox: "" }));
  };

  return (
    <>
      {pokemonDetails && (
        <ModalOverlay id="modal" onClick={handleCloseModal}>
          <ModalButton onClick={handleCloseModal}>X</ModalButton>
          <ModalCard>
            <CardAnimation />
            <CardContent>
              <ImageContainer>
                <img src={pokemonDetails.sprites} alt={pokemonDetails.name} />
              </ImageContainer>
              <CardTitle>
                {searchBox.charAt(0).toUpperCase() + searchBox.slice(1)}
              </CardTitle>
              <div>
                <ul>
                  {pokemonDetails.abilities &&
                    pokemonDetails.abilities.map((ability, index) => (
                      <li key={index}>{ability.name}</li>
                    ))}
                </ul>
              </div>
              <div>
                <p>Weight: {pokemonDetails.weight}</p>
                <p>Height: {pokemonDetails.height}</p>
              </div>
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
