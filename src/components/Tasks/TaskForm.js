import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TasksProvider"
import "./Task.css"
import { useHistory, useParams } from 'react-router-dom';

export const TaskForm = () => {
    const { getTasks, addTask, getTaskById, updateTask } = useContext(TaskContext)

    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const [task, setTask] = useState({
        name: "",
        userId: currentUserId,
        date: "",
        completed: false
    });

    const [isLoading, setIsLoading] = useState(true);

    const { taskId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTask = { ...task }
        newTask[event.target.id] = event.target.value
        setTask(newTask)
    }

    const handleSaveTask = () => {
        if (task.name === "") {
            window.alert("Please complete all fields")
        } else {
            setIsLoading(true);
            if (taskId) {
                //PUT - update
                updateTask({
                    id: task.id,
                    name: task.name,
                    userId: currentUserId,
                    date: task.date,
                    completed: false
                })
                    .then(() => history.push(`/tasks/${task.id}`))
            } else {
                //POST - add
                addTask(task)
                    .then(() => history.push("/tasks"))
            }
        }
    }

    useEffect(() => {
        getTasks().then(() => {
            if (taskId) {
                getTaskById(taskId)
                    .then(task => {
                        setTask(task)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">{taskId ? "Edit Task" : "Add Task"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Task" onChange={handleControlledInputChange} value={task.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Task Completed By:</label>
                    <input type="date" id="date" required className="form-control" onChange={handleControlledInputChange} value={task.date} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveTask()
                }}>
                {taskId ? "Save Task" : "Add Task"}
            </button>
        </form>
    )
}