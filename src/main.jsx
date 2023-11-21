import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import { PokemonCard } from "./pages/PokemonCard";
import Root from "./routes/root";
import GlobalStyle from "./globalStyles";
import ThemeContextProvider from "./components/hooks/useContext";
import ThemeButton from "./components/ThemeContext";
import { ThemeContext } from "./components/hooks/useContext";
import { PokemonFullProfile } from "./components/PokemonFullProfile/FullProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/pokemonProfile",
    element: <PokemonCard />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonFullProfile />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeButton />
      <Provider store={store}>
        <ThemeContext.Consumer>
          {(theme) => <GlobalStyle theme={theme} />}
        </ThemeContext.Consumer>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
