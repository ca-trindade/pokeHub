import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./searchAPI/searchSlice";
import dataApiReducer from "./dataAPI/dataAPISlice"

const store = configureStore({
  reducer: {
    pokemonName: searchInputReducer,
    pokemonDataFromApi: dataApiReducer
  },
});

export default store;
