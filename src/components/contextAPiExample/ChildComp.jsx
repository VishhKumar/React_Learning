import React, { useContext } from 'react'
import { CreateContextExample } from './CreateContextExample'

function ChildComp() {
  const userName = useContext(CreateContextExample)
  return (
    <div>ChildComp-{userName}</div>
  )
}

export default ChildComp