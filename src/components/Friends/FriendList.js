import { React, useContext, useEffect } from "react"
import { FriendsContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"
import "./Friend.css"

export const FriendList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { friends, getFriends } = useContext(FriendsContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FriendList: useEffect - getFriends")
    getFriends()

  }, [])


  return (
    <div className="friends">
      {console.log("FriendListList: Render", friends)}
      {
        friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />
        })
      }
    </div>
  )
}