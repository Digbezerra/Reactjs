import { useState } from "react";

import "./index.css";

//How To use:
//import on src/index.js
//insert import declarations
//import { DateCounter } from "./components/challenges/DateCounter";
//import { userData } from "./components/challenges/mock";

//DATE COUNTER
/**
 * - a counter which show actual date
 * - two buttons sections + and - counter
 *  1 - Steps -> how many steps the counter on section 2 will have
 *      - set steps by a simple counter
 *
 *  2 - Counter -> number represents the days before or after the result date
 *      - set counter by the steps value
 *
 * - 1 +
 * - 4 +
 *  (actual date eg: 13/05/2025) -> set actual date
 * 17 de maio de 2025 -> insert the steps value on actual date
 *
 */

export function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  const incrementSteps = () => {
    setSteps((s) => s + 1);
  };

  const decrementSteps = () => {
    setSteps((s) => s - 1);
  };

  const incrementCounter = () => {
    setCounter((c) => c + steps);
  };

  const decrementCounter = () => {
    setCounter((c) => c - steps);
  };

  return (
    <>
      <div className="container">
        <div className="counter">
          <p>Steps</p>
          <button onClick={decrementSteps}>-</button>
          <span>{steps}</span>
          <button onClick={incrementSteps}>+</button>
        </div>
        <div className="counter">
          <p>Counter</p>
          <button onClick={decrementCounter}>-</button>
          <span>{counter}</span>
          <button onClick={incrementCounter}>+</button>
        </div>
        <span className="date">{date.toDateString()}</span>
      </div>
    </>
  );
}
