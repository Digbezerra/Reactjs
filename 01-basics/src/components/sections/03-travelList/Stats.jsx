export const Stats = () => {
  const itemsQuantity = 0;
  const packed = 0;
  const packedPercentage = 0;
  return (
    <footer className="stats">
      <p>
        You have {itemsQuantity} items on your list, and you already packed{" "}
        {packed}({packedPercentage})
      </p>
    </footer>
  );
};
