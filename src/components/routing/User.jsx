import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const id = useParams()
    console.log(id.id)
  return (
    <div> user - {id.id}</div>
  )
}

export default User