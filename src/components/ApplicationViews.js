import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./Articles/ArticleProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/articles">
        {/* Render the component for news articles */}
        <ArticleProvider>

        </ArticleProvider>
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
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
