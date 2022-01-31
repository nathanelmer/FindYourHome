import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";

export const Listings = () => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetchIt("http://localhost:8088/listings")
            .then(listingData => setListings(listingData))
    },[])



    return <>
        <h2>Listings</h2>
        <section>
            {
                listings.map(list => {
                 return <p key={`listing--${list.id}`}>{list.id}</p>})
            }
        </section>
    </>
}