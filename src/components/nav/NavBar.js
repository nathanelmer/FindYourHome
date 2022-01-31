import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const logoutUser = () => {
        localStorage.removeItem("user")
    }
    return (
        <ul>
            <li>
                <Link to="/">Logo</Link>
            </li>
            <li>
                <Link to="/savedListings">My Listings</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            <li>
                <Link to="/login" onClick={logoutUser}>Logout</Link>
            </li> 
        </ul>
    )
}