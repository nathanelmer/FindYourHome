import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const Listings = () => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetchIt("http://localhost:8088/listings")
            .then(listingData => setListings(listingData))
    },[])



    return <>
        <h2>Listings</h2>
        <section className="card">
            {
                listings.map(
                    (list) => {
                        return <div key={`listing--${list.id}`} className="card">
                            <p>{list.imageURL}</p>
                            <p>$ {list.price.toLocaleString()}</p>
                            <p>{list.address}</p>
                            <p>{list.bedrooms} bedroom(s)/ {list.bathrooms} bathroom(s)</p>
                        </div>})
            }
        </section>
    </>
}