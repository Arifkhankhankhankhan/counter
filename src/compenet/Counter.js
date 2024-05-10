import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Counter</h1>
      </div>
      <div className="counter-header">
        <h1 id="count">{count}</h1>
      </div>
      <div className="buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;
