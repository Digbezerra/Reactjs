export function Friend({ friend, handleCurSelected, index, curSelected }) {
  let balanceStatus = "";
  let colorText = "";
  let selected = curSelected === index;

  if (friend.balance > 0) {
    balanceStatus = `${friend.name} owes you ${friend.balance.toFixed(2)}$`;
    colorText = "#37b24d";
  } else if (friend.balance < 0) {
    balanceStatus = `you owe ${(friend.balance * -1).toFixed(2)}$ to ${
      friend.name
    }`;
    colorText = "#e03131";
  } else balanceStatus = `You and ${friend.name} are even`;

  return (
    <li
      className={`friend-item ${selected && "friend-item-selected"}`}
      key={friend.name}
    >
      <img src={friend.imgUrl} alt="Friend Profile" />
      <div>
        <p className="friend-name">{friend.name}</p>
        <p className="bill-status" style={{ color: colorText }}>
          {balanceStatus}
        </p>
      </div>
      <button onClick={() => handleCurSelected(index)}>Select</button>
    </li>
  );
}
