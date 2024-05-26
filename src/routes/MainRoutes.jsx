import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/User'
import Details from '../components/Details'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   {/* <Route path='/users' element={<Users/>}/> */}
   <Route path='/users' element={<Users/>}>
    <Route path='/users/:id' element={<Details/>}/>
   </Route>
   <Route path='*' element={<h1>Route not found</h1>}/>
   </Routes>
    </div>
  )
}

export default MainRoutes