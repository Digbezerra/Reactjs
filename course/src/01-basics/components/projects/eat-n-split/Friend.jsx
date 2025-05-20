export function Friend({ imgUrl, friendName, billStatus }) {
  return (
    <li className="friend-item">
      <img src={imgUrl} alt="Friend Profile" />
      <div>
        <p className="friend-name">{friendName}</p>
        <p className="bill-status">{billStatus}</p>
      </div>
      <button>Select</button>
    </li>
  );
}
