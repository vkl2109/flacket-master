import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

function LoginPage () {
    return(
        <div>
            <Link to = {"/main"}>
                <div>
                    Home Page Link 
                </div>
            </Link>
        </div>
    )
}

export default LoginPage