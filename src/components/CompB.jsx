import React, { useContext } from 'react'
import { CounterContext } from '../App'

export default function compB({state}) {
  const {countState, countDispatch} = useContext(CounterContext)
  return (
    <div>
      <p>You clicked on CompB  {countState} times</p>
      <button onClick={() => countDispatch("increment")}>
        increment
      </button>
      <button onClick={() => countDispatch("decrement")}>
        decrement
      </button>
      <button onClick={() => countDispatch("reset")}>
        Reseet
      </button>
    </div>
  )
}
