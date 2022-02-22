import React, { useEffect, useState } from "react";
import { fetchIt } from "../../apiManager/Fetch"
import "./Leads.css"

export const Leads = () => {
    const [leads, setLeads] = useState([])
    const currentUserId = parseInt(localStorage.getItem("user"))

    useEffect(() => {
        fetchIt("http://localhost:8088/users")
        .then(users => users.filter(user => user.id !== currentUserId))
        .then(filteredUsers => setLeads(filteredUsers))
    }, [])
    return (
        <>
        <section className="page">
        <h2>Leads</h2>
            {
                leads.map(
                    (lead) => {
                        return <div key={lead.id} className="lead">
                                        <div className="leadInfo">
                                            <h4>{lead.name}</h4>
                                            <p>Email: {lead.email}</p>
                                            <p>Phone Number: {lead.phoneNumber}</p>
                                </div>
                        </div>})
            }
        </section>
        </>
    )
}