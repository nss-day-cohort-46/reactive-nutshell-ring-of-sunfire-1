import React, { useContext } from "react"
import { FriendsContext } from "./FriendProvider"
import { useState, useEffect } from "react"
import { FriendCard } from "./FriendCard"
import "./Friend.css"

export const FriendSearch = () => {
    const { friends, getFriends, getUsers, users, setUsers } = useContext(FriendsContext)

    const [filteredUsers, setFiltered] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

   


    useEffect(() => {
        getUsers().then(() => {
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)

        } 
        })
    }, [searchTerms])



    
    return (
        
        <>
            User Search:
            <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for an user... " />
             <div className="friens">{
                filteredUsers.map(user => {
                    return <FriendCard key={user.id} user={user} />
            })}
            </div> 
        </>
    )
}