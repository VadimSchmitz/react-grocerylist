import React from 'react';
import Grocerylist from './Components/Grocerylist'
import groceryData from './groceryData'


function App() {
  return (
    <div className="App">
      <Grocerylist initialItems={groceryData}/>
    </div>
  );
}

export default App;
