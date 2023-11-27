import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    pokemonDataFromApi: {},
}
  
const dataApiSlice = createSlice({
  name: "dataApi",
  initialState,
  reducers: {
    getPokemonApi: (state, action) => {
      state.pokemonDataFromApi = {
        ...state.pokemonDataFromApi,
        ...action.payload.pokemonDataFromApi
      };
    },
  }
});

export default dataApiSlice.reducer;
export const { getPokemonApi } = dataApiSlice.actions;

