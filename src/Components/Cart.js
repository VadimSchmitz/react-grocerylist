import React, { useState } from 'react'
import Item from './Item'

export default function Cart({initialItems}) {
    const [items, setItems] = useState(initialItems)


    const updateQty = (id, newQty) =>{
        const newItems = items.map((item) =>{
            if (item.id === id){
                return {...item, qty:newQty}
            } 
            return item
        })
        setItems(newItems)
    }

    const total = items.reduce((total, item) =>
        total + item.qty * item.price,0
    )
    
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} {...item} updateQty = {updateQty}/>
            ))}

            <h1>total: ${total}</h1>
        </div>
    )
}

