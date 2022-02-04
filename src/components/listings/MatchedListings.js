import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "./Listing.css";

export default ({ listing, setState }) => {
  const [note, setNote] = useState("");
  const [newList, setList] = useState({});
  const currentUser = localStorage.getItem("user");

  useEffect(() => {
    fetchIt("http://localhost:8088/savedListings?_expand=listing").then(
      (savedData) => setState(savedData)
    );
  }, []);

  const removeSaved = (id) => {
    fetch(`http://localhost:8088/savedListings/${id}`, { method: "DELETE" })
      .then(() =>
        fetchIt("http://localhost:8088/savedListings?_expand=listing")
      )
      .then((data) => setState(data));
  };

  const addNote = (updated, id) => {
    fetchIt(
      `http://localhost:8088/savedListings/${id}`,
      "PUT",
      JSON.stringify(updated)
    )
      .then(() =>
        fetchIt("http://localhost:8088/savedListings?_expand=listing")
      )
      .then((data) => setState(data));
  };

  return (
    <section>
      <div className="listing">
        <img className="listingImg" src={listing.listing.imageURL} />
        <div className="info">
          <p>$ {listing.listing.price.toLocaleString()}</p>
          <p>{listing.listing.address}</p>
          <p>
            {listing.listing.bedrooms} bedroom(s)/ {listing.listing.bathrooms}
            bathroom(s)
          </p>
          <div>{listing.note === "" ? "" : <div>{listing.note}</div>}</div>
          <label htmlFor="note">Notes:</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Edit notes here..."
          />
        </div>
        <div className="notesBtns">
          <button
            onClick={(e) => {
              e.preventDefault();
              const copy = { ...newList };
              copy.userId = parseInt(currentUser);
              copy.listingId = listing.listingId;
              copy.note = note;
              setList(copy);
              addNote(copy, listing.id);
              setNote("");
            }}
          >
            Save Note
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              const copy = { ...newList };
              copy.userId = parseInt(currentUser);
              copy.listingId = listing.listingId;
              copy.note = note;
              setList(copy);
              addNote(copy, listing.id);
              setNote("");
            }}
          >
            Clear Notes
          </button>
          <button
            onClick={() => {
              removeSaved(listing.id);
            }}
          >
            Remove from saved
          </button>
        </div>
      </div>
    </section>
  );
};
