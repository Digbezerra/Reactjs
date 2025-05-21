import { useState } from "react";

import { Button } from "./Button";

export function SplitBill({ friends, curSelected, onUpdateFriend }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [whoPays, setWhoPays] = useState("me");

  const handleUpdateFriend = (friend) => {
    const debitValue = yourExpense - friendExpense + friend.debit;
    const updatedFriend = { ...friend, debit: debitValue };
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
          disabled={whoPays === friends[curSelected]?.name}
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
          disabled={whoPays === "me"}
        ></input>
      </div>
      <div>
        <span>🤔 Who's paying the bill?</span>
        <select
          className="select-payment"
          value={whoPays}
          id="who-pays"
          name="who-pays"
          onChange={(e) => {
            setYourExpense(0);
            setFriendExpense(0);
            setWhoPays(e.target.value);
          }}
        >
          <option value="me">Me</option>
          <option value={friends[curSelected]?.name}>
            {friends[curSelected]?.name}
          </option>
          <option value="us">Us</option>
        </select>
      </div>
      <div>
        {yourExpense + friendExpense === billValue ? (
          <button onClick={() => handleUpdateFriend(friends[curSelected])}>
            Split Bill
          </button>
        ) : (
          <p style={{ color: "red" }}>Split the bill correctly</p>
        )}
      </div>
    </section>
  );
}
