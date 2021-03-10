import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleList } from "./Articles/ArticleList"
import { ArticleProvider } from "./Articles/ArticleProvider"

export const ApplicationViews = () => {
  return (
    <>

      {/* <Route exact path="/articles"> */}
       
         <ArticleProvider>
            <Route exact path="/articles">
                <ArticleList/>
            </Route>
            <Route path="/articles/create">
                <ArticleForm/>
            </Route>
        </ArticleProvider>

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
