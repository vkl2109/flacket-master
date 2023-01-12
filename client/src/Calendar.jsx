import React from "react";
import { Link } from 'react-router-dom'
import NavBar from "./Navbar";

function Calendar () {
    //might need to map depending on api or UI kit
    return(
        <div>
            <NavBar />
            <div style={{"background": "red", "width" : '100%', "height" :'80%'}}>
                <Link to={'/landing'}>
                <h1>go back to landing</h1>
                </Link>
                <Link to={'/seating'}>
                    <h1>Go to seating page</h1>
                </Link>
                <div>
                    <h1>Calendar Page</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Calendar