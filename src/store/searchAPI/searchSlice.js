import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBox: "",
};

const searchInputSlice = createSlice({
  name: "pokemonName",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.searchBox = action.payload.searchBox;
    },
  },
});

export default searchInputSlice.reducer;
export const { setName } = searchInputSlice.actions;
