import React, { useState } from "react";
import Counter from "./styles";

const CounterGroup = props => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <Counter {...props}>
      <div onClick={handleDecrement}>-</div>
      <span>{counter}</span>
      <div onClick={handleIncrement}> + </div>
    </Counter>
  );
};

export default CounterGroup;
