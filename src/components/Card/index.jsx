import { useEffect, useState } from "react";
import { getPokemonName } from "../../api/GetAxios";
import { useSelector } from "react-redux";
import { getPokemonNameSelector } from "../../store/searchAPI/selectores";

export const Card = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
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

  return (
    <>
      <div>
        <div>
          <img src={pokemonDetails.sprites} alt={pokemonDetails.name} />
        </div>
        <div>
          <h1>{searchBox.charAt(0).toUpperCase() + searchBox.slice(1)}</h1>
        </div>
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
      </div>
      <div></div>
    </>
  );
};
