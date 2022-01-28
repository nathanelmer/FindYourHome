import React from "react"
import { Route, Redirect } from "react-router"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";


export const FindYourHome = () => ( 
    <>
        <Route
            render={() => {
                if (localStorage.getItem("user")) {
                    return (
                     <>
                    <ApplicationViews />
                    </>
                );
                } else {
                return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
     </>
)
