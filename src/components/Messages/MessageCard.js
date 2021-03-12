import React, { useContext } from "react"
import "./Message.css"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./TasksProvider"

export const MessageCard = ({ message }) => {
    const { deleteMessage } = useContext(MessageContext)
    const history = useHistory()
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const handleDelete = () => {
        deleteMessage(message.id)
            .then(() => {
                history.push("/tasks")
            })
    }


    return (
        <section className="message">
            <p>{message.textArea}</p>
        </section>
    )
}




<div className="message__colRight">
    {message.userId === parseInt(sessionStorage.getItem("nutshell_user")) ?
        <button id={message.id} onClick={handleDelete} className="btn btn-primary">X</button>
        :
        <button className="btn btnHidden btn-primary">X</button> //hidden button for layout
    }
</div>