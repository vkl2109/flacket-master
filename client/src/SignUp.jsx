import React, { useState } from "react";

function SignUp() {
    const [userData, setUserData] = useState({

    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("signing up...")

        // const signup = async() => {
        //     let req = await fetch("/login")
        //     let res = await req.json()
        //     console.log(res)
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                >
                </input>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                >
                </input>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                >
                </input>
                <input
                    type="password"
                    placeholder="confirm password"
                    name="passwordConfirm"
                    value={userData.passwordConfirm}
                    onChange={handleChange}
                >
                </input>
                <input
                    type="submit"
                    name="Sign Up"

                >
                </input>
            </form>
        </div>
    )
}

export default SignUp;