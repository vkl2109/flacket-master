import { useState } from 'react'
import LandingPage from './LandingPage'
import './App.css'
import LoginPage from './LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path ={'/'} element ={<LoginPage/>}/>
        <Route path ={'/landing'} element ={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
    
  )
}

export default App