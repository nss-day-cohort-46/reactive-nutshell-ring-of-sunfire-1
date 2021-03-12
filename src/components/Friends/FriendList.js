import { React, useContext, useEffect, useState } from "react"
import { FriendsContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"
import "./Friend.css"
import { useHistory } from "react-router-dom"

export const FriendList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { getUsers, users, getFriends, friends } = useContext(FriendsContext)
  
  
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FriendList: useEffect - getUsers")
    getFriends()

  }, [])

 


return (
  <>
    <h1>Friends</h1>

    
    <div className="friends">
    {
      friends.map(friend => { if(friend.currentUserId == sessionStorage.getItem("nutshell_user")){
         return <FriendCard key={friend.id} user={friend} />

      }else return null
      })
    }
    </div>
  </>
)
}