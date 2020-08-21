import React from "react";

export default function GroecerylistItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };

  const minOne = () => {
    updateQty(id, qty - 1);
  };

  return (
    <div>
      <div>Name: {name} </div> <div> Price: $ {price}</div>
      <div>
        <button onClick={minOne} disabled={qty <= 1}>-</button>
        Quantity: {qty} <button onClick={addOne}> + </button>
      </div>
      <div>Total: $ {qty * price}</div> <br></br>
    </div>
  );
}
