import React from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function GrocerylistItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };

  const minOne = () => {
    updateQty(id, qty - 1);
  };
  

  return (
    <div className="card-item">
      <div className="test">
        <div className="product-title">{name}</div>
        <div className="product-quantity">
          <FaMinus className="fa-minus" onClick={minOne} disabled={qty <= 1}/>      
          {qty}
          <FaPlus  className="fa-plus" onClick={addOne}/>
        </div>
        <div className="total">€{(qty * price).toFixed(2)}</div>
      </div>
        <div className="product-image">
        <img alt="man" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'></img>
      </div>
    </div>
  );
}
