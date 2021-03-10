import React, { useContext } from "react"
import { FriendsContext } from "./FriendProvider"
import "./Friend.css"

export const FriendSearch = () => {
    const { setSearchTerms } = useContext(FriendsContext)

    return(
    <>
    User Search:
    <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an user... " />
    </>
    )
}