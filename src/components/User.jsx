import React from 'react'
import './user.css'




const User = ({user}) => {
  return (
    <div className='user'>
      <h4>Name:{user.name}</h4>
      <p>Email:{user.email}</p>
      <p>Address:{user.address.city}</p>
      

    </div>
  )
}

export default User
