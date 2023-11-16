import { get } from "lodash"

export const getPokemonName = (store) => get(store, "getName", "");