import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


function LoginPage({ loginData, setLoginData }) {
    const navigate = useNavigate()
    const [showSignUp, setShowSignUp] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState('')
    const [ loginState, setLoginState] = useState({
        username: "",
        password: ""
    })
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarURL: ""
    })

    const handleLoginInput = (e) => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value });
    }

    const handleSignUpInput = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (showSignUp) {
            console.log("Signing up...")
            const signup = async() => {
                let req = await fetch("http://localhost:3001/users", {
                    method: "POST",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        username: signUpData.username,
                        email: signUpData.email,
                        password: signUpData.password,
                        avatarURL: signUpData.avatarURL
                    })
                })
                let res = await req.json()
                console.log(res)
                if (req.ok) {
                    setLoginData(res)
                    navigate("/home")
                }
            }
            signup()

        } else {
            console.log("Loggin in...")
            const login =  async() => {
                console.log("username", loginState.username)
                let req = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: { "Content-type": "application/json"},
                    body: JSON.stringify({
                        username: loginState.username,
                        password: loginState.password
                    })
                })
                let res = await req.json()
                console.log(res)
                 if (req.ok) {
                    let newUser = { "id": res.user.id, "username": res.user.username, "password": res.user.password}
                    setLoginData(newUser)
                    localStorage.setItem('token', res.token)
                    navigate('/home')
                 }
                 else {
                    setErrorMsg(`Log In Failed: ${res.error}`)
                 }
            }
            login()
        }

    }

    return (
        <div className="login-cont">
            <div className="img-cont">
                <img src="src/assets/00bootcamp2-jumbo.jpeg" />
            </div>
            <div className="form-cont">
                {!showSignUp && <form onSubmit={handleSubmit}>
                    <div input-group='true' mb-3='true'>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={loginState.username}
                            onChange={handleLoginInput}>
                        </input>
                    </div>
                    <div>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginState.password}
                            onChange={handleLoginInput} >
                        </input>
                    </div>
                    <h6 style={{"color": "red", "align-self":"center"}}>{errorMsg}</h6>
                    <div>
                        <input
                            className="form-control"
                            type="submit"
                            value="login"
                        >
                        </input>
                    </div>
                    <h6 style={{ 'alignSelf': 'center' }}>or</h6>
                    <div>
                        <button
                            onClick={() => setShowSignUp(true)}
                            className="form-control"
                        >
                            Sign Up
                        </button>
                    </div>


                </form>}

                {showSignUp && <>
                    <form onSubmit={handleSubmit}>
                        <div input-group='true'>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="username"
                                name="username"
                                value={signUpData.username}
                                onChange={handleSignUpInput}
                            >
                            </input>
                        </div>
                        <div>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="email"
                                name="email"
                                value={signUpData.email}
                                onChange={handleSignUpInput}
                            >
                            </input>
                        </div>
                        <div>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="password"
                                name="password"
                                value={signUpData.password}
                                onChange={handleSignUpInput}
                            >
                            </input>
                        </div>
                        <div>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="confirm password"
                                name="passwordConfirm"
                                value={signUpData.passwordConfirm}
                                onChange={handleSignUpInput}
                            >
                            </input>
                        </div>
                        <h6 style={{"color": "red", "align-self":"center"}}>{errorMsg}</h6>
                        <div>
                            <button
                                onClick={() => setShowSignUp(false)}
                                className="form-control"
                            // type="submit"
                            // value="login"
                            >
                                Login
                            </button>
                        </div>
                        <h6 style={{ 'alignSelf': 'center' }}>or</h6>
                        <div>
                            <input
                                onClick={() => setShowSignUp(true)}
                                className="form-control"
                                type="submit"
                                value="Signup"
                            >
                            </input>
                        </div>
                    </form>

                </>}


            </div>

        </div>
    )
}

export default LoginPage