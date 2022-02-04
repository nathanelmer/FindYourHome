import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const Listings = () => {
    const [listings, setListings] = useState([])
    const [savedListing, setSavedListing] = useState({})
    const currentUser = localStorage.getItem("user")
    const history = useHistory()

    useEffect(() => {
        fetchIt("http://localhost:8088/listings")
            .then(listingData => setListings(listingData))
    },[])

  const sendSavedListing = (listing) => {
    fetchIt("http://localhost:8088/savedListings", "POST", JSON.stringify(listing))
  }

    return <>
        <h2>Available Homes</h2>
        <section className="card">
            {
                listings.map(
                    (list) => {
                        return <div key={`listing--${list.id}`} className="listing">
                                    <img className="listingImg" src={list.imageURL}/>
                                        <div className="info">
                                            <p>$ {list.price.toLocaleString()}</p>
                                            <p>{list.address}</p>
                                            <p>{list.bedrooms} bedroom(s)/ {list.bathrooms} bathroom(s)</p>
                                </div>
                                    <button className="saveBtn" onClick={() => {
                                    const copy = {...savedListing}
                                    copy.userId = parseInt(currentUser)
                                    copy.listingId = list.id
                                    copy.note = ""
                                    setSavedListing(copy)
                                    sendSavedListing(copy)
                                    window.alert("This listing has been saved!")
                                    history.push("/savedListings")
                                    }}>Save</button>
                            
                        </div>})
            }
        </section>
    </>
}