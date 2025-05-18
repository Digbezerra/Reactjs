import { useState } from "react";

export function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  const resetApp = () => {
    setBillValue("");
    setTipPercentage(0);
    setFriendTipPercentage(0);
  };

  console.log("billValue", billValue);
  console.log("tipPercentage", tipPercentage);
  console.log("friendTipPercentage", friendTipPercentage);

  return (
    <>
      <h1>Tip Calculator</h1>
      <div>
        <p>How much was the bill?</p>{" "}
        <input
          value={billValue}
          type="number"
          placeholder="R$ 00,00"
          onChange={(e) => setBillValue(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <p>How did you like the service?</p>{" "}
        <select
          id="tip"
          name="tip"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was ok (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutelly amazing! (20%)</option>
        </select>
      </div>
      <div>
        <p>How did your friend like the service?</p>{" "}
        <select
          id="tip"
          name="tip"
          value={friendTipPercentage}
          onChange={(e) => setFriendTipPercentage(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was ok (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutelly amazing! (20%)</option>
        </select>
      </div>
      <button onClick={() => resetApp()}>Reset</button>
    </>
  );
}
