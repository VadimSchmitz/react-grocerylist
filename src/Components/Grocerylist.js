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
    <div className="container">
      <div className="cart">
        <div className="header">
          <h1 className="header-title">Het totaal bedrag is €{total}.</h1>
          <h3 className="header-content">Bestellingen boven de € 40 worden gratis bezorgd. En ook retourneren is gratis.</h3>
          <button className="pay-button">Afrekenen</button>
        </div>

        <div className="cart-items">

          
            {items.map((item) => (
              <GrocerylistItem key={item.id} updateQty={updateQty} {...item} />
            ))}
        
        </div>
      </div>
    </div>
  );
}
