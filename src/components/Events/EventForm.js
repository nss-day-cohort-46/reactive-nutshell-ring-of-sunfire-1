import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./CustomerProvider"
import "./Customer.css"

export const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const [event, setEvent] = useState({
        name: "",
        date: "",
        location: 0
    });
  
      const history = useHistory();
      
    //   useEffect(() => {
    //     .then(getEvents)
    //   }, [])
  

    const handleControlledInputChange = (controlEvent) => {
      const newEvent = { ...event }
      let selectedVal = event.target.value
       controlEvent.preventDefault()
       if (controlEvent.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
       }
        newEvent[controlEvent.target.id] = selectedVal
        setEvent(newEvent)
      }

    const handleClickSaveCustomer = (event) => {
      event.preventDefault() 
       addEvent(event)
       .then(() => history.push("/events"))
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={handleClickSaveCustomer}>
            Save Customer
          </button>
      </form>
    )



   }
