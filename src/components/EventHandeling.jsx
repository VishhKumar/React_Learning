//print user name and password on button click practice events

import React from 'react'



function EventHandeling() {

    function handleSubmit(e) {
        // alert('Button Clicked')
        e.preventDefault();
        alert("User Name: " + e.target.username.value +","+ " Password: " + e.target.userpassword.value)
        console.log('Button Clicked',e)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter User Name' name="username" id="" />
            <input type="text" placeholder='Enter Password' name="userpassword" id="" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EventHandeling