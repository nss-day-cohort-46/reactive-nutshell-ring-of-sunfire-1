import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./Friends/FriendProvider"
import { FriendList } from "./Friends/FriendList"

export const ApplicationViews = () => {
  return (
    <>

      <FriendProvider>
        <FriendList>
          <Route path="/friends">
            {/* Render the component for list of friends */}
          </Route>
        </FriendList>
      </FriendProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
