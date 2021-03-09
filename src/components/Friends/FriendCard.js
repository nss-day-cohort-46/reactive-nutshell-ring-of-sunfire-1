import React from "react"
import "./Friend.css"

export const FriendCard = ({friend}) => (
    <section className="friend">
        <h2>Friend</h2>
        <h3 className="friend__name">{friend.name}</h3>
        
    </section>
    
)
