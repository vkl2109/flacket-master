import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({loginData}){
        
    return(
        <div className='nav-cont'>
            <h1>FlatPass</h1>
            {/* {loginData.map((user)=>{
                return(
                        <h2>Hello {user.usernmae}!</h2>
                    )
                })} */}
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