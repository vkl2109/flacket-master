import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
        
    return(
        <div className='nav-cont'>
            <h1>FlatPass</h1>
            <Link to ={"/"}> 
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="src/assets/avatardefault_92824.png"/>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default NavBar 