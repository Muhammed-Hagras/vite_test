import React from 'react'

export default function compB() {
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        decrement
      </button>
      <p>You clicked {hamada.secondCount} times</p>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 2 })}>
        decrement
      </button>
    </div>
  )
}
