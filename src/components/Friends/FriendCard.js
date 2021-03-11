import React from "react"
import "./Friend.css"

export const FriendCard = ({user}) => (
    <section className="friend">
        <button>Add Friend</button>
        <h3 className="friend__name">{user.name}</h3>
        
    </section>
    
)
