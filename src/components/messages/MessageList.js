import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch";
import "./Message.css"

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
            return <div key={`listing--${msgs.id}`} className="message">
                          <div>
                            <p className="msgAuthor">From {msgs.user.name},</p>
                            <p className="msgContent">{msgs.content}</p>
                          </div>
                          <button className="replyBtn">Reply</button>
                    </div>
         }
       )
      } else { return <p>You have no messages yet!</p>}
    }

    return (
        <>
        <h2>Messages</h2>
        <section>
            {matchedMessages()}
        </section>
        </>
    )
}