import React from 'react'

function ConditionalRendering({props}) {
  return (
    <div>ConditionalRendering
      {props.type ==='existing' ? <h1>Welcome {props.name}</h1>: <h1>please login</h1>}
    </div>
  )
}

export default ConditionalRendering