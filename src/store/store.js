import { configureStore } from "@reduxjs/toolkit";
import dataApiReducer from "./dataAPI/dataAPISlice";

export const store = configureStore({
  reducer: {
    dataApi: dataApiReducer,
  },
});
