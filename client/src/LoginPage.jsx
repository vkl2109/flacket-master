import React, { useState } from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

function LoginPage() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("logging in...")

        // const login =  async() => {
        //     let req = await fetch("/login")
        //     let res = await req.json()
        //     console.log(res)
        // }
    }

    return (
        <div>
            <div>
                <img src="" />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}>
                    </input>

                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange} >
                    </input>
                    <input
                        type="submit"
                        value="login"
                    >
                    </input>
                </form>
            </div>

            <Link to = {"/home"}>
                <div>
                    Home Page Link 
                </div>
            </Link>

        </div>
    )
}

export default LoginPage