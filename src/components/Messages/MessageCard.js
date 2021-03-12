import React, { useContext } from "react"
import "./Message.css"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"

export const MessageCard = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const history = useHistory()
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
                history.push("/messages")
            })
    }


    return (
        <section className="message">
            <p>{message.textArea}</p>
            <button id={message.id} onClick={handleDelete}>X</button>
        </section>
    )
}