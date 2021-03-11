import { React, useState, useContext } from "react"
import "./Task.css"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TasksProvider"

export const TaskCard = ({ task }) => {
    const { deleteTask, completeTask } = useContext(TaskContext)
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    // const [task, setTask] = useState({})

    const handleDelete = () => {
        deleteTask(task.id)
            .then(() => {
                history.push("/tasks")
            })
    }

    const handleComplete = (event) => {
        if (event.target.checked === true) {
            task.completed = true
        } else {
            task.completed = false
        }
        completeTask({
            id: task.id,
            name: task.name,
            userId: currentUserId,
            date: task.date,
            completed: task.completed
        })
    }

    if (task.completed === true) {
        return (<></>)
    } else {
        return (
            <section className="task">
                <input type="checkbox" id="completed" onClick={handleComplete} value="task.completed ? true : false"></input>
                <h3 className="task__name">{task.name}</h3>
                <div className="task__date">{task.date}</div>
                <div className="task__completion">{task.completed}</div>
                {/* <button onClick={() => { history.push(`/tasks/edit/${task.id}`) }}>Edit</button> */}
                <button onClick={handleDelete}>Delete</button>
            </section>
        )
    }
}