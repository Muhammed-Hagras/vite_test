import React, { useContext, useReducer } from 'react'
import { CounterContext } from '../App';

export default function compA() {
    const {countState, countDispatch} = useContext(CounterContext);
  return (
    <div>
      <p>You clicked on CompA  {countState} times</p>
      <button onClick={() => countDispatch("increment")}> 
        Increment 
      </button>
      <button onClick={() => countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countDispatch("reset")}>
        Reseet
      </button>
    </div>
  )
}


// {type: "increment"}{type: "decrement"}{type: "reset"}