import React, { useState } from 'react'

function useCounter(value=0) {
    const [count, setCount] = useState(value)

    const increment=()=>{
        setCount((prev)=>prev+1)
    };
    const decrement=()=>{
        setCount((prev)=>prev-1)
    };
    const reset=()=>{
        setCount(value)
    }
    
  return (
    {count, increment, decrement, reset}
  )
}

export default useCounter