import React, { useContext, useReducer } from "react";
import CompC from "./components/CompC";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import { CounterContext } from "./App";
import reducer, { initialState } from "./reducers/counReducer";

export default function Example() {
  const {countState, countDispatch} = useContext(CounterContext);
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>You clicked on  Example  {countState} times</p>
      <CompA />
      <CompB />
      <CompC />
    </div>
  );
}
