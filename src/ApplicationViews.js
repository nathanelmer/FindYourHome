import React from "react";
import { Route } from "react-router-dom";
import { Listings } from "./components/listings/Listings";
import SavedListings from "./components/listings/SavedListings";
import { MessageList } from "./components/messages/MessageList";

export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/">
            <Listings />
        </Route>
        <Route path="/messages">
            <MessageList />
        </Route>
        <Route path="/savedListings">
            <SavedListings />
        </Route>
        </>
    )
}