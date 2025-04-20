import React, { useState } from 'react'

function Forms() {

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    function handleSubmit(event){
        event.preventDefault();
        console.log(name, email)
    
    }
  return (
    <div>Forms
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} required/>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required />
            {!name}name
            {!email}email
            <input type="submit" disabled={!name || !email} value="Submit" />
        </form>
    </div>
  )
}

export default Forms