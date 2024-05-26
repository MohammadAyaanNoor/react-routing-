import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Users from './components/User'
import Nav from './components/Navbar'
import Details from './components/Details'
import { useNavigate } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'

// const navigate = useNavigate()

const App = () => {
  return (
    <div>
     <Nav/>
    <MainRoutes/>

   </div>
  )
}

export default App