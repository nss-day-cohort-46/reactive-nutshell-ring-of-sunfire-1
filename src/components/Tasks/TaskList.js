import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const userTasks = tasks.filter(tasks => currentUserId === tasks.userId)
    const history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <h2>Tasks</h2>
            <button onClick={() => { history.push("/tasks/create") }}>New Task</button>
            <div className="tasks">
                {userTasks.map(task => {
                    return <TaskCard key={task.id} task={task} />
                })}
            </div>
        </>
    )
}
