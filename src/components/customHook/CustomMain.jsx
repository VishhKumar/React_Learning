import React from 'react'
import useCounter from './useCounter'

function CustomMain() {
  const {count, increment,decrement,reset}=useCounter(10)
  return (
    <div>customHook - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomMain