
  import React from "react"
  import "./Customer.css"
  
  export const EventCard = ({ event }) => (
      <section className="event" id="eventId">
          <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
          
      </section>
  )