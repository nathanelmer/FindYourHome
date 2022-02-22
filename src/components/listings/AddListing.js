import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchIt } from "../../apiManager/Fetch";

export const AddListing = () => {
    const [newListing, setNewListing] = useState({ userId: 1 })
    const history = useHistory()

    const updateListing = (e) => {
        const copy = {...newListing}
        copy[e.target.id] = e.target.value
        setNewListing(copy)
    }

    const postListing = () => {
        fetchIt("http://localhost:8088/listings", "POST", JSON.stringify(newListing))
        history.push("/listings")
    }

    return (
        <main className="card">
            <form className="loginCard" onSubmit={postListing}>
                    <header className="loginHeader">
                        <h3>Create New Listing</h3>
                    </header> 
                        <fieldset>
                            <label htmlFor="image">Image Url:</label>
                            <input type="text"
                            id="imageURL"
                            placeholder="Image URL..."
                            onChange={updateListing}
                            />
                        </fieldset>
                        <fieldset>
                        <label htmlFor="price">Price:$</label>
                        <input  
                        id="price"
                        placeholder="Price..."
                        onChange={updateListing}
                        />
                        </fieldset>
                        <fieldset>
                        <label htmlFor="address">Address:</label>
                        <input  
                        id="address"
                        placeholder="Address..."
                        onChange={updateListing}
                        />
                        </fieldset>
                        <fieldset>
                        <label htmlFor="bathroom">Bathrooms:</label>
                        <input  
                        id="bathrooms"
                        placeholder="Bathrooms..."
                        onChange={updateListing}
                        />
                        </fieldset>
                        <fieldset>
                        <label htmlFor="bedroom">Bedrooms:</label>
                        <input  
                        id="bedrooms"
                        placeholder="Bedrooms..."
                        onChange={updateListing}
                        />
                        </fieldset>
                    <div className="btnContainer">
                        <button type="submit" className="loginBtn">Add Listing</button>
                    </div>
            </form>
         </main>  
    )
}