import { Item } from "./Item";

export const PackingList = ({ items, onExcludeItems, onToggleChecked }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onExcludeItems={onExcludeItems}
              onToggleChecked={onToggleChecked}
            />
          );
        })}
        {/* <div className="actions">
        <select id="sort-by" name="sort-by">
          <option value="input-order">Sort by input order</option>
          <option value="a-to-z-order">Sort by A to Z</option>
          <option value="z-to-a-order">Sort by Z to A</option>
        </select>
        <button>Clear List</button> 
      </div>*/}
      </ul>
    </div>
  );
};
