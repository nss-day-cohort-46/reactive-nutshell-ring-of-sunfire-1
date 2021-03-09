import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./CustomerCard"
import "./Event.css"

export const CustomerList = () => {

const { events, getEvents } = useContext(EventContext)    

const history = useHistory()

useEffect(() => {
    console.log("EventList: useEffect - getEvents")
    getEvents()
  }, [])

  return (
    <div className="events">
       	      <button onClick={() => {history.push("/events/create")}}>
            Add Event
          </button>
      {
        events.map(event => {
          const happening = events.find(e => e.id === event.eventId)
          


          return <EventCard key={event.id}
                      event={happening} />
        })
      }
    </div>
  )
}