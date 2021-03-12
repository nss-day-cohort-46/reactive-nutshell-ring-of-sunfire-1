import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"
import { MessageForm } from "./MessageForm"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()

    }, [])


    return (
        <>
            <h2>Message Board</h2>
            <div className="messages">
                {messages.map(message => {
                    return <MessageCard key={message.id} message={message} />
                })}
            </div>
            <div>
                <MessageForm />
            </div>
        </>
    )
}
