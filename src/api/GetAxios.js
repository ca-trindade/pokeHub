import axios from "axios";
import { BASE_URL, PATH } from "./APIUtils";

// export const getPokemonList = async () => {
//   try {
//     const response = await axios.get(BASE_URL + PATH.pokemon);
//     return response.data.results.map((p) => ({
//       name: p.name,
//       url: p.url,
//     }));
//   } catch (error) {
//     console.error("Erro:", error);
//     throw error;
//   }
// };

export const getPokemonCard = async () => {
  try {
    const response = await axios.get(BASE_URL + PATH.pokemon + "1");
    const pokemonData = {
      abilities: response.data.abilities.map((p) => ({
        name: p.ability.name,
      })),
      name: response.data.forms[0].name,
      weight: response.data.weight,
      height: response.data.height,
      sprites: response.data.sprites.other["official-artwork"].front_default,
    };
    return pokemonData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


export const getPokemonList = async (start, end) => {
  try {

        const pokemonData = [];

    for (let i = start; i <= end; i++) {
      const response = await axios.get(BASE_URL + PATH.pokemon + i);
pokemonData.push({
        name: response.data.name,
        order: response.data.order,
        sprites: response.data.sprites.other["official-artwork"].front_default,
      });
    }
    return pokemonData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

