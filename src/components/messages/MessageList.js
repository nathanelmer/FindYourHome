import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const MessageList = () => {
    const [messages, setMessages] = useState([])
    const currentUser = localStorage.getItem("user")

    useEffect(() => {
        fetchIt("http://localhost:8088/messages?_expand=user")
            .then(messageData => setMessages(messageData))
    },[])

    const matchedMessages = () => {
        const userMessages = messages.filter((msg) => msg.recipientId === parseInt(currentUser))
        if (userMessages.length > 0){
        return userMessages.map(msgs => {
            return <div key={`listing--${msgs.id}`} className="card">
                            <p>From {msgs.user.name}</p>
                            <p>{msgs.content}</p>
                        </div>
         }
       )
      } else { return <p>You have no messages yet!</p>}
    }

    return (
        <>
        <h1>Messages</h1>
        <section>
            {matchedMessages()}
        </section>
        </>
    )
}