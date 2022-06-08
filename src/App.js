import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <div>
      {/* <Provider store={store}> */}
      <Counter />
      {/* </Provider> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
