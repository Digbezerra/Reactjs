import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Pizza Menu</h2>
      {numPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven , all organic, all delicious!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={`Pizza ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{!soldOut ? `$ ${price},00` : "SOLD OUT"}</p>
      </div>
    </li>
  );
}

function Order({ orderProps }) {
  const { openHour, closeHour, isOpen } = orderProps;
  return isOpen ? (
    <div className="order">
      <p>We're open until {closeHour}:00 | Come visit us or order online</p>
      <button className="btn">Order now</button>
    </div>
  ) : (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const orderProps = {
    openHour: openHour,
    closeHour: closeHour,
    isOpen: isOpen,
  };
  return (
    <footer className="footer">
      <Order orderProps={orderProps} />
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
