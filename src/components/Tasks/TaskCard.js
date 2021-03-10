import React from "react"
import "./Task.css"

export const TaskCard = ({ task }) => (
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__date">{task.date}</div>
        <div className="task__completion">{task.completed}</div>
        {/* <button onClick={() => { history.push(`/tasks/edit/${task.id}`) }}>Edit</button>
        <button onClick={handleRelease}>Delete</button> */}
    </section>
)