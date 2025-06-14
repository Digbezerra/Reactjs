import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./3-advanced/projects/reactQuizz/App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
