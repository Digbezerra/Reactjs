import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

import "./index.css";

export function App() {
  const [items, setItems] = useState([]);

  const handleItems = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const excludeItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleChecked = (id) => {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        items={items}
        onExcludeItems={excludeItems}
        onToggleChecked={handleToggleChecked}
      />
      <Stats />
    </div>
  );
}
