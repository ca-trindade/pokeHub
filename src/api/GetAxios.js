import axios from "axios";
import { BASE_URL, PATH } from "./APIUtils";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(BASE_URL + PATH.pokemon);
    return response.data.results.map((p) => ({
      name: p.name,
      url: p.url,
    }));
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};
