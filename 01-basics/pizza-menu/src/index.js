import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="/pizzas/focaccia.jpg " alt="Pizza Fogaccia" />
      <h3>Focaccia</h3>
      <h4>Ingredients</h4>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
