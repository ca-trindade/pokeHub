// PokemonProfileModal.jsx
import { ModalOverlay, ModalContent, ModalCard, CardTitle, CardAnimation, CardContent, ModalButton, ImageContainer } from "./style";
import { useEffect, useState } from "react";
import { getPokemonName } from "../../api/GetAxios";
import { useSelector } from "react-redux";
import { getPokemonNameSelector } from "../../store/searchAPI/selectores";

const PokemonProfileModal = () => {
const [pokemonDetails, setPokemonDetails] = useState(null);
const searchBox = useSelector(getPokemonNameSelector);

useEffect(() => {
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
}, [searchBox]);

const closeModal = () => {
  setPokemonDetails(null);
}

  return (
    <>
      <ModalOverlay isOpen={!!pokemonDetails}>
        <ModalButton onClick={closeModal}>X</ModalButton>
        <ModalContent>
          {pokemonDetails ? (
            <ModalCard>
              {console.log(pokemonDetails)}
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
              </CardContent>
            </ModalCard>
          ) : (
            <p>No Pokémon found. Please enter a valid Pokémon name.</p>
          )}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};


export default PokemonProfileModal;
