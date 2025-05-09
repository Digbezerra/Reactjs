import React from "react";
import ReactDom from "react-dom/client";

import { ProfileCard } from "./components/challenges/profileCard/ProfileCard";

import { userData } from "./components/challenges/profileCard/mock";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      {userData.map((data) => {
        return <ProfileCard userData={data} key={data.userId} />;
      })}
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { pizzaName, ingredients, price, photoName, soldOut } = props;

  return (
    <div className="pizza">
      <div>
        <img src={photoName} alt={`Pizza ${pizzaName}`} />
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>$ {price}</span>
        <p>{!soldOut ? "Available" : "Sold out"}</p>
      </div>
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
  // name: "Pizza Spinaci",
  //   ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
  //   price: 12,
  //   photoName: "pizzas/spinaci.jpg",
  //   soldOut: false,

  return (
    <div className="menu">
      <h2>Pizza Menu</h2>
      <div className="pizzas">
        <Pizza
          pizzaName="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photoName="pizzas/focaccia.jpg"
          soldOut={false}
        />
        <Pizza
          pizzaName="Pizza Margherita"
          ingredients="Tomato and mozarella"
          price={10}
          photoName="pizzas/margherita.jpg"
          soldOut={false}
        />
        <Pizza
          pizzaName="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={12}
          photoName="pizzas/spinaci.jpg"
          soldOut={false}
        />
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? "we're currently open" : "we're closed"}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
