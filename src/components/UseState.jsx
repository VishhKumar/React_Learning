import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('Vishrant');

    const [details, setDetails] = useState({
        myCount: 0,
        myName: 'Vishrant'
    })

    function handleClick() {
        setCount(count + 1)
    }
    function handleInput(e) {
        setUserName(e.target.value)
    }
    
    function handleDetails() {
        setDetails({
            ...details,
            myCount: details.myCount + 1
        })
    }   
    function handleDetailsInput(e) {
        setDetails({
            ...details,
            myName: e.target.value
        })
    }   
  return (
    <div>
        <input type="text" onChange={handleDetailsInput} />
        <h1>{details.myName} has clicked {details.myCount} times</h1>
        <button onClick={handleDetails}>Increate</button>
    </div>
  )
}

export default UseState