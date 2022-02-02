import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";

export const Register = () => {
const [newUser, setUser] = useState({ realtor: false})


const updateCustomer = (e) => {
    const copy = {...newUser}
    copy[e.target.id] = e.target.value
    setUser(copy)
}


const createUser = () => {
    fetchIt("http://localhost:8088/users", "POST", JSON.stringify(newUser))
    
}
   
   
   return (<>
    <h1>Register</h1>
        <main>
            <form onSubmit={createUser}>
                <h1>Find Your Home</h1>
                <h3>Please fill out all of the fields</h3>
                    <fieldset>
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email"
                        id="email"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="Email address..."
                        required autoFocus/>
                        
                        <label htmlFor="inputName">First and last name</label>
                        <input type="text"
                        id="name"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="First and last name..."
                        required autoFocus/>

                        <label htmlFor="inputNumber">Phone number</label>
                        <input type="text"
                        id="phoneNumber"
                        onChange={updateCustomer}
                        className="loginForm"
                        placeholder="Phone number..."
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