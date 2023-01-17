import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import LoginPage from './LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Navbar'

function App() {
  const [loginData, setLoginData] = useState({
    id: 1,  
    username: "",
    password: ""
  });
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
        <NavBar loginData={loginData}/>
        <Routes>
          <Route path ={'/'} element ={<LoginPage loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path ={'/home'} element ={<Home loginData={loginData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App