import React, { useState } from 'react'
import Item from './Item'

export default function Cart( {initialItems} ) {
  const [items, setItems] = useState(initialItems)

  const total = items.reduce((total, item)=>total + item.qty * item.price,0)

  const changeQty = (id, newQty) =>{
    const newItems = items.map((item)=>{
      if (item.id === id){
        console.log(id)
        return {...item, qty:newQty}
      }
      console.log(item)
      return item
    })
    return setItems(newItems)
  }
  
  return (
    <div>
        {items.map((item) => (<Item key={item.id} {...item} changeQty={changeQty} />))}
        {total}
    </div>
  )
}
