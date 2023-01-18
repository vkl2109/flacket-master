import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ loginData }) {

    return (
        <div className='nav-cont'>
            <h1>FlatPass</h1>
            {/* {loginData.map((user)=>{
                return(
                        <h2>Hello {user.usernmae}!</h2>
                    )
                })} */}
            <div className="btn-group">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="src/assets/avatardefault_92824.png" />
                </button>
                <ul className="dropdown-menu">
                    <Link to={"/"}>
                        <li className="dropdown-item">Temp home page link</li>
                    </Link>
                    <li className="dropdown-item" >logout</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar 