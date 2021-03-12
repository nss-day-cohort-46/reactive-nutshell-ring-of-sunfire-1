import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventForm = () => {
    const { addEvent, getEventById, getEvents, updateEvent } = useContext(EventContext)

    const [event, setEvent] = useState({

        name: "",
        date: "",
        location: ""
    });

    useEffect(() => {
      getEvents()
  }, [])


    const [isLoading, setIsLoading] = useState(true);

  
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
          setIsLoading(true);
        
        } if  (eventId){
            updateEvent({
                id: eventId,
                name: event.name,
                date: event.date,
                location: event.location
                
                
            })
            .then(() => history.push("/events"))
          } else {
            //POST - add
            addEvent({
                name: event.name,
                date: event.date,
                location: event.location,
                
            })
            .then(() => history.push("/events"))
          }
        }
      
        useEffect(() => {
          getEvents().then(() => {
            if (eventId) {
              getEventById(eventId)
              .then(event => {
                  setEvent(event)
                  setIsLoading(false)
              })
            } else {
              setIsLoading(false)
            }
          })
        }, [])
     
  

    return (
        <form className="eventForm">
            <h2 className="eventFormTitle">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter name" value={event.name}/>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" value={event.date} />
                </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
                    <label htmlFor="location">Event Location:</label>
                    <input type="text" id="location" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter location" value={event.location}/>
                </div>
          </fieldset>
            <button className="btn btn-primary"
             disabled={isLoading}
            onClick={handleClickSaveEvent}> 
            Save Event
          </button>
      </form>
    )
    }


    
