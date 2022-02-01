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
        const save = savedListings.filter((list) => list.userId === parseInt(currentUser))
        if (save.length > 0){
        return save.map(list => {
            return <div key={`listing--${list.id}`} className="card">
                            <p>{list.listing.imageURL}</p>
                            <p>$ {list.listing.price.toLocaleString()}</p>
                            <p>{list.listing.address}</p>
                            <p>{list.listing.bedrooms} bedroom(s)/ {list.listing.bathrooms} bathroom(s)</p>
                            <p>{list.note}</p>
                        </div>
        
         }
       )
      } else { return <p>You have no saved listings yet!</p>}
    }
    
    return (
    <section>
    <h1>Saved Listings</h1>
        {matchedListings()}
    </section>)
}