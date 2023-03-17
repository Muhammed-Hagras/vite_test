import React, { useReducer } from "react";

export default function Example() {
  const initialState = {
    firstCount: 0,
    secondCount: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {...state, firstCount: state.firstCount + action.value };

      case "decrement":
        return {...state, firstCount: state.firstCount - action.value };

      case "incrementTwo":
        return {...state, secondCount: state.secondCount + action.value };

      case "decrementTwo":
        return {...state, secondCount: state.secondCount - action.value };

      case "reset":
        return initialState;

      default:
        state;
    }
  };

  const [hamada, dispatch] = useReducer(reducer, initialState);
console.log(hamada)
  return (
    <div>
      <p>You clicked {hamada.firstCount} times</p>
      
    </div>
  );
}
