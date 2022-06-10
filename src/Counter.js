import React from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./action/action";

const Counter = () => {
  // const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const resetbutton = () => {
    dispatch(reset(0));
    alert(count + " will be reset to 0");
  };
  const count = useSelector((state) => state.count);
  return (
    <div className="contener">
      <div className="counter_box">
        <div className="count-div">
          <p className="count">{count}</p>
          <h1>Counter</h1>
        </div>
        <div className="button_div">
          {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
          <button className="inc-button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <div>
            {/* <button className="reset-button" onClick={() => setCount(0)}>
              Reset
            </button> */}
            <button className="reset-button" onClick={() => resetbutton()}>
              Reset
            </button>
          </div>

          <button className="dec-button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>

          {/* <button
            onClick={() => {
              count >= 0
                ? count === 0
                  ? setCount(0)
                  : setCount(count - 1)
                : alert("You can't decrement below 0");
            }}
          >
            Decrement
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
