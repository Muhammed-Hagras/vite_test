import React, { useContext } from 'react'
import { CounterContext } from '../App'

export default function compB({state}) {
  const {countState, countDispatch} = useContext(CounterContext)
  
  return (
    <div>
      <p>You clicked on CompB  {countState} times</p>
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
