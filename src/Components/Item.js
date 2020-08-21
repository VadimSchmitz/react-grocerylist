import React from 'react'

export default function Item({id, price, qty, name, updateQty}) {

    const addOne = () => {
        updateQty(id,qty +1)
    }

    const minOne = () => {
        updateQty(id,qty -1)
    }

    return (

        <div>
            <h1>{name}</h1>
            <p>price: ${price}</p>

            <button onClick={minOne}>-</button>
            quantity: {qty}
            <button onClick={addOne}>+</button>
        </div>
    )
}
