import App from "../App";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "../store/store";
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
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
