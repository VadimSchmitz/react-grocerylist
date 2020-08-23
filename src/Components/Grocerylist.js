import React, { useState } from "react";
import GrocerylistItem from "./GrocerylistItem";

export default function Grocerylist({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const total = items.reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div>
      <h1>i am grocerylist</h1>
      <div>
        {items.map((item) => (
          <GrocerylistItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>

      <div>
        <h3>Grand total:$ {total}</h3>
      </div>
    </div>
  );
}
