import axios from "axios";
import { BASE_URL, PATH } from "./APIUtils";

export const getPokemonList = async (start, end) => {
  try {
    const pokemonData = [];

    for (let i = start; i <= end; i++) {
      const response = await axios.get(BASE_URL + PATH.pokemon + i);
      pokemonData.push({
        abilities: response.data.abilities.map((p) => ({
          name: p.ability.name,
        })),
        name: response.data.name,
        weight: response.data.weight,
        height: response.data.height,
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

export const getPokemonName = async (searchBox) => {
  try {
    const response = await axios.get(BASE_URL + PATH.pokemon + searchBox);
    
    return [{
      abilities: response.data.abilities.map((p) => ({
        name: p.ability.name,
      })),
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      order: response.data.order,
      sprites: response.data.sprites.other["official-artwork"].front_default,
      types: response.data.types.map((type) => ({
        type: {
          name: type.type.name,
        }, 
      }))
    }];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};