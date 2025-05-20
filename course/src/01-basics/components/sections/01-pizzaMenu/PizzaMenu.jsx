import { pizzaData } from "../../../mock/pizzadata";

import "./index.css";

export function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

export function Menu() {
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

export function Pizza({ pizzaObj }) {
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

export function Order({ orderProps }) {
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

export function Footer() {
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
