import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const FriendsContext = createContext()

// This component establishes what data can be used.
export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(setFriends)
    }

    
/*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

    return (
        <FriendsContext.Provider value={{
            friends, getFriends,
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}