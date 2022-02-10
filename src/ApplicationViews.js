import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { fetchIt } from "./apiManager/Fetch";
import { Listings } from "./components/listings/Listings";
import SavedListings from "./components/listings/SavedListings";
import { MessageList } from "./components/messages/MessageList";
import { Leads } from "./components/leads/Leads"
import { SendMessage } from "./components/messages/SendMessage";

export const ApplicationViews = () => {
    const [currentUser, setUser] = useState({})
    const localStorageId = parseInt(localStorage.getItem("user"))

    useEffect(() => {
        fetchIt("http://localhost:8088/users")
        .then(users => users.find(user => user.id === localStorageId))
        .then(foundUser => setUser(foundUser))
    }, [])

    return (
        <> 
        {currentUser.realtor ?
            <Route exact path="/">
            <Leads />
            </Route>
        :
            <Route exact path="/">
            <Listings />
            </Route>
        }
        <Route exact path="/listings">
            <Listings currentUser={currentUser}/>
        </Route>
        <Route path="/messages">
            <MessageList />
        </Route>
        <Route path="/savedListings">
            <SavedListings />
        </Route>
        <Route path="/sendMessage">
            <SendMessage />
        </Route>
        </>
    )
}