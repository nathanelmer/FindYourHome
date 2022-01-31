import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/homepage">Logo</Link>
            </li>
            <li>
                <Link to="/createMessage">Send Msg</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            <li>
                <Link to="/login">Logout</Link>
            </li> 
        </ul>
    )
}