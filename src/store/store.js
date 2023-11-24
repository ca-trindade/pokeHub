import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import searchInputReducer from "./searchAPI/searchSlice";
import dataApiReducer from "./dataAPI/dataAPISlice"

const rootReducer = combineReducers({
  pokemonName: searchInputReducer,
  pokemonDataFromApi: dataApiReducer,
});

const persistConfig = {
  key: "root",
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)

export default { store, persistor };
