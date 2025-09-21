import React, { useReducer } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";
import { ACTIONS } from "./constants/actions";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </div>
  );
};

export default Counter;
