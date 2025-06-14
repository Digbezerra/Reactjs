import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({
  items,
  onExcludeItems,
  onToggleChecked,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input-order");

  let itemsSorted;

  if (sortBy === "input-order") {
    itemsSorted = items;
  }
  if (sortBy === "a-to-z-order") {
    itemsSorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "z-to-a-order") {
    itemsSorted = items
      .slice()
      .sort((a, b) => b.description.localeCompare(a.description));
  }
  if (sortBy === "packed") {
    itemsSorted = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {itemsSorted.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onExcludeItems={onExcludeItems}
              onToggleChecked={onToggleChecked}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          id="sort-by"
          name="sort-by"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="input-order">Sort by input order</option>
          <option value="a-to-z-order">Sort by A to Z</option>
          <option value="z-to-a-order">Sort by Z to A</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
};
