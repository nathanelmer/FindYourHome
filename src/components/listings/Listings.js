import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const Listings = () => {
    const [listings, setListings] = useState([])
    const [savedListing, setSavedListing] = useState({})
    const currentUser = localStorage.getItem("user")

    useEffect(() => {
        fetchIt("http://localhost:8088/listings")
            .then(listingData => setListings(listingData))
    },[])

  const sendSavedListing = (listing) => {
    fetchIt("http://localhost:8088/savedListings", "POST", JSON.stringify(listing))
  }

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
                            <button onClick={() => {
                                const copy = {...savedListing}
                                copy.userId = parseInt(currentUser)
                                copy.listingId = list.id
                                copy.note = ""
                                setSavedListing(copy)
                                sendSavedListing(copy)
                                window.alert("This listing has been saved!")
                            }}>Save</button>
                        </div>})
            }
        </section>
    </>
}