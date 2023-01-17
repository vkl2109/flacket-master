import React, { useState } from "react";

function LoginPage() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarURL: ""
    })

    const handleLoginInput = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleSignUpInput = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (showSignUp) {
            console.log("Signing up...")
            // const signup = async() => {
            //     let req = await fetch("/login")
            //     let res = await req.json()
            //     console.log(res)
            //     if (res.ok) {
            //          navigate to home page
            //          set user to logged in user    
            //     }
            // }

        } else {
            console.log("Loggin in...")
            // const login =  async() => {
            //     let req = await fetch("/login")
            //     let res = await req.json()
            //     console.log(res)
            //      if (res.ok) {
            //          set user to logged in user
            //          navigate to home page
            //      }
            // }

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
                            value={loginData.username}
                            onChange={handleLoginInput}>
                        </input>
                    </div>
                    <div>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginInput} >
                        </input>
                    </div>
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