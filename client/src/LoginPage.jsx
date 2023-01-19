import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


function LoginPage({ loginData, setLoginData}) {
    const navigate = useNavigate()
    const [showSignUp, setShowSignUp] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const [loginState, setLoginState] = useState({
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
    const [avatar, setAvatar] = useState('')

    const avatars = {
        avatar1: "src/assets/flakit_master_avatar1.png",
        avatar2: "src/assets/flakit_master_avatar2.png",
        avatar3: "src/assets/flakit_master_avatar3.png",
        avatar4: "src/assets/flakit_master_avatar4.png",
        avatar5: "src/assets/flakit_master_avatar5.png",
        avatar6: "src/assets/flakit_master_avatar6.png",
    }

    const handleLoginInput = (e) => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value });
    }

    const handleAvatar = () => {
        let e = document.getElementById("avatar")
        let v = e.options[e.selectedIndex].value
        setAvatar(`${v}`)
    }

    const handleSignUpInput = (e) => {
        setSignUpData({ ...signUpData, 
            [e.target.name]: e.target.value,
            avatarURL: avatar});
        console.log(signUpData)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUpData.password !== signUpData.passwordConfirm) {
            alert("password does not match")
            return
        }

        if (showSignUp) {
            // console.log("Signing up...")
            const signup = async () => {
                let req = await fetch("http://localhost:3001/users", {
                    method: "POST",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        username: signUpData.username,
                        email: signUpData.email,
                        password: signUpData.password,
                        avatarUrl: signUpData.avatarURL
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
            const login = async () => {
                let req = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        username: loginState.username,
                        password: loginState.password,
                    })
                })
                let res = await req.json()
                if (req.ok) {
                    let newUser = { "id": res.user.id, "username": res.user.username, "password": res.user.password, "avatarUrl": res.user.avatarUrl }
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
                    <h6 style={{ "color": "red", "alignself": "center" }}>{errorMsg}</h6>
                    <div>
                        <input
                            className="form-control"
                            type="submit"
                            value="Log in"
                        >
                        </input>
                    </div>
                    <h6 style={{ 'alignSelf': 'center' }}>or</h6>
                    <div>
                        <button
                            onClick={() => setShowSignUp(true)}
                            className="form-control"
                        >
                            Sign up
                        </button>
                    </div>


                </form>}

                {showSignUp && <>
                    <form onSubmit={handleSubmit}>
                        <div input-group='true'>
                            <select 
                                id="avatar"
                                className="form-control"
                                onChange={handleAvatar}
                            >
                                <option name="avatarURL" defaultValue="none" selected disabled hidden>pick an avatar</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar1.png">avatar 1</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar2.png">avatar 2</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar3.png">avatar 3</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar4.png">avatar 4</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar5.png">avatar 5</option>
                                <option name="avatarURL" value="src/assets/flakit_master_avatar6.png">avatar 6</option>
                            </select>
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
                            {/* <input
                                className="form-control"
                                type="text"
                                placeholder="Image Link"
                                name="avatarURL"
                                value={signUpData.avatarURL}
                                onChange={handleSignUpInput}
                            >
                            </input> */}
                        </div>
                        <h6 style={{ "color": "red", "alignself": "center" }}>{errorMsg}</h6>
                        <div>
                            <button
                                onClick={() => setShowSignUp(false)}
                                className="form-control"
                            // type="submit"
                            // value="login"
                            >
                                Log in
                            </button>
                        </div>
                        <h6 style={{ 'alignSelf': 'center' }}>or</h6>
                        <div>
                            <input
                                onClick={() => setShowSignUp(true)}
                                className="form-control"
                                type="submit"
                                value="Sign up"
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