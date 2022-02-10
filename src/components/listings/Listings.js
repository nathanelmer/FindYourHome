import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const Listings = ({ currentUser }) => {
    const [listings, setListings] = useState([])
    const [savedListing, setSavedListing] = useState({})
    const currentUserId = localStorage.getItem("user")
    const history = useHistory()

    useEffect(() => {
        fetchIt("http://localhost:8088/listings")
            .then(listingData => setListings(listingData))
    },[])


  const sendSavedListing = (listing) => {
    fetchIt("http://localhost:8088/savedListings", "POST", JSON.stringify(listing))
  }

  const removeListing = (id) => {
    fetch(`http://localhost:8088/listings/${id}`, { method: "DELETE" })
      .then(() =>
        fetchIt("http://localhost:8088/listings")
      )
      .then((data) => setListings(data));
  };

    return <>
        <section className="page">
        <div className="listHeader">
        <h2>Available Homes</h2>
        {currentUser?.realtor === true ?
            <Link to="/addListing"><img className="addImg" src="../images/add.png"/></Link>
        :
        ""
        }
        </div>
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
                                {!currentUser?.realtor ?
                                    <button className="saveBtn" onClick={() => {
                                    const copy = {...savedListing}
                                    copy.userId = parseInt(currentUserId)
                                    copy.listingId = list.id
                                    copy.note = ""
                                    setSavedListing(copy)
                                    sendSavedListing(copy)
                                    window.alert("This listing has been saved!")
                                    }}>Save</button>
                                :
                                <button className="saveBtn"
                                onClick={() => removeListing(list.id)}
                                >Delete</button>
                                }
                            
                        </div>})
            }
        </section>
    </>
}