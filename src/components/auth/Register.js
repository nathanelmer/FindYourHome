import React, { useState } from "react";

export const Register = () => {
const [newUser, setUser] = useState({})


const updateCustomer = (e) => {
    const copy = {...newUser}
    copy[e.target.id] = e.target.value
    setUser(copy)
}

const createUser = () => {
    window.alert("Account has been created, please log in")
    localStorage.setItem("user", newUser.id)
}
   
   
   return (<>
    <h1>Register</h1>
        <main>
            <form onSubmit={createUser}>
                <h1>Find Your Home</h1>
                <h3>Please fill in all of the fields</h3>
                    <fieldset>
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email"
                        id="email"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>
                        
                        <label htmlFor="inputEmail">Re-enter email address</label>
                        <input type="email"
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>
                        
                        <label htmlFor="inputName">First and last name</label>
                        <input type="text"
                        id="name"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>

                        <label htmlFor="inputNumber">Phone number</label>
                        <input type="text"
                        id="phoneNumber"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="Email address"
                        required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Create Account</button>
                    </fieldset>
            </form>
         </main>   
    </>
   )
}