import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)

    const [event, setEvent] = useState({
        name: "",
        date: "",
        location: ""
    });
  
    const { eventId } = useParams();
      const history = useHistory();
 

    const handleControlledInputChange = (controlEvent) => {
      const newEvent = { ...event }
      
        newEvent[controlEvent.target.id] = event.target.value
        setEvent(newEvent)
      }

    const handleClickSaveEvent = () => {
      if (eventId){
        //PUT - update
        updateEvent({
            id: event.id,
            name: event.name,
            date: event.date,
            location: event.location
        })
        .then(() => history.push(`/eventss/detail/${event.id}`))
      }else {
        //POST - add
        addEvent({
            name: event.name,
            date: event.date,
            location: event.location
            
        })
        .then(() => history.push("/events"))
      }
    }

    return (
        <form className="eventForm">
            <h2 className="eventFormTitle">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter name" value={event.name}/>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event date" value={event.date}/>
                </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
                    <label htmlFor="location">Event Location:</label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter location" value={event.location}/>
                </div>
          </fieldset>
            <button className="btn btn-primary"
            onClick={handleClickSaveEvent}> 
            Save Event
          </button>
      </form>
    )



   }
