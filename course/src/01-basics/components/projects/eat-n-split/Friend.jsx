export function Friend({ friend, handleCurSelected, index }) {
  let debitStatus = "";

  if (friend.debit > 0) {
    debitStatus = `${friend.name} owes you ${friend.debit.tofixed(2)}$`;
  } else if (friend.debit < 0) {
    debitStatus = `you owe ${(friend.debit * -1).toFixed(2)}$ to ${
      friend.name
    }`;
  }

  return (
    <li className="friend-item" key={friend.name}>
      <img src={friend.imgUrl} alt="Friend Profile" />
      <div>
        <p className="friend-name">{friend.name}</p>
        <p className="bill-status">{debitStatus}</p>
      </div>
      <button onClick={() => handleCurSelected(index)}>Select</button>
    </li>
  );
}
