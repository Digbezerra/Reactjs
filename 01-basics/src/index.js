import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./components/sections/03-travelList";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
