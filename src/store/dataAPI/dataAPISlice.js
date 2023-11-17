import { createSlice } from "@reduxjs/toolkit";

export const dataApiSlice = createSlice({
  name: "dataApi",
  initialState: {
    pokemonData: [],
    // start: 1,
    // end: 6,
  },
  reducers: {
    getPokemonApi: (state, action) => {
      state.getPokemonApi = action.payload;
    }  },
});

export const { getPokemonApi } = dataApiSlice.actions;
export const dataApiReducer = dataApiSlice.reducer;
export default dataApiReducer;