import React from 'react'

export default function item({id,qty,name,price,changeQty}) {

  const addOne = () =>{changeQty(id,qty+1)}
  const minOne = () =>{changeQty(id,qty-1)}
  return (
    <div>
        <div>name: {name}</div>
        <button onClick={minOne}>+</button><div>qty: {qty}</div><button onClick={addOne}>+</button>
        <div>price: $ {price}</div>

        <br></br>
    </div>
  )
}
