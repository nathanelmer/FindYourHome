import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import MatchedListings from "./MatchedListings";

export default () => {
    const [savedListings, setListings] = useState([])
    const currentUser = localStorage.getItem("user")

    useEffect(() => {
        fetchIt("http://localhost:8088/savedListings?_expand=listing")
            .then(data => setListings(data))
    }, [])

    const matchedListings = () => {
        const userSaved = savedListings.filter(list => list.userId === parseInt(currentUser))
        return userSaved
    }

    return (
        <>
        <h2>Saved Listings</h2>
            <section>
                {
                    matchedListings().length > 0
                    ?
                    matchedListings().map((listing) => <MatchedListings key={listing.id} listing={listing} setState={setListings}/>) 
                    :
                    <h2>You have no saved listings yet!</h2>
                }
            </section>
        </>
        
    )
}
