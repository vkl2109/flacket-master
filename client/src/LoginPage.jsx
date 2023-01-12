import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

function LoginPage () {
    return(
        <div>
            <NavBar />
            <Link to = {"/landing"}>
                <div>
                    Landing Page Link 
                </div>
            </Link>
            
        </div>
    )
}

export default LoginPage