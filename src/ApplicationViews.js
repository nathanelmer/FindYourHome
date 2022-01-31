import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Listings } from "./components/listings/Listings";

export const ApplicationViews = () => {
    return (
        <>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/">
            <Listings />
        </Route>
        </>
    )
}