import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./Events/EventProvider"
import { EventList } from "./Events/EventList"
import { EventForm } from "./Events/EventForm"

import { TaskForm } from "./Tasks/TaskForm"
import { TaskList } from "./Tasks/TaskList"
import { TaskProvider } from "./Tasks/TasksProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
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
            <EventProvider>
                  <Route exact path="/events">
                      <EventList />
                  </Route>
                  <Route path="/events/create">
                         <EventForm />
                  </Route>
            </EventProvider>
      
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