export function Friend({ imgUrl, name, billStatus }) {
  return (
    <li className="friend-item" key={name}>
      <img src={imgUrl} alt="Friend Profile" />
      <div>
        <p className="friend-name">{name}</p>
        <p className="bill-status">{billStatus}</p>
      </div>
      <button>Select</button>
    </li>
  );
}
