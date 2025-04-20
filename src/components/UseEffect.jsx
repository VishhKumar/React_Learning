import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=>{
    const fetchUser = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        console.log(response)

        const data = await response.json()
        setUser({
          Uname: data.name,
          Uemail:data.email,

        })

      }catch(err){
        setError(err.message)
    }

    
  }
  fetchUser();

},[])


  function changeName(){
   setUser((prevs)=>({
    ...prevs,
    Uname: "Chobey Yadav"
   }))
  }

  return (
    <div>UseEffect
      <div>User Profile</div>
      <p>Name:{user && user.Uname}</p>
      <p>Email:{user && user?.Uemail}</p> 
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseEffect