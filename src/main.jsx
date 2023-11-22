import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import ThemeContextProvider from "./components/hooks/useContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  </React.StrictMode>
);
