import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("")
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(data => data.length ? data[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("user", exists.id)
                    history.push("/")
                } else {
                    window.alert("Incorrect email. Try again")
                }
            })
    }

    return (
        <main className="card">
            <form onSubmit={handleLogin} className="loginCard">
                    <header className="loginHeader">
                        <h1>Find Your Home</h1>
                        <h3>Please sign in</h3>
                    </header>
                    <fieldset>
                        <label htmlFor="inputEmail">Email address:</label>
                        <input type="email"
                        onChange={event => setEmail(event.target.value)}
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>
                    </fieldset>
                    <div className="idk">
                        <button type="submit" className="loginBtn" >Sign in</button>
                        <button className="loginBtn"><Link to="/register">Register</Link></button>
                    </div>
            </form>
         </main>   
    )
}