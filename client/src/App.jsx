import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import LoginPage from './LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Navbar'

function App() {
    // useEffect(()=> {
    //     const request = async() => {
    //         let req = await fetch('')
    //         let res = await req.json()
    //         console.log(res) 
    //     }
    //     request()
    // }, [])
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path ={'/'} element ={<LoginPage/>}/>
          <Route path ={'/main'} element ={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App