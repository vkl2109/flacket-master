import React from "react";
import { Link } from 'react-router-dom'
import NavBar from "./Navbar";

function Seating () {
    return (
        <div>
            <NavBar />
            <div style={{"background": "red", "width" : '100%', "height" :'80%'}}>
                <Link to={'/landing'}>
                    <h1>go back to landing</h1>
                </Link>
                <Link to={'/calendar'}>
                    <h1>go back to calendar</h1>
                </Link>
                <div>
                    <h1>Seating Page</h1>
                </div>
            </div>
        </div>
    )
}
export default Seating