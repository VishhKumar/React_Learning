import React, { useEffect, useRef } from 'react'

function UseRef() {
    const myRef=useRef(null)

    useEffect(()=>{
        console.log(myRef.current)
        myRef.current.style.color='red'
        myRef.current.style.fontSize='50px'
    },[])
  return (
    <div ref={myRef}>UseRef

    </div>
)
}

export default UseRef