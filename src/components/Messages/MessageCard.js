import React from "react"
import "./Message.css"

export const MessageCard = ({ message }) => (
    <section className="message">
        <p>{message.textArea}</p>
    </section>
)