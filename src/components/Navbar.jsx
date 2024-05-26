import React from 'react'
import { NavLink, Router } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='gap-5 flex justify-center'>
        <NavLink className={(e)=>e.isActive?`text-2xl`:""} to='/'>Home</NavLink>
        <NavLink className={(e)=>e.isActive?`text-2xl`:""} to='/about'>about</NavLink>
        <NavLink className={(e)=>e.isActive?`text-2xl`:""} to='/users'>users</NavLink>
    </div>
  )
}

export default Nav