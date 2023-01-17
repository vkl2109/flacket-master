import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div className='nav-cont'>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
                <h1>FlatPass</h1>
            </Link>
            <Link to={"/"}>
                <img src="src/assets/avatardefault_92824.png" />
            </Link>
        </div>
    )
}

export default NavBar 