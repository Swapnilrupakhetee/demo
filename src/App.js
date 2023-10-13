import './App.css';
import React, { useState } from'react';

function App() {

  const [numberValue, setNumberValue] =useState(0);
  const Addition = () => {
    setNumberValue(numberValue + 1);
  };
  const Minus = () => {
    setNumberValue(numberValue - 1);
  };
  return (
    <div className="App">
      <h1>Add and Minus butto</h1>
      <button onClick={Addition}>Add</button>
      <div>{numberValue}</div>
      <button onClick={Minus}>Subtract</button>
    </div>
  );
  
}

export default App;
