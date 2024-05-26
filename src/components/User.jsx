import React from 'react'
import axios from '../helpers/axios'
import { useState } from 'react';
import { NavLink, useLocation, useNavigate,Outlet } from 'react-router-dom'

const Users = () => {
  const navigate = useNavigate();
  const {pathname}= useLocation()
  const [user, setuser] = useState(null)
  const submitHandler =(e)=>{
    e.preventDefault()
    // console.log("form is submitted")
    // navigate('/')

  }
  const getuser = async()=>{
    try {
        const {data} = await axios.get("/users")
        setuser(data)
        // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>hello this is the user</h1>
      <form onSubmit={submitHandler}>
        <button onClick={getuser}>get user</button>
      </form>
      <ul>
        <li className='list-item' ><NavLink to={`${pathname/1}`}>item 1</NavLink></li>
        {user ? user.map((u)=>{
         return <li key={u.id}>{u.name}</li>
        }):"loading..."}
      </ul>
      {/* <hr /> */}
      <Outlet/>
    </div>
  )
}

export default Users