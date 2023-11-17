import { get } from "lodash"

export const getPokemonNameSelector = (store) => get(store, "pokemonName.searchBox", "");