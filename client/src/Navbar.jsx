import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ loginData, setLoginData }) {
    const handleLogout = () => {
        setLoginData({
            id: null,
            username: null,
        })
        localStorage.removeItem("token")
    }

    return (
        <div className='nav-cont'>
            {/* <h1>flakit_master</h1> */}
            <div clasName="site-name-container">
                <img className="logo" src="./src/assets/flakit_master_logo.png" />
                <img className="title" src="./src/assets/flakit_master_name.png" />
            </div>
            <div className="avatar-greeting-container">
                {loginData.username && <span style={{fontFamily: 'Virgil',  fontSize: 16, color: "#0F8FA1", "alignSelf": "center"}}>Welcome, {loginData.username}</span>}
                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="avatar" src="src/assets/flakit_master_avatar_signed_out.png" />
                    </button>
                    {loginData.username && <ul className="dropdown-menu">
                        <Link to={"/home"}>
                            <li className="dropdown-item">Home</li>
                        </Link>
                        <Link to={"/"}>
                            <li className="dropdown-item" onClick={handleLogout}>Logout</li>
                        </Link>
                    </ul>}
                </div>
            </div>
        </div>
    )
}

export default NavBar 