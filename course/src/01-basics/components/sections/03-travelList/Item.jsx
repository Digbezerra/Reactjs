export const Item = ({ item, onExcludeItems, onToggleChecked }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onToggleChecked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onExcludeItems(item.id)}>
        {item.packed ? "💚" : "❌"}
      </button>
    </li>
  );
};
