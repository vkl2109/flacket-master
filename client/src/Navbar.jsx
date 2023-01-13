import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
        
    return(
        <div className='nav-cont' style={{"background":"yellow", 'height' : "100%", 'display' :'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
            <h1>Title</h1>
            <Link to ={"/"}> 
                <img style={{"width" : "auto", "height" : "100%"}} src="src/assets/devcrazzy.randomchat_1.png"/>
            </Link>
        </div>
    )
}

export default NavBar 