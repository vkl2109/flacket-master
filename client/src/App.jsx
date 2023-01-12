import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import Seating from './Seating'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Calendar from './Calendar'

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
    <>
      <BrowserRouter >
        <Routes>
          <Route path ={'/'} element ={<LoginPage/>}/>
          <Route path ={'/landing'} element ={<LandingPage/>}/>
          <Route path ={'/calendar'} element ={<Calendar/>}/>
          <Route path ={'/seating'} element ={<Seating/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App