import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider";
import "./Message.css";
import { useHistory, useParams } from "react-router-dom";

export const MessageForm = () => {
    const { getMessages, addMessage, editMessage, getMessageById } = useContext(MessageContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const [message, setMessage] = useState({
        textArea: "",
        userId: currentUserId,
        timeStamp: ""
    })

    const [isLoading, setIsLoading] = useState(true);
    const { messageId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        newMessage.timeStamp = Date.now()
        setMessage(newMessage)
    }

    const handleSaveMessage = () => {
        if (message.textArea.value === "") {
            window.alert("Please fill out message")
        } else {
            setIsLoading(true)
            if (messageId) {
                editMessage({
                    id: message.id,
                    textArea: message.textArea,
                    userId: currentUserId,
                    timeStamp: message.timeStamp
                })
                    .then(() => history.push("/messages"))
            } else {
                addMessage(message)
                    .then(() => history.push("/messages"))
            }
        }
    }

    useEffect(() => {
        getMessages().then(() => {
            if (messageId) {
                getMessageById(messageId)
                    .then(message => {
                        setMessage(message)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <form className="messageForm">
            <fieldset>
                <div className="form-group">
                    <textArea type="text" id="textArea" required autoFocus className="form-control" onChange={handleControlledInputChange} value={message.textArea} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveMessage()
                }}>
                Post
            </button>
        </form>
    )
}