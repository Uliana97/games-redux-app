import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { inc } from "./actions";

const App = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter = {counter}</div>
      <button onClick={() => dispatch(inc())}>Increment</button>
    </>
  );
};

export default App;
