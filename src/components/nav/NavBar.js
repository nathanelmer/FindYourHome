import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchIt } from "../../apiManager/Fetch";
import "./Nav.css"

export const NavBar = () => {
    const [currentUser, setUser] = useState({})
    const localStorageId = parseInt(localStorage.getItem("user"))

    useEffect(() => {
        fetchIt("http://localhost:8088/users")
        .then(users => users.find(user => user.id === localStorageId))
        .then(foundUser => setUser(foundUser))
    }, [])

    const logoutUser = () => {
        localStorage.removeItem("user")}

    return (
        <section className="navbar">
            <div>
                <Link to="/"><img className="logo" src="../images/home.png"/></Link>
            </div>
            <div className="navItem">
                <Link to="/login" onClick={logoutUser}><img className="navItem" src="../images/logout.png"/></Link>
            </div> 
            {currentUser.realtor ?
                <div className="navItem">
                <Link to="/listings"><img className="navItem" src="../images/home.png"/></Link>
                </div>
            :
            <div className="navItem">
                <Link to="/savedListings"><img className="navItem" src="../images/jesus.png"/></Link>
            </div>
            }
            <div className="navItem">
                <Link to="/messages"><img className="navItem" src="../images/mail.png"/></Link>
            </div>
            <div className="navItem">
                <Link to="/sendMessage"><img className="navItem" src="../images/sendMail.png"/></Link>
            </div>
        </section>
    )

    
}