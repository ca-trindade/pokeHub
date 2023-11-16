import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBox: "",
};

const searchInputSlice = createSlice({
  name: "pokemonName",
  initialState,
  reducers: {
    getName: (state, action) => {
      state.searchBox = action.payload.searchBox;
    },
  },
});

export default searchInputSlice.reducer;
export const { getName } = searchInputSlice.actions;
