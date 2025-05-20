import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./01-basics/components/projects/eat-n-split";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
