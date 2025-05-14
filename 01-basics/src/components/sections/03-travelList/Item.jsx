export const Item = ({ item, onExcludeItems }) => {
  return (
    <>
      <li key={item.id}>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onExcludeItems(item.id)}>❌</button>
      </li>
    </>
  );
};
