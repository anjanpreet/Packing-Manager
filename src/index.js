import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import { ItemProvider } from "../src/context/itemContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>
);
