import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your machine, reduce the `length`
  const words = Array.from({ length: 10000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  return (
    <>
      <Counter>
        <SlowComponent />
      </Counter>
    </>
  );
}
