import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./components/sections/02-steps";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
