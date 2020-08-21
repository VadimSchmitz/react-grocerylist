import React from 'react';
import Grocerylist from './Components/Grocerylist'
import groceryData from './groceryData'
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <Grocerylist initialItems={groceryData}/>
      <Cart initialItems={groceryData}/>
    </div>
  );
}

export default App;
