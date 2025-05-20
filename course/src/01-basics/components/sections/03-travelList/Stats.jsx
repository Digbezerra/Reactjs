export const Stats = ({ totalItems, totalPackedItems, packedPercentage }) => {
  return (
    <footer className="stats">
      <p>
        You have {totalItems} items on your list, and you already packed{" "}
        {totalPackedItems} ({packedPercentage}%)
      </p>
    </footer>
  );
};
