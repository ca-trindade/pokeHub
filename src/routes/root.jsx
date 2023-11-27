import App from "../App";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { PokemonCard } from "../pages/PokemonCard";
import { useContext } from "react";
import { ThemeContext } from "../components/hooks/useContext";
import GlobalStyle from "../globalStyles";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemonProfile",
    element: <PokemonCard />,
  },
]);

export default function Root() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle theme={theme} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}
