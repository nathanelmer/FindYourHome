import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

export const NavBar = () => {

    const logoutUser = () => {
        localStorage.removeItem("user")
    }
    return (
        <section className="navbar">
            <div>
                <Link to="/"><img className="logo" src="../../images/home.png"/></Link>
            </div>
            <div className="navItem">
                <Link to="/login" onClick={logoutUser}><img className="navItem" src="../images/logout.png"/></Link>
            </div> 
            <div className="navItem">
                <Link to="/savedListings"><img className="navItem" src="../images/cart.png"/></Link>
            </div>
            <div className="navItem">
                <Link to="/messages"><img className="navItem" src="../images/mail.png"/></Link>
            </div>
        </section>
    )
}