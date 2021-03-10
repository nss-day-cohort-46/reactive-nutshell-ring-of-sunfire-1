import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleList } from "./Articles/ArticleList"
import { ArticleProvider } from "./Articles/ArticleProvider"
import { TaskForm } from "./Tasks/TaskForm"
import { TaskList } from "./Tasks/TaskList"
import { TaskProvider } from "./Tasks/TasksProvider"

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
      {/* Render the component for the user's tasks */}
      <TaskProvider>
        <Route exact path="/tasks">
          <TaskList />
        </Route>
        <Route path="/tasks/create">
          <TaskForm />
        </Route>
      </TaskProvider>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}