import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";

export const SavedListings = () => {
    const [savedListings, setSaved] = useState([])
    const [note, setNote] = useState("")
    const [newList, setList] = useState({})
    const currentUser = localStorage.getItem("user")
    

    useEffect(() => {
        fetchIt("http://localhost:8088/savedListings?_expand=listing")
            .then((savedData) => setSaved(savedData))
    },[])

    const removeSaved = (id) => {
        fetch(`http://localhost:8088/savedListings/${id}`, {method: "DELETE"})
    }

    const addNote = (updated, id) => {
        fetchIt(`http://localhost:8088/savedListings/${id}`, "PUT", JSON.stringify(updated))
    }

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
                                <label htmlFor="note">Notes:</label>
                                <input type="text"
                                onChange={e => setNote(e.target.value)}
                                placeholder="Enter notes here..."
                                required autoFocus/>
                            <button onClick={() => {
                                    const copy = {...newList} 
                                    copy.userId = parseInt(currentUser)
                                    copy.listingId = list.listingId
                                    copy.note = note
                                    setList(copy)
                                    addNote(copy, list.id)
                            }}>Save Note</button>
                            <button onClick={() => {
                                    removeSaved(list.id)
                            } }>Remove from saved</button>
                        </div>
        
         }
       )
      } else { return <p>You have no saved listings yet!</p> }
    }
    
    return (
    <section>
    <h1>Saved Listings</h1>
        {matchedListings()}
    </section>)
}