import React, { useContext } from "react"
import "./Task.css"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TasksProvider"

export const TaskCard = ({ task }) => {
    const { deleteTask, completeTask } = useContext(TaskContext)

    const history = useHistory();


    const handleDelete = () => {
        deleteTask(task.id)
            .then(() => {
                history.push("/tasks")
            })
    }

    return (
        <section className="task">
            <h3 className="task__name">{task.name}</h3>
            <div className="task__date">{task.date}</div>
            <div className="task__completion">{task.completed}</div>
            {/* <button onClick={() => { history.push(`/tasks/edit/${task.id}`) }}>Edit</button> */}
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}