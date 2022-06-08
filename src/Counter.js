import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="contener">
      <div className="counter_box">
        <div className="count-div">
          <p className="count">{count}</p>
          <h1>Counter</h1>
        </div>
        <div className="button_div">
          <button onClick={setCount(count + 1)}>Increment</button>

          <button
            onClick={() => {
              count >= 0
                ? count === 0
                  ? setCount(0)
                  : setCount(count - 1)
                : alert("You can't decrement below 0");
            }}
          >
            Decrement
          </button>
          <div>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
