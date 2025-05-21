import { useState } from "react";

import { Button } from "./Button";

export function SplitBill({ friends, curSelected, onUpdateFriend }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [whoPays, setWhoPays] = useState("me");

  console.log("curselected", curSelected);

  const handleUpdateFriend = (friend) => {
    console.log("friend", friend);
    const debitValue = yourExpense - friendExpense;
    const updatedFriend = { ...friend, debit: debitValue };
    console.log("handleUpdateFriend", updatedFriend);
    onUpdateFriend(updatedFriend);
    setBillValue(0);
    setYourExpense(0);
    setFriendExpense(0);
    setWhoPays("me");
  };

  return (
    <section className="bill-section">
      <h2>Split Bill With Friend</h2>
      <div>
        <span>💰 Bill Value</span>
        <input
          placeholder="Bill Value"
          value={billValue}
          id="bill-value"
          name="bill-value"
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
      </div>
      <div>
        <span>🤡 Your Expense</span>
        <input
          placeholder="Your Expense"
          value={yourExpense}
          id="your-expanse"
          name="your-expanse"
          onChange={(e) => setYourExpense(Number(e.target.value))}
        />
      </div>
      <div>
        <span>🐍 Friend Expense</span>
        <input
          placeholder="Friend Expense"
          name="friend-expense"
          id="friend-expense"
          value={friendExpense}
          onChange={(e) => setFriendExpense(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <span>🤔 Who's paying the bill?</span>
        <select className="select-payment">
          <option value="me">Me</option>
          <option value="friend">{friends[curSelected]?.name}</option>
          <option value="us">Us</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleUpdateFriend(friends[curSelected])}>
          Split Bill
        </button>
      </div>
    </section>
  );
}
