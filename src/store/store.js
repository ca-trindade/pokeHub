import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./searchAPI/searchSlice";

const store = configureStore({
  reducer: {
    pokemonName: searchInputReducer,
  },
  devTools: true,
});

export default store;
