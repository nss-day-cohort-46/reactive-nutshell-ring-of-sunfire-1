import { React, useState, useContext } from "react"
import "./Task.css"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TasksProvider"

export const TaskCard = ({ taskObj }) => {
    const { deleteTask, completeTask } = useContext(TaskContext)
    const history = useHistory();
    const [task, setTask] = useState({
        // complete: true
    })


    const handleDelete = () => {
        deleteTask(task.id)
            .then(() => {
                history.push("/tasks")
            })
    }

    const handleComplete = (event) => {
        const newTask = { ...task }
        newTask[event.target.id] = event.target.completed
        setTask(newTask)
        if (event.target.completed === true) {
            const taskId = task.id
            const completed = newTask
            completeTask(taskId, completed)
        } else ()
    }


    return (
        <section className="task">
            <input type="checkbox" id="completed" onClick={handleComplete}></input>
            <h3 className="task__name">{task.name}</h3>
            <div className="task__date">{task.date}</div>
            <div className="task__completion">{task.completed}</div>
            {/* <button onClick={() => { history.push(`/tasks/edit/${task.id}`) }}>Edit</button> */}
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}