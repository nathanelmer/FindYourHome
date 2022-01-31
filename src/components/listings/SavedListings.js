import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";

export const SavedListings = () => {
    const [savedListings, setSaved] = useState([])
    const currentUser = localStorage.getItem("user")

    useEffect(() => {
        fetchIt("http://localhost:8088/savedListings?_expand=listing")
            .then((savedData) => setSaved(savedData))
    },[])

    const matchedListings = () => {
        const save = savedListings.filter((list) => list.userId === parseInt(currentUser.id))
        return console.log(save)
    }
    
    return (
    <>
    <h1>Saved Listings</h1>
    <section className="card">
            { matchedListings() ?
                savedListings.map(
                    (list) => {
                        return <div key={`listing--${list.id}`} className="card">
                            <p>{list.listing.imageURL}</p>
                            <p>$ {list.listing.price.toLocaleString()}</p>
                            <p>{list.listing.address}</p>
                            <p>{list.listing.bedrooms} bedroom(s)/ {list.listing.bathrooms} bathroom(s)</p>
                            <p>{list.listing.note}</p>
                        </div>})
                        :
                        <div>"You have no saved listings yet!"</div>
            }
        </section>
    </>)
}