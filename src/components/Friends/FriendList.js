import { React, useContext, useEffect, useState } from "react"
import { FriendsContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"
import "./Friend.css"
import { useHistory } from "react-router-dom"

export const FriendList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { friends, getFriends, getUsers, searchTerms, users, setUsers } = useContext(FriendsContext)
  
  
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FriendList: useEffect - getUsers")
    getUsers()

  }, [])

 

return (
  <>
    <h1>Users</h1>

    
    <div className="friends">
    {
      users.map(user => {
        return <FriendCard key={user.id} user={user} />
      })
    }
    </div>
  </>
)
}