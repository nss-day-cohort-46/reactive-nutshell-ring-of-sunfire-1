import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EventContext, getEventsById } from "./EventProvider"
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
        let selectedVal = controlEvent.target.value
        
         if (controlEvent.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
         }
          newEvent[controlEvent.target.id] = selectedVal
          setEvent(newEvent)
        }
  
      const handleClickSaveEvent = (controlEvent) => {
        controlEvent.preventDefault() 
      
    
        if (parseInt(event.eventId) === 0) {
            window.alert("Please select a location")
        } else {
        
        } if  (eventId){
            //PUT - update
            updateEvent({
                id: eventId,
                name: event.name,
                date: event.date,
                
                
            })
            .then(() => history.push(`/events/${event.id}`))
          } else {
            //POST - add
            addEvent({
                name: event.name,
                date: event.date,
                
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


    
