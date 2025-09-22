import React, { useReducer } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";
import { ACTIONS } from "../constants/actions";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increaseCounter = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decreaseCounter = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const increaseBy5 = () => {
    dispatch({ type: ACTIONS.INCREASEBY5, payload: { number: 5 } });
  };

  const toogleName = ()=> {
    dispatch({type: ACTIONS.TOGLENAME})
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Name: {state.name}</h2>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={increaseBy5}>Increase 5 </button>
      <button onClick={toogleName}>change The Name</button>
    </div>
  );
};

export default Counter;
