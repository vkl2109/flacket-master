import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import LoginPage from './LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Navbar'

function App() {
  const [loginData, setLoginData] = useState({
    id: null,
    username: null,
    // avatarUrl: "src/assets/flakit_master_avatar_signed_out.png"
  });

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:3001/autologin', {
        method: "POST",
        headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
        body: JSON.stringify({})
      })
      let res = await req.json()
      if (req.ok) {
        console.log(res)
        setLoginData({ id: res.id, username: res.username, avatarUrl: res.avatarUrl })
      }
    }
    // console.log(localStorage.getItem("token"))
    request();
  }, [])


  return (
    <div className="App">
      <BrowserRouter >
        <NavBar loginData={loginData} setLoginData={setLoginData} />
        <Routes>
          <Route path={'/'} element={<LoginPage loginData={loginData} setLoginData={setLoginData} />} />
          <Route path={'/home'} element={<Home loginData={loginData} />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App