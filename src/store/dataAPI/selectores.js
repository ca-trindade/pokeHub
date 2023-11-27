import { get } from "lodash";

export const setDataApiSelector = (store) =>
  get(store, "pokemonDataFromApi", undefined);
