import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const FriendsContext = createContext()

// This component establishes what data can be used.
export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(setFriends)
    }


    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(response => response.json())
    }


    return (
        <FriendsContext.Provider value={{
            friends, getFriends,searchTerms, setSearchTerms, users, setUsers, getUsers
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}