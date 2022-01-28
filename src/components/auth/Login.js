import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    return (
        <main>
            <form>
                <h1>Find Your Home</h1>
                <h3>Please sign in</h3>
                    <fieldset>
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email"
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <button>Sign in</button>
                    </fieldset>
            </form>
            <div>
                <button><Link to="/register">Register</Link></button>
            </div>
         </main>   
    )
}