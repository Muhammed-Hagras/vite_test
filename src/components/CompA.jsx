import React, { useContext, useReducer } from 'react'
import { CounterContext } from '../App';

export default function compA() {
    const {countState, countDispatch} = useContext(CounterContext);
    console.log(countState)
  return (
    <div>
      <p>You clicked on CompA  {countState} times</p>
      <button onClick={() => countDispatch({type: "increment"})}> 
        Increment 
      </button>
      <button onClick={() => countDispatch({type: "decrement"})}>
        Decrement
      </button>
      <button onClick={() => countDispatch({type: "reset"})}>
        Reseet
      </button>
    </div>
  )
}


// {type: "increment"}{type: "decrement"}{type: "reset"}

// {type: "increment", paylaod :2}