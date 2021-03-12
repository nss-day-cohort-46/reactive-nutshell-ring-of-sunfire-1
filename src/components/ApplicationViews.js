import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./Friends/FriendProvider"
import { FriendList } from "./Friends/FriendList"
import { FriendSearch } from "./Friends/FriendSearch"
import { EventProvider } from "./Events/EventProvider"
import { EventList } from "./Events/EventList"
import { EventForm } from "./Events/EventForm"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleList } from "./Articles/ArticleList"
import { ArticleProvider } from "./Articles/ArticleProvider"
import { TaskForm } from "./Tasks/TaskForm"
import { TaskList } from "./Tasks/TaskList"
import { TaskProvider } from "./Tasks/TasksProvider"
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageList } from "./Messages/MessageList"

export const ApplicationViews = () => {
  return (
    <>

      <FriendProvider>
        <Route exact path="/friends">
          <FriendList />
        </Route>
        <Route exact path="/">
          <FriendSearch />
        </Route>
      </FriendProvider>

      <ArticleProvider>
        <Route exact path="/articles">
          <ArticleList />
        </Route>
        <Route path="/articles/create">
          <ArticleForm />
        </Route>
        <Route path="/articles/edit/:articleId(\d+)">
          <ArticleForm />
        </Route>
      </ArticleProvider>

      <MessageProvider>
        <Route exact path="/messages">
          <MessageList />
        </Route>
      </MessageProvider>

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
        <Route path="/events/edit/:eventId(\d+)">
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
        <Route path="/tasks/edit/:taskId(\d)">
          <TaskForm />
        </Route>
      </TaskProvider>
    </>
  )
}

// line 36 defines a url parameter edit