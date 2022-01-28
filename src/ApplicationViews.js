import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./components/auth/Login";

export const ApplicationViews = () => {
    return (
        <>
        <Route path="/login">
            <Login />
        </Route>
        </>
    )
}