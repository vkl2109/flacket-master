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
        <div className="login-cont">
            <div className="img-cont">
                <img src="src/assets/00bootcamp2-jumbo.jpeg" />
            </div>
            <div className="form-cont">
                <form onSubmit={handleSubmit}>
                <div input-group='true' mb-3='true'>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}>
                    </input>
                </div>
                <div>
                    <input
                        class="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange} >
                    </input>
                </div>

                <div>
                    <input
                        class="form-control"
                        type="submit"
                        value="login"
                    >
                    </input>
                </div>
                <h6 style={{'alignSelf':'center'}}>or</h6>
                <div>
                    <input
                        class="form-control"
                        type="submit"
                        value="Signup"
                    >
                    </input>
                </div>
                <Link to = {"/home"}>
                    <div>
                        Home Page Link 
                    </div>
                </Link>
                </form>
                
            </div>

            

        </div>
    )
}

export default LoginPage