import { useState } from "react";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     description: "Socks",
//     quantity: 12,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: "Charger",
//     quantity: 1,
//     packed: true,
//   },
// ];

export const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        id="item"
        name="item"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        add
      </button>
    </form>
  );
};
