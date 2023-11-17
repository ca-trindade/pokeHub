import { get } from "lodash";

export const getdataApiSelector = (store) =>
  get(store, "dataApi.pokemonDataFromApi", []);


  