import React from 'react'

function ListRendering() {
    const num = [1, 2, 3, 4, 5]
  return (
    <div>ListRendering
        <ul>
            {num.map((item, index)=>{
                return <li key = {index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default ListRendering