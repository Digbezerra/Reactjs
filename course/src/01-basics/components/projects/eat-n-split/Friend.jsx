export function Friend({ friend, handleCurSelected, index }) {
  let debitStatus = "";
  let colorText = "";

  if (friend.debit > 0) {
    debitStatus = `${friend.name} owes you ${friend.debit.toFixed(2)}$`;
    colorText = "#37b24d";
  } else if (friend.debit < 0) {
    debitStatus = `you owe ${(friend.debit * -1).toFixed(2)}$ to ${
      friend.name
    }`;
    colorText = "#e03131";
  } else debitStatus = `You and ${friend.name} are even`;

  return (
    <li className="friend-item" key={friend.name}>
      <img src={friend.imgUrl} alt="Friend Profile" />
      <div>
        <p className="friend-name">{friend.name}</p>
        <p className="bill-status" style={{ color: colorText }}>
          {debitStatus}
        </p>
      </div>
      <button onClick={() => handleCurSelected(index)}>Select</button>
    </li>
  );
}
