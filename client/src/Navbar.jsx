import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
function NavBar({loginData}){
        
    return(
        <div className='nav-cont'>
            <h1>FlatPass</h1>
            {/* {loginData.map((user)=>{
                return(
                        <h2>Hello {user.usernmae}!</h2>
                    )
                })} */}
=======
function NavBar() {

    return (
        <div className='nav-cont'>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
                <h1>FlatPass</h1>
            </Link>
            <Link to ={"/"}> 
>>>>>>> 93834ae67f5c00435741925ab8dd4988d09fb85c
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="src/assets/avatardefault_92824.png"/>
                    </button>
                    <ul class="dropdown-menu">
                    <Link to ={"/"}> 
                        <li class="dropdown-item">Temp home page link</li>
                    </Link>
                        <li class="dropdown-item" >logout</li>
                    </ul>
                </div>
        </div>
    )
}

export default NavBar 