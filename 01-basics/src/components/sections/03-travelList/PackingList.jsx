import { Item } from "./Item";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: true,
  },
];

export const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} key={item.id} />;
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
