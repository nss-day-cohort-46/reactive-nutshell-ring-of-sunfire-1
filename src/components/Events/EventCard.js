
  import React, { useContext }from "react"
  import { EventContext } from "./EventProvider"
  import { useHistory } from "react-router-dom"
  import "./Event.css"


  export const EventCard = ({ event }) => {
  const { deleteEvent } = useContext(EventContext)
  
  
  const history = useHistory()

  const handleRelease = () => {
      deleteEvent(event.id)
        .then(() => {
          history.push("/events")
        })
    }
    

  return   (
      <section className="event" id="eventId">
          <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          <button onClick={handleRelease}>Delete Event</button>
      </section>
   )
  }