import { React, useContext, useEffect, useState } from "react"
import { FriendsContext } from "./FriendProvider"
import { useHistory } from "react-router-dom"
import "./Friend.css"


export const FriendCard = ({ user }) => {
    const { users, getUsers, addFriend } = useContext(FriendsContext)
    const history = useHistory()


    const handleAddFriend = (userId) => {
        addFriend({
            userId: userId,
            currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
        })
            .then(() => history.push("/friends"))
    }
    if (user.currentUserId == sessionStorage.getItem("nutshell_user")) {
        return (
            <section className="friend">
                
                <h3 className="friend__name">{user.user.name}</h3>

            </section>

        )
    }else return (
        <section className="friend">
            <button onClick={evt => { handleAddFriend(user.id) }}>Add Friend</button>
            <h3 className="friend__name">{user.name}</h3>

        </section>

    )
}





