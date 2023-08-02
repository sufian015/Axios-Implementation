import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from './user';


export default function Fetchapi() {

     const [users,setUsers]=useState([]);

     useEffect(()=>{

          loadUsers()

     },[])

     const loadUsers=async ()=>{

       try {

        const {data}= await axios.get('https://jsonplaceholder.typicode.com/users');
        
         setUsers(data);

       } catch (error) {
         setUsers(error.message)
       }

         
          
     }

  return (
    <div>
      <h1 style={{color:'purple'}}>Json Api Placeholder</h1>

      {users.map(user => <User user={user} key={user.id}/>)}

      
    </div>
  )
}
