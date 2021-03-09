import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        console.log("TaskList: useEffect - getTasks");
        getTasks()
    }, [])

    return (
        <>
            <h2>Tasks</h2>
            <div className="tasks">
                {tasks.map(task => {
                    return <TaskCard key={task.id} task={task} />
                })}
            </div>
        </>
    )
}
