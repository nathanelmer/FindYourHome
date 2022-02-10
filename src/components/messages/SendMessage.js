import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchIt } from "../../apiManager/Fetch";
import "./Message.css"

export const SendMessage = () => {
    const [currentUser, setUser] = useState({})
    const [allRecipients, setAllRecipients] = useState([])
    const [message, setMessage] = useState("")
    const [recipientId, setRecipient] = useState("")
    const history = useHistory()
    const localStorageId = parseInt(localStorage.getItem("user"))

    useEffect(() => {
        fetchIt("http://localhost:8088/users")
        .then(recipients => recipients.filter(recipient => recipient.id !== 1))
        .then(filteredRecipients => setAllRecipients(filteredRecipients))
    },[])

    useEffect(() => {
        fetchIt("http://localhost:8088/users")
        .then(users => users.find(user => user.id === localStorageId))
        .then(foundUser => setUser(foundUser))
    }, [])

    const postMessage = () => {
        const newMessage = {
            userId: localStorageId,
            recipientId: currentUser?.realtor === false ? 1 : parseInt(recipientId),
            content: message
        }

        fetchIt("http://localhost:8088/messages", "POST", JSON.stringify(newMessage))
        .then(() => {
            history.push("messages")
        })
    }

   

    return (
        <main className="card">
            <form className="loginCard" onSubmit={postMessage}>
                    <header className="loginHeader">
                        <h3>Send Message</h3>
                    </header>
                    {currentUser?.realtor ? 
                        <fieldset>
                            <label htmlFor="recipient">Select Recipient:</label>
                            <select name="recipient" id="recipient" onChange={(e) => setRecipient(e.target.value)}>
                                <option value="0">Please Select Recipient</option>
                                {allRecipients.map(r => 
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    )}
                            </select>
                        </fieldset>
                    :
                    <h4>To: Wendy Elmer</h4>
                    }
                    <fieldset>
                        <label htmlFor="message">Content:</label>
                        <textarea rows="5" cols="31" 
                        placeholder="Type message here..."
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </fieldset>
                    <div className="btnContainer">
                        <button type="submit" className="loginBtn">Send</button>
                    </div>
            </form>
         </main>   
    )
}