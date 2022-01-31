import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "../listings/Listing.css"

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetchIt("http://localhost:8088/messages")
            .then(messageData => setMessages(messageData))
    },[])

    return (
        <>
        <h1>Messages</h1>
        <section>
            {
                messages.map(
                    (msg) => {
                        return <div key={msg.id} className="card">
                            <p>From {msg.authorId}</p>
                            <p>To {msg.recipientId}</p>
                            <p>{msg.content}</p>
                        </div>
                    }
                )
            }
        </section>
        </>
    )
}