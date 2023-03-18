import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example'
import reducer, { initialState } from './reducers/counReducer'

export const CounterContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>You clicked on APP  {state} times</p>
      <CounterContext.Provider value={{
        countState: state,
        countDispatch: dispatch
      }}>
      <Example/>
      </CounterContext.Provider>
    </div>
  )
}

export default App
